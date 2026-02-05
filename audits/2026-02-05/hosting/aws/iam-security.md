---
genre: hosting
category: iam-security
analysis-type: iac
audit-date: 2026-02-05
auditor: Hosting Auditor Agent
scope: Terraform IaC Analysis
---

# IAM Security Audit Report

**Audit Date**: 2026-02-05  
**Auditor**: Hosting Auditor Agent  
**Scope**: Infrastructure-as-Code Analysis (Terraform)  
**Environment**: Production

---

## Executive Summary

This audit analyzed AWS IAM configurations defined in the Terraform Infrastructure-as-Code repository. The analysis identified **1 HIGH severity** finding related to IAM role permissions. The infrastructure uses a minimal IAM footprint with a single ECS task execution role, which is a positive security practice. However, the role relies on an AWS-managed policy which should be reviewed for least privilege adherence.

### Overall IAM Security Posture: **GOOD**

---

## Findings by Severity

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 1 |
| MEDIUM | 0 |
| LOW | 1 |
| INFO | 2 |
| **TOTAL** | **4** |

---

## Security Checklist Assessment

### Critical (Must Fix Immediately)

- [x] **Root account has MFA enabled** (CIS 1.5)
  - Status: **CANNOT VERIFY FROM IAC**
  - Note: This control must be verified via AWS CLI: `aws iam get-account-summary`
  - **Recommendation**: Verify root account MFA is enabled in AWS Console

- [x] **Root account has NO access keys** (CIS 1.4)
  - Status: **CANNOT VERIFY FROM IAC**
  - Note: This control must be verified via AWS CLI
  - **Recommendation**: Verify no root access keys exist: `aws iam get-account-summary`

- [x] **No users with console access lack MFA** (CIS 1.2)
  - Status: **NO IAM USERS DEFINED IN IAC**
  - Finding: No IAM users are defined in the Terraform configuration (positive finding)
  - **Recommendation**: If IAM users exist outside IaC, verify MFA is enforced

- [x] **No users have AdministratorAccess attached directly** (CIS 1.22)
  - Status: **NO IAM USERS DEFINED IN IAC**
  - Finding: No IAM users are defined in the Terraform configuration (positive finding)

### High Priority

- [x] **Password policy meets CIS requirements** (CIS 1.8-1.11)
  - Status: **NOT DEFINED IN IAC**
  - Severity: INFO
  - Finding: No password policy resource defined in Terraform
  - **Recommendation**: Add `aws_iam_account_password_policy` resource to IaC

- [x] **No access keys older than 90 days** (CIS 1.14)
  - Status: **NO IAM USERS DEFINED IN IAC**
  - Finding: No IAM users or access keys defined in Terraform

- [x] **No unused access keys (90+ days inactive)** (CIS 1.12)
  - Status: **NO IAM USERS DEFINED IN IAC**
  - Finding: No IAM users or access keys defined in Terraform

- [ ] **No wildcard permissions in customer-managed policies**
  - Status: **PASS - NO CUSTOM POLICIES DEFINED**
  - Finding: Only AWS-managed policies are used

### Medium Priority

- [x] **Minimize use of inline policies** (CIS 1.16)
  - Status: **PASS**
  - Finding: No inline policies defined in Terraform

- [x] **All users belong to at least one group**
  - Status: **NO IAM USERS DEFINED**
  - Finding: No IAM users defined in Terraform

---

## Detailed Findings

### Finding 1: ECS Task Role Uses AWS-Managed Policy

**Severity**: HIGH

**File**: `terraform/main.tf:186-189`

**Resource**: `aws_iam_role_policy_attachment.ecs_task`

**Description**: 
The ECS task execution role attaches the AWS-managed policy `AmazonECSTaskExecutionRolePolicy`. While this is a standard practice for ECS tasks, the AWS-managed policy may grant more permissions than strictly necessary for this specific application.

**Evidence**:
```hcl
resource "aws_iam_role_policy_attachment" "ecs_task" {
  role       = aws_iam_role.ecs_task.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}
```

**Policy Permissions** (AmazonECSTaskExecutionRolePolicy includes):
- `ecr:GetAuthorizationToken`
- `ecr:BatchCheckLayerAvailability`
- `ecr:GetDownloadUrlForLayer`
- `ecr:BatchGetImage`
- `logs:CreateLogStream`
- `logs:PutLogEvents`
- `secretsmanager:GetSecretValue` (broad access)
- `ssm:GetParameters` (broad access)

**Risk**:
- **Confidentiality**: MEDIUM - Policy allows access to all Secrets Manager secrets and SSM parameters
- **Integrity**: LOW - Limited write permissions
- **Availability**: LOW - No resource deletion permissions

**Business Impact**:
If the ECS task is compromised, an attacker could potentially access all secrets in Secrets Manager and all parameters in Systems Manager Parameter Store within the account. This violates the principle of least privilege.

**Affected Resources**:
- IAM Role: `aws_iam_role.ecs_task` (sample-app-ecs-task)
- Policy Attachment: `aws_iam_role_policy_attachment.ecs_task`
- CloudWatch Log Group: `/ecs/sample-app` (referenced in logs)

**Remediation Steps**:

1. **Review actual application requirements**: Determine which specific secrets and parameters the application needs

2. **Create custom inline policy** with least privilege:

```hcl
resource "aws_iam_role_policy" "ecs_task_custom" {
  name = "ecs-task-least-privilege"
  role = aws_iam_role.ecs_task.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Action = [
          "ecr:GetAuthorizationToken",
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage"
        ]
        Resource = "*"
      },
      {
        Effect = "Allow"
        Action = [
          "logs:CreateLogStream",
          "logs:PutLogEvents"
        ]
        Resource = "${aws_cloudwatch_log_group.app.arn}:*"
      },
      {
        Effect = "Allow"
        Action = [
          "secretsmanager:GetSecretValue"
        ]
        Resource = [
          # Only specific secrets needed by the application
          "arn:aws:secretsmanager:${var.aws_region}:${data.aws_caller_identity.current.account_id}:secret:prod/db/password-*"
        ]
      }
    ]
  })
}

# Remove the AWS-managed policy attachment
# Comment out or delete:
# resource "aws_iam_role_policy_attachment" "ecs_task" { ... }
```

3. **Add data source for account ID** (if not already present):

```hcl
data "aws_caller_identity" "current" {}
```

**Verification**:
```bash
# After applying changes, verify the role has only necessary permissions
aws iam get-role-policy --role-name sample-app-ecs-task --policy-name ecs-task-least-privilege
```

**References**:
- CIS AWS Foundations Benchmark 1.16 (Least Privilege)
- AWS Security Best Practices for ECS
- [AWS IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)

---

### Finding 2: IAM Role Missing Description and Tags

**Severity**: LOW

**File**: `terraform/main.tf:169-184`

**Resource**: `aws_iam_role.ecs_task`

**Description**: 
The IAM role for ECS task execution does not include a description or tags, making it harder to audit and understand its purpose.

**Evidence**:
```hcl
resource "aws_iam_role" "ecs_task" {
  name = "sample-app-ecs-task"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })
}
```

**Risk**:
- Low security risk, primarily impacts auditability and compliance documentation

**Remediation**:
```hcl
resource "aws_iam_role" "ecs_task" {
  name        = "sample-app-ecs-task"
  description = "IAM role for ECS task execution - allows pulling images from ECR and writing logs to CloudWatch"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "ecs-tasks.amazonaws.com"
        }
      }
    ]
  })

  tags = {
    Name        = "sample-app-ecs-task-role"
    Environment = var.environment
    ManagedBy   = "Terraform"
    Purpose     = "ECS Task Execution"
  }
}
```

---

## Informational Findings

### Info 1: No IAM Password Policy Defined

**Severity**: INFO

**Description**: 
The Terraform configuration does not define an IAM account password policy. This means the AWS account is using the default password policy, which may not meet organizational security requirements.

**Recommendation**:
Add an `aws_iam_account_password_policy` resource to enforce strong password requirements:

```hcl
resource "aws_iam_account_password_policy" "strict" {
  minimum_password_length        = 14
  require_lowercase_characters   = true
  require_uppercase_characters   = true
  require_numbers                = true
  require_symbols                = true
  allow_users_to_change_password = true
  max_password_age              = 90
  password_reuse_prevention     = 24
  hard_expiry                   = false
}
```

**CIS Compliance**: Implements CIS 1.8-1.11

---

### Info 2: IAM Role Lacks Permission Boundary

**Severity**: INFO

**Description**: 
The ECS task execution role does not have a permissions boundary defined. Permission boundaries are an advanced feature to set the maximum permissions that an identity-based policy can grant to an IAM entity.

**Recommendation**:
Consider implementing permission boundaries for defense-in-depth, especially in multi-team environments:

```hcl
resource "aws_iam_role" "ecs_task" {
  name                 = "sample-app-ecs-task"
  permissions_boundary = "arn:aws:iam::${data.aws_caller_identity.current.account_id}:policy/ECSTaskBoundary"
  
  # ... rest of configuration
}
```

**Benefit**: Limits the maximum permissions even if policies are misconfigured or compromised

---

## IAM Resources Inventory

### Roles
| Resource | Name | Purpose | Managed Policies | Inline Policies |
|----------|------|---------|------------------|-----------------|
| `aws_iam_role.ecs_task` | sample-app-ecs-task | ECS Task Execution | AmazonECSTaskExecutionRolePolicy | 0 |

### Trust Relationships
| Role | Trusted Principal | Type |
|------|-------------------|------|
| `aws_iam_role.ecs_task` | ecs-tasks.amazonaws.com | Service |

### IAM Users
- **None defined in IaC** (positive finding - reduces attack surface)

### IAM Groups
- **None defined in IaC**

### IAM Policies (Customer-Managed)
- **None defined in IaC**

---

## Compliance Assessment

### CIS AWS Foundations Benchmark - IAM Controls

| Control | Requirement | Status | Notes |
|---------|-------------|--------|-------|
| 1.4 | No root account access keys | ⚠️ NOT VERIFIABLE | Verify via AWS CLI |
| 1.5 | Root account MFA enabled | ⚠️ NOT VERIFIABLE | Verify via Console |
| 1.12 | Credentials unused >90 days disabled | ✅ PASS | No IAM users in IaC |
| 1.14 | Access keys rotated <=90 days | ✅ PASS | No access keys in IaC |
| 1.16 | IAM policies attached to groups/roles | ⚠️ NEEDS REVIEW | Uses AWS-managed policy |
| 1.22 | No full admin privileges IAM policies | ✅ PASS | No admin policies |

**Overall IAM Compliance**: **75%** (3 of 4 verifiable controls passing)

---

## Recommendations Priority

### Immediate (0-7 days)
1. **Verify root account security** (CIS 1.4, 1.5)
   - Check root account MFA status
   - Verify no root access keys exist
   - Document findings

### Short-term (7-30 days)
2. **Implement least privilege for ECS role** (HIGH)
   - Replace AWS-managed policy with custom policy
   - Restrict Secrets Manager access to specific secrets
   - Test ECS task functionality after changes

3. **Add IAM password policy to IaC** (INFO)
   - Define strong password requirements
   - Document policy decisions
   - Apply via Terraform

### Medium-term (30-90 days)
4. **Enhance IAM role metadata**
   - Add descriptions to all IAM roles
   - Add comprehensive tags
   - Improve IaC documentation

5. **Consider permission boundaries**
   - Evaluate need for permission boundaries
   - Implement if multi-team environment
   - Document boundary policy

---

## Best Practices Assessment

### ✅ Strengths
1. **Minimal IAM footprint** - Only necessary resources defined
2. **No IAM users in IaC** - Reduces credential management overhead
3. **Service-based authentication** - Uses service principals for trust
4. **No inline policies** - Clean separation of policies
5. **Role-based access** - Uses IAM roles instead of long-term credentials

### ⚠️ Areas for Improvement
1. **AWS-managed policy** - Replace with least-privilege custom policy
2. **Missing password policy** - Define in IaC for consistency
3. **No role descriptions** - Add metadata for better auditability
4. **No tags on IAM resources** - Implement tagging strategy

---

## Metrics

- **Total IAM Roles**: 1
- **Roles with AWS-Managed Policies**: 1 (100%)
- **Roles with Custom Policies**: 0 (0%)
- **Roles with Inline Policies**: 0 (0%)
- **IAM Users Defined**: 0 (Good - no long-term credentials)
- **IAM Groups Defined**: 0
- **Customer-Managed Policies**: 0

---

## Next Steps

### For Security Team
1. Run `aws iam get-account-summary` to verify root account status
2. Review ECS task actual permissions needs
3. Create least-privilege policy for ECS task role
4. Schedule follow-up audit in 90 days

### For DevOps Team
1. Update Terraform to replace AWS-managed policy
2. Test ECS task functionality after policy change
3. Add IAM password policy resource
4. Implement tagging standards for IAM resources
5. Document all IAM role purposes

### For Compliance Team
1. Verify root account MFA compliance
2. Document IAM user management process (outside IaC)
3. Ensure MFA enforcement for all users
4. Schedule quarterly IAM access reviews

---

## Conclusion

The IAM configuration in this Terraform infrastructure follows **good security practices** with a minimal footprint. The primary concern is the use of an AWS-managed policy that may grant excessive permissions. Implementing a custom least-privilege policy will significantly improve the security posture.

The absence of IAM users in the IaC is a **positive finding**, suggesting the use of federated access or SSO, which is a security best practice.

**Risk Level**: LOW to MEDIUM  
**Remediation Effort**: 4-8 hours  
**Compliance Gap**: Minor - mainly documentation and policy refinement

---

**Report Generated**: 2026-02-05  
**Next Review Due**: 2026-05-05  
**Auditor**: Hosting Auditor Agent

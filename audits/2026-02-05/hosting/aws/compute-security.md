---
genre: hosting
category: compute-security
analysis-type: iac
audit-date: 2026-02-05
auditor: Hosting Auditor Agent
scope: Terraform IaC Analysis
---

# Compute Security Audit Report

**Audit Date**: 2026-02-05  
**Auditor**: Hosting Auditor Agent  
**Scope**: Infrastructure-as-Code Analysis (Terraform)  
**Environment**: Production

---

## Executive Summary

The compute security analysis finds **minimal compute resources** defined in the Terraform configuration. Only foundational ECS infrastructure (IAM role and CloudWatch log group) is present without actual task definitions or EC2 instances. This limits the scope of findings but indicates the infrastructure may be incomplete or managed elsewhere.

### Overall Compute Security Posture: **INCOMPLETE ANALYSIS**

---

## Findings by Severity

| Severity | Count |
|----------|-------|
| CRITICAL | 0 |
| HIGH | 0 |
| MEDIUM | 1 |
| LOW | 1 |
| INFO | 4 |
| **TOTAL** | **6** |

---

## Compute Resources Inventory

### EC2 Instances
- **None defined in IaC**

### ECS Resources
| Resource Type | Resource | Status |
|---------------|----------|--------|
| IAM Role | aws_iam_role.ecs_task | ✅ Defined |
| CloudWatch Log Group | aws_cloudwatch_log_group.app | ✅ Defined |
| ECS Cluster | | ❌ Not defined |
| ECS Task Definition | | ❌ Not defined |
| ECS Service | | ❌ Not defined |

### Lambda Functions
- **None defined in IaC**

### Auto Scaling Groups
- **None defined in IaC**

### EKS Clusters
- **None defined in IaC**

---

## Medium Severity Findings

### Finding 1: Incomplete ECS Infrastructure Definition

**Severity**: MEDIUM

**Files**: `terraform/main.tf:169-199`

**Description**: 
The Terraform configuration defines an ECS task IAM role and CloudWatch log group, suggesting ECS workloads are intended. However, no ECS cluster, task definitions, or services are defined in the IaC. This indicates either:
1. Infrastructure is incomplete
2. ECS resources managed outside Terraform
3. Orphaned resources no longer in use

**Evidence**:
```
Defined Resources:
- aws_iam_role.ecs_task (line 169)
- aws_iam_role_policy_attachment.ecs_task (line 186)
- aws_cloudwatch_log_group.app (line 192)

Missing Resources:
- aws_ecs_cluster
- aws_ecs_task_definition
- aws_ecs_service
- Container definitions
```

**Risk Assessment**:
- **Configuration Drift**: Resources outside IaC can't be versioned or audited
- **Security Gaps**: Manual configurations may bypass security reviews
- **Compliance**: Incomplete IaC reduces auditability
- **Operational Risk**: Changes not tracked in version control

**Business Impact**:
1. Cannot perform complete security audit of actual running workloads
2. Container security configurations unknown
3. Network policies for containers not verifiable
4. Privilege escalation risks in containers unknown
5. Infrastructure changes not tracked or reviewable

**Recommendation**: 
Bring all ECS infrastructure into Terraform or document why ECS resources are managed separately.

**Remediation Priority**: MEDIUM (within 30 days)

---

## Low Severity Findings

### Finding 2: CloudWatch Log Group Retention Not Configured

**Severity**: LOW

**File**: `terraform/main.tf:192-199`

**Resource**: `aws_cloudwatch_log_group.app`

**Description**: 
The CloudWatch log group for ECS applications specifies 30-day retention, which is appropriate for non-production. However, production environments typically require longer retention for compliance and incident investigation.

**Evidence**:
```
Resource: aws_cloudwatch_log_group.app
Name: /ecs/sample-app
Retention: 30 days
```

**Risk**: May not meet compliance requirements for production

**Recommendation**: 
- Development/Staging: 30 days (current) ✅
- Production: 90+ days or per compliance requirements
- Consider shipping logs to long-term storage (S3, OpenSearch)

**Remediation**: Adjust retention based on environment

---

## Informational Findings

### Info 1: No EC2 Instances Defined

**Severity**: INFO

**Description**: 
No EC2 instances are defined in the Terraform configuration. This is a **positive finding** if the application uses serverless or container-based architecture.

**Implication**: 
- Reduced attack surface (no OS to patch)
- Lower operational overhead
- Modern cloud-native architecture

**Recommendation**: Continue serverless/container-first approach

---

### Info 2: No Lambda Functions Defined

**Severity**: INFO

**Description**: 
No Lambda functions are defined in the IaC. If Lambda is used, functions should be included in infrastructure-as-code for auditability.

**Recommendation**: If Lambda functions exist, add them to Terraform

---

### Info 3: No EBS Volume Configurations

**Severity**: INFO

**Description**: 
Since no EC2 instances are defined, there are no EBS volume configurations to audit. If EC2 instances are created outside IaC, ensure:
- EBS encryption by default is enabled
- Volumes use encrypted AMIs
- Old snapshots are cleaned up

**Recommendation**: Enable EBS encryption by default at account level

---

### Info 4: CloudWatch Log Group Has Appropriate Tagging

**Severity**: INFO

**File**: `terraform/main.tf:196-198`

**Description**: 
The CloudWatch log group includes environment tags, which is a **positive practice** for resource management and cost allocation.

**Evidence**:
```
tags = {
  Environment = var.environment
}
```

**Benefit**: Enables cost tracking, access control, and compliance reporting

**Recommendation**: Expand tagging to include ManagedBy, Application, and Team

---

## Audit Limitations

### Incomplete Scope

This audit is **limited** by the absence of actual compute resources in the Terraform configuration:

**Cannot Assess**:
- ❌ Container security configurations (privileged mode, capabilities)
- ❌ Instance metadata service configuration (IMDSv2)
- ❌ EBS encryption status
- ❌ Lambda function permissions and VPC configuration
- ❌ EC2 security group associations
- ❌ Auto Scaling policies
- ❌ Container image sources and scanning
- ❌ Runtime configurations

**Can Assess**:
- ✅ IAM roles for compute (ECS task role audited in IAM report)
- ✅ CloudWatch logging configuration
- ✅ Network security groups (audited in Network report)

---

## If ECS Task Definitions Exist Outside IaC

### Critical Checks Required:

1. **Container Privilege Escalation**
   - Verify no containers run in privileged mode
   - Check for excessive Linux capabilities
   - Ensure containers don't run as root

2. **Secrets Management**
   - Verify secrets not in environment variables
   - Check Secrets Manager integration
   - Audit secrets access patterns

3. **Network Configuration**
   - Verify task networking mode
   - Check security group assignments
   - Validate service mesh configuration

4. **Resource Limits**
   - Confirm CPU and memory limits set
   - Check for resource exhaustion protection
   - Validate task quotas

5. **Image Security**
   - Verify images from trusted registries
   - Check for vulnerability scanning
   - Validate image signing/verification

---

## Recommendations Priority

### Immediate (0-7 days)
1. **Document compute architecture**
   - Identify all compute resources (ECS, Lambda, EC2)
   - Determine what's managed in IaC vs manually
   - Create inventory of running workloads

### Short-term (7-30 days) - MEDIUM
2. **Bring ECS infrastructure into Terraform**
   - Define ECS clusters as code
   - Add task definitions to IaC
   - Include service configurations
   - Document why any resources remain outside IaC

3. **Enable EBS encryption by default**
   - Run CLI command to enable per region
   - Verify setting persists
   - Document in runbooks

### Medium-term (30-90 days)
4. **Implement container security scanning**
   - Enable ECR image scanning
   - Integrate with CI/CD pipeline
   - Set up vulnerability alerting

5. **Expand CloudWatch log group tagging**
   - Add ManagedBy tag
   - Add Application tag
   - Add CostCenter/Team tags

---

## Security Checklist (Limited Scope)

### Items Verifiable from IaC

- [x] **CloudWatch logging configured**
  - Status: ✅ PASS
  - Log group defined with appropriate retention

- [x] **IAM role for compute follows least privilege**
  - Status: ⚠️ NEEDS REVIEW (see IAM audit report)
  - Uses AWS-managed policy

- [ ] **ECS resources defined in IaC**
  - Status: ❌ FAIL
  - ECS infrastructure incomplete

### Items Not Verifiable (Resources Outside IaC)

- [ ] **IMDSv2 required on EC2 instances** - Cannot verify
- [ ] **No privileged containers** - Cannot verify
- [ ] **EBS volumes encrypted** - Cannot verify
- [ ] **Lambda functions in VPC** - Cannot verify
- [ ] **Container images from approved registries** - Cannot verify
- [ ] **Runtime security monitoring enabled** - Cannot verify

---

## Compliance Assessment

Due to incomplete infrastructure definition in IaC, **full compliance assessment not possible**.

### Verifiable Controls

| Control | Requirement | Status | Notes |
|---------|-------------|--------|-------|
| Logging | CloudWatch logs enabled | ✅ PASS | 30-day retention |
| IaC Coverage | All resources in code | ❌ FAIL | Compute resources missing |
| Tagging | Resources tagged | ⚠️ PARTIAL | Basic tags present |

**Compute Security Compliance**: **33%** (1 of 3 verifiable controls passing)

---

## Architecture Recommendations

### For Container Workloads (ECS/EKS)

**Security Best Practices**:
1. Use AWS Fargate for serverless containers (eliminates EC2 management)
2. Implement least-privilege IAM roles per task
3. Enable container insights for monitoring
4. Use VPC networking mode (not bridge)
5. Implement service mesh for mTLS (App Mesh)

### For Serverless Workloads (Lambda)

**Security Best Practices**:
1. Deploy Lambda functions in VPC for database access
2. Use Lambda layers for shared dependencies
3. Implement function-level IAM roles
4. Enable X-Ray tracing for visibility
5. Set appropriate timeout and memory limits

### For VM Workloads (EC2)

**Security Best Practices** (if added):
1. Require IMDSv2 for instance metadata
2. Enable Systems Manager for patching
3. Use encrypted AMIs
4. Implement auto-scaling for resilience
5. Deploy in private subnets with ALB in public

---

## Metrics

- **EC2 Instances Defined**: 0
- **ECS Clusters Defined**: 0
- **ECS Task Definitions**: 0
- **ECS Services**: 0
- **Lambda Functions**: 0
- **Auto Scaling Groups**: 0
- **CloudWatch Log Groups**: 1
- **IAM Roles for Compute**: 1
- **Infrastructure Completeness**: ~30% (foundational only)

---

## Next Steps

### For Security Team
1. Conduct manual audit of running ECS tasks (if any)
2. Review container security configurations
3. Verify image scanning enabled in ECR
4. Check runtime security monitoring (GuardDuty, Falco)

### For DevOps Team
1. Complete ECS infrastructure in Terraform
2. Document architecture decisions
3. Enable EBS encryption by default
4. Implement container security scanning
5. Add missing compute resources to IaC

### For Compliance Team
1. Document compute resources outside IaC
2. Create exception process for non-IaC resources
3. Establish IaC coverage requirements
4. Schedule follow-up audit after IaC completion

---

## Conclusion

The compute security audit is **incomplete** due to missing infrastructure definitions in Terraform. The foundational resources (IAM role, log group) show good practices, but actual compute workloads cannot be assessed.

**Critical Gap**: ECS task definitions, clusters, and services not in IaC

**Priority Actions**:
1. Document all compute resources (IMMEDIATE)
2. Add ECS infrastructure to Terraform (MEDIUM - 30 days)
3. Enable EBS encryption by default (SHORT-TERM - 7 days)

**Risk Level**: MEDIUM (due to lack of visibility)  
**Audit Completeness**: 30% (foundational only)  
**Recommended Action**: Complete IaC implementation, then re-audit

---

**Report Generated**: 2026-02-05  
**Next Review Due**: After ECS infrastructure added to IaC  
**Auditor**: Hosting Auditor Agent

**Note**: This report should be considered preliminary until compute infrastructure is fully defined in Terraform.

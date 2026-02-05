---
genre: hosting
category: network-security
analysis-type: iac
audit-date: 2026-02-05
auditor: Hosting Auditor Agent
scope: Terraform IaC Analysis
---

# Network Security Audit Report

**Audit Date**: 2026-02-05  
**Auditor**: Hosting Auditor Agent  
**Scope**: Infrastructure-as-Code Analysis (Terraform)  
**Environment**: Production

---

## Executive Summary

This audit identified **2 CRITICAL** and **2 HIGH** severity network security findings in the Terraform infrastructure. The most significant issues are public exposure of management services and overly permissive egress rules. The VPC architecture implements basic segmentation with public and private subnets, but security group configurations require immediate attention.

### Overall Network Security Posture: **POOR**

---

## Findings by Severity

| Severity | Count |
|----------|-------|
| CRITICAL | 2 |
| HIGH | 2 |
| MEDIUM | 3 |
| LOW | 1 |
| INFO | 2 |
| **TOTAL** | **10** |

---

## Critical Findings

### Finding 1: HTTP and HTTPS Open to Internet (0.0.0.0/0)

**Severity**: CRITICAL

**File**: `terraform/main.tf:74-86`

**Resource**: `aws_security_group.app`

**Description**: 
The application security group allows inbound traffic on ports 80 (HTTP) and 443 (HTTPS) from any IP address (0.0.0.0/0). While HTTPS exposure may be intentional for web applications, HTTP should not be exposed as it transmits data in plaintext.

**Evidence**:
```
Resource: aws_security_group.app (lines 70-98)
Ingress Rule 1: Protocol=tcp, Port=443, CIDR=0.0.0.0/0
Ingress Rule 2: Protocol=tcp, Port=80, CIDR=0.0.0.0/0
VPC: aws_vpc.main.id
```

**Risk Assessment**:
- **Confidentiality**: CRITICAL - HTTP transmits credentials and sensitive data unencrypted
- **Integrity**: HIGH - Man-in-the-middle attacks possible on HTTP
- **Availability**: MEDIUM - Exposed to DDoS attacks

**Business Impact**:
1. Credentials transmitted over HTTP can be intercepted
2. Session tokens exposed to network sniffing
3. Regulatory compliance violations (PCI DSS requires TLS)
4. Application vulnerable to man-in-the-middle attacks
5. No protection against HTTP-based exploits

**Attack Scenario**:
1. Attacker performs network sniffing on public internet
2. User connects via HTTP on port 80
3. Credentials/tokens captured in plaintext
4. Attacker uses stolen credentials to access application
5. Data breach or account takeover

**Affected Resources**:
- Security Group: aws_security_group.app (sample-app-)
- VPC: aws_vpc.main (sample-app-vpc)
- Public Subnet: aws_subnet.public (sample-app-public-subnet)

**Remediation Priority**: IMMEDIATE (0-24 hours)

**Recommended Actions**:
1. Remove HTTP (port 80) ingress rule entirely
2. Implement HTTPS redirect at load balancer level (not shown in IaC)
3. Restrict HTTPS access to known IP ranges if not public-facing
4. Consider using AWS WAF for additional protection
5. Implement HTTP Strict Transport Security (HSTS) headers

**CIS Benchmark**: Related to CIS 5.2 (restrict administrative access)

---

### Finding 2: Unrestricted Egress Traffic

**Severity**: CRITICAL

**File**: `terraform/main.tf:88-93`

**Resource**: `aws_security_group.app` egress rules

**Description**: 
The application security group allows all outbound traffic to any destination (0.0.0.0/0) on all protocols. This violates security best practices and creates data exfiltration risks.

**Evidence**:
```
Egress Rule: Protocol=-1 (all), Port=0-65535, Destination=0.0.0.0/0
From: aws_security_group.app
```

**Risk Assessment**:
- **Confidentiality**: CRITICAL - No prevention of data exfiltration
- **Integrity**: HIGH - Compromised instances can download malware
- **Availability**: MEDIUM - C2 communications unrestricted

**Business Impact**:
1. Compromised application server can exfiltrate entire database
2. Malware can be downloaded without restriction
3. Command and control (C2) traffic cannot be blocked
4. Ransomware can communicate with external servers
5. No visibility or control over outbound connections

**Affected Resources**:
- Security Group: aws_security_group.app
- All instances using this security group

**Remediation Priority**: IMMEDIATE (0-24 hours)

**Recommended Actions**:
1. Replace wildcard egress with explicit rules for required services
2. Allow outbound HTTPS (443) only to specific destinations
3. Restrict database egress to private subnet only
4. Implement VPC endpoints for AWS services (S3, DynamoDB)
5. Enable VPC Flow Logs for egress monitoring

---

## High Severity Findings

### Finding 3: Database Security Group Lacks Egress Rules

**Severity**: HIGH

**File**: `terraform/main.tf:126-140`

**Resource**: `aws_security_group.db`

**Description**: 
The database security group defines ingress rules but no explicit egress rules. By default, AWS security groups allow all egress traffic, creating potential data exfiltration risk.

**Evidence**:
```
Resource: aws_security_group.db (lines 126-140)
Ingress: PostgreSQL port 5432 from aws_security_group.app
Egress: Not defined (defaults to allow all)
```

**Risk**: Database can initiate outbound connections to any destination

**Remediation**: Add explicit egress deny rule or minimal required egress

---

### Finding 4: Public Subnet with Auto-Assign Public IP

**Severity**: HIGH

**File**: `terraform/main.tf:40-49`

**Resource**: `aws_subnet.public`

**Description**: 
The public subnet has `map_public_ip_on_launch = true`, meaning any EC2 instance launched in this subnet automatically receives a public IP address. This increases attack surface.

**Evidence**:
```
Resource: aws_subnet.public
Attribute: map_public_ip_on_launch = true
CIDR: 10.0.1.0/24
```

**Risk**: 
- Accidental exposure of instances to internet
- Increases attack surface for EC2 instances
- Resources may bypass network controls

**Business Impact**: 
Developers or automated tools launching instances in this subnet will automatically expose them to the internet, potentially bypassing security reviews.

**Remediation**: Set to `false` and explicitly assign public IPs only when needed

---

## Medium Severity Findings

### Finding 5: Single Availability Zone for Subnets

**Severity**: MEDIUM

**File**: `terraform/main.tf:40-59`

**Resources**: `aws_subnet.public`, `aws_subnet.private`

**Description**: 
Public subnet is in availability zone `us-east-1a` and private subnet is in `us-east-1b`. While using multiple AZs is good for the database subnet group, the VPC lacks high availability for compute resources.

**Evidence**:
```
Public Subnet: ${var.aws_region}a (us-east-1a)
Private Subnet: ${var.aws_region}b (us-east-1b)
```

**Risk**: Single point of failure for resources in each subnet tier

**Recommendation**: Create multiple subnets per tier across at least 2 AZs

---

### Finding 6: Missing Network ACLs

**Severity**: MEDIUM

**Description**: 
No Network ACLs (NACLs) are defined in the Terraform configuration. The VPC relies only on security groups for network filtering, lacking defense-in-depth.

**Evidence**: No `aws_network_acl` resources found in main.tf

**Risk**: 
- Single layer of network defense
- No subnet-level traffic filtering
- Cannot block traffic at network boundary

**Recommendation**: Implement NACLs as additional security layer

---

### Finding 7: No VPC Flow Logs Configured

**Severity**: MEDIUM (CIS 3.9)

**Description**: 
VPC Flow Logs are not configured in the Terraform infrastructure. This means no network traffic logging or visibility for security monitoring.

**Evidence**: No `aws_flow_log` resource in main.tf

**Risk**:
- No visibility into network traffic patterns
- Cannot detect port scanning or reconnaissance
- Missing audit trail for compliance
- Incident response lacks network forensics

**Business Impact**: 
Security team cannot detect or investigate network-based attacks. Compliance audits will flag missing flow logs.

**CIS Control**: CIS 3.9 - Ensure VPC flow logging is enabled

**Remediation Priority**: HIGH (within 7 days)

---

## Low Severity Findings

### Finding 8: Missing Route Table Explicit Associations

**Severity**: LOW

**Description**: 
No explicit route table associations are defined for subnets. Subnets will use the default route table, which reduces infrastructure clarity.

**Evidence**: No `aws_route_table` or `aws_route_table_association` resources

**Recommendation**: Define explicit route tables for better control and documentation

---

## Informational Findings

### Info 1: No NAT Gateway Defined

**Severity**: INFO

**Description**: 
No NAT Gateway is defined for the private subnet. This means instances in the private subnet cannot initiate outbound connections to the internet.

**Finding**: This may be intentional for security (air-gapped private subnet)

**Consideration**: If private subnet needs internet access, add NAT Gateway

---

### Info 2: Missing VPC Endpoints

**Severity**: INFO

**Description**: 
No VPC endpoints are configured for AWS services (S3, DynamoDB, etc.). Traffic to AWS services traverses the internet gateway.

**Benefit of VPC Endpoints**:
- Private connectivity to AWS services
- Reduced NAT Gateway data transfer costs
- Better security posture
- Improved network performance

**Recommendation**: Add VPC endpoints for S3 and other used services

---

## Network Architecture Analysis

### VPC Configuration
- **VPC CIDR**: 10.0.0.0/16
- **Public Subnet**: 10.0.1.0/24 (256 IPs)
- **Private Subnet**: 10.0.2.0/24 (256 IPs)
- **Internet Gateway**: Present (aws_internet_gateway.main)
- **NAT Gateway**: None
- **VPC Peering**: None

### Security Groups Summary

| Security Group | Purpose | Ingress Rules | Egress Rules | Issues |
|----------------|---------|---------------|--------------|--------|
| aws_security_group.app | Application tier | 2 (HTTP, HTTPS from 0.0.0.0/0) | 1 (All to 0.0.0.0/0) | CRITICAL: Unrestricted egress |
| aws_security_group.db | Database tier | 1 (PostgreSQL from app SG) | 0 (defaults to all) | HIGH: No explicit egress control |

### Network Segmentation Assessment

**Current State**:
- ✅ VPC isolated from default VPC
- ✅ Public and private subnet separation
- ⚠️ Minimal subnet redundancy (single subnet per tier per AZ)
- ❌ No network ACLs for additional filtering
- ❌ No VPC Flow Logs for monitoring

**Best Practice Comparison**:
- Industry Standard: 3 tiers (public, private, data) across 3 AZs = 9 subnets
- Current Implementation: 2 tiers across 2 AZs = 2 subnets
- **Gap**: Missing isolated data tier and multi-AZ redundancy

---

## Security Group Rules Matrix

### Inbound Traffic Analysis

| Source | Destination | Protocol | Port | Risk Level | Justification Required |
|--------|-------------|----------|------|------------|------------------------|
| 0.0.0.0/0 | app SG | TCP | 443 | MEDIUM | Web application access |
| 0.0.0.0/0 | app SG | TCP | 80 | CRITICAL | Plaintext HTTP should be disabled |
| app SG | db SG | TCP | 5432 | LOW | Standard database access |

### Outbound Traffic Analysis

| Source | Destination | Protocol | Port | Risk Level | Issue |
|--------|-------------|----------|------|------------|-------|
| app SG | 0.0.0.0/0 | ALL | ALL | CRITICAL | Unrestricted data exfiltration possible |
| db SG | 0.0.0.0/0 | ALL | ALL | HIGH | Database can initiate outbound connections |

---

## Compliance Assessment

### CIS AWS Foundations Benchmark - Network Controls

| Control | Requirement | Status | Finding |
|---------|-------------|--------|---------|
| 5.1 | Default VPCs not in use | ✅ PASS | Custom VPC implemented |
| 5.2 | No SSH (22) from 0.0.0.0/0 | ✅ PASS | No SSH rules defined |
| 5.3 | No RDP (3389) from 0.0.0.0/0 | ✅ PASS | No RDP rules defined |
| 5.4 | Security groups restrict all traffic | ❌ FAIL | Unrestricted egress |
| 2.9 | VPC Flow Logs enabled | ❌ FAIL | Not configured |
| 3.9 | VPC Flow Logs enabled | ❌ FAIL | Not configured |

**Network Security Compliance**: **40%** (2 of 5 controls passing)

---

## Threat Scenarios

### Scenario 1: Data Exfiltration
**Attack Path**:
1. Application vulnerability exploited (SQL injection, RCE)
2. Attacker gains shell access on application server
3. Unrestricted egress allows connection to attacker-controlled server
4. Database credentials extracted from application
5. Entire database dumped and uploaded to external server
6. **No blocking** - security groups permit all outbound traffic

**Likelihood**: HIGH  
**Impact**: CRITICAL

---

### Scenario 2: Malware Download
**Attack Path**:
1. Compromised application downloads malware
2. Unrestricted egress permits download from any internet source
3. Cryptomining software or ransomware executed
4. Additional backdoors established
5. Lateral movement to database server

**Likelihood**: MEDIUM  
**Impact**: HIGH

---

### Scenario 3: HTTP Man-in-the-Middle
**Attack Path**:
1. User connects to application over HTTP (port 80)
2. Attacker intercepts traffic on public network
3. Credentials captured in plaintext
4. Session hijacking or account takeover

**Likelihood**: MEDIUM  
**Impact**: HIGH

---

## Recommendations Priority Matrix

### Immediate (0-24 hours) - CRITICAL

1. **Remove HTTP port 80 access**
   - Effort: 15 minutes
   - Risk Reduction: HIGH
   - Update security group to remove ingress on port 80

2. **Restrict egress traffic**
   - Effort: 2 hours
   - Risk Reduction: CRITICAL
   - Define explicit egress rules for required services only

3. **Add explicit egress rules to database security group**
   - Effort: 30 minutes
   - Risk Reduction: HIGH
   - Prevent database from initiating outbound connections

### Short-term (1-7 days) - HIGH

4. **Enable VPC Flow Logs**
   - Effort: 1 hour
   - Cost: ~$10/month
   - Add flow log resource to Terraform

5. **Disable auto-assign public IP**
   - Effort: 30 minutes
   - Risk Reduction: MEDIUM
   - Set map_public_ip_on_launch to false

6. **Implement Network ACLs**
   - Effort: 4 hours
   - Risk Reduction: MEDIUM
   - Add subnet-level traffic filtering

### Medium-term (7-30 days) - MEDIUM

7. **Add VPC endpoints for AWS services**
   - Effort: 2 hours
   - Cost Savings: Reduced NAT costs
   - Improved security and performance

8. **Implement multi-AZ subnet redundancy**
   - Effort: 8 hours
   - Risk Reduction: MEDIUM
   - High availability improvement

9. **Define explicit route tables**
   - Effort: 2 hours
   - Risk Reduction: LOW
   - Better infrastructure documentation

---

## Metrics

- **VPCs Defined**: 1
- **Subnets Defined**: 2 (1 public, 1 private)
- **Internet Gateways**: 1
- **NAT Gateways**: 0
- **Security Groups**: 2
- **Security Group Rules with 0.0.0.0/0**: 3 (150% of SGs)
- **Management Ports Exposed**: 0 (Good)
- **HTTP Ports Exposed**: 1 (Critical)
- **HTTPS Ports Exposed**: 1 (Acceptable if intended)
- **VPC Flow Logs**: 0 (Non-compliant)
- **Network ACLs**: 0 (Using defaults)

---

## Next Steps

### For Security Team
1. Review application requirements for port 80 exposure
2. Define approved egress destinations
3. Enable VPC Flow Logs immediately
4. Configure SIEM to monitor flow logs

### For DevOps Team
1. Update Terraform to remove HTTP ingress
2. Implement restrictive egress rules
3. Add VPC Flow Logs resource
4. Test application after network changes
5. Document network architecture decisions

### For Compliance Team
1. Document exceptions for public HTTP access (if approved)
2. Ensure VPC Flow Logs retention meets requirements
3. Schedule quarterly network architecture reviews

---

## Conclusion

The network infrastructure has **critical security gaps** that require immediate attention. The combination of unrestricted egress traffic and HTTP exposure creates significant data breach and malware infection risks. 

**Priority Actions**:
1. Restrict egress traffic (CRITICAL)
2. Remove HTTP access (CRITICAL)
3. Enable VPC Flow Logs (HIGH)

**Timeline**: 24 hours for critical fixes, 7 days for high priority items  
**Risk Level**: HIGH  
**Compliance Status**: Non-compliant with CIS benchmarks

---

**Report Generated**: 2026-02-05  
**Next Review Due**: 2026-03-05  
**Auditor**: Hosting Auditor Agent

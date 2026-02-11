# Team Assessment Templates

## Overview

This directory contains templates for assessing team stability through developer churn analysis and compiling aggregate vulnerability statistics. Team health scoring is **entirely based on churn metrics**.

## Assessment Focus

**Primary Goals:**
1. **Developer Churn** - Analyze team stability by examining developer tenure (first commit to last commit)
2. **Vulnerability Statistics** - Compile aggregate statistics on vulnerabilities by developer (committed vs approved)

**Note:** Individual vulnerability attribution (committed by / approved by for each specific vulnerability) is handled in the security audit templates, not here.

## Assessment Templates

### 1. Team Stability
- **[developer-churn.md](developer-churn.md)** - Calculate developer churn based on first and last commits

### 2. Vulnerability Statistics  
- **[vulnerability-statistics.md](vulnerability-statistics.md)** - Aggregate vulnerability statistics by developer (from security templates)

### 3. Executive Summary
- **[executive-summary.md](executive-summary.md)** - Team health summary based on churn, with vulnerability statistics included

## Assessment Process

### Phase 1: Data Collection

1. **Analyze Developer Tenure**
   ```bash
   # Get first and last commit for each developer
   git log --all --format="%an|%ae|%ad" --date=iso
   
   # Calculate tenure and classify status
   # Active: Last commit within 30 days
   # Inactive: Last commit 30-90 days ago
   # Departed: Last commit >90 days ago
   ```

### Phase 2: Analysis and Scoring

1. **Vulnerability Attribution Analysis**
   - Group vulnerabilities by developer
   - Calculate distribution by severity
   - Identify high-risk code areas
   - Analyze temporal patterns

2. **Developer Churn Analysis**
   - Calculate churn rates (30-day, 90-day, 12-month)
   - Determine average tenure
   - Identify knowledge risks (orphaned code)
   - Assess team stability

2. **Compile Vulnerability Statistics**
   - Read all security audit templates
   - Extract "Committed By" and "Approved By" fields from vulnerability tables
   - Aggregate by developer (count committed vs approved)
   - Calculate statistics by severity and category

### Phase 2: Analysis and Scoring

1. **Team Stability Maturity (1-5 scale)** - Based entirely on churn
2. **Team Health Score (0-100)** - Calculated from Team Stability Maturity × 20

### Phase 3: Reporting

1. **Fill Templates** with actual findings
2. **Generate Executive Summary** with key metrics and recommendations
3. **Provide Actionable Recommendations** for improvement

## Scoring System

Team health is **entirely based on churn metrics**:

| Score | Rating | Churn Description |
|-------|--------|-------------------|
| 5 | Exceptional | <5% annual churn; excellent knowledge transfer |
| 4 | Strong | 5-10% annual churn; good documentation |
| 3 | Proficient | 10-15% annual churn; adequate knowledge management |
| 2 | Developing | 15-25% annual churn; knowledge gaps emerging |
| 1 | Needs Attention | >25% annual churn; critical knowledge loss |

## Key Principles

### 🎯 Evidence-Based
- Every assessment must cite specific commits and dates
- Include commit SHAs for reference
- Use quantitative metrics wherever possible

### 🤝 Constructive and Objective
- Focus on team stability and improvement
- Consider context (project lifecycle, team size)
- Provide actionable recommendations

### 📊 Data-Driven
- Use git history as the source of truth
- Exclude bot/automated commits
- Calculate normalized metrics
- Track trends over time

### 🔒 Respectful and Private
- Present findings constructively
- Focus on patterns, not individual criticism
- Individual vulnerability attribution is in security templates
- Share aggregate insights with leadership

## Attribution Best Practices

### What Git Blame Shows
- **Last modifier** of each line of code
- NOT necessarily the person who introduced the vulnerability
- Context matters: code may have become vulnerable due to:
  - New attack vectors discovered
  - Changes in surrounding code
  - Evolution of security standards

### Handling Edge Cases
- **Pre-repository history:** Note as "not attributed"
- **Vendor/generated code:** Exclude from attribution
- **Multiple authors:** Note ambiguity if unclear
- **Bot commits:** Filter out automated contributors

### Interpretation Guidelines
- Attribution ≠ blame
- Not all developers have equal security training
- Older vulnerabilities may reflect outdated practices
- Reviewers who approved code share responsibility
- Business pressures may have forced shortcuts

## Churn Analysis Best Practices

### Understanding Churn
- **Tenure:** Time from first commit to last commit
- **Active:** Last commit within 30 days
- **Inactive:** Last commit 30-90 days ago
- **Departed:** Last commit >90 days ago
- **Churn Rate:** % of developers who departed in a time period

### Industry Benchmarks
- **Healthy:** 10-15% annual churn
- **Concerning:** 15-25% annual churn
- **Critical:** >25% annual churn

### Knowledge Risk Indicators
- Code primarily owned by departed developers
- Critical systems with single-person expertise
- Poor documentation of departed developer's work
- No knowledge transfer process

## Common Use Cases

### 1. Security Training Needs
Use vulnerability attribution to:
- Identify developers needing security training
- Focus training on specific vulnerability types
- Measure improvement over time
- Celebrate security champions

### 2. Code Review Improvements
Use findings to:
- Add security checks to review process
- Assign security-focused reviewers for high-risk areas
- Create checklists for common vulnerability patterns
- Implement automated security scans

### 3. Team Stability Planning
Use churn analysis to:
- Identify retention risks
- Plan succession for critical roles
- Improve knowledge transfer processes
- Address knowledge silos

### 4. Resource Allocation
Use combined insights to:
- Prioritize refactoring for high-vulnerability areas
- Allocate training budget effectively
- Plan hiring to address knowledge gaps
- Invest in documentation for high-risk areas

## Output Directory Structure

```
audits/YYYY-MM-DD/team/
├── vulnerability-attribution.md   # Vulnerability → Developer mapping
├── developer-churn.md              # Developer tenure and churn analysis
└── executive-summary.md            # Combined team health assessment
```

## Tools and Commands

### Git Blame Analysis
```bash
# Blame specific lines
git blame -L 45,52 src/auth/authentication.js --line-porcelain

# Get commit details
git show abc1234 --format="%H|%an|%ae|%ad|%s" --date=iso --no-patch

# Find files changed by a commit
git diff-tree --no-commit-id --name-only -r abc1234
```

### Developer History
```bash
# All contributors
git shortlog -sn --all --no-merges

# Commits by specific author
git log --author="email@example.com" --all --oneline

# First and last commits
git log --all --format="%an|%ae|%ad" --date=iso | awk -F'|' '{...}'
```

### Churn Metrics
```bash
# Recent activity (30 days)
git log --since="30 days ago" --all --format="%an" | sort | uniq -c

# Contributors in a time range
git shortlog -sn --since="90 days ago" --until="30 days ago" --all
```

## Common Pitfalls to Avoid

❌ **Don't:**
- Attribute vulnerabilities without understanding context
- Use findings punitively or to punish developers
- Compare developers with vastly different roles
- Share individual scores publicly
- Ignore bot/automated commits in analysis
- Attribute vendor or generated code to developers

✅ **Do:**
- Provide context for each finding
- Focus on team-level patterns and improvements
- Use findings to guide training and process changes
- Celebrate developers with good security practices
- Filter out non-human contributors
- Document limitations and caveats

## Questions?

For questions about the assessment process or templates:
- Review the individual template files for detailed guidance
- Check git command examples in this README
- Refer to security and churn best practices sections

## Version History

- **v2.0** (2026-02): Refocused on vulnerability attribution and developer churn
- **v1.0** (2024-01): Initial template creation (deprecated)


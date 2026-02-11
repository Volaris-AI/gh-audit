# Team Assessment Templates

## Overview

This directory contains templates for conducting team assessments focused on security vulnerability attribution and developer churn analysis. These assessments help identify security responsibility and team stability risks.

## Assessment Focus

**Primary Goals:**
1. **Vulnerability Attribution** - Identify which team members are responsible for security vulnerabilities using git blame analysis
2. **Developer Churn** - Analyze team stability by examining developer tenure (first commit to last commit)

## Assessment Templates

### 1. Security Responsibility
- **[vulnerability-attribution.md](vulnerability-attribution.md)** - Attribute security vulnerabilities to developers using git blame

### 2. Team Stability
- **[developer-churn.md](developer-churn.md)** - Calculate developer churn based on first and last commits

### 3. Executive Summary
- **[executive-summary.md](executive-summary.md)** - Overall team health summary combining vulnerability attribution and churn analysis

## Assessment Process

### Phase 1: Data Collection

1. **Extract Security Findings**
   - Read all security audit templates
   - Extract vulnerabilities with file paths and line numbers
   - Note severity levels and categories

2. **Run Git Blame Analysis**
   ```bash
   # For each vulnerable code section
   git blame -L [start_line],[end_line] [file_path] --line-porcelain
   
   # Get commit details
   git show [commit_sha] --format="%H|%an|%ae|%ad|%s" --date=iso
   ```

3. **Analyze Developer Tenure**
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

3. **Maturity Scoring**
   - Security Awareness Maturity (1-5 scale)
   - Team Stability Maturity (1-5 scale)
   - Overall Team Health Score (0-100)

### Phase 3: Reporting

1. **Fill Templates** with actual findings
2. **Generate Executive Summary** with key metrics and recommendations
3. **Provide Actionable Recommendations** for improvement

## Scoring System

All assessments use a consistent 1-5 scoring rubric:

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Minimal vulnerabilities; very low churn; excellent practices |
| 4 | Strong | Few vulnerabilities; low churn; good practices |
| 3 | Proficient | Moderate vulnerabilities; normal churn; room for improvement |
| 2 | Developing | Many vulnerabilities; high churn; notable gaps |
| 1 | Needs Attention | Critical vulnerabilities; very high churn; immediate action needed |

## Key Principles

### 🎯 Evidence-Based
- Every assessment must cite specific commits, file paths, and line numbers
- Include commit SHAs and dates for reference
- Use quantitative metrics wherever possible

### 🤝 Constructive and Objective
- Focus on learning and improvement, not blame
- Consider context (code may have been secure when written)
- Acknowledge git blame limitations
- Provide actionable recommendations

### 📊 Data-Driven
- Use git history as the source of truth
- Exclude bot/automated commits
- Calculate normalized metrics (per developer, per module)
- Track trends over time

### 🔒 Respectful and Private
- Present findings constructively
- Focus on patterns, not individual criticism
- Individual attribution is for learning and improvement
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


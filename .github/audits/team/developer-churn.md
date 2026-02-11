---
genre: team
category: developer-churn
analysis-type: git-history
relevance:
  file-patterns: []
  keywords: []
  config-keys: []
  always-include: true
severity-scale: "Critical|High|Medium|Low|Info"
---

# Developer Churn Assessment

<!-- analysis: git-history -->

## Assessment Period
**Audit Date:** [AUDIT_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [ASSESSOR]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Purpose:** Analyze developer churn by examining the tenure (first commit to last commit) of team members.

**Key Findings:**
- Total developers analyzed: [NUMBER]
- Active developers: [NUMBER]
- Departed developers: [NUMBER]
- Average tenure: [X] months

---

## Assessment Methodology

### Data Collection

Churn analysis is based on git commit history:

```bash
# Get first and last commit for each author
git log --all --format="%an|%ae|%ad" --date=iso | \
  awk -F'|' '{
    email=$2
    date=$3
    if (!(email in first) || date < first[email]) first[email] = date
    if (!(email in last) || date > last[email]) last[email] = date
    name[email] = $1
  } END {
    for (email in name) {
      print name[email] "|" email "|" first[email] "|" last[email]
    }
  }'

# Get commit count per developer
git shortlog -sn --all --no-merges

# Get recent activity (last 30 days)
git log --since="30 days ago" --all --format="%an|%ae" | sort | uniq -c
```

### Churn Calculation

**Developer Tenure:** Time from first commit to last commit in the repository.

**Churn Status:**
- **Active:** Last commit within 30 days
- **Inactive:** Last commit 30-90 days ago  
- **Departed:** Last commit >90 days ago

**Churn Rate:** Percentage of developers who have departed in a given time period.

---

## Quality Control Checklist

- [ ] Extracted git history for all developers
- [ ] Identified first commit for each developer
- [ ] Identified last commit for each developer
- [ ] Calculated tenure for each developer
- [ ] Classified developers by activity status
- [ ] Excluded bot accounts (dependabot, renovate, etc.)
- [ ] Cross-referenced with known team changes

---

## Developer Roster

### Active Developers (Last commit within 30 days)

#### Developer: [NAME_1] ([EMAIL])

| Metric | Value |
|--------|-------|
| **First Commit** | [YYYY-MM-DD] |
| **Last Commit** | [YYYY-MM-DD] |
| **Tenure** | [X] days / [X] months |
| **Total Commits** | [NUMBER] |
| **Recent Commits (30d)** | [NUMBER] |
| **Status** | Active |

**First Commit Details:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Most Recent Commit:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Activity Pattern:**
- Average commits per month: [X]
- Most active in: [Month/Year]
- Primary code areas: [directories/modules]

---

#### Developer: [NAME_2] ([EMAIL])

[Repeat structure from above]

---

### Inactive Developers (Last commit 30-90 days ago)

#### Developer: [NAME_3] ([EMAIL])

| Metric | Value |
|--------|-------|
| **First Commit** | [YYYY-MM-DD] |
| **Last Commit** | [YYYY-MM-DD] |
| **Tenure** | [X] days / [X] months |
| **Total Commits** | [NUMBER] |
| **Days Since Last Commit** | [NUMBER] |
| **Status** | Inactive |

**First Commit Details:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Most Recent Commit:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Context:**
- [Reason for inactivity if known: vacation, project rotation, etc.]

---

### Departed Developers (Last commit >90 days ago)

#### Developer: [NAME_4] ([EMAIL])

| Metric | Value |
|--------|-------|
| **First Commit** | [YYYY-MM-DD] |
| **Last Commit** | [YYYY-MM-DD] |
| **Tenure** | [X] days / [X] months |
| **Total Commits** | [NUMBER] |
| **Days Since Last Commit** | [NUMBER] |
| **Status** | Departed |

**First Commit Details:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Most Recent Commit:**
```
Commit: [SHA]
Date: [YYYY-MM-DD]
Message: "[commit message]"
```

**Contributions:**
- Total lines added: [NUMBER]
- Total lines removed: [NUMBER]
- Primary code areas: [directories/modules]
- Legacy code ownership: [what they're responsible for]

**Knowledge Transfer Status:**
- [ ] Code documented
- [ ] Knowledge transferred to: [Developer names]
- [ ] Code ownership reassigned to: [Developer names]
- [ ] High-risk areas identified and addressed

---

## Churn Metrics

### Team Overview

| Metric | Value |
|--------|-------|
| **Total Developers (All Time)** | [NUMBER] |
| **Active Developers** | [NUMBER] ([X]%) |
| **Inactive Developers** | [NUMBER] ([X]%) |
| **Departed Developers** | [NUMBER] ([X]%) |
| **Average Tenure (All)** | [X] months |
| **Average Tenure (Active)** | [X] months |
| **Average Tenure (Departed)** | [X] months |

### Churn Rate Analysis

**30-Day Churn Rate:** [X]% — [X] departures in last 30 days  
**90-Day Churn Rate:** [X]% — [X] departures in last 90 days  
**12-Month Churn Rate:** [X]% — [X] departures in last 12 months

**Industry Benchmark:** 10-15% annual churn is typical for software teams.

**Assessment:** 
- [ ] Below industry average (healthy)
- [ ] Within industry average (normal)
- [ ] Above industry average (concerning)

### Tenure Distribution

```
<3 months  : ████░░░░░░░░░░░░░░░░ [X] developers ([X]%)
3-6 months : ██████░░░░░░░░░░░░░░ [X] developers ([X]%)
6-12 months: ████████░░░░░░░░░░░░ [X] developers ([X]%)
1-2 years  : ██████████░░░░░░░░░░ [X] developers ([X]%)
2+ years   : ████████████████████ [X] developers ([X]%)
```

### Activity Timeline

```
[Timeline visualization showing when developers joined and left]

2022: ●────────────────────────────●
2023:     ●──────────●    ●──────────────────
2024:         ●──────────────────────────────●
2025:                  ●──────────────────────

● = Join    ● = Depart    ── = Active Period
```

---

## Churn Impact Analysis

### Code Ownership Risks

**High-Risk Areas (Code owned by departed developers):**

1. **[Module/Directory Name]** — [X]% of code
   - Original author: [Departed Developer]
   - Last modified: [DATE]
   - Current maintainer: [None/Developer Name]
   - Risk level: [High/Medium/Low]
   - Recommendation: [Reassign ownership, document, refactor, etc.]

2. **[Module/Directory Name]** — [X]% of code
   - Original author: [Departed Developer]
   - Last modified: [DATE]
   - Current maintainer: [None/Developer Name]
   - Risk level: [High/Medium/Low]
   - Recommendation: [Reassign ownership, document, refactor, etc.]

### Knowledge Gaps

**Critical knowledge at risk:**
- **[Technology/System]** — Only [X] developer(s) familiar
- **[Module]** — Minimal documentation, owned by [status]
- **[Integration]** — Complex setup, original author departed

---

## Team Composition Trends

### New Developer Onboarding

**Developers joined in last 6 months:**
- [Developer 1]: [X] months tenure, [X] commits
- [Developer 2]: [X] months tenure, [X] commits
- [Developer 3]: [X] months tenure, [X] commits

**Onboarding Success Metrics:**
- Average time to first commit: [X] days
- Average commits in first month: [X]
- Retention rate (still active after 6mo): [X]%

### Recent Departures

**Developers departed in last 6 months:**
- [Developer 1]: [X] months tenure, [X] total commits, left [DATE]
- [Developer 2]: [X] months tenure, [X] total commits, left [DATE]

**Departure Analysis:**
- Average tenure before departure: [X] months
- Total code ownership transferred: [X]% of codebase
- Knowledge transfer completed: [Yes/Partial/No]

---

## Churn Patterns

### Positive Indicators

✅ **[Pattern Name]**
- Description: [What's working well]
- Example: [Specific data]
- Impact: [Why this is good]

✅ **[Pattern Name]**
- Description: [What's working well]
- Example: [Specific data]
- Impact: [Why this is good]

### Concerning Indicators

⚠️ **[Pattern Name]**
- Description: [What's concerning]
- Example: [Specific data]
- Impact: [Why this is concerning]
- Recommendation: [What to do about it]

⚠️ **[Pattern Name]**
- Description: [What's concerning]
- Example: [Specific data]
- Impact: [Why this is concerning]
- Recommendation: [What to do about it]

---

## Recommendations

### Retention Strategies

1. **For New Developers (<6 months tenure)**
   - Focus: [Onboarding, mentorship, early wins]
   - Action items:
     - [ ] [Specific action]
     - [ ] [Specific action]

2. **For Mid-Tenure Developers (6-18 months)**
   - Focus: [Growth opportunities, ownership, challenges]
   - Action items:
     - [ ] [Specific action]
     - [ ] [Specific action]

3. **For Senior Developers (18+ months)**
   - Focus: [Leadership, mentoring, strategic work]
   - Action items:
     - [ ] [Specific action]
     - [ ] [Specific action]

### Knowledge Management

1. **Documentation**
   - Priority areas: [List high-risk undocumented areas]
   - Timeline: [When to complete]
   - Owners: [Who's responsible]

2. **Code Ownership**
   - Establish clear ownership for all critical modules
   - Ensure at least 2 developers familiar with each area
   - Regular knowledge sharing sessions

3. **Succession Planning**
   - Identify single points of failure
   - Cross-train developers on critical systems
   - Document tribal knowledge

### Team Stability

1. **Reduce Risk**
   - [ ] Document critical systems owned by departed developers
   - [ ] Reassign ownership of orphaned code
   - [ ] Pair new developers with experienced ones
   - [ ] Create knowledge sharing forums

2. **Support New Team Members**
   - [ ] Improve onboarding process
   - [ ] Assign mentors to new developers
   - [ ] Set clear expectations and goals
   - [ ] Regular check-ins during first 90 days

3. **Monitor Churn**
   - [ ] Track churn rate monthly
   - [ ] Identify early warning signs
   - [ ] Address team concerns proactively
   - [ ] Conduct stay interviews with key developers

---

## Historical Context

### Churn History (Last 24 Months)

| Period | Joined | Departed | Net Change | Churn Rate |
|--------|--------|----------|------------|------------|
| [Q1 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q2 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q3 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q4 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q1 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q2 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q3 YYYY] | [X] | [X] | [+/-X] | [X]% |
| [Q4 YYYY] | [X] | [X] | [+/-X] | [X]% |

**Trend:** [Growing/Stable/Shrinking] team, [Increasing/Stable/Decreasing] churn

---

## Notes and Observations

[Any additional context about team changes, organizational factors, market conditions, etc.]

---

## Follow-Up Actions

- [ ] Share churn analysis with team leadership
- [ ] Address knowledge gaps in high-risk areas
- [ ] Implement retention strategies for at-risk developers
- [ ] Update documentation for departed developer code
- [ ] Reassign ownership of orphaned modules
- [ ] Schedule knowledge transfer sessions
- [ ] Plan re-assessment in 90 days

---

## Metadata

**Analysis Date:** [YYYY-MM-DD]  
**Repository:** [repo name]  
**Git History Range:** [first commit date] to [last commit date]  
**Total Commits Analyzed:** [NUMBER]  
**Analysis Tool:** git log

---
genre: team
category: executive-summary
analysis-type: git-history
relevance:
  file-patterns: []
  keywords: []
  config-keys: []
  always-include: true
severity-scale: "Critical|High|Medium|Low|Info"
---

# Team Assessment Executive Summary

<!-- analysis: git-history -->

> **Generated:** [COMPLETION_DATE]  
> **Assessment Period:** [timeframe, e.g., "Last 90 days"]

---

## 📊 Team Health Score

**Score: XX / 100** — [Excellent | Good | Fair | Poor | Critical]

### At a Glance

| Metric | Value | Status |
|--------|-------|--------|
| Team Size | XX developers | — |
| Active Developers | XX | 🟢 |
| 90-Day Churn Rate | XX% | [🟢 Low / 🟡 Moderate / 🔴 High] |
| Average Tenure | XX months | [🟢 Strong / 🟡 Adequate / 🔴 Weak] |
| Team Stability Maturity | X.X / 5 | [🟢 Strong / 🟡 Developing / 🔴 Weak] |
| Total Vulnerabilities | XX | [from security audit] |

### Key Takeaways

1. **[Most significant positive finding about team stability]**
2. **[Key concern about churn or knowledge concentration]**
3. **[Key recommendation for improvement]**

### Top 3 Priorities

1. 🔴 **[Critical Priority]** — [e.g., Address knowledge concentration in departed developer's code]
2. 🟡 **[High Priority]** — [e.g., Implement knowledge sharing sessions]
3. 🟢 **[Medium Priority]** — [e.g., Document critical systems]

---

## 🎯 Scoring Breakdown

**Score: XX / 100** — Level X — [Excellent | Good | Fair | Poor | Critical]

### Scoring Rubric

| Level | Score | Your Status | Criteria |
|-------|-------|-------------|----------|
| **5 — Excellent** | 95 | [✅ / ❌] | Maturity ≥4.5, <5% annual churn, avg tenure >24 months |
| **4 — Good** | 82 | [✅ / ❌] | Maturity ≥3.8, 5-10% annual churn, avg tenure >18 months |
| **3 — Fair** | 65 | [✅ / ❌] | Maturity ≥2.8, 10-15% annual churn, avg tenure >12 months |
| **2 — Poor** | 42 | [✅ / ❌] | Maturity ≥2.0, 15-25% annual churn, avg tenure >6 months |
| **1 — Critical** | 15 | [✅ / ❌] | Maturity <2.0, >25% annual churn |

### Your Metrics

| Metric | Value | Industry Benchmark | Status |
|--------|-------|-------------------|--------|
| Team Stability Maturity | X.X / 5 | ≥3.0 | [🟢 / 🟡 / 🔴] |
| 90-Day Churn Rate | XX% | <5% | [🟢 / 🟡 / 🔴] |
| 12-Month Churn Rate | XX% | 10-15% | [🟢 / 🟡 / 🔴] |
| Average Tenure (Active) | XX months | >18 months | [🟢 / 🟡 / 🔴] |
| Active Developers | XX | — | [🟢 / 🟡 / 🔴] |
| Departed (90+ days) | XX | Low | [🟢 / 🟡 / 🔴] |

**Modifiers Applied:**
- Tenure bonus: +X points (if avg tenure >24 months)
- Recent departures penalty: -X points (if >3 departed in last 90 days)
- Knowledge risk penalty: -X points (if critical systems owned by single departed developer)
- **Final Score:** XX/100

<details>
<summary><b>📋 Developer Churn Details</b> (click to expand)</summary>

### Team Composition

| Category | Count | Percentage |
|----------|-------|------------|
| **Active Developers** (last 30 days) | XX | XX% |
| **Inactive Developers** (30-90 days) | XX | XX% |
| **Departed Developers** (90+ days) | XX | XX% |
| **Total Developers (All Time)** | **XX** | **100%** |

### Developer Tenure

| Developer | First Commit | Last Commit | Tenure (months) | Status |
|-----------|--------------|-------------|-----------------|--------|
| [Developer 1] | [YYYY-MM-DD] | [YYYY-MM-DD] | XX | Active |
| [Developer 2] | [YYYY-MM-DD] | [YYYY-MM-DD] | XX | Active |
| [Developer 3] | [YYYY-MM-DD] | [YYYY-MM-DD] | XX | Inactive |
| [Developer 4] | [YYYY-MM-DD] | [YYYY-MM-DD] | XX | Departed |

### Tenure Distribution

```
<3 months  : ████░░░░░░░░░░░░░░░░ XX developers (XX%)
3-6 months : ██████░░░░░░░░░░░░░░ XX developers (XX%)
6-12 months: ████████░░░░░░░░░░░░ XX developers (XX%)
1-2 years  : ██████████░░░░░░░░░░ XX developers (XX%)
2+ years   : ████████████████████ XX developers (XX%)
```

**Team Strengths:**
- [Positive pattern, e.g., "Long average tenure indicates stable team"]
- [Positive pattern, e.g., "Low recent departure rate"]

**Areas for Concern:**
- [Concern, e.g., "3 developers departed in last 90 days"]
- [Concern, e.g., "Knowledge concentration in authentication module"]

**Knowledge Risk Assessment:**

High-risk areas (code owned by departed/inactive developers):
1. [Module/Directory]: XX% ownership by departed developers
2. [Module/Directory]: XX% ownership by departed developers

[See detailed churn analysis in `developer-churn.md`]

</details>

---

## 🔐 Vulnerability Statistics Summary

**Note:** Individual vulnerability attribution (committed by / approved by) is included in each finding in the security audit templates. This section shows aggregate statistics only.

### Total Vulnerabilities from Security Audit

| Severity | Count | % of Total |
|----------|-------|------------|
| Critical | XX | XX% |
| High | XX | XX% |
| Medium | XX | XX% |
| Low | XX | XX% |
| Info | XX | XX% |
| **Total** | **XX** | **100%** |

<details>
<summary><b>📊 Developer Involvement in Vulnerabilities</b> (click to expand)</summary>

### Vulnerabilities by Developer

| Developer | Committed | Approved | Total Involvement | Primary Role |
|-----------|-----------|----------|-------------------|--------------|
| [Developer 1] | XX | XX | XX | [Committer/Reviewer/Both] |
| [Developer 2] | XX | XX | XX | [Committer/Reviewer/Both] |
| [Developer 3] | XX | XX | XX | [Committer/Reviewer/Both] |
| [Developer 4] | XX | XX | XX | [Committer/Reviewer/Both] |
| [Developer 5] | XX | XX | XX | [Committer/Reviewer/Both] |

**Primary Role Classification:**
- **Committer**: >70% of involvement from committed vulnerabilities
- **Reviewer**: >70% of involvement from approved vulnerabilities
- **Both**: Balanced between committing and reviewing

### Training Recommendations

Based on vulnerability patterns:

**[Developer Name]:**
- Focus areas: [Top vulnerability categories]
- Recommended training: [Specific security topics]

**[Developer Name]:**
- Focus areas: [Top vulnerability categories]
- Recommended training: [Specific security topics]

[See detailed vulnerability statistics in `vulnerability-statistics.md`]

</details>

---

## 🎯 Recommendations

### Immediate Actions (0-7 days)

1. **[Action]** — [Description and rationale]
2. **[Action]** — [Description and rationale]

### Short-Term Actions (1-4 weeks)

1. **[Action]** — [Description and rationale]
2. **[Action]** — [Description and rationale]

### Long-Term Actions (1-3 months)

1. **[Action]** — [Description and rationale]
2. **[Action]** — [Description and rationale]

---

## 📈 Success Metrics

Track these metrics to measure improvement:

| Metric | Baseline | 30-Day Target | 90-Day Target |
|--------|----------|---------------|---------------|
| 90-Day Churn Rate | XX% | XX% | <5% |
| Average Tenure | XX months | XX months | >18 months |
| Developers with Security Training | XX% | 50% | 100% |
| Knowledge Risk Score | XX | XX | [Lower is better] |

---

## 📝 Notes

[Any additional context, observations, or qualifications]

**Analysis Scope:**
- Git history analyzed: [date range]
- Total developers included: XX
- Security vulnerabilities analyzed: XX (from `security/*.md`)

**Methodology:**
- Churn analysis based on first/last commit dates from git history
- Vulnerability attribution from "Committed By" and "Approved By" fields in security templates
- Team health score based entirely on churn metrics (Team Stability Maturity)

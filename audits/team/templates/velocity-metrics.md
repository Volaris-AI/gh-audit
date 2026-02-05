# Velocity and Productivity Metrics Assessment

## Assessment Period
**From:** [START_DATE]  
**To:** [END_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [YOUR_NAME]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Overall Team Velocity:** [Improving/Stable/Declining]

**Key Metrics:**
- Average commits per week: [X]
- Average PRs merged per week: [X]
- Average lead time for changes: [X] days
- Deployment frequency: [X] per week

**Key Findings:**
- [Summary of velocity trends]
- [Bottlenecks identified]
- [Productivity insights]

---

## Assessment Methodology

### Data Collection
```bash
# Commits per week
git log --since="2 months ago" --all --format="%ad" --date=format:"%Y-%W" | sort | uniq -c

# PRs merged per week
gh pr list --state merged --limit 500 --json mergedAt,number | jq -r '.[] | .mergedAt'

# Cycle time: First commit to merged
gh pr list --state merged --limit 500 --json number,createdAt,mergedAt,commits

# Deployment frequency (adjust for your deployment tool)
kubectl get deployments -A -o json | jq '.items[].metadata.creationTimestamp'

# Issue throughput
gh issue list --state closed --since "2 months ago" --json closedAt,createdAt
```

### DORA Metrics Tracked
1. **Deployment Frequency** - How often you deploy to production
2. **Lead Time for Changes** - Time from commit to running in production
3. **Change Failure Rate** - % of deployments causing a failure
4. **Mean Time to Recovery (MTTR)** - Time to recover from a failure

### Additional Velocity Metrics
5. **Throughput** - Work items completed per sprint/week
6. **Cycle Time** - Time from work start to completion
7. **Work in Progress (WIP)** - Number of active items
8. **Flow Efficiency** - Active time vs waiting time

---

## Quality Control Checklist

### Data Collection
- [ ] Extracted commit history with timestamps
- [ ] Collected PR merge data
- [ ] Gathered deployment data
- [ ] Collected incident/rollback data
- [ ] Retrieved issue completion data
- [ ] Identified sprint boundaries
- [ ] Collected PR review time data

### Analysis
- [ ] Calculated weekly commit velocity
- [ ] Calculated PR throughput
- [ ] Measured lead time for changes
- [ ] Measured cycle time
- [ ] Calculated deployment frequency
- [ ] Measured MTTR
- [ ] Identified velocity trends (improving/declining)
- [ ] Identified bottlenecks

---

## DORA Metrics Assessment

### 1. Deployment Frequency

**Current Performance:** [X] deployments per [day/week/month]

**DORA Benchmark:**
| Level | Frequency |
|-------|-----------|
| Elite | Multiple deployments per day |
| High | Between once per day and once per week |
| Medium | Between once per week and once per month |
| Low | Fewer than once per month |

**Team Level:** [Elite/High/Medium/Low]

**Trend:** [Improving/Stable/Declining]

**Weekly Deployment Count:**
| Week | Deployments | Notes |
|------|-------------|-------|
| Week 1 | [X] | [Any incidents or special circumstances] |
| Week 2 | [X] | |
| Week 3 | [X] | |
| Week 4 | [X] | |
| Week 5 | [X] | |
| Week 6 | [X] | |
| Week 7 | [X] | |
| Week 8 | [X] | |
| **Average** | **[X]** | |

**Analysis:**
- [What's helping deployment frequency]
- [What's hindering deployment frequency]

---

### 2. Lead Time for Changes

**Current Performance:** [X] days from commit to production

**DORA Benchmark:**
| Level | Lead Time |
|-------|-----------|
| Elite | Less than one day |
| High | Between one day and one week |
| Medium | Between one week and one month |
| Low | More than one month |

**Team Level:** [Elite/High/Medium/Low]

**Trend:** [Improving/Stable/Declining]

**Lead Time Breakdown:**
```
Commit → PR Created:     [X] hours ([Y]% of total)
PR Created → Reviewed:   [X] hours ([Y]% of total)
PR Reviewed → Merged:    [X] hours ([Y]% of total)
PR Merged → Deployed:    [X] hours ([Y]% of total)
Total Lead Time:         [X] hours / [Y] days
```

**Lead Time Distribution:**
| Percentile | Lead Time |
|------------|-----------|
| p50 (median) | [X] days |
| p75 | [X] days |
| p90 | [X] days |
| p95 | [X] days |

**Bottlenecks Identified:**
1. **[Bottleneck]** - [X]% of total lead time
   - Description: [What's causing the delay]
   - Impact: [Effect on velocity]
   - Recommendation: [How to address]

---

### 3. Change Failure Rate

**Current Performance:** [X]% of deployments require remediation

**DORA Benchmark:**
| Level | Failure Rate |
|-------|--------------|
| Elite | 0-15% |
| High | 16-30% |
| Medium | 31-45% |
| Low | 46-60% |

**Team Level:** [Elite/High/Medium/Low]

**Trend:** [Improving/Stable/Declining]

**Failures by Type:**
| Type | Count | Percentage |
|------|-------|------------|
| Rollbacks | [X] | [X]% |
| Hotfixes | [X] | [X]% |
| Incidents | [X] | [X]% |
| **Total** | **[X]** | **[X]%** |

**Root Causes:**
1. **[Root Cause]** - [X] incidents
2. **[Root Cause]** - [X] incidents
3. **[Root Cause]** - [X] incidents

**Analysis:**
- [What's contributing to failures]
- [What's helping reduce failures]

---

### 4. Mean Time to Recovery (MTTR)

**Current Performance:** [X] hours to recover from incidents

**DORA Benchmark:**
| Level | MTTR |
|-------|------|
| Elite | Less than one hour |
| High | Less than one day |
| Medium | Between one day and one week |
| Low | More than one week |

**Team Level:** [Elite/High/Medium/Low]

**Trend:** [Improving/Stable/Declining]

**Recent Incidents:**
| Date | Incident | Detection Time | Resolution Time | MTTR | Owner |
|------|----------|----------------|-----------------|------|-------|
| [DATE] | [DESC] | [X]m | [X]h | [X]h | [NAME] |
| [DATE] | [DESC] | [X]m | [X]h | [X]h | [NAME] |

**MTTR Breakdown:**
```
Detection Time:          [X] minutes ([Y]% of MTTR)
Diagnosis Time:          [X] minutes ([Y]% of MTTR)
Fix Implementation:      [X] minutes ([Y]% of MTTR)
Deployment/Verification: [X] minutes ([Y]% of MTTR)
```

**Analysis:**
- [What's helping recovery speed]
- [What's slowing recovery]

---

## Team Velocity Metrics

### Commit Velocity

**Average Commits per Week:** [X]
**Trend:** [Improving/Stable/Declining]

**Weekly Breakdown:**
| Week | Total Commits | Per Developer | Top Contributors |
|------|---------------|---------------|------------------|
| Week 1 | [X] | [X.X] | [Names] |
| Week 2 | [X] | [X.X] | [Names] |
| Week 3 | [X] | [X.X] | [Names] |
| Week 4 | [X] | [X.X] | [Names] |
| Week 5 | [X] | [X.X] | [Names] |
| Week 6 | [X] | [X.X] | [Names] |
| Week 7 | [X] | [X.X] | [Names] |
| Week 8 | [X] | [X.X] | [Names] |
| **Average** | **[X]** | **[X.X]** | |

**Commit Size Distribution:**
| Size Category | Count | Percentage |
|---------------|-------|------------|
| Small (<50 lines) | [X] | [X]% |
| Medium (50-200 lines) | [X] | [X]% |
| Large (200-500 lines) | [X] | [X]% |
| Very Large (>500 lines) | [X] | [X]% |

---

### PR Throughput

**Average PRs Merged per Week:** [X]
**Trend:** [Improving/Stable/Declining]

**Weekly Breakdown:**
| Week | PRs Merged | PRs Created | Merge Rate |
|------|------------|-------------|------------|
| Week 1 | [X] | [X] | [X]% |
| Week 2 | [X] | [X] | [X]% |
| Week 3 | [X] | [X] | [X]% |
| Week 4 | [X] | [X] | [X]% |
| Week 5 | [X] | [X] | [X]% |
| Week 6 | [X] | [X] | [X]% |
| Week 7 | [X] | [X] | [X]% |
| Week 8 | [X] | [X] | [X]% |
| **Average** | **[X]** | **[X]** | **[X]%** |

**PR Size Distribution:**
| Size Category | Count | Avg Review Time |
|---------------|-------|-----------------|
| Small (<100 lines) | [X] | [X] hours |
| Medium (100-300 lines) | [X] | [X] hours |
| Large (300-500 lines) | [X] | [X] hours |
| Very Large (>500 lines) | [X] | [X] hours |

**Insight:** Smaller PRs are reviewed faster. Encourage breaking down large PRs.

---

### Cycle Time Analysis

**Average Cycle Time:** [X] days (from branch creation to merge)

**Cycle Time Breakdown:**
```
Branch Creation → First Commit:  [X] hours ([Y]%)
First Commit → PR Created:       [X] hours ([Y]%)
PR Created → First Review:       [X] hours ([Y]%)
First Review → Approval:         [X] hours ([Y]%)
Approval → Merge:                [X] hours ([Y]%)
Total Cycle Time:                [X] days
```

**Cycle Time by PR Size:**
| PR Size | Average Cycle Time | Bottleneck Stage |
|---------|-------------------|------------------|
| Small | [X] days | [Stage] |
| Medium | [X] days | [Stage] |
| Large | [X] days | [Stage] |
| Very Large | [X] days | [Stage] |

---

### Work in Progress (WIP)

**Current WIP:** [X] active PRs, [Y] active branches

**WIP Over Time:**
| Week | Open PRs | Open Issues | WIP Limit Exceeded? |
|------|----------|-------------|---------------------|
| Week 1 | [X] | [X] | [Yes/No] |
| Week 2 | [X] | [X] | [Yes/No] |
| Week 3 | [X] | [X] | [Yes/No] |
| Week 4 | [X] | [X] | [Yes/No] |
| Week 5 | [X] | [X] | [Yes/No] |
| Week 6 | [X] | [X] | [Yes/No] |
| Week 7 | [X] | [X] | [Yes/No] |
| Week 8 | [X] | [X] | [Yes/No] |

**Recommended WIP Limit:** [X] PRs per developer (2-3 typically optimal)

**Analysis:**
- [Is WIP too high? Contributing to context switching?]
- [Are PRs sitting idle? Review bottleneck?]

---

## Per-Developer Velocity

### Developer: [NAME_1]

**Personal Velocity Score:** [X.X] / 5.0

| Metric | Value | Team Avg | Rank |
|--------|-------|----------|------|
| Commits/Week | [X] | [Y] | [Z]/[N] |
| PRs Merged/Week | [X] | [Y] | [Z]/[N] |
| Avg Lead Time | [X] days | [Y] days | [Z]/[N] |
| Avg Cycle Time | [X] days | [Y] days | [Z]/[N] |
| Current WIP | [X] PRs | [Y] PRs | [Z]/[N] |

**Velocity Trend:** [Improving/Stable/Declining]

**Bottlenecks:**
- [Any personal bottlenecks affecting this developer]

**Strengths:**
- [What this developer does well from velocity perspective]

**Recommendations:**
- [Specific recommendations to improve velocity]

---

### Developer: [NAME_2]

[REPEAT STRUCTURE FOR EACH DEVELOPER]

---

## Bottleneck Analysis

### System Bottlenecks

#### 1. [Bottleneck Name]
**Description:** [What's causing the slowdown]

**Impact:**
- Adds [X] hours/days to lead time
- Affects [Y]% of PRs
- Costs team [Z] hours per week

**Evidence:**
- [Specific metrics or examples]

**Root Cause:** [Why this bottleneck exists]

**Recommendations:**
- [ ] [Action to address]
- [ ] [Action to address]

**Owner:** [Who should fix this]
**Priority:** [High/Medium/Low]

---

#### 2. [Bottleneck Name]
[REPEAT STRUCTURE]

---

### Process Bottlenecks

#### 1. Code Review Delays
**Wait Time:** [X] hours average before first review

**Impact:** [Description]

**Recommendations:**
- [ ] Implement review SLA ([X] hours)
- [ ] Round-robin review assignments
- [ ] Increase reviewer pool

---

#### 2. [Other Process Bottleneck]
[SIMILAR STRUCTURE]

---

## Velocity Trends and Analysis

### 8-Week Trend Analysis

**Velocity Trend:** [Improving/Stable/Declining]

```
Commits per Week Trend:
Week 1: [X] ████████░░
Week 2: [X] ██████████
Week 3: [X] ████████░░
Week 4: [X] ██████░░░░
Week 5: [X] ████████░░
Week 6: [X] ██████████
Week 7: [X] ███████████
Week 8: [X] ████████░░

Trend: [Increasing/Stable/Decreasing by X%]
```

**Contributing Factors:**
- [Factor contributing to trend]
- [Factor contributing to trend]

**Predictive Analysis:**
- At current rate, team will complete [X] story points per sprint
- Projected completion date for [milestone]: [DATE]

---

### Sprint Velocity (If using sprints)

| Sprint | Story Points Committed | Completed | Velocity | Carry Over |
|--------|------------------------|-----------|----------|------------|
| Sprint N-3 | [X] | [X] | [X]% | [X] |
| Sprint N-2 | [X] | [X] | [X]% | [X] |
| Sprint N-1 | [X] | [X] | [X]% | [X] |
| Sprint N | [X] | [X] | [X]% | [X] |

**Average Velocity:** [X] story points per sprint
**Velocity Stability:** [Stable/Volatile]

---

## Comparative Benchmarks

### Industry Benchmarks (DORA State of DevOps)

| Metric | Elite | High | Medium | Low | **Our Team** |
|--------|-------|------|--------|-----|--------------|
| Deployment Frequency | Multiple/day | Weekly | Monthly | Yearly | **[VALUE]** |
| Lead Time | <1 day | <1 week | <1 month | >1 month | **[VALUE]** |
| MTTR | <1 hour | <1 day | <1 week | >1 week | **[VALUE]** |
| Change Failure Rate | 0-15% | 16-30% | 31-45% | 46-60% | **[VALUE]%** |

**Overall DORA Level:** [Elite/High/Medium/Low]

---

### Similar Team Comparisons (If available)

| Team | Size | Commits/Week | PRs/Week | Lead Time | Deployment Freq |
|------|------|--------------|----------|-----------|-----------------|
| **Our Team** | [X] | [X] | [X] | [X] days | [X]/week |
| Team A | [X] | [X] | [X] | [X] days | [X]/week |
| Team B | [X] | [X] | [X] | [X] days | [X]/week |

**Insights:** [How our team compares]

---

## Coaching Recommendations

### Team-Level Improvements

#### 1. Reduce Lead Time
**Current:** [X] days
**Target:** [Y] days ([Z]% reduction)

**Actions:**
- [ ] Reduce PR review time to <[X] hours
- [ ] Automate deployment pipeline
- [ ] Implement feature flags to decouple deploy from release
- [ ] Break down large PRs (<[X] lines)
- [ ] Increase test automation to speed up validation

**Timeline:** [X] weeks
**Owner:** [Tech Lead]

---

#### 2. Increase Deployment Frequency
**Current:** [X] per week
**Target:** [Y] per week

**Actions:**
- [ ] Implement continuous deployment
- [ ] Reduce deployment risk with canary releases
- [ ] Improve monitoring and rollback capabilities
- [ ] Break down features into smaller increments
- [ ] Increase test coverage to [X]%

**Timeline:** [X] weeks
**Owner:** [DevOps Lead]

---

#### 3. Reduce WIP
**Current:** [X] open PRs per developer
**Target:** ≤[Y] open PRs per developer

**Actions:**
- [ ] Set WIP limits per developer
- [ ] Finish current work before starting new work
- [ ] Reduce context switching
- [ ] Implement "stop starting, start finishing" culture
- [ ] Daily standup focus on blockers

**Timeline:** [X] weeks
**Owner:** [Scrum Master/Team Lead]

---

### Individual Coaching

#### High Velocity Developers
**Developers:** [Names]

**Ensure:**
- [ ] Quality isn't sacrificed for speed
- [ ] Not burning out
- [ ] Sharing practices with team

---

#### Low Velocity Developers
**Developers:** [Names]

**Investigate:**
- [ ] Are they blocked?
- [ ] Do they need skill development?
- [ ] Are they over-committed?
- [ ] Do they need clearer requirements?

**Actions:**
- [ ] 1-on-1 to understand blockers
- [ ] Pair with high-velocity developer
- [ ] Provide training on bottleneck areas
- [ ] Clarify expectations and priorities

---

## Velocity Improvement Opportunities

### Quick Wins (0-30 days)
1. **[Improvement]**
   - Impact: [X]% reduction in lead time
   - Effort: [Low/Medium/High]
   - Action: [Specific action]

2. **[Improvement]**
   - [Similar structure]

### Medium-Term (30-90 days)
1. **[Improvement]**
   - Impact: [Description]
   - Effort: [Low/Medium/High]
   - Action: [Specific action]

### Long-Term (90+ days)
1. **[Improvement]**
   - Impact: [Description]
   - Effort: [Low/Medium/High]
   - Action: [Specific action]

---

## Follow-Up Plan

### Weekly Tracking
- [ ] Monitor DORA metrics dashboard
- [ ] Track WIP limits
- [ ] Review bottlenecks in standup

### 30-Day Check-In ([DATE])
- [ ] Review velocity trends
- [ ] Measure lead time reduction
- [ ] Check deployment frequency
- [ ] Assess bottleneck progress

### 60-Day Check-In ([DATE])
- [ ] Compare to baseline metrics
- [ ] Evaluate improvement initiatives
- [ ] Adjust targets as needed

### 90-Day Re-Assessment ([DATE])
- [ ] Complete full velocity assessment
- [ ] Benchmark against industry standards
- [ ] Celebrate improvements
- [ ] Set new velocity goals

---

## Notes and Observations

[Any additional context, observations, or notes from the assessment]

---

## Approval and Sign-Off

**Assessor:** [NAME] _________________________ Date: ___________

**Reviewed By:** [ENGINEERING MANAGER] _________________________ Date: ___________

**Shared With Team:** [ ] Yes [ ] No    Date: ___________

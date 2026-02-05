# Developer Contributions Assessment

## Assessment Period
**From:** [START_DATE]  
**To:** [END_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [YOUR_NAME]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Purpose:** Assess individual developer performance, contributions, and impact

**Key Findings:**
- [Summary of top performers]
- [Summary of contribution patterns]
- [Notable achievements]

---

## Assessment Methodology

### Data Collection
```bash
# Contribution statistics per developer
git shortlog -sn --since="2 months ago" --all

# Detailed stats with additions/deletions
git log --since="2 months ago" --all --numstat --pretty=format:"COMMIT %H %an %ad" --date=short | awk '/^COMMIT/ {author=$3; next} {add+=$1; del+=$2} END {print author, "Additions:", add, "Deletions:", del}'

# PR statistics (GitHub)
gh pr list --state merged --limit 500 --json author,additions,deletions,mergedAt,reviews

# Code review participation
gh pr list --state merged --limit 500 --json reviews,author

# Issues closed
gh issue list --state closed --since "2 months ago" --json author,closedAt,labels
```

### Evaluation Dimensions
1. **Code Quality** - Quality of work produced (not just quantity)
2. **Impact** - Business and technical impact of contributions
3. **Collaboration** - Code review participation, helping others
4. **Breadth** - Range of work (features, bugs, refactoring, tests)
5. **Technical Growth** - Learning new technologies, improving skills
6. **Mentorship** - Teaching and guiding other developers

---

## Quality Control Checklist

### Per-Developer Analysis
- [ ] Collected commit statistics (commits, lines changed)
- [ ] Reviewed PR history (merged, reviewed, commented)
- [ ] Assessed code quality through random sampling
- [ ] Checked issue/ticket completion
- [ ] Reviewed code review participation
- [ ] Identified mentoring activities
- [ ] Noted technical leadership contributions
- [ ] Documented specific examples with evidence

---

## Scoring Rubric

### Overall Developer Performance (1-5 Scale)

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Outstanding impact; technical leader; mentors others; consistently excellent work |
| 4 | Strong | High-quality contributions; reliable; helps team succeed; exceeds expectations |
| 3 | Proficient | Solid contributor; meets expectations; delivers quality work consistently |
| 2 | Developing | Inconsistent quality; needs guidance; below expectations in key areas |
| 1 | Needs Attention | Minimal contribution; quality issues; requires immediate coaching |

### Individual Dimension Rubrics

#### Code Quality (1-5)
- **5**: Code is exemplary; others learn from their work; sets standards
- **4**: Consistently high-quality; few bugs; good design decisions
- **3**: Generally good quality; occasional issues; meets standards
- **2**: Frequent quality issues; bugs; needs significant review feedback
- **1**: Poor quality; creates technical debt; introduces bugs

#### Impact (1-5)
- **5**: Delivers critical features; solves hard problems; transforms systems
- **4**: Significant contributions; solves important problems; high value
- **3**: Good contributions; solid problem solving; moderate value
- **2**: Limited impact; focuses on minor issues; low value
- **1**: Minimal impact; work often blocked or doesn't ship

#### Collaboration (1-5)
- **5**: Exceptional reviewer; helps everyone; builds team capability
- **4**: Active reviewer; helpful; improves team work
- **3**: Participates in reviews; responsive; team player
- **2**: Minimal review participation; slow to respond
- **1**: Doesn't participate in reviews; works in isolation

#### Breadth (1-5)
- **5**: Full-stack contributions; handles any work type; versatile
- **4**: Works across multiple areas; comfortable with variety
- **3**: Focused on primary area; some cross-functional work
- **2**: Narrow focus; uncomfortable outside core area
- **1**: Only works on specific tasks; resists variety

---

## Team-Wide Contribution Metrics

### Overall Team Statistics
| Metric | Value |
|--------|-------|
| Total Commits | [X] |
| Total PRs Merged | [X] |
| Total Lines Added | [X] |
| Total Lines Deleted | [X] |
| Net Lines Changed | [X] |
| Issues Closed | [X] |
| Active Contributors | [X] |

### Contribution Distribution
| Developer | Commits | PRs Merged | Lines +/- | Issues Closed | Reviews Given |
|-----------|---------|------------|-----------|---------------|---------------|
| [NAME_1] | [X] | [X] | +[X] -[X] | [X] | [X] |
| [NAME_2] | [X] | [X] | +[X] -[X] | [X] | [X] |
| [NAME_3] | [X] | [X] | +[X] -[X] | [X] | [X] |
| **Total** | [X] | [X] | +[X] -[X] | [X] | [X] |

---

## Per-Developer Assessment

### Developer: [NAME_1]

**Overall Performance Score:** [X.X] / 5.0  
**Role:** [Senior Engineer / Engineer / Junior Engineer]  
**Team Tenure:** [X] months/years

#### Dimensional Scores
| Dimension | Score | Evidence |
|-----------|-------|----------|
| Code Quality | [X] / 5 | [Sample PRs, bug rate] |
| Impact | [X] / 5 | [Features shipped, problems solved] |
| Collaboration | [X] / 5 | [Reviews given, pair programming] |
| Breadth | [X] / 5 | [Areas worked in] |
| Technical Growth | [X] / 5 | [New skills learned] |
| Mentorship | [X] / 5 | [Teaching activities] |

#### Contribution Statistics
- **Commits:** [X] ([X]% of team total)
- **PRs Merged:** [X] ([X]% of team total)
- **Lines Added:** [X]
- **Lines Deleted:** [X]
- **Net Contribution:** [X] lines
- **Issues Closed:** [X]
- **Code Reviews Given:** [X]
- **Average PR Size:** [X] lines
- **Bug Fixes vs Features:** [X] bugs / [X] features

#### Quality Indicators
- **Bug Introduction Rate:** [X] bugs introduced / [Y] PRs merged = [Z]%
- **Code Review Feedback:** [High/Medium/Low] amount of feedback received
- **PR Rejection Rate:** [X]% of PRs required significant rework
- **Test Coverage Contribution:** [Increased/Maintained/Decreased] coverage by [X]%

#### Notable Contributions

**Top 3 High-Impact Contributions:**
1. **[Feature/Fix Name]** (PR #[X], Commit: [SHA])
   - Description: [What was built/fixed]
   - Impact: [Business/technical impact]
   - Complexity: [High/Medium/Low]
   - Why Notable: [What made this exceptional]

2. **[Feature/Fix Name]** (PR #[X], Commit: [SHA])
   - Description: [What was built/fixed]
   - Impact: [Business/technical impact]
   - Complexity: [High/Medium/Low]
   - Why Notable: [What made this exceptional]

3. **[Feature/Fix Name]** (PR #[X], Commit: [SHA])
   - Description: [What was built/fixed]
   - Impact: [Business/technical impact]
   - Complexity: [High/Medium/Low]
   - Why Notable: [What made this exceptional]

#### Code Review Sample Analysis

**Sample PR: [PR #X] - [TITLE]**
```
Changes: +[X] -[Y]
Complexity: [High/Medium/Low]
Code Quality: [Excellent/Good/Fair/Poor]

Strengths:
- [Specific strength]
- [Specific strength]

Concerns:
- [Any concerns]

Review Comments Received: [X]
Iterations Required: [X]
```

**Sample PR: [PR #Y] - [TITLE]**
```
[REPEAT STRUCTURE]
```

#### Work Distribution

**Feature Development:** [X]% ([X] PRs)
- Major features: [List top 2-3]

**Bug Fixes:** [X]% ([X] PRs)
- Critical bugs: [X]
- Minor bugs: [X]

**Refactoring/Tech Debt:** [X]% ([X] PRs)
- Notable refactoring: [Examples]

**Testing:** [X]% ([X] PRs)
- Test files added/improved

**Documentation:** [X]% ([X] PRs)
- Docs contributed

#### Collaboration and Mentoring

**Code Reviews Given:** [X] reviews
- Quality: [Thoughtful/Adequate/Minimal]
- Feedback Examples:
  - [Example of helpful review comment]
  - [Example of helpful review comment]

**Pair Programming:**
- Sessions observed: [X]
- With: [Names]

**Knowledge Sharing:**
- Tech talks/demos: [X]
- Documentation contributions: [X]
- Helped onboard: [Names]

#### Technical Growth

**New Technologies/Skills Learned:**
- [Technology/Skill] - Evidence: [PR/commit]
- [Technology/Skill] - Evidence: [PR/commit]

**Certifications/Training:**
- [Any training completed]

**Areas of Expanding Expertise:**
- [Area] - Example: [Specific work]

#### Strengths
1. **[Strength]**
   - Evidence: [Specific examples with PRs/commits]
   - Impact: [How this benefits the team]

2. **[Strength]**
   - Evidence: [Specific examples with PRs/commits]
   - Impact: [How this benefits the team]

3. **[Strength]**
   - Evidence: [Specific examples with PRs/commits]
   - Impact: [How this benefits the team]

#### Areas for Growth
1. **[Growth Area]**
   - Current State: [What's happening now]
   - Target State: [What good looks like]
   - Evidence: [Specific examples]

2. **[Growth Area]**
   - Current State: [What's happening now]
   - Target State: [What good looks like]
   - Evidence: [Specific examples]

#### Coaching Recommendations
1. **[Recommendation]**
   - Action: [Specific action to take]
   - Resources: [Training, pairing, reading]
   - Timeline: [When to achieve this]
   - Success Metric: [How to measure]

2. **[Recommendation]**
   - Action: [Specific action to take]
   - Resources: [Training, pairing, reading]
   - Timeline: [When to achieve this]
   - Success Metric: [How to measure]

---

### Developer: [NAME_2]

[REPEAT ENTIRE STRUCTURE FROM ABOVE]

---

### [REPEAT FOR EACH DEVELOPER]

---

## Comparative Analysis

### Performance Distribution
```
5.0 - Exceptional    : ⬜⬜ (X developers)
4.0 - Strong         : ⬜⬜⬜⬜ (X developers)
3.0 - Proficient     : ⬜⬜⬜ (X developers)
2.0 - Developing     : ⬜ (X developer)
1.0 - Needs Attention: (X developers)
```

### Top Performers

#### 1. [Developer Name] - [Score] / 5.0
**Why Top Performer:**
- [Specific achievements]
- [Impact on team/product]
- [Leadership qualities]

**Can Mentor Others On:**
- [Skill/Practice]
- [Skill/Practice]

**Recognition:**
- [ ] Nominate for promotion
- [ ] Assign as technical lead for [project]
- [ ] Have mentor [junior developer]
- [ ] Public recognition in team meeting

---

#### 2. [Developer Name] - [Score] / 5.0
[REPEAT STRUCTURE]

---

#### 3. [Developer Name] - [Score] / 5.0
[REPEAT STRUCTURE]

---

### Most Improved

#### [Developer Name]
**Improvement Areas:**
- [What improved]
- [What improved]

**Evidence:**
- Before: [State 2+ months ago]
- After: [Current state]

**What Worked:**
- [Coaching approach that helped]

---

### Rising Stars (High Potential)

#### [Developer Name]
**Why High Potential:**
- [Growth trajectory]
- [Learning speed]
- [Impact potential]

**Investment Opportunities:**
- [Training/conference]
- [Stretch project]
- [Mentorship relationship]

---

## Team Contribution Patterns

### Feature Development Leaders
| Developer | Features Shipped | Complexity | Impact |
|-----------|------------------|------------|--------|
| [NAME] | [X] | [High/Med/Low] | [Description] |

### Bug Squashing Champions
| Developer | Bugs Fixed | Critical | P1 | P2 |
|-----------|-----------|----------|-----|-----|
| [NAME] | [X] | [X] | [X] | [X] |

### Refactoring and Tech Debt Leaders
| Developer | Refactoring PRs | Lines Removed | Impact |
|-----------|-----------------|---------------|--------|
| [NAME] | [X] | [X] | [Description] |

### Code Review Champions
| Developer | Reviews Given | Quality | Response Time |
|-----------|---------------|---------|---------------|
| [NAME] | [X] | [High/Med/Low] | [Hours] |

### Documentation Contributors
| Developer | Docs Commits | Impact |
|-----------|--------------|--------|
| [NAME] | [X] | [What docs they improved] |

---

## Contribution Quality vs Quantity Analysis

### High Quality, High Quantity
**Developers:** [Names]
- These are your star performers
- Consistently deliver excellent work at scale
- Should be recognized and retained

### High Quality, Lower Quantity
**Developers:** [Names]
- Focus on complex, high-value work
- May be mentoring others (reduces their output)
- Ensure they're not blocked or over-mentoring

### High Quantity, Quality Issues
**Developers:** [Names]
- Moving fast but introducing bugs
- May need to slow down and focus on quality
- Coaching opportunity: "Measure twice, cut once"

### Lower Quantity, Lower Quality
**Developers:** [Names]
- Requires immediate attention
- May be struggling with tech stack or domain
- Needs coaching, pairing, or role adjustment

---

## Coaching Recommendations

### Team-Wide Initiatives

#### 1. Establish Contribution Excellence
**Goal:** Recognize and reward quality contributions

**Action Items:**
- [ ] Create "Contribution of the Month" recognition
- [ ] Share exceptional PRs in team meetings
- [ ] Document what makes a great contribution
- [ ] Celebrate both feature work and "invisible" work (refactoring, docs, tests)

**Timeline:** [X] weeks

---

#### 2. Balance Workload Distribution
**Current State:** [Description of workload imbalance if any]

**Action Items:**
- [ ] Identify over-utilized developers (burnout risk)
- [ ] Identify under-utilized developers (growth opportunity)
- [ ] Redistribute work to balance load
- [ ] Pair over-utilized with under-utilized for knowledge transfer

**Timeline:** [X] weeks

---

#### 3. Improve Code Review Culture
**Goal:** Increase review participation and quality

**Action Items:**
- [ ] Set expectation: [X] reviews per week per developer
- [ ] Recognize top reviewers
- [ ] Provide code review training
- [ ] Track review metrics and share with team

**Timeline:** [X] weeks

---

### Individual Development Plans

#### [Developer Name] - High Performer
**Goal:** Maximize impact and prevent burnout

**Actions:**
- [ ] Ensure challenging work aligned with career goals
- [ ] Create mentorship opportunities
- [ ] Consider for technical lead role on [project]
- [ ] Discuss career path and growth opportunities
- [ ] Protect from overload

---

#### [Developer Name] - Needs Development
**Goal:** Improve code quality and impact

**Actions:**
- [ ] Pair with [top performer] for [X] weeks
- [ ] Assign smaller, well-defined tasks initially
- [ ] Provide more frequent code review feedback
- [ ] Weekly 1-on-1 to discuss progress
- [ ] Identify skill gaps and provide training

---

## Follow-Up Plan

### 30-Day Check-In ([DATE])
- [ ] Review individual progress on coaching plans
- [ ] Check team contribution metrics
- [ ] Adjust coaching as needed
- [ ] Celebrate improvements

### 60-Day Check-In ([DATE])
- [ ] Measure improvement in contribution quality
- [ ] Review code review participation
- [ ] Identify persistent issues
- [ ] Update development plans

### 90-Day Re-Assessment ([DATE])
- [ ] Complete full contribution assessment
- [ ] Compare scores to baseline
- [ ] Recognize top performers
- [ ] Adjust team structure if needed

---

## Notes and Observations

[Any additional context, observations, or notes from the assessment]

---

## Approval and Sign-Off

**Assessor:** [NAME] _________________________ Date: ___________

**Reviewed By:** [ENGINEERING MANAGER] _________________________ Date: ___________

**Shared With Team:** [ ] Yes [ ] No    Date: ___________

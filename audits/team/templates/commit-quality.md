# Commit Quality Assessment

## Assessment Period
**From:** [START_DATE]  
**To:** [END_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [YOUR_NAME]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Overall Commit Quality Score:** [X.X] / 5.0

**Key Findings:**
- [Brief summary of commit quality across the team]
- [Notable strengths]
- [Primary areas for improvement]

---

## Assessment Methodology

### Data Collection
```bash
# Extract commit history for last 2 months
git log --since="2 months ago" --all --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso > commits.csv

# Get commit details with stats
git log --since="2 months ago" --all --numstat --pretty=format:"COMMIT|%H|%an|%ae|%ad|%s" --date=iso > commits-detailed.txt

# Count commits per author
git shortlog -sn --since="2 months ago" --all
```

### Evaluation Criteria
1. **Message Clarity** - Is the commit message clear and descriptive?
2. **Conventional Commits** - Does it follow conventional commit format?
3. **Granularity** - Is the commit appropriately sized?
4. **Issue References** - Does it reference relevant issues/tickets?
5. **Technical Accuracy** - Does the message accurately describe changes?

---

## Quality Control Checklist

### Sample Analysis (Minimum 20 commits per developer)

For each developer, randomly sample at least 20 commits from the last 2 months:

- [ ] Extracted full commit history
- [ ] Identified all active contributors
- [ ] Sampled representative commits per developer
- [ ] Reviewed commit diffs to verify message accuracy
- [ ] Checked for conventional commit adherence
- [ ] Assessed commit granularity (files changed, lines changed)
- [ ] Verified issue/ticket references where applicable
- [ ] Documented evidence (commit SHAs)

---

## Scoring Rubric

### Overall Commit Quality (1-5 Scale)

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Clear, descriptive, follows conventions, perfect granularity, always references issues |
| 4 | Strong | Clear messages, mostly follows conventions, good granularity, usually references issues |
| 3 | Proficient | Understandable messages, some convention adherence, acceptable granularity |
| 2 | Developing | Vague messages, inconsistent conventions, poor granularity (too big/small) |
| 1 | Needs Attention | Cryptic messages, no conventions, massive or trivial commits, no issue references |

### Individual Criteria Rubrics

#### Message Clarity (1-5)
- **5**: Every message is self-explanatory; no need to review diff to understand changes
- **4**: Most messages are clear; occasional ambiguity
- **3**: Messages provide basic information but lack detail
- **2**: Messages are often vague or too brief to be useful
- **1**: Messages are cryptic, generic ("fix", "update"), or misleading

#### Conventional Commit Adherence (1-5)
- **5**: 100% adherence to conventional commits (type(scope): description)
- **4**: 80-99% adherence
- **3**: 50-79% adherence
- **2**: 20-49% adherence
- **1**: <20% adherence or no consistent format

#### Commit Granularity (1-5)
- **5**: Every commit is atomic; changes one thing; easy to review and revert
- **4**: Most commits are well-sized; occasional bundling of related changes
- **3**: Mix of appropriately sized and oversized commits
- **2**: Frequently too large (500+ lines) or too small (trivial changes)
- **1**: Consistently massive commits (1000+ lines) or excessive tiny commits

#### Issue/Ticket References (1-5)
- **5**: Every commit references relevant issue/ticket; clear traceability
- **4**: 80%+ of commits reference issues
- **3**: 50-79% of commits reference issues
- **2**: 20-49% of commits reference issues
- **1**: Rarely or never references issues

---

## Team-Wide Metrics

### Commit Volume Analysis
| Metric | Value |
|--------|-------|
| Total Commits (2 months) | [NUMBER] |
| Average Commits/Week | [NUMBER] |
| Average Commits/Developer | [NUMBER] |
| Median Commit Size (lines) | [NUMBER] |
| Largest Commit (lines) | [NUMBER] ([COMMIT_SHA]) |

### Conventional Commit Adoption
| Type | Count | Percentage |
|------|-------|------------|
| feat: | [X] | [%] |
| fix: | [X] | [%] |
| docs: | [X] | [%] |
| refactor: | [X] | [%] |
| test: | [X] | [%] |
| chore: | [X] | [%] |
| Non-conventional | [X] | [%] |

### Common Issues Identified
- [ ] Generic messages ("update", "fix", "WIP")
- [ ] Merge commit noise
- [ ] Missing issue references
- [ ] Commits too large (bundle multiple features)
- [ ] Commits too granular (excessive commits for minor changes)
- [ ] Typos in commit messages
- [ ] Inconsistent formatting

---

## Per-Developer Assessment

### Developer: [NAME_1]

**Overall Score:** [X.X] / 5.0

| Criterion | Score | Evidence |
|-----------|-------|----------|
| Message Clarity | [X] / 5 | [Sample commits] |
| Conventional Commits | [X] / 5 | [% adherence] |
| Commit Granularity | [X] / 5 | [Avg size, examples] |
| Issue References | [X] / 5 | [% with refs] |

**Sample Commits Analyzed:**
```
✅ GOOD: abc1234 - feat(auth): add JWT token refresh mechanism (#123)
  - Clear type (feat)
  - Specific scope (auth)
  - Descriptive message
  - References issue

⚠️ NEEDS IMPROVEMENT: def5678 - fixed bug
  - Vague message
  - No type/scope
  - No issue reference
  - Doesn't describe what bug was fixed

✅ GOOD: ghi9012 - refactor(api): extract user validation to middleware (#145)
  - Clear type (refactor)
  - Specific scope (api)
  - Describes architectural change
  - References issue
```

**Commit Statistics:**
- Total Commits: [NUMBER]
- Average Commit Size: [NUMBER] lines
- Conventional Commits: [NUMBER] / [TOTAL] ([PERCENTAGE]%)
- With Issue References: [NUMBER] / [TOTAL] ([PERCENTAGE]%)

**Strengths:**
- [Specific strength with examples]
- [Specific strength with examples]

**Areas for Improvement:**
- [Specific area with examples]
- [Specific area with examples]

**Coaching Recommendations:**
- [Specific actionable recommendation]
- [Specific actionable recommendation]

---

### Developer: [NAME_2]

**Overall Score:** [X.X] / 5.0

| Criterion | Score | Evidence |
|-----------|-------|----------|
| Message Clarity | [X] / 5 | [Sample commits] |
| Conventional Commits | [X] / 5 | [% adherence] |
| Commit Granularity | [X] / 5 | [Avg size, examples] |
| Issue References | [X] / 5 | [% with refs] |

**Sample Commits Analyzed:**
```
[COPY STRUCTURE FROM ABOVE]
```

**Commit Statistics:**
- Total Commits: [NUMBER]
- Average Commit Size: [NUMBER] lines
- Conventional Commits: [NUMBER] / [TOTAL] ([PERCENTAGE]%)
- With Issue References: [NUMBER] / [TOTAL] ([PERCENTAGE]%)

**Strengths:**
- [Specific strength with examples]

**Areas for Improvement:**
- [Specific area with examples]

**Coaching Recommendations:**
- [Specific actionable recommendation]

---

### [REPEAT FOR EACH DEVELOPER]

---

## Team-Wide Patterns

### Positive Patterns Observed
1. **[Pattern Name]**
   - Description: [What's working well]
   - Evidence: [Commit examples]
   - Developers: [Who's doing this well]

2. **[Pattern Name]**
   - Description: [What's working well]
   - Evidence: [Commit examples]
   - Developers: [Who's doing this well]

### Anti-Patterns Observed
1. **[Anti-Pattern Name]**
   - Description: [What's not working]
   - Evidence: [Commit examples]
   - Impact: [Why this matters]
   - Prevalence: [How common - X% of commits]

2. **[Anti-Pattern Name]**
   - Description: [What's not working]
   - Evidence: [Commit examples]
   - Impact: [Why this matters]
   - Prevalence: [How common - X% of commits]

---

## Comparative Analysis

### Team Score Distribution
```
5.0 - Exceptional    : ⬜⬜⬜ (X developers)
4.0 - Strong         : ⬜⬜⬜⬜⬜ (X developers)
3.0 - Proficient     : ⬜⬜ (X developers)
2.0 - Developing     : ⬜ (X developer)
1.0 - Needs Attention: (X developers)
```

### Top Performers (Commit Quality)
1. **[Developer Name]** - [Score] / 5.0
   - Strength: [What they do exceptionally well]
   - Can mentor others on: [Specific practices]

2. **[Developer Name]** - [Score] / 5.0
   - Strength: [What they do exceptionally well]
   - Can mentor others on: [Specific practices]

3. **[Developer Name]** - [Score] / 5.0
   - Strength: [What they do exceptionally well]
   - Can mentor others on: [Specific practices]

---

## Coaching Recommendations

### Team-Wide Improvements

#### 1. Establish Commit Message Standards
**Current State:** [Description of current state]

**Target State:** [What good looks like]

**Action Items:**
- [ ] Create commit message style guide
- [ ] Add commit message template to `.gitmessage`
- [ ] Set up pre-commit hook to validate format
- [ ] Conduct team workshop on effective commit messages
- [ ] Share examples of excellent commits in team chat

**Timeline:** [X] weeks

**Owner:** [Engineering Lead]

#### 2. Improve Conventional Commit Adoption
**Current State:** [X]% of commits follow conventional format

**Target State:** 90%+ adherence

**Action Items:**
- [ ] Install commitlint for automated validation
- [ ] Document approved commit types and scopes
- [ ] Add PR checks to enforce commit format
- [ ] Provide feedback during code reviews
- [ ] Recognize and celebrate improvements

**Timeline:** [X] weeks

**Owner:** [Tech Lead]

#### 3. Address Commit Granularity Issues
**Current State:** [Description of issues - too large, too small, inconsistent]

**Target State:** [What appropriate granularity looks like]

**Action Items:**
- [ ] Define guidelines for commit size (target: 50-200 lines)
- [ ] Teach atomic commit practices in team meeting
- [ ] Provide examples of well-scoped commits
- [ ] Review commit history during PR reviews
- [ ] Use interactive rebase to teach commit splitting

**Timeline:** [X] weeks

**Owner:** [Senior Engineers]

### Individual Coaching Plans

#### Developer: [NAME] (Score: [X.X]/5.0)
**Priority Level:** [High/Medium/Low]

**Strengths to Leverage:**
- [Specific strength]

**Focus Areas:**
1. **[Improvement Area]**
   - Current: [Current behavior]
   - Target: [Desired behavior]
   - Resources: [Links to guides, examples]
   - Check-in: [Date]

2. **[Improvement Area]**
   - Current: [Current behavior]
   - Target: [Desired behavior]
   - Resources: [Links to guides, examples]
   - Check-in: [Date]

**Pair Programming Opportunities:**
- Pair with [Top Performer] to learn commit practices
- Observe [Top Performer]'s workflow during commit creation

---

## Evidence Repository

### Excellent Commit Examples (To Share as Models)
1. **[COMMIT_SHA]** by [Developer]
   ```
   feat(api): add rate limiting middleware (#234)
   
   Implements token bucket rate limiting to protect API endpoints
   from abuse. Configurable via environment variables.
   
   - Add express-rate-limit dependency
   - Create rateLimiter middleware with Redis store
   - Apply to public API routes
   - Add rate limit headers to responses
   
   Fixes #234
   ```
   **Why Excellent:** Clear type/scope, detailed description, bulleted changes, issue reference

2. **[COMMIT_SHA]** by [Developer]
   ```
   [Another excellent example]
   ```
   **Why Excellent:** [Explanation]

### Poor Commit Examples (Learning Opportunities)
1. **[COMMIT_SHA]** by [Anonymous]
   ```
   fix stuff
   ```
   **Issues:** Vague, no type/scope, doesn't explain what was fixed

2. **[COMMIT_SHA]** by [Anonymous]
   ```
   [Another poor example]
   ```
   **Issues:** [Explanation]

---

## Resources and Training Materials

### Recommended Reading
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [How to Write a Git Commit Message](https://chris.beams.io/posts/git-commit/)
- [The Art of the Commit](https://alistapart.com/article/the-art-of-the-commit/)

### Internal Resources
- Team commit message style guide: [LINK]
- `.gitmessage` template: [LINK]
- Pre-commit hook setup: [LINK]

### Tools
- **commitlint**: Lint commit messages
- **commitizen**: Interactive commit message wizard
- **git commit --verbose**: Show diff while writing message

---

## Follow-Up Plan

### 30-Day Check-In ([DATE])
- [ ] Review commit quality metrics
- [ ] Check conventional commit adoption rate
- [ ] Gather feedback on new guidelines
- [ ] Adjust coaching as needed

### 60-Day Check-In ([DATE])
- [ ] Measure improvement in commit quality scores
- [ ] Identify persistent issues
- [ ] Celebrate improvements and recognize top performers
- [ ] Update guidelines based on learnings

### 90-Day Re-Assessment ([DATE])
- [ ] Complete full commit quality assessment
- [ ] Compare scores to baseline
- [ ] Document improvements and remaining gaps
- [ ] Plan next iteration of coaching

---

## Notes and Observations

[Any additional context, observations, or notes from the assessment]

---

## Approval and Sign-Off

**Assessor:** [NAME] _________________________ Date: ___________

**Reviewed By:** [ENGINEERING MANAGER] _________________________ Date: ___________

**Shared With Team:** [ ] Yes [ ] No    Date: ___________

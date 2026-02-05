# Team Collaboration Assessment

## Assessment Period
**From:** [START_DATE]  
**To:** [END_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [YOUR_NAME]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Overall Collaboration Score:** [X.X] / 5.0

**Key Findings:**
- [Summary of collaboration patterns]
- [Collaboration strengths]
- [Collaboration gaps]

---

## Assessment Methodology

### Data Collection
```bash
# Code review participation
gh pr list --state merged --limit 500 --json number,author,reviews,comments

# PR comment activity
gh pr list --state all --limit 500 --json comments,reviews,author

# Identify co-authored commits (pair programming)
git log --since="2 months ago" --all --format="%H %an %ae" | grep -i "co-authored-by"

# Cross-functional contributions (different modules/teams)
git log --since="2 months ago" --all --name-only --format="COMMIT %H %an"
```

### Collaboration Dimensions Assessed
1. **Code Review Quality** - How thorough and helpful are code reviews?
2. **Review Participation** - Does everyone participate in reviews?
3. **Knowledge Sharing** - Are developers sharing knowledge effectively?
4. **Pair Programming** - Evidence of collaborative coding
5. **Cross-Functional Work** - Working across team boundaries
6. **Communication Quality** - PR/commit discussion quality

---

## Quality Control Checklist

### Team-Wide Analysis
- [ ] Extracted all PR review data
- [ ] Analyzed review participation rates
- [ ] Assessed code review comment quality
- [ ] Identified knowledge sharing activities
- [ ] Found evidence of pair programming
- [ ] Mapped cross-functional contributions
- [ ] Reviewed communication in PRs and commits

### Per-Developer Analysis
- [ ] Calculated reviews given per developer
- [ ] Assessed review comment quality
- [ ] Identified review response time
- [ ] Noted knowledge sharing contributions
- [ ] Found pairing partners
- [ ] Checked for siloed work patterns

---

## Scoring Rubric

### Overall Collaboration (1-5 Scale)

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Highly collaborative; active reviewer; shares knowledge; mentors; breaks down silos |
| 4 | Strong | Regularly reviews code; helpful; shares knowledge; good team player |
| 3 | Proficient | Participates in reviews; responsive; adequate collaboration |
| 2 | Developing | Minimal review participation; slow to respond; works mostly alone |
| 1 | Needs Attention | Doesn't review others' code; unresponsive; isolated; communication issues |

### Individual Criteria Rubrics

#### Code Review Quality (1-5)
- **5**: Reviews are thorough, constructive, educational; catches issues; improves code quality
- **4**: Reviews are helpful and catch most issues
- **3**: Reviews are adequate; basic feedback provided
- **2**: Reviews are superficial ("LGTM" only)
- **1**: No reviews or unhelpful/blocking reviews

#### Review Participation (1-5)
- **5**: Reviews >5 PRs per week; timely responses; proactive
- **4**: Reviews 3-5 PRs per week; responsive
- **3**: Reviews 1-2 PRs per week; adequate response time
- **2**: Rarely reviews (<1 per week)
- **1**: Never reviews code

#### Knowledge Sharing (1-5)
- **5**: Regular tech talks, documentation, mentoring; teaches constantly
- **4**: Shares knowledge frequently; documents well; helps others
- **3**: Shares knowledge when asked; documents occasionally
- **2**: Rarely shares knowledge; minimal documentation
- **1**: Hoards knowledge; doesn't help others

#### Pair Programming (1-5)
- **5**: Pairs frequently; excellent pairing skills; teaches and learns
- **4**: Pairs regularly; good collaborative coding
- **3**: Pairs occasionally when needed
- **2**: Rarely pairs
- **1**: Refuses to pair or poor pairing skills

---

## Team-Wide Collaboration Metrics

### Code Review Statistics
| Metric | Value |
|--------|-------|
| Total PRs Merged | [X] |
| PRs with Reviews | [X] ([X]%) |
| Average Reviews per PR | [X.X] |
| Average Review Comments per PR | [X.X] |
| Average Time to First Review | [X] hours |
| Average Time to Merge | [X] hours |

### Review Participation
| Developer | PRs Created | Reviews Given | Review Ratio | Avg Response Time |
|-----------|-------------|---------------|--------------|-------------------|
| [NAME_1] | [X] | [X] | [X.X]:1 | [X] hours |
| [NAME_2] | [X] | [X] | [X.X]:1 | [X] hours |
| [NAME_3] | [X] | [X] | [X.X]:1 | [X] hours |
| **Team Avg** | [X] | [X] | [X.X]:1 | [X] hours |

**Review Ratio Interpretation:**
- **>1.5:1** - Reviews more code than writes (excellent collaborator)
- **0.8-1.5:1** - Balanced participation
- **<0.8:1** - Writes more than reviews (needs to review more)

### Knowledge Sharing Activities
| Activity | Count | Participants |
|----------|-------|-------------|
| Tech Talks/Demos | [X] | [Names] |
| Documentation PRs | [X] | [Names] |
| Mentoring Sessions | [X] | [Names] |
| Lunch & Learns | [X] | [Names] |
| Wiki/Confluence Pages Created | [X] | [Names] |

### Pair Programming Evidence
| Developers | Co-Authored Commits | Projects |
|------------|---------------------|----------|
| [NAME_1] & [NAME_2] | [X] | [Projects] |
| [NAME_3] & [NAME_4] | [X] | [Projects] |

**Total Pair Programming Sessions Identified:** [X]

---

## Per-Developer Assessment

### Developer: [NAME_1]

**Overall Collaboration Score:** [X.X] / 5.0

| Criterion | Score | Evidence |
|-----------|-------|----------|
| Code Review Quality | [X] / 5 | [Sample reviews] |
| Review Participation | [X] / 5 | [X] reviews given |
| Knowledge Sharing | [X] / 5 | [Activities] |
| Pair Programming | [X] / 5 | [Pairing sessions] |
| Cross-Functional Work | [X] / 5 | [Projects] |
| Communication Quality | [X] / 5 | [PR discussions] |

#### Code Review Activity

**Reviews Given:** [X] (Team Rank: [X])
- Average per week: [X.X]
- Average response time: [X] hours
- Review ratio: [X.X]:1 (creates [X] PRs, reviews [X])

**Review Comment Analysis:**

**Sample Excellent Review (PR #[X]):**
```markdown
Great work on the authentication refactor! A few thoughts:

1. **Security concern**: Line 45 - We should hash passwords with bcrypt 
   instead of SHA256. SHA256 is too fast and vulnerable to brute force.
   
2. **Suggestion**: Consider extracting the token generation logic into a 
   separate service. It would make testing easier and follows our service 
   pattern.
   
3. **Question**: Have you considered what happens if Redis is down? Should 
   we fall back to the database for token validation?

4. **Minor**: Line 92 - Variable name `usr` could be more descriptive as 
   `authenticatedUser`.

The overall architecture looks solid. Nice job on the test coverage!
```

**Why Excellent:**
- Specific line references
- Explains the "why" behind feedback
- Asks clarifying questions
- Balances criticism with positive feedback
- Provides alternatives

**Sample Review Comments:**
- [Quote helpful review comment] (PR #[X])
- [Quote helpful review comment] (PR #[X])
- [Quote concerning review comment if any] (PR #[X])

**Review Quality Assessment:**
- ✅ Provides specific, actionable feedback
- ✅ Catches bugs and security issues
- ✅ Suggests improvements
- ✅ Educational tone
- ⚠️ [Any concerns about review style]

#### Knowledge Sharing Contributions

**Documentation:**
- [X] documentation PRs
- Notable docs: [Examples]

**Teaching Activities:**
- Tech talks given: [X] - Topics: [List]
- Mentoring: [Names of mentees]
- Knowledge base articles: [X]

**Helping Behaviors:**
- PR comments helping others: [X]
- Slack/chat help threads: [Estimated]
- Onboarding participation: [Yes/No]

#### Pair Programming

**Pairing Partners:** [Names]
**Sessions:** [X] co-authored commits or observed sessions

**Pairing Style:**
- [Assessment of pairing effectiveness]
- [Feedback from pair partners if available]

#### Cross-Functional Collaboration

**Modules/Areas Worked In:**
```
Primary: [module-name] - [X]% of commits
Secondary: [module-name] - [X]% of commits
Tertiary: [module-name] - [X]% of commits
```

**Cross-Team Collaboration:**
- Worked with [Team Name] on [Project]
- Worked with [Team Name] on [Project]

**Breadth Score:** [High/Medium/Low]
- [Assessment of whether developer works across boundaries]

#### Communication Quality

**PR Description Quality:**
- Average: [Excellent/Good/Adequate/Poor]
- Example of excellent PR description: PR #[X]

**Comment Thread Participation:**
- Responsive to questions: [Yes/Timely/Slow/No]
- Clarity of responses: [Clear/Sometimes unclear/Often unclear]
- Tone: [Professional/Friendly/Neutral/Concerning]

#### Strengths
1. **[Strength]**
   - Evidence: [Specific examples]
   - Impact: [How this helps the team]

2. **[Strength]**
   - Evidence: [Specific examples]

#### Areas for Improvement
1. **[Area]**
   - Current State: [What's happening]
   - Impact: [How this affects team]
   - Evidence: [Specific examples]

#### Coaching Recommendations
1. **[Recommendation]**
   - Goal: [What to achieve]
   - Actions: [Specific actions]
   - Timeline: [When]
   - Success Metric: [How to measure]

---

### Developer: [NAME_2]

[REPEAT ENTIRE STRUCTURE FROM ABOVE]

---

### [REPEAT FOR EACH DEVELOPER]

---

## Team Collaboration Patterns

### Positive Patterns

#### 1. Strong Review Culture
**Description:** [What's working in code reviews]

**Evidence:**
- [Metrics showing good review participation]
- [Examples of excellent reviews]

**Leaders:** [Developers exemplifying this]

**Recommendation:** [How to strengthen or spread]

---

#### 2. Knowledge Sharing Activities
**Description:** [Successful knowledge sharing practices]

**Evidence:**
- [Specific activities and outcomes]

**Leaders:** [Developers leading this]

---

### Collaboration Issues

#### 1. Review Bottlenecks
**Description:** [Review delays or blockers]

**Evidence:**
- [Specific metrics showing bottlenecks]
- Average time to first review: [X] hours (Target: <[Y] hours)
- PRs waiting >24 hours for review: [X]%

**Impact:**
- Slows down delivery
- Frustrates developers
- Reduces quality (rushing reviews)

**Root Cause:** [Analysis]

**Recommendation:** [How to address]

---

#### 2. Siloed Work
**Description:** [Developers working in isolation]

**Evidence:**
- [X] developers work in only one module
- Low cross-functional collaboration: [Metrics]
- Knowledge concentrated in few people

**Impact:**
- Bus factor issues
- Slow onboarding
- Reduced innovation

**Recommendation:** [How to address]

---

## Code Review Quality Analysis

### Review Comment Categories

| Category | Count | Examples |
|----------|-------|----------|
| Bug/Error Caught | [X] | [Examples] |
| Security Issues | [X] | [Examples] |
| Performance Suggestions | [X] | [Examples] |
| Code Quality/Style | [X] | [Examples] |
| Architecture/Design | [X] | [Examples] |
| Questions/Clarifications | [X] | [Examples] |
| Praise/Positive Feedback | [X] | [Examples] |
| Nitpicks (Minor issues) | [X] | [Examples] |

### Excellent Review Examples (To Share)

**Review #1: PR #[X] by [Reviewer]**
```
[Copy excellent review comment]
```
**Why Excellent:** [Analysis]

---

**Review #2: PR #[X] by [Reviewer]**
```
[Copy excellent review comment]
```
**Why Excellent:** [Analysis]

---

### Poor Review Examples (Learning Opportunities)

**Review #1: PR #[X] by [Anonymous]**
```
LGTM
```
**Issue:** Superficial; no actual review; large PR with complex changes

---

**Review #2: PR #[X] by [Anonymous]**
```
This is all wrong. Redo it.
```
**Issue:** Not constructive; doesn't explain what's wrong; harsh tone

---

## Comparative Analysis

### Collaboration Score Distribution
```
5.0 - Exceptional    : ⬜⬜⬜ (X developers)
4.0 - Strong         : ⬜⬜⬜⬜ (X developers)
3.0 - Proficient     : ⬜⬜ (X developers)
2.0 - Developing     : ⬜ (X developer)
1.0 - Needs Attention: (X developers)
```

### Top Collaborators

#### 1. [Developer Name] - [Score] / 5.0
**Why Top Collaborator:**
- Reviews [X] PRs per week (team avg: [Y])
- Review comments are [description]
- Actively shares knowledge through [activities]
- Pairs with [X] different developers

**Can Mentor Others On:**
- Effective code review techniques
- [Other collaboration skills]

**Recognition:**
- [ ] Highlight in team meeting
- [ ] "Collaboration Champion" award
- [ ] Ask to lead code review workshop

---

#### 2. [Developer Name] - [Score] / 5.0
[Similar structure]

---

### Review Champions (By Quantity)
1. **[Developer]** - [X] reviews given
2. **[Developer]** - [X] reviews given
3. **[Developer]** - [X] reviews given

### Review Champions (By Quality)
1. **[Developer]** - Consistently thorough, educational reviews
2. **[Developer]** - Catches critical bugs and security issues
3. **[Developer]** - Excellent at architecture feedback

### Knowledge Sharing Leaders
1. **[Developer]** - [X] tech talks, [Y] docs, [Z] mentoring
2. **[Developer]** - [Similar metrics]

---

## Collaboration Network Analysis

### Review Network Map
```
Who reviews whose code most frequently:

[Developer A] ←→ [Developer B] ([X] reviews each direction)
[Developer A] ←→ [Developer C] ([X] reviews each direction)
[Developer B] ←→ [Developer D] ([X] reviews each direction)

Isolated: [Developer E] (reviews and receives reviews from few people)
Hub: [Developer A] (reviews code from everyone)
```

### Knowledge Silos Identified
1. **[Module/Technology]**
   - Experts: [Names]
   - Risk: Only [X] people understand this
   - Mitigation: [Recommendation]

2. **[Module/Technology]**
   - Experts: [Names]
   - Risk: [Description]
   - Mitigation: [Recommendation]

---

## Coaching Recommendations

### Team-Wide Improvements

#### 1. Improve Code Review Participation
**Current State:** [X]% of PRs get reviews; avg [Y] reviews per PR

**Target:** 100% of PRs reviewed; avg [Z] reviews per PR

**Action Items:**
- [ ] Set expectation: Review [X] PRs per week
- [ ] Implement round-robin review assignments
- [ ] Track and display review metrics
- [ ] Recognize top reviewers monthly
- [ ] Add review SLA: First review within [X] hours

**Timeline:** [X] weeks

**Owner:** [Tech Lead]

---

#### 2. Enhance Code Review Quality
**Current State:** [Description of review quality issues]

**Target:** All reviews provide specific, actionable feedback

**Action Items:**
- [ ] Create code review checklist
- [ ] Share examples of excellent reviews
- [ ] Conduct code review training workshop
- [ ] Establish review guidelines document
- [ ] Pair junior reviewers with senior reviewers

**Timeline:** [X] weeks

**Owner:** [Senior Engineers]

---

#### 3. Break Down Knowledge Silos
**Current State:** [X] critical areas have <3 experts

**Target:** Every critical area has ≥3 people with expertise

**Action Items:**
- [ ] Map knowledge silos
- [ ] Rotate developers across modules
- [ ] Pair experts with learners
- [ ] Create learning paths for critical areas
- [ ] Document tribal knowledge

**Timeline:** [X] weeks

**Owner:** [Engineering Manager]

---

#### 4. Increase Pair Programming
**Current State:** [X] pairing sessions in 2 months

**Target:** [Y] pairing sessions per week

**Action Items:**
- [ ] Schedule dedicated pairing time
- [ ] Teach effective pairing techniques
- [ ] Track pairing through co-authored commits
- [ ] Create pairing rotation schedule
- [ ] Celebrate pairing wins

**Timeline:** [X] weeks

**Owner:** [Tech Lead]

---

### Individual Coaching Plans

#### [Developer] - Focus: Review Participation
**Current:** Reviews [X] PRs per week (target: [Y])

**Actions:**
- [ ] Review at least [Y] PRs per week
- [ ] Set aside [X] minutes daily for reviews
- [ ] Use review checklist for thoroughness
- [ ] Shadow [top reviewer] for 2 weeks
- [ ] Check-in: [Date]

---

#### [Developer] - Focus: Review Quality
**Current:** Reviews are superficial ("LGTM" only)

**Actions:**
- [ ] Use review checklist (functionality, tests, security, etc.)
- [ ] Spend minimum [X] minutes per review
- [ ] Study examples of excellent reviews
- [ ] Pair review with [senior developer]
- [ ] Check-in: [Date]

---

#### [Developer] - Focus: Knowledge Sharing
**Current:** Minimal knowledge sharing activity

**Actions:**
- [ ] Give tech talk on [expertise area] by [date]
- [ ] Document [complex system] in wiki
- [ ] Mentor [junior developer] on [topic]
- [ ] Write [X] blog posts or docs
- [ ] Check-in: [Date]

---

## Communication Quality Assessment

### PR Description Quality
| Quality Level | Count | Percentage | Examples |
|---------------|-------|------------|----------|
| Excellent (Context, approach, testing, screenshots) | [X] | [X]% | PR #[X] |
| Good (Most context provided) | [X] | [X]% | PR #[X] |
| Adequate (Basic info) | [X] | [X]% | PR #[X] |
| Poor (No context) | [X] | [X]% | PR #[X] |

**Excellent PR Description Example:**
```markdown
## Problem
Users can't reset passwords if they've forgotten their email address.

## Solution
Add "Find my email" flow that uses phone number for account recovery.

## Approach
- Add phone number field to user profile (migration included)
- Create SMS verification service using Twilio
- Add /account/find endpoint for email lookup
- Add UI for account recovery flow

## Testing
- Unit tests for phone verification
- Integration test for full recovery flow
- Manual testing in staging with real phone numbers
- Load tested with 10k concurrent requests

## Screenshots
[Before/After screenshots]

## Checklist
- [x] Tests added
- [x] Documentation updated
- [x] Security review requested
- [x] Analytics events added
```

---

## Follow-Up Plan

### 30-Day Check-In ([DATE])
- [ ] Review code review participation rates
- [ ] Check review response times
- [ ] Assess review quality improvements
- [ ] Gather feedback on collaboration initiatives

### 60-Day Check-In ([DATE])
- [ ] Measure collaboration score improvements
- [ ] Review knowledge sharing activities
- [ ] Check progress on breaking down silos
- [ ] Celebrate collaboration wins

### 90-Day Re-Assessment ([DATE])
- [ ] Complete full collaboration assessment
- [ ] Compare scores to baseline
- [ ] Document improvements
- [ ] Plan next collaboration initiative

---

## Notes and Observations

[Any additional context, observations, or notes from the assessment]

---

## Approval and Sign-Off

**Assessor:** [NAME] _________________________ Date: ___________

**Reviewed By:** [ENGINEERING MANAGER] _________________________ Date: ___________

**Shared With Team:** [ ] Yes [ ] No    Date: ___________

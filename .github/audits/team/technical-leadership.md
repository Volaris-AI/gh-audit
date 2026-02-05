---
genre: team
category: technical-leadership
analysis-type: git-history
relevance:
  file-patterns: []
  keywords: []
  config-keys: []
  always-include: true
severity-scale: "Critical|High|Medium|Low|Info"
---

# Technical Leadership and Mentoring Assessment

<!-- analysis: git-history -->

## Assessment Period
**From:** [START_DATE]  
**To:** [END_DATE]  
**Team:** [TEAM_NAME]  
**Assessor:** [YOUR_NAME]  
**Date Completed:** [COMPLETION_DATE]

---

## Executive Summary

**Overall Technical Leadership Score:** [X.X] / 5.0

**Key Findings:**
- [Summary of technical leadership on team]
- [Emerging leaders identified]
- [Leadership gaps]

---

## Assessment Methodology

### Data Collection
```bash
# Architecture decision commits
git log --since="2 months ago" --all --grep="ADR\|architecture\|design" --oneline

# Documentation contributions
git log --since="2 months ago" --all -- "*.md" --author="NAME"

# Design review participation
# (Review meeting notes, design docs, RFC discussions)

# Mentoring evidence
git log --since="2 months ago" --all --grep="co-authored-by" --oneline
# (Also review 1-on-1 notes, pairing sessions, code review quality)
```

### Leadership Dimensions Assessed
1. **Architecture & Design** - Makes sound technical decisions
2. **Code Quality Leadership** - Sets standards and leads by example
3. **Mentoring & Teaching** - Develops other engineers
4. **Knowledge Transfer** - Documents and shares knowledge
5. **Technical Vision** - Sees ahead, proposes improvements
6. **Problem Solving** - Tackles hard technical problems

---

## Quality Control Checklist

### Team-Wide Analysis
- [ ] Identified technical leaders (formal and informal)
- [ ] Reviewed architecture decision records (ADRs)
- [ ] Assessed design review participation
- [ ] Documented mentoring activities
- [ ] Reviewed technical documentation contributions
- [ ] Identified technical vision initiatives
- [ ] Noted complex problem-solving examples

### Per-Developer Analysis
- [ ] Assessed architecture contributions
- [ ] Evaluated code quality influence
- [ ] Documented mentoring activities
- [ ] Checked knowledge transfer efforts
- [ ] Identified forward-thinking initiatives
- [ ] Noted technical problem-solving examples

---

## Scoring Rubric

### Overall Technical Leadership (1-5 Scale)

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Drives technical vision; mentors extensively; solves hardest problems; recognized leader |
| 4 | Strong | Makes solid technical decisions; mentors others; trusted advisor; good influence |
| 3 | Proficient | Competent technically; occasional mentoring; solid contributor |
| 2 | Developing | Growing technical skills; limited mentoring; needs guidance |
| 1 | Not Yet | No leadership activities; doesn't mentor; not sought for advice |

### Individual Criteria Rubrics

#### Architecture & Design (1-5)
- **5**: Defines system architecture; writes ADRs; leads design reviews; makes critical decisions
- **4**: Contributes to architecture; participates in design reviews; makes component-level decisions
- **3**: Designs within assigned components; participates when asked
- **2**: Follows existing designs; minimal design participation
- **1**: Doesn't participate in design; needs detailed specs

#### Code Quality Leadership (1-5)
- **5**: Sets team standards; exemplary code; leads refactoring initiatives; influences practices
- **4**: Consistently high-quality code; good reviewer; improves team practices
- **3**: Produces quality code; adequate reviews
- **2**: Code quality inconsistent; limited influence
- **1**: No quality leadership; doesn't influence team practices

#### Mentoring & Teaching (1-5)
- **5**: Active mentor to multiple people; teaches regularly; develops junior engineers
- **4**: Mentors 1-2 people; shares knowledge; helps others grow
- **3**: Helps when asked; occasional mentoring
- **2**: Rarely mentors; minimal teaching
- **1**: Doesn't mentor or teach others

#### Knowledge Transfer (1-5)
- **5**: Extensive documentation; tech talks; knowledge base; everything is shared
- **4**: Documents well; shares knowledge proactively
- **3**: Basic documentation; shares when asked
- **2**: Minimal documentation; knowledge stays with them
- **1**: Doesn't document or share knowledge

---

## Team Technical Leadership Assessment

### Technical Leadership Distribution

**Formal Technical Leaders:**
- [Name] - [Title] - [Role/Responsibility]
- [Name] - [Title] - [Role/Responsibility]

**Emerging Technical Leaders:**
- [Name] - [Strength Area]
- [Name] - [Strength Area]

**Leadership Gaps:**
- [Area] - No clear leader
- [Area] - Single point of failure

### Architecture Decision Records (ADRs)

**Total ADRs in Period:** [X]

| ADR # | Title | Author | Impact | Quality |
|-------|-------|--------|--------|---------|
| [X] | [Title] | [Name] | [High/Med/Low] | [Score] |
| [X] | [Title] | [Name] | [High/Med/Low] | [Score] |

**Notable Architectural Decisions:**

**ADR-[X]: [Title]**
```
Status: [Accepted/Proposed/Deprecated]
Author: [Name]

Context: [Brief summary]
Decision: [What was decided]
Impact: [Effect on system/team]
Quality: [Assessment of decision quality]
```

**Assessment:**
- Are ADRs being written? [Yes/Inconsistently/No]
- Are decisions documented? [Score]
- Are consequences considered? [Score]

---

### Technical Vision and Initiatives

**Strategic Technical Initiatives:**

#### 1. [Initiative Name]
- **Lead:** [Name]
- **Goal:** [What this aims to achieve]
- **Status:** [In Progress/Completed/Proposed]
- **Impact:** [High/Medium/Low]
- **Evidence:** [PRs, docs, discussions]

**Assessment:**
- [Quality of initiative]
- [Leadership demonstrated]
- [Team buy-in]

---

#### 2. [Initiative Name]
[Similar structure]

---

### Design Reviews and Technical Discussions

**Design Reviews Conducted:** [X]

| Date | Topic | Participants | Led By | Quality | Outcome |
|------|-------|--------------|--------|---------|---------|
| [DATE] | [Topic] | [Names] | [Lead] | [Score] | [Decision] |

**Quality Assessment:**
- Are designs reviewed before implementation? [Always/Sometimes/Rarely]
- Do reviews result in better designs? [Yes/Mixed/No]
- Is participation broad or narrow? [Assessment]

---

## Per-Developer Leadership Assessment

### Developer: [NAME_1]

**Overall Leadership Score:** [X.X] / 5.0  
**Leadership Potential:** [High/Medium/Low/Emerging]

#### Dimensional Scores
| Dimension | Score | Evidence |
|-----------|-------|----------|
| Architecture & Design | [X] / 5 | [ADRs, design work] |
| Code Quality Leadership | [X] / 5 | [Examples, influence] |
| Mentoring & Teaching | [X] / 5 | [Mentoring activities] |
| Knowledge Transfer | [X] / 5 | [Docs, tech talks] |
| Technical Vision | [X] / 5 | [Initiatives, proposals] |
| Problem Solving | [X] / 5 | [Complex problems solved] |

#### Architecture & Design Contributions

**ADRs Authored:** [X]
- [ADR-X]: [Title] - Impact: [High/Med/Low]
- [ADR-X]: [Title] - Impact: [High/Med/Low]

**Design Reviews Led:** [X]
**Design Reviews Participated:** [X]

**Notable Design Work:**
1. **[System/Component Name]**
   - Design Approach: [Description]
   - Complexity: [High/Medium/Low]
   - Quality: [Excellent/Good/Fair/Poor]
   - Evidence: [PR, doc, discussion link]

**Design Philosophy:**
- [Assessment of their approach to design]
- [Strengths in design thinking]
- [Areas for growth]

#### Code Quality Leadership

**Influence on Team Standards:**
- [X] coding standard proposals
- [X] refactoring initiatives led
- [X] quality improvements introduced

**Code Review Leadership:**
- Reviews given: [X]
- Average review quality: [High/Medium/Low]
- Educational value: [High/Medium/Low]

**Examples of Quality Leadership:**
```
Example 1: [PR or initiative]
- What: [Description]
- Impact: [How this raised the bar]
- Evidence: [Link]

Example 2: [PR or initiative]
- [Similar structure]
```

#### Mentoring & Teaching Activities

**Formal Mentoring:**
- Mentees: [Names]
- Duration: [Weeks/months]
- Focus Areas: [What they're teaching]
- Effectiveness: [High/Medium/Low]

**Informal Mentoring:**
- Pair programming sessions: [X]
- Code review teaching moments: [X] (examples: [PR links])
- Helping in chat/discussions: [Frequent/Occasional/Rare]

**Teaching Activities:**
- Tech talks given: [X]
  - [Topic] - [Date] - Attendance: [X]
- Documentation written for teaching: [X]
- Onboarding participation: [Yes/No] - [X] new hires

**Mentoring Style:**
- [Assessment of approach and effectiveness]

**Feedback from Mentees:**
- [Quotes or feedback if available]

#### Knowledge Transfer Contributions

**Documentation:**
- README updates: [X]
- Architecture docs: [X]
- API documentation: [X]
- Troubleshooting guides: [X]
- Knowledge base articles: [X]

**Notable Documentation:**
1. **[Document Title]**
   - Type: [README/Guide/ADR/etc.]
   - Quality: [Excellent/Good/Fair/Poor]
   - Impact: [How valuable to team]
   - Link: [URL]

**Knowledge Sharing:**
- Proactively shares: [Yes/Sometimes/No]
- Documents tribal knowledge: [Yes/Sometimes/No]
- Responds to questions: [Helpful/Adequate/Dismissive]

#### Technical Vision & Initiative

**Forward-Thinking Proposals:**
1. **[Proposal Title]**
   - Description: [What they proposed]
   - Rationale: [Why this matters]
   - Status: [Implemented/In Progress/Declined]
   - Impact: [Potential/actual impact]

**Technical Improvements Championed:**
- [Improvement] - Status: [Status]
- [Improvement] - Status: [Status]

**Innovation:**
- Introduces new technologies: [Yes/Cautiously/No]
- Challenges status quo: [Yes/Diplomatically/No]
- Thinks long-term: [Yes/Sometimes/No]

#### Complex Problem Solving

**Hard Problems Tackled:**
1. **[Problem Description]**
   - Complexity: [High/Medium/Low]
   - Approach: [How they solved it]
   - Outcome: [Success/Partial/Failed]
   - Learning: [What team learned]
   - Evidence: [PR, doc, issue]

2. **[Problem Description]**
   - [Similar structure]

**Problem-Solving Style:**
- [Assessment of approach]
- [Strengths in problem-solving]

#### Leadership Strengths
1. **[Strength]**
   - Evidence: [Specific examples]
   - Impact: [How this helps team]

2. **[Strength]**
   - [Similar structure]

#### Growth Areas
1. **[Area]**
   - Current: [Current state]
   - Target: [What good looks like]
   - Path: [How to develop]

#### Leadership Development Recommendations
1. **[Recommendation]**
   - Goal: [What to achieve]
   - Actions: [Specific actions]
   - Timeline: [When]
   - Support Needed: [Resources, opportunities]

---

### Developer: [NAME_2]

[REPEAT ENTIRE STRUCTURE FOR EACH DEVELOPER]

---

### [REPEAT FOR EACH DEVELOPER]

---

## Comparative Analysis

### Leadership Score Distribution
```
5.0 - Exceptional    : ⬜ (X developers)
4.0 - Strong         : ⬜⬜⬜ (X developers)
3.0 - Proficient     : ⬜⬜⬜⬜ (X developers)
2.0 - Developing     : ⬜⬜ (X developers)
1.0 - Not Yet        : ⬜ (X developer)
```

### Technical Leaders

#### 1. [Developer Name] - [Score] / 5.0
**Leadership Areas:**
- [Primary strength]
- [Primary strength]

**Impact:**
- [How they influence team]
- [Key contributions]

**Can Lead:**
- [Types of projects they can lead]
- [Mentoring focus areas]

**Recognition:**
- [ ] Promote to Senior/Staff/Principal Engineer
- [ ] Assign as technical lead for [project]
- [ ] Increase visibility (conference talks, blog posts)

---

#### 2. [Developer Name] - [Score] / 5.0
[Similar structure]

---

### Emerging Leaders (High Potential)

#### [Developer Name]
**Why Emerging Leader:**
- [Growth trajectory]
- [Leadership activities starting to show]
- [Potential areas]

**Development Plan:**
- [Specific opportunities to grow leadership]
- [Mentorship they need]
- [Stretch assignments]

---

### Mentoring Network Map

```
[Senior Leader 1]
├── Mentoring → [Developer A]
└── Mentoring → [Developer B]

[Senior Leader 2]
├── Mentoring → [Developer C]
└── Mentoring → [Developer D]

Unassigned Mentees: [Names]
Potential Mentors Not Mentoring: [Names]
```

**Assessment:**
- Are all junior developers being mentored? [Yes/No]
- Are mentors effective? [Yes/Mixed/No]
- Is mentoring load balanced? [Yes/No]

---

## Technical Leadership Patterns

### Positive Patterns

#### 1. Strong Architecture Practice
**Description:** [What's working well]

**Evidence:**
- [ADRs being written]
- [Design reviews happening]
- [Good decisions being made]

**Leaders:** [Who's driving this]

**Recommendation:** [How to strengthen]

---

#### 2. Knowledge Sharing Culture
**Description:** [What's working]

**Evidence:**
- [Tech talks, docs, mentoring]

**Leaders:** [Who's driving this]

---

### Leadership Gaps

#### 1. [Gap Name]
**Description:** [What's missing]

**Impact:**
- [How this hurts team]
- [Specific consequences]

**Root Cause:** [Why this gap exists]

**Recommendation:** [How to address]
- [ ] [Action item]
- [ ] [Action item]

---

#### 2. [Gap Name]
[Similar structure]

---

## Mentoring Quality Assessment

### Formal Mentoring Programs

**Active Mentoring Relationships:** [X]

| Mentor | Mentee | Duration | Focus Area | Effectiveness |
|--------|--------|----------|------------|---------------|
| [Name] | [Name] | [X] months | [Area] | [High/Med/Low] |
| [Name] | [Name] | [X] months | [Area] | [High/Med/Low] |

**Assessment:**
- Are mentoring relationships working? [Yes/Mixed/No]
- Are mentees growing? [Yes/Somewhat/No]
- Is structure provided or informal? [Assessment]

### Mentoring Best Practices Observed

**Excellent Mentoring Example:**
- Mentor: [Name]
- Mentee: [Name]
- Approach: [What they do well]
- Outcome: [Growth observed]
- Can be a model for others: [Yes]

---

## Coaching Recommendations

### Team-Wide Leadership Development

#### 1. Expand Technical Leadership
**Current State:** [X] active technical leaders; [Y] gaps

**Goal:** Develop [X] more technical leaders

**Actions:**
- [ ] Identify high-potential developers
- [ ] Create leadership development program
- [ ] Assign stretch projects to emerging leaders
- [ ] Provide leadership training
- [ ] Recognize and reward leadership behaviors

**Timeline:** [X] months

**Owner:** [Engineering Manager]

---

#### 2. Formalize Mentoring Program
**Current State:** [Description of current mentoring]

**Goal:** Every junior developer has a mentor

**Actions:**
- [ ] Pair every junior with senior mentor
- [ ] Provide mentoring guidelines and structure
- [ ] Set mentoring goals and checkpoints
- [ ] Train mentors on effective mentoring
- [ ] Recognize top mentors

**Timeline:** [X] weeks

**Owner:** [Tech Lead]

---

#### 3. Improve Architecture Decision Process
**Current State:** [X] ADRs in 2 months; [description of process]

**Goal:** All major decisions documented as ADRs

**Actions:**
- [ ] Create ADR template and process
- [ ] Train team on writing ADRs
- [ ] Require ADRs for significant changes
- [ ] Review ADRs in design meetings
- [ ] Make ADRs easily discoverable

**Timeline:** [X] weeks

**Owner:** [Principal/Staff Engineer]

---

#### 4. Increase Knowledge Sharing
**Current State:** [X] tech talks in 2 months

**Goal:** Weekly tech talks or knowledge sharing sessions

**Actions:**
- [ ] Schedule recurring tech talk slots
- [ ] Create topic backlog
- [ ] Rotate presenters
- [ ] Record and share recordings
- [ ] Celebrate and recognize sharers

**Timeline:** [X] weeks

**Owner:** [Tech Lead]

---

### Individual Leadership Development Plans

#### [Developer] - Emerging Leader Development
**Current:** Shows leadership potential in [area]

**Goal:** Develop into technical leader

**Actions:**
- [ ] Lead design for [project]
- [ ] Write [X] ADRs
- [ ] Mentor [junior developer]
- [ ] Give tech talk on [expertise area]
- [ ] Shadow [senior leader] in architecture meetings

**Timeline:** [X] months

**Check-ins:** Monthly with [manager]

---

#### [Developer] - Mentoring Development
**Current:** Strong technically but doesn't mentor

**Goal:** Become effective mentor

**Actions:**
- [ ] Assign 1 mentee
- [ ] Pair programming once per week
- [ ] Lead code review workshop
- [ ] Write documentation guide
- [ ] Attend mentoring training

**Timeline:** [X] months

---

#### [Developer] - Architecture Leadership
**Current:** Good at component design; ready for system design

**Goal:** Lead system-level architecture

**Actions:**
- [ ] Lead architecture for [project]
- [ ] Write ADR for [major decision]
- [ ] Present at architecture review board
- [ ] Collaborate with [staff engineer] on system design
- [ ] Take system design course

**Timeline:** [X] months

---

## Technical Leadership ROI

### Impact of Technical Leadership

**Productivity Gains:**
- Good architecture reduces rework: [Estimate hours saved]
- Mentoring speeds up junior developers: [Estimate]
- Knowledge sharing reduces duplicate work: [Estimate]

**Quality Improvements:**
- Design reviews catch issues early: [X] major issues prevented
- Code quality leadership reduces bugs: [Estimated bug reduction]

**Retention:**
- Mentoring improves junior developer retention: [Data if available]
- Growth opportunities retain senior developers: [Data if available]

---

## Follow-Up Plan

### 30-Day Check-In ([DATE])
- [ ] Review leadership development progress
- [ ] Check mentoring relationship effectiveness
- [ ] Assess ADR adoption
- [ ] Evaluate knowledge sharing activities

### 60-Day Check-In ([DATE])
- [ ] Measure improvement in leadership scores
- [ ] Review emerging leader progress
- [ ] Check mentoring outcomes
- [ ] Assess architecture quality

### 90-Day Re-Assessment ([DATE])
- [ ] Complete full leadership assessment
- [ ] Compare scores to baseline
- [ ] Recognize leadership growth
- [ ] Adjust development plans

---

## Notes and Observations

[Any additional context, observations, or notes from the assessment]

---

## Approval and Sign-Off

**Assessor:** [NAME] _________________________ Date: ___________

**Reviewed By:** [ENGINEERING MANAGER] _________________________ Date: ___________

**Shared With Team:** [ ] Yes [ ] No    Date: ___________

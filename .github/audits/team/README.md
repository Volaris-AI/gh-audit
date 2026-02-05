# Team Assessment Templates

## Overview

This directory contains templates for conducting comprehensive team assessments based on code and git history analysis. These assessments help identify team strengths, areas for improvement, and provide coaching recommendations.

## Assessment Period

**Standard Assessment Window**: Last 2 months of commits

This timeframe provides enough data to identify patterns while remaining relevant to current team dynamics.

## Assessment Templates

### 1. Code and Process Quality
- **[commit-quality.md](commit-quality.md)** - Assess quality of commit messages and commit patterns
- **[code-documentation.md](code-documentation.md)** - Assess documentation quality across the codebase
- **[work-quality.md](work-quality.md)** - Assess quality of work delivered (features vs bugs, tech debt, etc.)

### 2. Team Collaboration
- **[team-collaboration.md](team-collaboration.md)** - Assess collaboration patterns and code review quality
- **[velocity-metrics.md](velocity-metrics.md)** - Assess team velocity and productivity metrics

### 3. Individual Performance
- **[developer-contributions.md](developer-contributions.md)** - Assess individual developer performance and contributions
- **[technical-leadership.md](technical-leadership.md)** - Assess technical leadership and mentoring activities

### 4. Outputs and Recommendations
- **[coaching-recommendations.md](coaching-recommendations.md)** - Template for creating individual coaching plans
- **[executive-summary.md](executive-summary.md)** - Team assessment executive summary for leadership

## Assessment Process

### Phase 1: Data Collection (Week 1)
1. **Extract Git History**
   ```bash
   # Get commits from last 2 months
   git log --since="2 months ago" --all --pretty=format:"%H|%an|%ae|%ad|%s" --date=iso > commits.csv
   
   # Get detailed commit stats
   git log --since="2 months ago" --all --numstat --pretty=format:"%H|%an|%ae|%ad|%s" > commits-detailed.csv
   
   # Get PR information (GitHub)
   gh pr list --state merged --limit 1000 --json number,title,author,mergedAt,additions,deletions,reviews
   ```

2. **Clone Repository for Analysis**
   - Ensure you have full git history (`git clone` without `--depth`)
   - Review closed PRs from the last 2 months

3. **Identify Team Members**
   - List all active contributors
   - Note any team changes (new hires, departures)

### Phase 2: Individual Assessments (Week 2-3)
Complete each assessment template in order:
1. ✅ [commit-quality.md](commit-quality.md)
2. ✅ [code-documentation.md](code-documentation.md)
3. ✅ [work-quality.md](work-quality.md)
4. ✅ [team-collaboration.md](team-collaboration.md)
5. ✅ [velocity-metrics.md](velocity-metrics.md)
6. ✅ [developer-contributions.md](developer-contributions.md)
7. ✅ [technical-leadership.md](technical-leadership.md)

### Phase 3: Synthesis (Week 4)
1. ✅ [coaching-recommendations.md](coaching-recommendations.md) - Create individual coaching plans
2. ✅ [executive-summary.md](executive-summary.md) - Compile executive summary

### Phase 4: Delivery and Follow-up
1. **Individual Developer Meetings** (1-on-1s)
   - Share coaching recommendations privately
   - Discuss strengths and growth areas
   - Agree on action items and timelines

2. **Team Leadership Meeting**
   - Present executive summary
   - Discuss team-level improvements
   - Allocate resources for coaching and training

3. **Follow-up Cadence**
   - 30-day check-in: Review progress on action items
   - 60-day check-in: Measure improvement
   - 90-day re-assessment: Full assessment cycle

## Scoring System

All assessments use a consistent 1-5 scoring rubric:

| Score | Rating | Description |
|-------|--------|-------------|
| 5 | Exceptional | Far exceeds expectations; role model for others |
| 4 | Strong | Exceeds expectations; consistent high quality |
| 3 | Proficient | Meets expectations; solid contributor |
| 2 | Developing | Below expectations; needs improvement |
| 1 | Needs Attention | Significantly below expectations; requires immediate coaching |

## Key Principles

### 🎯 Evidence-Based
- Every assessment must cite specific commits, PRs, or code examples
- Include commit SHAs and PR links for reference
- Avoid subjective opinions without concrete evidence

### 🤝 Coaching-Oriented
- Focus on growth and development, not punishment
- Identify strengths to build on
- Provide actionable recommendations
- Suggest specific learning resources

### 📊 Objective Metrics
- Use quantifiable data wherever possible
- Compare against team averages and industry standards
- Track trends over time (improving vs declining)

### 🔒 Confidential
- Individual assessments are private
- Share with developer and their manager only
- Executive summary aggregates data without identifying struggling individuals

## Tools and Resources

### Git Analysis Tools
- **git-quick-stats**: `brew install git-quick-stats`
- **git-extras**: `brew install git-extras`
- **github-linguist**: Language statistics
- **cloc**: Count lines of code

### Code Quality Tools
- **SonarQube**: Code quality and security analysis
- **CodeClimate**: Maintainability and test coverage
- **ESLint/Pylint/etc**: Language-specific linters

### GitHub CLI Commands
```bash
# List merged PRs
gh pr list --state merged --limit 100

# Get PR details
gh pr view <number> --json reviews,comments,additions,deletions

# List issues closed
gh issue list --state closed --since "2 months ago"
```

## Common Pitfalls to Avoid

❌ **Don't:**
- Compare developers with vastly different roles (senior vs junior)
- Judge based on quantity alone (lines of code, commit count)
- Make assessments without sufficient data
- Use assessments punitively
- Share individual scores publicly

✅ **Do:**
- Consider context (project complexity, team changes, incidents)
- Look at quality and impact, not just metrics
- Involve developers in the assessment conversation
- Focus on growth trajectory, not just current state
- Celebrate improvements and wins

## Assessment Timeline

```
Week 1: Data Collection
├── Day 1-2: Extract git history and PR data
├── Day 3-4: Review code and documentation
└── Day 5: Organize evidence and prepare

Week 2-3: Analysis
├── Day 6-8: Complete quality assessments
├── Day 9-11: Complete collaboration assessments
└── Day 12-14: Complete individual assessments

Week 4: Synthesis
├── Day 15-17: Draft coaching recommendations
├── Day 18-19: Create executive summary
└── Day 20: Review and finalize

Week 5: Delivery
├── Day 21-24: Individual 1-on-1 meetings
└── Day 25: Leadership presentation
```

## Output Directory Structure

Create a dated assessment directory:
```
docs/audits/team/YYYY-MM-DD-assessment/
├── README.md (this overview)
├── data/
│   ├── commits.csv
│   ├── prs.json
│   └── raw-metrics.xlsx
├── assessments/
│   ├── commit-quality.md
│   ├── code-documentation.md
│   ├── work-quality.md
│   ├── team-collaboration.md
│   ├── velocity-metrics.md
│   ├── developer-contributions.md
│   └── technical-leadership.md
├── coaching/
│   ├── developer-1-coaching.md
│   ├── developer-2-coaching.md
│   └── ...
└── executive-summary.md
```

## Questions?

For questions about the assessment process or templates:
- Review individual template READMEs for specific guidance
- Consult with HR or engineering leadership
- Refer to engineering management best practices

## Version History

- **v1.0** (2024-01): Initial template creation

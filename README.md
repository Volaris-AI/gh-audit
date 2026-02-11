# GitHub Audit System

Automated codebase auditing powered by GitHub Copilot custom agents. Copy the `.github/` directory into any repository to get comprehensive audits with filled templates, genre-specific reports, and an executive overview.

## What It Does

When triggered, the system:

1. Creates a GitHub issue and assigns it to the Copilot coding agent
2. The **orchestrator agent** scans your codebase and determines which audits apply
3. **Genre-specific agents** fill audit templates with real findings from your code
4. A **reviewer agent** produces a cross-genre executive overview with a health score
5. Results are delivered as a draft pull request in `audits/YYYY-MM-DD/`

## Audit Genres

| Genre | What It Assesses | Method |
|-------|-----------------|--------|
| **Security** | Vulnerabilities, auth, API security, crypto, dependencies | Static code analysis |
| **Infrastructure** | Architecture maturity, tech stack, build tooling, testing | Static code analysis |
| **Team** | Developer churn and stability | Git history analysis |
| **Hosting (AWS)** | IAM, networking, compute, storage, logging, secrets | IaC analysis (Terraform, CloudFormation) |
| **Hosting (Azure)** | Identity, networking, compute, storage, logging, secrets | IaC analysis (Terraform, Bicep) |

Security and Infrastructure always run. Team runs if meaningful git history exists. Hosting auto-detects AWS/Azure based on IaC files in the repo.

## Setup

### Prerequisites

- **GitHub Copilot Business or Enterprise** with the coding agent enabled
- **GitHub Actions** enabled on the repository

### Installation

1. **Copy the `.github/` directory** into your repository root:

   ```bash
   # From this repo, copy to your target repo
   cp -r .github/ /path/to/your-repo/.github/
   ```

2. **Create a Personal Access Token (PAT)** with these scopes:
   - `repo` (full repository access)
   - `issues:write`

3. **Add the PAT as a repository secret:**
   - Go to your repo → Settings → Secrets and variables → Actions
   - Create a new secret named `AUDIT_PAT` with your PAT value

4. **Enable Copilot coding agent** on the repository:
   - Go to repo Settings → Copilot → Coding agent → Enable

### Running an Audit

**Manual trigger:**
- Go to Actions → "Run Codebase Audit" → Run workflow
- Optionally specify genres (`security,infrastructure`) or templates to skip (`mobile,voice`)

**Scheduled:**
- By default, audits run monthly on the 1st at 6am UTC
- Edit `.github/workflows/run-audit.yml` to change the schedule

## Configuration

Edit `.github/audit-config.yml` to customize:

```yaml
genres:
  security:
    enabled: true
    skip: [mobile, voice]        # Skip templates you don't need
    force-include: []
  infrastructure:
    enabled: true
  team:
    enabled: auto                # auto-detect based on git history
    assessment-window: "2 months"
  hosting:
    enabled: auto                # auto-detect based on IaC files

scan:
  exclude-paths:
    - node_modules
    - vendor
    - dist
  max-files-per-template: 30

review:
  health-score-weights:
    security: 35
    infrastructure: 30
    team: 20
    hosting: 15
```

## Output Structure

Each audit produces a dated directory:

```
audits/YYYY-MM-DD/
  security/
    authentication.md
    api.md
    ...
    executive-summary.md
  infrastructure/
    front-end.md
    back-end.md
    ...
    executive-summary.md
  team/
    commit-quality.md
    velocity-metrics.md
    ...
    executive-summary.md
  hosting/
    aws/                        # Only if AWS IaC detected
      iam-security.md
      ...
    azure/                      # Only if Azure IaC detected
      identity-security.md
      ...
  executive-overview.md         # Cross-genre health score and priority matrix
  audit-metadata.json           # Stats: genres run, templates filled, skipped
```

## Agent Architecture

```
Issue created → audit-orchestrator
                    ├── security-auditor
                    ├── infrastructure-auditor
                    ├── team-auditor
                    ├── hosting-auditor (auto-detects AWS/Azure)
                    └── audit-reviewer (runs last)
                         → All output in one draft PR
```

| Agent | Role | Tools |
|-------|------|-------|
| `audit-orchestrator` | Coordinates all agents, determines scope | read, search, edit, agent |
| `security-auditor` | Fills security templates with vulnerability findings | read, search, edit |
| `infrastructure-auditor` | Scores infrastructure maturity (1-5 scale) | read, search, edit |
| `team-auditor` | Attributes vulnerabilities to developers, analyzes developer churn | read, search, edit, execute |
| `hosting-auditor` | Analyzes IaC files for cloud security | read, search, edit |
| `audit-reviewer` | Produces executive overview with health score | read, search, edit |

## Templates

Templates live in `.github/audits/` and include YAML frontmatter that helps agents determine relevance:

```yaml
---
genre: security
category: authentication
analysis-type: static
relevance:
  file-patterns:
    - "**/auth/**"
    - "**/login/**"
  keywords:
    - "jwt"
    - "oauth"
  config-keys:
    - "passport"
    - "jsonwebtoken"
  always-include: false
severity-scale: "Critical|High|Medium|Low|Info"
---
```

Agents use `file-patterns`, `keywords`, and `config-keys` to determine if a template is relevant to the target codebase. Templates with `always-include: true` are always filled.

## Health Score

The executive overview includes a weighted health score (0-100) using **rubric-based scoring** with normalized metrics:

| Genre | Default Weight | Scoring Method |
|-------|---------------|----------------|
| Security | 35% | Rubric based on findings per 1,000 LOC (5 levels) |
| Infrastructure | 30% | Rubric based on maturity dimensions (1-5 scale per dimension) |
| Team | 20% | Rubric based on developer churn and team stability (1-5 scale) |
| Hosting | 15% | Rubric based on findings per 10 IaC resources (5 levels) |

### Rubric Levels

Each genre uses a **5-level rubric** with clear, measurable criteria:

**Level 5 (90-100)** — Excellent: Industry-leading practices, minimal issues
**Level 4 (75-89)** — Good: Strong practices with minor gaps
**Level 3 (55-74)** — Fair: Functional with room for improvement
**Level 2 (30-54)** — Poor: Significant issues requiring attention
**Level 1 (0-29)** — Critical: Major problems requiring immediate action

### Normalized Metrics

Scores are normalized by codebase size or resource count to ensure fair comparisons:

- **Security**: Findings per 1,000 lines of code (LOC)
- **Infrastructure**: Average maturity with penalty for weak dimensions
- **Team**: Team stability maturity based on churn rate and average tenure
- **Hosting**: Findings per 10 IaC resources

This rubric-based approach provides **transparent, evidence-based scoring** that's challenging but fair. Most functional codebases will score in Level 3-4, with Level 5 reserved for truly excellent implementations.

If a genre is skipped, its weight is redistributed proportionally.

## License

MIT

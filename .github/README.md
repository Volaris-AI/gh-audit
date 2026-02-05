# Copilot Audit System

Drop this `.github/` directory into any repository to get automated codebase audits powered by GitHub Copilot custom agents.

## How It Works

A GitHub Actions workflow creates an issue and assigns it to the Copilot coding agent. The **orchestrator agent** scans your codebase, determines which audits apply, then delegates to genre-specific sub-agents that fill audit templates with real findings. A **reviewer agent** runs last to produce a cross-genre executive overview with a health score.

```
Workflow trigger → Issue created → audit-orchestrator
                                       ├── security-auditor      (~10 min)
                                       ├── infrastructure-auditor (~15 min)
                                       ├── team-auditor           (~10 min)
                                       ├── hosting-auditor        (~15 min)
                                       └── audit-reviewer          (~5 min)
                                            → Draft PR with all results
```

**Genres:**

| Genre | Runs When | Method |
|-------|-----------|--------|
| Security | Always | Static code analysis |
| Infrastructure | Always | Static code analysis |
| Team | Git history exists | Git log analysis |
| Hosting (AWS) | Terraform `aws_*`, CloudFormation, or CDK detected | IaC analysis |
| Hosting (Azure) | Terraform `azurerm_*`, Bicep, or ARM templates detected | IaC analysis |

## What It Outputs

A draft pull request containing `audits/YYYY-MM-DD/` with:

```
audits/YYYY-MM-DD/
  security/              # Filled templates with vulnerability findings
  infrastructure/        # Maturity scores (1-5) per category
  team/                  # Commit quality, velocity, collaboration metrics
  hosting/aws/           # AWS IaC security findings (if detected)
  hosting/azure/         # Azure IaC security findings (if detected)
  executive-overview.md  # Weighted health score (0-100) and priority matrix
  audit-metadata.json    # Genres run, templates filled/skipped, stats
```

Templates that aren't relevant to the codebase (e.g., mobile, voice, AI) are automatically skipped.

## Prerequisites

- **GitHub Copilot Business or Enterprise** with the coding agent enabled
- **GitHub Actions** enabled on the repository

## Setup

1. **Copy this entire `.github/` directory** into your repository root.

2. **Create a Personal Access Token (PAT)** with `repo` and `issues:write` scopes.

3. **Add the PAT as a repository secret** named `AUDIT_PAT`:
   Settings → Secrets and variables → Actions → New repository secret

4. **Enable Copilot coding agent** on the repository:
   Settings → Copilot → Coding agent → Enable

## Running an Audit

**Manual:** Go to Actions → "Run Codebase Audit" → Run workflow. Optionally specify genres or templates to skip.

**Scheduled:** Runs monthly on the 1st at 6am UTC by default. Edit `workflows/run-audit.yml` to change.

## Configuration

Edit `audit-config.yml` to customize genres, excluded paths, file limits, and health score weights. See the comments in that file for details.

## Directory Structure

```
.github/
  README.md                              # This file
  audit-config.yml                       # User-editable configuration
  workflows/
    run-audit.yml                        # Trigger workflow
  agents/
    audit-orchestrator.agent.md          # Coordinates sub-agents
    security-auditor.agent.md            # Security vulnerability analysis
    infrastructure-auditor.agent.md      # Infrastructure maturity scoring
    team-auditor.agent.md                # Git history team assessment
    hosting-auditor.agent.md             # Cloud IaC security (AWS/Azure)
    audit-reviewer.agent.md              # Executive overview and health score
  audits/
    security/          (17 templates)    # Auth, API, crypto, dependencies, etc.
    infrastructure/    (17 templates)    # Frontend, backend, database, CI/CD, etc.
    team/               (9 templates)    # Commits, velocity, collaboration, etc.
    hosting/aws/        (9 templates)    # IAM, networking, storage, compute, etc.
    hosting/azure/      (9 templates)    # Identity, networking, storage, etc.
```

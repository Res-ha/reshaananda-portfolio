---
name: poteto-help
description: Interactive skill picker. Lists all pstack skills, suggests which to use for your task.
model: opus-5.5
---

# poteto-help

**Discover pstack skills.** Ask "which skill?" and get a recommendation.

## Usage

```
/poteto-help
```

Or with context:

```
/poteto-help I have a flaky test that fails 1 in 20 runs
/poteto-help I need to design a new API contract
/poteto-help My PR has 200 comments, help me review
```

## Output format

```
## pstack skills

### 🎯 Recommended for your task
**<skill-name>** — <one-line why>

### All skills

| Skill | Purpose | When to use |
|-------|---------|-------------|
| `poteto-mode` | Main entry, routes to playbooks | Start of any rigorous task |
| `unslop` | Delete dead code | Before/after any change |
| `tdd` | Red → Green → Refactor | Every bug fix, feature, refactor |
| `interrogate` | Question everything | Code review, debugging |
| `technical-writing` | Write for 3am maintainer | Commits, PRs, comments, docs |
| `setup-pstack` | Configure model routing | First run, model access changed |
| `poteto-help` | This skill | "Which skill?" |

### Agents

| Agent | Purpose |
|-------|---------|
| `poteto-agent` | Delegate for playbook steps (auto-used by poteto-mode) |
| `comment-sicko` | Read-only PR reviewer (used by no-comments) |

### Principles (inline in poteto-mode)

24 principles indexed in `poteto-mode`. Key ones:
1. **Unslop** — Delete code that doesn't pull weight
2. **TDD** — Red → Green → Refactor, no exceptions
3. **Interrogate** — Question everything
4. **Technical Writing** — Write for 3am maintainer
5. **No Comments** — Code explains what; comments explain why
... (19 more)

### Quick start

1. Run `/setup-pstack` (once)
2. Use `/poteto-mode <your task>` for rigorous work
3. Use `/poteto-help` anytime you're unsure
```

## Model

Runs on `opus-5.5` — judgment for recommendations.

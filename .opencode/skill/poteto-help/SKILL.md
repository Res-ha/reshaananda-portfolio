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

**Core (Phase 1)**

| Skill | Purpose | When to use |
|-------|---------|-------------|
| `poteto-mode` | Main entry, routes to playbooks | Start of any rigorous task |
| `unslop` | Delete dead code | Before/after any change |
| `tdd` | Red → Green → Refactor | Every bug fix, feature, refactor |
| `interrogate` | Question everything | Code review, debugging |
| `technical-writing` | Write for 3am maintainer | Commits, PRs, comments, docs |
| `setup-pstack` | Configure model routing | First run, model access changed |
| `poteto-help` | This skill | "Which skill?" |

**Direct-invocation (Phase 2)**

| Skill | Purpose | When to use |
|-------|---------|-------------|
| `no-comments` | Comments explain why; delete what restates | Before every PR, after refactor |
| `verify` | Trust but verify, automate the chain | After EVERY change, before "done" |
| `repro-first` | Never fix without failing repro | Every bug report, flaky tests |
| `architect` | Design before code, ADR for irreversible | New structure, big refactors |
| `arena` | Compare 3+ options with evidence | Any "A vs B" decision, library choices |
| `swarm` | Parallel delegates via poteto-agent | 3+ independent, non-overlapping slices |
| `how` | "How does X work?" with verified trace | Before changing unfamiliar code |
| `why` | "Why was this written this way?" via history | Before judging/refactoring old code |

### UI/UX routing

| Task | Route to |
|------|----------|
| Landing page, redesign, desain visual (aesthetic/typografi) | `design-taste-frontend` (installed in repo) |
| Membangun UI baru dengan identitas yang tidak templated | `frontend-design` |
| Belum yakin seperti apa UI yang tepat | `prototype` (throwaway, satu pertanyaan desain) |
| Verifikasi perilaku UI di browser | `webapp-testing` (Playwright) → lalu `/verify` |
| Membandingkan pendekatan UI (A vs B) | `/arena` |

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

---
name: poteto-mode
description: Main entry point for rigorous engineering work. Matches task to a playbook, routes to other skills, runs delegates with poteto-agent.
model: opus-5.5
---

# poteto-mode

**The main shortcut for rigorous engineering work.** Use this at the start of any task that requires depth, verification, and quality over throughput.

## When to use

- Bug fixes with subtle root causes
- Refactoring that touches core logic
- Performance investigation and optimization
- New features requiring architectural decisions
- Any work where "it works" isn't enough — you need to know _why_ it works

## How it works

1. **Read your task** and match to a playbook (see Playbooks below)
2. **Open a todo list** with playbook steps copied verbatim
3. **Route to skills** as steps fire: `how`, `why`, `architect`, `arena`, `swarm`, `interrogate`, `unslop`, `no-comments`, `technical-writing`, `tdd`, and principles
4. **Spawn delegates** via `poteto-agent` for parallel work
5. **Write unslopped replies** framed for both consumer and maintainer

## Playbooks (23)

| Playbook              | Trigger                                  | Purpose                                                        |
| --------------------- | ---------------------------------------- | -------------------------------------------------------------- |
| `bug-hunt`            | "subtle bug", "flaky", "repro first"     | Systematic reproduction → root cause → fix → verify            |
| `refactor-deep`       | "refactor", "clean up", "technical debt" | Architect → arena (options) → implement → verify no regression |
| `perf-investigate`    | "slow", "performance", "bottleneck"      | Measure → profile → hypothesize → fix → benchmark              |
| `feature-slice`       | "add feature", "implement"               | Spec → architect → TDD slice → integrate → verify              |
| `hillclimb`           | "optimize", "improve quality"            | Baseline → iterate with verification → commit when better      |
| `babysit`             | "land this PR", "merge by morning"       | Monitor CI → fix flakes → ensure merge                         |
| `code-review`         | "review this PR", "interrogate"          | Interrogate → unslop → no-comments → approve/request changes   |
| `debug-production`    | "prod issue", "outage"                   | Repro → mitigate → root cause → fix → postmortem               |
| `migration`           | "migrate", "upgrade"                     | Inventory → plan → slice → verify each slice                   |
| `spike`               | "explore", "feasibility"                 | Timeboxed exploration → decision document                      |
| `api-design`          | "design API", "contract"                 | Architect → arena → spec → validate with consumers             |
| `data-model`          | "schema", "database design"              | Model → normalize → validate → migrate                         |
| `security-audit`      | "security", "vulnerability"              | Threat model → interrogate → fix → verify                      |
| `test-strategy`       | "testing", "coverage"                    | Analyze gaps → design strategy → implement                     |
| `docs-sync`           | "documentation", "out of date"           | Audit → technical-writing → verify accuracy                    |
| `dependency-update`   | "update deps", "vulnerabilities"         | Audit → test → migrate breaking changes                        |
| `refactor-tests`      | "flaky tests", "slow tests"              | Diagnose → fix → speed up                                      |
| `observability`       | "logging", "metrics", "tracing"          | Design → implement → verify signal quality                     |
| `ci-cd`               | "pipeline", "deploy"                     | Audit → fix → verify reliability                               |
| `onboarding`          | "new team member", "setup"               | Document → automate → verify                                   |
| `incident-postmortem` | "postmortem", "retrospective"            | Timeline → root cause → action items                           |
| `tech-debt-budget`    | "tech debt budget", "allocate"           | Inventory → prioritize → schedule                              |
| `poteto-help`         | "help", "which skill"                    | Route to poteto-help skill                                     |

## Usage

```
/poteto-mode this pr has a subtle bug where the scroll drifts every 750ms even when idle. repro first, then fix and verify.
```

```
/poteto-mode i'm going to bed. land the stack even if ci flakes. i want everything merged by morning.
```

## Persistent mode

Pick `/poteto-mode` from the `/` menu and press **Alt+Enter** (Windows) / **Option+Enter** (Mac) to make it a custom mode. It stays in context every turn until you exit.

## Works with `/loop`

Combine with OpenCode's loop command for overnight runs:

```
/loop /poteto-mode fix all flaky tests in the auth module
```

## Principles index (inline)

These 24 principles are indexed here and read by `poteto-agent` delegates.

**Standalone skill files exist for #1–10** (`unslop`, `tdd`, `interrogate`, `technical-writing`, `no-comments`, `architect`, `arena`, `swarm`, `verify`, `repro-first`) — poteto-mode routes to them, and each can be invoked directly. #11–24 are index-only: poteto-mode applies them from the one-liners below without a separate file.

| #   | Principle                    | Skill                      | One-liner                                                |
| --- | ---------------------------- | -------------------------- | -------------------------------------------------------- |
| 1   | **Unslop**                   | `unslop`                   | Delete code that doesn't pull weight                     |
| 2   | **TDD**                      | `tdd`                      | Red → green → refactor, no exceptions                    |
| 3   | **Interrogate**              | `interrogate`              | Question everything. Assume broken until proven correct  |
| 4   | **Technical Writing**        | `technical-writing`        | Write for the maintainer at 3am                          |
| 5   | **No Comments**              | `no-comments`              | Code explains what; comments explain why                 |
| 6   | **Architect First**          | `architect`                | Design before code. Write ADR for irreversible decisions |
| 7   | **Arena**                    | `arena`                    | Compare 3+ options. Pick with evidence                   |
| 8   | **Swarm**                    | `swarm`                    | Parallel delegates. Share context. Sync at boundaries    |
| 9   | **Verify**                   | `verify`                   | Trust but verify. Automate verification                  |
| 10  | **Repro First**              | `repro-first`              | Never fix without a failing test                         |
| 11  | **Bisect**                   | `bisect`                   | Binary search the change that broke it                   |
| 12  | **Minimal Diff**             | `minimal-diff`             | Smallest change that solves the problem                  |
| 13  | **Explicit over Implicit**   | `explicit`                 | No magic. No hidden behavior                             |
| 14  | **Fail Fast**                | `fail-fast`                | Crash early with actionable message                      |
| 15  | **Single Source of Truth**   | `ssot`                     | One canonical representation                             |
| 16  | **Boundary Check**           | `boundary-check`           | Validate at edges. Trust internals                       |
| 17  | **Idempotency**              | `idempotency`              | Safe to retry. Safe to replay                            |
| 18  | **Observability**            | `observability`            | Emit signal for every decision                           |
| 19  | **Rollback Ready**           | `rollback-ready`           | Every deploy reversible in < 5 min                       |
| 20  | **Contract Test**            | `contract-test`            | Test boundaries, not internals                           |
| 21  | **Deterministic**            | `deterministic`            | Same input → same output. Always                         |
| 22  | **No Hidden State**          | `no-hidden-state`          | State is explicit, visible, testable                     |
| 23  | **Progress Over Perfection** | `progress-over-perfection` | Ship the slice. Iterate.                                 |
| 24  | **Fearless Parallelism**     | `fearless-parallelism`     | Deep delegates → confident parallelism                   |

## Delegate spawning

When a playbook step says "spawn delegate", use the `poteto-agent` sub-agent:

```yaml
subagent_type: "poteto-agent"
prompt: |
  Task: [specific, scoped task from playbook step]
  Context: [relevant files, constraints, acceptance criteria]
  Principles: [relevant principle numbers from index above]
```

**Do not** spawn `poteto-agent` to run the playbook itself — it only runs delegate tasks.

## Model routing

- **Code delegates** (feature, refactoring, bug fix, perf, hillclimb) → `grok` (configured via `setup-pstack`)
- **Judgment/prose/hardest changes** → `opus-5.5` (this skill's model)
- **Review panels** → `opus-5.5` + `grok` (dual model)

Run `/setup-pstack` to configure models for your environment.

## See also

- `/poteto-help` — Interactive skill picker
- `/setup-pstack` — Configure model routing
- `poteto-agent` — Delegate sub-agent
- `comment-sicko` — Read-only PR comment reviewer

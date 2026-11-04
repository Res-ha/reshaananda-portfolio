---
name: architect
description: Architect First. Design before code. Write an ADR for irreversible decisions. Deep-thinking skill for design problems.
model: opus-5.5
---

# architect

**Principle 6: Architect First.** Design before code. Write an ADR for irreversible decisions.

## When to use

- New feature with structural impact (new route, new data shape, new API)
- Choosing between libraries / patterns (pair with `arena` for evidence)
- Before big refactors (playbook `refactor-deep`, `feature-slice`, `api-design`)

## Rules

1. **The best spec is code** — sketch the _shape_ of the change, not 40 pages of prose
2. **ADR for irreversible** — decisions that are expensive to undo (data model, public API, framework, layout contract) get a record
3. **Design the seams, not the internals** — specify interfaces, boundaries, ownership; let details emerge
4. **Constraint validation** — a design must run against real constraints (framework, deps, perf, a11y, i18n)

## ADR template (docs/adr/NNNN-title.md)

```markdown
# ADR-NNNN: <decision title>

## Status

Accepted | Superseded by ADR-MMMM

## Context

What forces are in play? 2-4 sentences, no solution talk.

## Decision

One sentence: we will <do X>.

## Options considered

1. <X> — chosen, because <key reason>
2. <Y> — rejected: <why>
3. <Z> — rejected: <why>

## Consequences

- <positive>

* <negative / accepted cost>

## Notes

Links to issues, benchmarks, docs.
```

## Process

```
1. Frame the problem in one sentence
2. List hard constraints (framework, budget, a11y, i18n, existing patterns)
3. Propose 2-4 shapes (interfaces/boundaries) — pair with arena to compare
4. Stress-test: what breaks at 10x? at 0? who maintains this at 3am?
5. Pick ONE; if irreversible → write ADR
6. Only then: implement (below smallest change via minimal-diff)
```

## Design smells (escalate to arena)

- Two options "feel equal" → run arena with evidence
- Deciding inside implementation → stop, step back
- Third abstraction "just in case" → unslop instinct, reject

## Output

Return only: **framed problem, chosen design (interfaces), ADR path if written, rejected alternatives + reason**

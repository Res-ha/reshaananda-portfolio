---
name: arena
description: Compare 3+ options with evidence. Anti-default thinking. Pick with benchmarks, not vibes.
model: opus-5.5
---

# arena

**Principle 7: Arena.** Compare 3+ options. Pick with evidence.

## When to use

- "Option A vs B" questions — force a third option before deciding
- Library/tooling choices (`architect` pairs here)
- Perf decisions ("should we memoize?") — benchmark, don't guess
- Any decision where you notice yourself defaulting to the familiar

## Rules

1. **Minimum 3 options** — 2 options invites binary thinking; 3rd reveals hidden axes
2. **Evidence per option** — measurement, doc quote, case study, or explicit "assumption, unverified"
3. **Name the judging axes FIRST** — decide what "better" means before comparing
4. **Kill the lukewarm winner** — if no option clearly wins, the axis set is wrong; refine axes

## Process

```
1. Frame decision in one sentence
2. Choose axes (e.g. DX, perf, bundle size, a11y, maintenance, cost)
3. List ≥3 options, include the "weird" one
4. Fill the table with evidence, mark assumptions
5. Score per axis (no hidden weighting)
6. Verdict + one-line why; record in ADR if irreversible
```

## Arena table format

```markdown
## Arena: <decision>

Axes: <A1>, <A2>, <A3>, <A4>

| Option | <A1>   | <A2>   | <A3>   | <A4>   | Evidence                 |
| ------ | ------ | ------ | ------ | ------ | ------------------------ |
| 1. X   | ⭐⭐⭐ | ⭐⭐   | ⭐⭐⭐ | ⭐⭐   | measured: <data>         |
| 2. Y   | ⭐⭐   | ⭐⭐⭐ | ⭐     | ⭐⭐⭐ | docs: <quote>            |
| 3. Z   | ⭐⭐   | ⭐     | ⭐⭐⭐ | ⭐     | assumption: <unverified> |

**Verdict:** Option <N> — <one sentence why>
```

## Where evidence comes from (in priority order)

1. Measurement in THIS repo (micro-benchmark, size-limit, lighthouse)
2. Upstream docs/changelog (quote it)
3. Comparable OSS usage
4. Stated assumption (must be labeled — never pass off as fact)

## Anti-patterns

| Tell                             | Fix                                                          |
| -------------------------------- | ------------------------------------------------------------ |
| "We always used X"               | Neutralize — include X in the arena, argue on axes           |
| Table filled with vibes          | Replace ⭐ with measured values or delete row                |
| Winner chosen before axes listed | Redo: axes first                                             |
| Only 2 options                   | Force #3: status quo, roll-your-own, or an opposite approach |

## Output

Return only: **frame, axes, table, verdict + reason**

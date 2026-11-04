---
name: how
description: Answer "how does X work in this codebase?" — fast scoped exploration with a trace, not an essay. Read-heavy, minimal opinion.
model: grok
---

# how

**"How do we cancel runs? Is there an n+1 when we look up every run?"** — scoped mechanics questions, answered with a verified trace.

## When to use

- Before changing unfamiliar code — "how does X actually flow today?"
- Upstream/downstream impact checks inside playbooks
- Fast questions that would otherwise balloon into architecture essays

## Rules

1. **Answer with a trace, not prose** — entry point → hops → exit, with file:line
2. **Verify at least one link per hop** — read the function, don't trust names
3. **Scope tight** — if the question expands ("and also auth?"), answer core first, list expansions
4. **No unsolicited fixes** — you may note smells, but the deliverable is an accurate explanation

## Process

```
1. Locate the entry point(s): grep symbol / route / export name
2. Walk ONE call chain at a time — read each function before following it
3. Note storage/network boundaries (n+1 checks, cached calls, side effects)
4. Answer format below — keep under ~20 lines unless complex
```

## Answer format

```markdown
## How X works

**Entry:** `src/routes/projects.$slug.tsx:31` — `ProjectDetail()` mounts
Followed: ` useParams → projects.find → ProjectNavigation → FadeIn`

**Flow:** [entry — file:line] does X → calls [name — file:line] → which does Y

**Answer to the question asked:**
<coup: yes/no + evidence, e.g. no n+1: single `projects.find`, memoized>

**Sources:** file:line list (≤5)
**Open questions (optional):** <1-2 max>
```

## Anti-patterns

- Explaining the design intentionally ("this SHOULD be a forwardRef") — that's `interrogate`
- Answering from memory without reading — forbidden
- 60-line essays — compress to the trace

## Output

Return only: **trace + direct answer + sources**

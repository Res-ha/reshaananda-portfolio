---
name: no-comments
description: Review comments discipline. Code explains what; comments explain why. Runs with comment-sicko for PR review.
model: opus-5.5
---

# no-comments

**Principle 5: No Comments.** Code explains _what_; comments explain _why_.

## When to use

- Before every PR — audit your own comments
- Code review — flag comments that lie, rot, or restate the code
- After refactoring — old comments now mislead. Delete or update

## Rules

### Delete these comments

| Comment type                               | Why delete                          |
| ------------------------------------------ | ----------------------------------- |
| `// loop over items`                       | Restates the code. Delete           |
| `// TODO: implement later` (no ticket)     | Will never be done. Delete          |
| `// added by Resha, 2024-05-01`            | Git blame exists. Delete            |
| `// fixes the bug where...` (no context)   | Link issue or rewrite as _why_      |
| Commented-out code blocks                  | Git history is your undo. Delete    |
| `// istanbul ignore next` (without reason) | Why is it uncovered? Fix or justify |

### Keep / rewrite these comments

| Keep                            | Format                                                                                    |
| ------------------------------- | ----------------------------------------------------------------------------------------- |
| Business rule explanation       | `// Retry 3x with backoff because gateway returns 429 under peak but recovers in ~200ms`  |
| Workaround for library bug      | `// Workaround for react-router#12345 (still open as of 2026-01). Remove when fixed`      |
| Why not the obvious alternative | `// Not using Map.get here: linear scan is faster for n < 20 (benchmarked, docs/perf.md)` |
| Public API contract             | JSDoc/tsdoc on _exported_ functions explaining contract, not implementation               |
| Magic number justification      | `// 750ms matches scroll debounce in SiteNav (see TC-13-responsive)`                      |

## Process

```
1. Grep comments: "TODO|FIXME|XXX|HACK"   → triage each
2. Read every comment you touch in a diff  → does it explain WHY?
3. Delete what-restates, rewrite what-lies, keep what-explains-why
4. If deleting revealed a real question    → open issue (docs/agents/issue-tracker.md)
```

## Pair with comment-sicko

For PR review, delegate read-only review to `comment-sicko`:

```yaml
subagent_type: "comment-sicko"
prompt: |
  Review comments in: [files/diff]
  Focus: comments that restate code, lie after refactor, or lack why.
  Output: 🔴 delete / 🟡 rewrite-as-why / 🟢 keep
```

## Output

Return only: **comments deleted (count), rewritten (count), kept (count), issues opened (count)**

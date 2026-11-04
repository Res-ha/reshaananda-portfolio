---
name: unslop
description: Delete code that doesn't pull weight. Remove dead code, unused abstractions, speculative generality, and premature optimization.
model: grok
---

# unslop

**Principle 1: Unslop.** Delete code that doesn't pull weight.

## When to use

- Before/after any change — ask "what can I remove?"
- Refactoring — delete first, then add
- Code review — flag unused code, dead paths, speculative generality
- Feeling overwhelmed — delete until it fits in your head

## Rules

1. **Dead code** — Delete. Not "comment out". Delete. Git history exists.
2. **Unused abstractions** — If one caller, inline it. If zero callers, delete it.
3. **Speculative generality** — "Might need later" = delete. YAGNI.
4. **Premature optimization** — Delete. Profile first, optimize with evidence.
5. **Duplicate code** — DRY only when duplication is _painful_, not _possible_.
6. **Wrapper functions** — If it just passes args to another function, delete wrapper.
7. **Config options nobody uses** — Delete. Hardcode the value.
8. **Feature flags for shipped features** — Delete flag, keep code.

## Process

```
1. Find candidates (grep, IDE unused, coverage, intuition)
2. Verify no tests break (run test suite)
3. Delete
4. Run tests again
5. Commit: "unslop: remove <what>"
```

## Red flags (delete on sight)

- `// TODO: implement later` (no ticket)
- `if (false) { ... }`
- `export function` with 0 imports
- `interface` implemented by 1 class
- `config.enableNewFeature` always true
- `// deprecated` without removal date
- Copy-pasted test setup — extract helper or delete duplicate tests

## Exceptions (keep)

- Public API contracts (semver)
- Code called via reflection/dynamic import
- Generated code (fix generator instead)
- Platform-specific code (even if one platform today)

## Output

Return only: **what deleted, why, tests pass (yes/no)**

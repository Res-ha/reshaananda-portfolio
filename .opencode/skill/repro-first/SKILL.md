---
name: repro-first
description: Never fix without a failing test or repro first. Reproduce the bug systematically before touching code.
model: grok
---

# repro-first

**Principle 10: Repro First.** Never fix without a failing test or repro first.

## When to use

- Every bug report before fixing (playbook `bug-hunt` step 1)
- "It works on my machine" claims — build the repro case
- Flaky tests — first characterize WHEN it fails, don't blind-retry

## Rules

1. **No repro = no fix** — if you can't reproduce, you're guessing
2. **Red before green** — the repro must FAIL before the fix (pairs with `tdd`)
3. **Minimal repro** — smallest possible steps/environment that still fails
4. **Deterministic repro beats flaky repro** — if flaky, find the trigger (timing, order, data)

## Process

```
1. Collect evidence — exact steps, environment, error message, logs
2. Reproduce manually — follow the steps yourself, confirm the symptom
3. Encode as failing test (or script)
   - input: exact data/steps
   - assert: the WRONG behavior (documents the bug)
4. Run it        → RED (fails for the right reason)
5. Fix
6. Run again     → GREEN
7. Keep the test → it's your regression guard
```

## Bug report intake (docs/testing/BUG-TEMPLATE.md)

```markdown
## Steps to reproduce

1. Go to <route>
2. Click <element>
3. Observe <wrong behavior>

## Expected

<correct behavior>

## Actual

<wrong behavior>
```

## Evidence signals to capture before fixing

- Stack trace (full, not truncated)
- Request/response if network-related
- Screen recording / step list if UI-related
- `git log`-range guess: "worked in <sha>, broke after <sha>" → also run `bisect`

## When repro is impossible

- Intermittent prod-only: add observability first (logs, breadcrumbs), fix blind NEVER
- Data-dependent: copy a sanitized subset into the repo as fixture
- Environment-dependent: recreate env in CI/container, or add feature-flagged logging

## Output

Return only: **repro method (script/test/steps), RED evidence, then GREEN after fix**

---
command: verify
description: Run the verification chain (build, lint, test) and gate before done
skill: verify
---

# /verify

**Usage:**

```
/verify
/verify <what to prove>
```

**Examples:**

```
/verify
/verify prove the shake-less certification modal didn't regress
```

**What it does:**

- Runs the repo verification chain: `npm run build` + `npm run lint` (+ `npm run test` when suites exist)
- Types each result as ✓ / ✗ with exact error on failure
- Returns a one-line verification matrix — no "should work" claims

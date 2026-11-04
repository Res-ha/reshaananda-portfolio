---
name: verify
description: Trust but verify. Automate verification. Every change proven by build, lint, test, and repro before done.
model: grok
---

# verify

**Principle 9: Verify.** Trust but verify. Automate verification.

## When to use

- After EVERY change — no exceptions (this skill is the gate in all 23 poteto-mode playbooks)
- Before claiming "done" — always
- After any fix — prove the fix AND prove no regression

## Rules

1. **Automated over manual** — if it can't be verified by a command, build a command
2. **Run, don't assume** — "it should work" is not verification
3. **Fresh state** — verify from clean state (`node_modules` reinstalled if deps changed)
4. **Full suite on final step** — partial verification per slice, full verification before done

## Standard verification chain (this repo)

```powershell
npm run build                 # ✓ compiles, no type errors
npm run lint                  # ✓ 0 errors
npm audit --audit-level=high  # ⚠ knowledge (not always blocking)
```

When tests exist:

```powershell
npm run test                  # ✓ all pass
```

## Verification matrix by change type

| Change type         | Build | Lint | Test         | Extra                       |
| ------------------- | ----- | ---- | ------------ | --------------------------- |
| Copy / i18n strings | ✓     | ✓    | —            | visual check route          |
| Component / CSS     | ✓     | ✓    | —            | `npm run dev` + check route |
| Logic / lib         | ✓     | ✓    | ✓ if covered | unit test preferred         |
| Deps update         | ✓     | ✓    | ✓            | `npm audit`, read changelog |
| Config / build      | ✓     | ✓    | —            | deploy preview              |
| Data / docs         | ✓     | ✓    | —            | —                           |

## Process

```
1. Run the smallest relevant check per change
2. Gate progression in playbooks: verify BEFORE moving to next step
3. On failure: fix the failure first, do not stack another change
4. Final step: full chain, from clean state
```

## Output

Return only: **what ran, what passed, what failed (with exact error)**

> "Build ✓ (607ms, 1929 modules) · Lint ✓ 0 errors · Test ✗ 1 failure: hello.test.ts:6 expected 'Hello, Wrold!' received 'Hello, World!'"

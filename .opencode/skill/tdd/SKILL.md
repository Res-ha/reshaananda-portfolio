---
name: tdd
description: Red → Green → Refactor. No exceptions. Write failing test first, make it pass, then clean up.
model: grok
---

# tdd

**Principle 2: TDD.** Red → Green → Refactor, no exceptions.

## When to use

- Every bug fix — write failing test first (Repro First, Principle 10)
- Every new feature — test drives the API
- Every refactor — tests are the safety net
- Legacy code — write characterization tests before touching

## Rules

1. **Red** — Write a test that fails _for the right reason_
2. **Green** — Minimum code to pass. No "while I'm here" changes
3. **Refactor** — Clean up _with tests passing_. One refactor at a time
4. **Repeat** — Cycle time: 30-90 seconds per cycle

## No exceptions means

- ❌ "Just this once" — no
- ❌ "Too hard to test" — redesign until testable
- ❌ "Prototype first" — spike separately, then TDD the real thing
- ❌ "Integration test covers it" — unit test the unit, integration the integration

## Test structure

```typescript
// Arrange: minimal setup
// Act: one call
// Assert: one behavior

test("description of behavior", () => {
  // arrange
  // act
  // assert
});
```

## For bugs (Repro First)

```typescript
test("reproduces: scroll drifts 750ms when idle", () => {
  // exact repro steps
  // assert: drift occurs
});

// fix

test("fixed: no drift when idle", () => {
  // same steps
  // assert: no drift
});
```

## Refactor checklist (green phase only)

- [ ] Remove duplication
- [ ] Improve names
- [ ] Extract intention-revealing functions
- [ ] Simplify conditionals
- [ ] Remove dead code (unslop)
- [ ] Run tests after _each_ change

## Output

Return: **test added/changed, implementation changed, all tests pass (yes/no)**

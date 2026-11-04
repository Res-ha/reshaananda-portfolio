---
name: interrogate
description: Question everything. Assume broken until proven correct. Systematic code review and debugging skill.
model: opus-5.5
---

# interrogate

**Principle 3: Interrogate.** Question everything. Assume broken until proven correct.

## When to use

- Code review (yours or others')
- Debugging — "why does this work?" not "why is it broken?"
- Reading unfamiliar code
- Before merging — interrogate your own PR

## Questions to ask (every file, every function)

### Correctness

- What happens if this input is null/empty/max/min/malformed?
- What happens if the network fails? Timeout? Partial response?
- What happens if this runs twice? (Idempotency, Principle 17)
- What happens under load? (Observability, Principle 18)
- Are there race conditions? (No hidden state, Principle 22)

### Design

- Why this abstraction? One caller? Delete it (Unslop, Principle 1)
- Why this name? Does it reveal intent?
- Why these dependencies? Can we invert? (Explicit over implicit, Principle 13)
- Is this the boundary? Validate here (Boundary check, Principle 16)

### Maintenance

- Who owns this? (Single source of truth, Principle 15)
- How do we rollback? (Rollback ready, Principle 19)
- How do we know it works? (Verify, Principle 9)
- What breaks when this changes? (Contract test, Principle 20)

## Process

```
1. Read the code. Don't skim.
2. Write questions as comments (mentally or actual)
3. Trace every path — happy, sad, edge
4. Verify assumptions with tests or docs
5. Only then: approve / request changes / fix
```

## Output format (for code review)

```
## Interrogate: <file or PR>

### 🔴 Assumptions that could be wrong
- **Line X**: Assumes Y. What if not Y?

### 🟡 Missing error handling
- **Line X**: No check for Z. What happens?

### 🟢 Design questions
- **Line X**: Why abstraction A? Only one caller.

### ❓ Clarifications needed
- **Line X**: "What does this config actually control?"

### ✅ Verified correct
- **Line X**: Handles Y correctly because Z.
```

## Model

Runs on `opus-5.5` — judgment required, not just coding.

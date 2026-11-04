---
name: technical-writing
description: Write for the maintainer at 3am. Clear, concise, actionable. Code explains what; comments explain why.
model: opus-5.5
---

# technical-writing

**Principle 4: Technical Writing.** Write for the maintainer at 3am.

## When to use

- Commit messages
- PR descriptions
- Code comments (only _why_, never _what_)
- README / docs / ADRs
- Error messages
- Log output

## Rules

### Commit messages (Conventional Commits)

```
type(scope): subject

body: why, not what

footer: refs #issue
```

Types: `feat`, `fix`, `refactor`, `perf`, `test`, `docs`, `chore`, `unslop`

### PR descriptions

```
## What
One sentence.

## Why
Context, trade-offs, alternatives considered.

## How
Key changes only. Link to ADR if architectural.

## Verification
- Test added: <name>
- Manual test: <steps>
- Benchmark: <before/after>

## Rollback
How to revert in < 5 min (Principle 19)
```

### Code comments (only _why_)

```typescript
// GOOD: explains why
// Retry 3x with exponential backoff because the payment
// gateway returns 429 during peak but recovers in ~200ms

// BAD: explains what
// Loop 3 times and wait
```

### Error messages (actionable)

```typescript
// GOOD
throw new Error(
  "Payment failed: card declined (code: insufficient_funds). Retry with different card.",
);

// BAD
throw new Error("Payment failed");
```

### Log output (structured, searchable)

```typescript
// GOOD
logger.info("order_created", { orderId, userId, amount, currency });

// BAD
logger.info(`Order ${orderId} created for user ${userId}`);
```

## Process

1. **Write first draft** — get it down
2. **Cut 30%** — remove fluff, hedge words, passive voice
3. **Check 3am test** — would a tired maintainer understand _why_ and _what to do_?
4. **Add links** — to issue, ADR, related PR, docs

## Output

Return only the written artifact (commit msg, PR desc, comment, etc.)

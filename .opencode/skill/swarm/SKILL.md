---
name: swarm
description: Parallel delegates via poteto-agent. Share context up front, sync at boundaries, merge with verification.
model: opus-5.5
---

# swarm

**Principle 8: Swarm.** Parallel delegates. Share context. Sync at boundaries.

## When to use

- Task decomposes into INDEPENDENT slices (files don't overlap)
- Independent verification (one delegate audits while another builds)
- Long-running mechanical work that can run concurrently (migrations, renames)

## Rules

1. **Independence first** — if slices share files or ordering, NOT a swarm; use poteto-mode sequential steps
2. **Context up front, not via back-and-forth** — each delegate gets: files, constraints, acceptance criteria, relevant principles
3. **Boundary contract explicit** — what interface each slice must produce for others to integrate
4. **Merge gate = verify** — after swarm joins, full build+lint+test BEFORE claiming done

## Amdahl sanity check

If coordination cost ≥ parallel benefit, swarm makes it slower. Rule of thumb: worth it at **3+ independent slices each ≥ 15 minutes** of delegate work.

## Process

```
1. Decompose into N slices + 1 boundary contract (file ownership per slice)
2. Spawn delegates via poteto-agent, one per slice:

   subagent_type: "poteto-agent"
   prompt: |
     Slice: <name>
     Owns (ONLY touch): <exact files>
     Must honor: <boundary contract>
     Principles: <numbers from poteto-mode index>
     Done means: <verifiable acceptance criteria>

3. While they run: you stay in main chat, collect async reports
4. Merge: apply each slice, resolve nothing surprise-style (ownership prevents conflicts)
5. FULL verification chain (verify skill) — the merge step is where swarms break
6. One commit per slice? No — one cohesive commit (or the agreed granularity)
```

## Ownership matrix (mandatory before spawn)

| Slice | Owns (can touch) | Must NOT touch  | Produces           |
| ----- | ---------------- | --------------- | ------------------ |
| A     | `src/lib/a.ts`   | everything else | working fn `doA()` |
| B     | `src/lib/b.ts`   | everything else | working fn `doB()` |
| C     | shared file ⚠️   | —               | —                  |

→ Slice C must NOT exist. Shared-file work is sequential, never swarmed.

## Failure modes (avoid)

| Failure                        | Prevention                                   |
| ------------------------------ | -------------------------------------------- |
| Two delegates edit same file   | Ownership matrix                             |
| Slices silently incompatible   | Boundary contract in every prompt            |
| "Done" without verification    | verify gate post-merge                       |
| Deadlock waiting on each other | Only fully independent tasks enter the swarm |

## Output

Return only: **slices spawned, boundary contract, merge result, verification chain output**

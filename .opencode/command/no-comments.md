---
command: no-comments
description: Audit comments — delete what restates, rewrite what lies, keep what explains why
skill: no-comments
---

# /no-comments

**Usage:**

```
/no-comments [optional: file or PR to audit]
```

**Examples:**

```
/no-comments
/no-comments src/components/sections/about/
/no-comments resolve: comment rot in ui primitives
```

**What it does:**

- Grep and triage `TODO|FIXME|XXX|HACK` and inline comments
- Delete restating comments, rewrite misleading ones, keep the why
- Pairs with the read-only `comment-sicko` agent on PRs
- Returns counts: deleted / rewritten / kept / issues opened

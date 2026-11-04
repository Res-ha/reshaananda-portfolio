---
command: arena
description: Compare 3+ options with evidence. Anti-default thinking, verdict from axes-first scoring.
skill: arena
---

# /arena

**Usage:**

```
/arena <the decision> vs <options...>
```

**Examples:**

```
/arena labels vs section markers for the certifications grid
/arena date-fns vs dayjs vs Intl for localized dates
/arena should nav animate on hover-only or always-on focus ring
```

**What it does:**

- Forces ≥3 options (including the "weird" one)
- Judging axes chosen FIRST, scored with evidence (measured > docs > assumption)
- Verdict + one-line why; ADR if the decision is irreversible
- Returns the arena table + verdict

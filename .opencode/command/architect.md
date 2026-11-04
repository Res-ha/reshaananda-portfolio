---
command: architect
description: Architect First — frame the problem, list options, write ADR for irreversible decisions
skill: architect
---

# /architect

**Usage:**

```
/architect <design problem or feature to structure>
```

**Examples:**

```
/architect new feature: certifications download as PDF per card
/architect should gallery use a client-side lightbox or route-per-image?
/architect where does the shared dialog component belong?
```

**What it does:**

- Frames problem + hard constraints
- Proposes 2-4 shapes (interfaces, boundaries), stress-tests them
- Writes `docs/adr/` ADR when the decision is irreversible
- Returns: framed problem, chosen design, ADR path, rejected alternatives

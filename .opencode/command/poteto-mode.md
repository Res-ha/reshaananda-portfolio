---
command: poteto-mode
description: Start rigorous engineering work with poteto-mode playbook routing
skill: poteto-mode
---

# /poteto-mode

**Usage:**

```
/poteto-mode <task description>
```

**Examples:**

```
/poteto-mode this pr has a subtle bug where the scroll drifts every 750ms even when idle. repro first, then fix and verify.
/poteto-mode i'm going to bed. land the stack even if ci flakes. i want everything merged by morning.
/poteto-mode refactor the auth module to use the new token format. no regression.
```

**Persistent mode:** Pick from `/` menu and press **Alt+Enter** (Windows) / **Option+Enter** (Mac) to keep active across turns.

**What happens:**

1. Reads your task and matches to a playbook (23 playbooks)
2. Opens todo list with playbook steps
3. Routes to skills as needed: `unslop`, `tdd`, `interrogate`, `technical-writing`, etc.
4. Spawns `poteto-agent` delegates for parallel work
5. Writes unslopped replies for consumer and maintainer

**Prerequisites:** Run `/setup-pstack` once to configure models.

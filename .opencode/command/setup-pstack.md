---
command: setup-pstack
description: Configure model routing for pstack skills
skill: setup-pstack
---

# /setup-pstack

**Usage:**

```
/setup-pstack
```

**What it does:**

1. Detects available models from your OpenCode providers
2. Prompts for model selection per role:
   - `code` — delegates, unslop, tdd (default: grok)
   - `judgment` — poteto-mode, interrogate, technical-writing (default: opus-5.5)
   - `review` — comment-sicko, review panels (default: [opus-5.5, grok])
3. Writes `~/.opencode/rules/pstack-models.md`

**Re-run behavior:**

- Keeps custom selections
- Resets defaults to new defaults
- Delete config file to fully reset

**Run once per machine**, or when model access changes.

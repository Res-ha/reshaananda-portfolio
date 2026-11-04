---
name: setup-pstack
description: Configure model routing for pstack skills. Detects available models and writes config to ~/.opencode/rules/pstack-models.md
model: opus-5.5
---

# setup-pstack

**Configure model routing for pstack.** Run once per machine, or when model access changes.

## What it does

1. Detects which models you have access to
2. Lets you pick model for each role
3. Writes `~/.opencode/rules/pstack-models.md` (always-applied rule)
4. All pstack skills read this rule and fall back to defaults

## Roles

| Role       | Default             | Used by                                                              |
| ---------- | ------------------- | -------------------------------------------------------------------- |
| `code`     | `grok`              | poteto-agent, unslop, tdd, feature/refactor/bug/perf delegates       |
| `judgment` | `opus-5.5`          | poteto-mode, interrogate, technical-writing, architectural decisions |
| `review`   | `opus-5.5` + `grok` | comment-sicko, PR review panels                                      |

## Usage

```
/setup-pstack
```

Interactive prompts:

1. List detected models
2. Pick model for `code` role
3. Pick model for `judgment` role
4. Pick model(s) for `review` role
5. Write config file

## Config file format (~/.opencode/rules/pstack-models.md)

```markdown
# pstack model routing (auto-generated)

Always applied. Edit via /setup-pstack.

- code: grok
- judgment: opus-5.5
- review: [opus-5.5, grok]
```

## Re-run behavior

- Keeps any role whose model differs from default
- Resets roles still on default to new default
- Delete the file and re-run to fully reset

## Model detection

Checks: OpenCode provider config, API keys, available models from provider APIs.

## Fallback

If config missing or model unavailable, skills use hardcoded defaults above.

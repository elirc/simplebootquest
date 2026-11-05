---
slug: "js-p-validate-config"
title: "Practice: Validating a Config Object"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["Check each rule independently and push to an errors array."]
---
## Your task
`validateConfig(config)` returns an array of error strings (empty when valid) for an app config:

- `port`: an integer from 1 to 65535 → `"port must be an integer between 1 and 65535"`
- `host`: a non-empty string → `"host is required"`
- `features`: if present, an array of strings → `"features must be an array of strings"`
- `retries`: if present, an integer of 0 or more → `"retries must be a non-negative integer"`

Unknown keys produce `"unknown key: <key>"`, in the order they appear.

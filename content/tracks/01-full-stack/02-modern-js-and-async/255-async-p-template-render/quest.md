---
slug: "async-p-template-render"
title: "Practice: A Tiny Template Engine"
type: "code"
language: "js"
xp: 15
hints: ["One regex with capture groups for the path and an optional filter."]
---
# Practice: A Tiny Template Engine

Email templates and notification texts often use placeholders like `Hi {{ user.name }}`.

## Your task
`renderTemplate(template, data)` replaces `{{ path }}` placeholders (with optional spaces inside the braces) with values from `data`, following dot paths. Missing values render as an empty string. A `{{ path | upper }}` filter uppercases the value, and `| default:"x"` provides a fallback.

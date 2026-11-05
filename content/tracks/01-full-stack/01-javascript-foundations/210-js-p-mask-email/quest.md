---
slug: "js-p-mask-email"
title: "Practice: Masking Emails"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`\"*\".repeat(n)` builds the stars."]
---
# Practice: Masking Emails

Privacy-friendly UIs show partial emails, like "We sent a code to a\*\*@example.com".

## Your task
`maskEmail(email)` keeps the first character of the part before `@`, replaces the rest of it with `*` (at least one `*`, even for one-letter names), and keeps the domain. Return the input unchanged if there's no `@`.

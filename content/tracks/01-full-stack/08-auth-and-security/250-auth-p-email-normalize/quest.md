---
slug: "auth-p-email-normalize"
title: "Practice: Normalising Emails"
type: "code"
language: "js"
xp: 15
hints: ["Don't try to write The Perfect Email Regex. A few structural checks plus a confirmation email is what real apps do."]
---
# Practice: Normalising Emails

`Ada@Example.com` and `ada@example.com ` must not create two accounts. Normalise emails **before** storing and before looking them up.

But don't over-normalise: removing dots or `+tags` is only valid for some providers (Gmail), and doing it for everyone can merge different people's accounts.

## Your task
1. `normalizeEmail(input)`: trim, lowercase the **domain** and the local part (practically every provider is case-insensitive), and return it. Return `null` if it isn't a plausible email: exactly one `@`, a non-empty local part of at most 64 characters, a domain containing a dot with no empty labels, no spaces, and a total length of at most 254.
2. `sameAccount(a, b)`: `true` if both normalise to the same non-null value.

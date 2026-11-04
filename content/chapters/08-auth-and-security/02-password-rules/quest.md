---
slug: auth-password-rules
title: Password Rules
type: code
language: ts
xp: 20
---
# Password Rules

Modern guidance (NIST SP 800-63B) has changed a lot over the years:

- ✅ **Length matters most.** Require at least 8 characters, ideally more. Allow long passphrases (64+).
- ✅ **Block common and breached passwords** (`password`, `12345678`, `qwerty123`).
- ✅ **Block passwords containing the user's own email or name.**
- ❌ Don't require arbitrary complexity ("one symbol, one uppercase…"). It leads to `Password1!`.
- ❌ Don't force periodic resets.

A good validator returns **every** problem at once, so the user can fix them in one go.

## Your task

Implement `checkPassword(password, context)`, where `context` is `{ email: string; name?: string }`. Return an array of error messages (empty means the password is valid):

| Rule | Message |
|------|---------|
| fewer than 8 characters | `"Must be at least 8 characters"` |
| more than 128 characters | `"Must be at most 128 characters"` |
| in `COMMON_PASSWORDS` (case-insensitive) | `"Too common"` |
| contains the email's local part (before `@`, if it's 3+ characters) or the name (if 3+ characters), case-insensitive | `"Must not contain your name or email"` |
| only one distinct character (`"aaaaaaaa"`) | `"Too repetitive"` |

Also implement `passwordStrength(password)`, which returns `'weak'` (under 10 characters), `'ok'` (10–15) or `'strong'` (16+).

---
slug: "auth-password-policy-51"
title: "Password Policy #51: the transaction app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #51: the transaction app

The transaction app's security team wants these password rules. Write `checkTransactionPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 13 characters → `'too short'`
- a lowercase letter → `'needs a lowercase letter'`
- no leading or trailing spaces → `'has surrounding spaces'`
- at most 104 characters (bcrypt only uses the first 72 bytes) → `'too long'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

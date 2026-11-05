---
slug: "auth-password-policy-18"
title: "Password Policy #18: the transaction app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #18: the transaction app

The transaction app's security team wants these password rules. Write `checkTransactionPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 9 characters → `'too short'`
- an uppercase letter → `'needs an uppercase letter'`
- a lowercase letter → `'needs a lowercase letter'`
- not contain the user's name (any case) → `'contains your name'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

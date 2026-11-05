---
slug: "auth-password-policy-54"
title: "Password Policy #54: the repo app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #54: the repo app

The repo app's security team wants these password rules. Write `checkRepoPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 8 characters → `'too short'`
- an uppercase letter → `'needs an uppercase letter'`
- a lowercase letter → `'needs a lowercase letter'`
- a symbol (anything that is not a letter, digit or space) → `'needs a symbol'`
- not contain the user's name (any case) → `'contains your name'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

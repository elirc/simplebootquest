---
slug: "auth-password-policy-3"
title: "Password Policy #3: the repo app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #3: the repo app

The repo app's security team wants these password rules. Write `checkRepoPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 12 characters → `'too short'`
- a digit → `'needs a digit'`
- a lowercase letter → `'needs a lowercase letter'`
- a symbol (anything that is not a letter, digit or space) → `'needs a symbol'`
- no leading or trailing spaces → `'has surrounding spaces'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

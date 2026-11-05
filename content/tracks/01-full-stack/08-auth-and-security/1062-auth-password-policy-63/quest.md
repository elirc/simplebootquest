---
slug: "auth-password-policy-63"
title: "Password Policy #63: the ticket app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #63: the ticket app

The ticket app's security team wants these password rules. Write `checkTicketPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 9 characters → `'too short'`
- an uppercase letter → `'needs an uppercase letter'`
- a symbol (anything that is not a letter, digit or space) → `'needs a symbol'`
- no leading or trailing spaces → `'has surrounding spaces'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

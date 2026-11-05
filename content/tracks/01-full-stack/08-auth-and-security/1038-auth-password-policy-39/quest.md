---
slug: "auth-password-policy-39"
title: "Password Policy #39: the ticket app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #39: the ticket app

The ticket app's security team wants these password rules. Write `checkTicketPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 10 characters → `'too short'`
- a digit → `'needs a digit'`
- an uppercase letter → `'needs an uppercase letter'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

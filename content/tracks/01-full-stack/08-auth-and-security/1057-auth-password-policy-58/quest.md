---
slug: "auth-password-policy-58"
title: "Password Policy #58: the workout app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #58: the workout app

The workout app's security team wants these password rules. Write `checkWorkoutPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 12 characters → `'too short'`
- a digit → `'needs a digit'`
- an uppercase letter → `'needs an uppercase letter'`
- a lowercase letter → `'needs a lowercase letter'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

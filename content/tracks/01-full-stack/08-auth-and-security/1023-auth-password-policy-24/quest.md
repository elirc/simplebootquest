---
slug: "auth-password-policy-24"
title: "Password Policy #24: the movie app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #24: the movie app

The movie app's security team wants these password rules. Write `checkMoviePassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 10 characters → `'too short'`
- a digit → `'needs a digit'`
- not contain the user's name (any case) → `'contains your name'`
- no leading or trailing spaces → `'has surrounding spaces'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

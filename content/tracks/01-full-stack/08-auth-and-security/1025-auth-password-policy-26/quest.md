---
slug: "auth-password-policy-26"
title: "Password Policy #26: the movie app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #26: the movie app

The movie app's security team wants these password rules. Write `checkMoviePassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 13 characters → `'too short'`
- a digit → `'needs a digit'`
- an uppercase letter → `'needs an uppercase letter'`
- not contain the user's name (any case) → `'contains your name'`
- at most 104 characters (bcrypt only uses the first 72 bytes) → `'too long'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

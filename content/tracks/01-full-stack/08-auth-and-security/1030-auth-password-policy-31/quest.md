---
slug: "auth-password-policy-31"
title: "Password Policy #31: the movie app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #31: the movie app

The movie app's security team wants these password rules. Write `checkMoviePassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 8 characters → `'too short'`
- a digit → `'needs a digit'`
- a lowercase letter → `'needs a lowercase letter'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

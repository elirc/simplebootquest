---
slug: "auth-password-policy-66"
title: "Password Policy #66: the song app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #66: the song app

The song app's security team wants these password rules. Write `checkSongPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 11 characters → `'too short'`
- an uppercase letter → `'needs an uppercase letter'`
- a lowercase letter → `'needs a lowercase letter'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

---
slug: "auth-password-policy-38"
title: "Password Policy #38: the student app"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice: Password Policies"
hints: ["Check each rule in order and `push` its message when it is broken.","Regexes help: `/\\d/` (a digit), `/[A-Z]/` (an uppercase letter)."]
---
# Password Policy #38: the student app

The student app's security team wants these password rules. Write `checkStudentPassword(pw, name)` returning an array of problem messages, **in this order**, for every rule the password breaks (an empty array if it's fine):

- at least 10 characters → `'too short'`
- a lowercase letter → `'needs a lowercase letter'`
- a symbol (anything that is not a letter, digit or space) → `'needs a symbol'`
- no leading or trailing spaces → `'has surrounding spaces'`
- at most 80 characters (bcrypt only uses the first 72 bytes) → `'too long'`

Modern guidance (NIST 800-63B) favours **length** over complex composition rules, and checking against known-breached passwords. But you'll often have to implement whatever the policy says, precisely.

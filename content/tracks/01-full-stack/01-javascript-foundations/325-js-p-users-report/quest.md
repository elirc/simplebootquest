---
slug: "js-p-users-report"
title: "Practice: Querying a User List"
type: "code"
language: "js"
xp: 15
hints: ["Treat each filter as \"pass\" when it is undefined."]
---
## Your task
Given users like `{ name, age, country, active }`, implement `findUsers(users, { minAge, maxAge, country, activeOnly })`. All filters are optional, and age bounds are inclusive. Return the matching users' **names**, sorted alphabetically.

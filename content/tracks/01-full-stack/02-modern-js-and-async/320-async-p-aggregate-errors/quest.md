---
slug: "async-p-aggregate-errors"
title: "Practice: Collecting Every Failure"
type: "code"
language: "js"
xp: 15
optional: true
section: "Practice"
hints: ["`new AggregateError(errors, message)`"]
---
# Practice: Collecting Every Failure

`Promise.all` stops at the first failure, but sometimes you need to know about **every** failure, for example when validating 20 webhook endpoints at once.

## Your task
`runAll(tasks)` runs all the async task functions in parallel. If they all succeed, it resolves to the results. If any fail, it rejects with an `AggregateError` whose `errors` contains every rejection reason (in task order), and whose message is `"<n> of <total> tasks failed"`.

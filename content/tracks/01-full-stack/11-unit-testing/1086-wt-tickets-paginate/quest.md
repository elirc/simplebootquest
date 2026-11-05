---
slug: "wt-tickets-paginate"
title: "Test It: Paginate tickets"
type: "code"
language: "js"
mode: "write-tests"
xp: 20
optional: true
section: "Practice: Test It (Mutation Graded)"
---
# Test It: Paginate tickets

The **Code under test** tab has a correct `pageOfTickets` and its dataset `TICKETS`. Write tests that pass against it **and** catch 2 hidden buggy versions (boundary mistakes, wrong rounding, mutated inputs…).

What the function does:

Return `{ items, page, totalPages }` where `items` are the subjects on page `page` (1-based) of size `size`. Out-of-range pages return an empty `items` array.

Tips: test the edges (an empty array, values exactly at a threshold, ties), not just one happy path. Use `toEqual` for arrays and objects.

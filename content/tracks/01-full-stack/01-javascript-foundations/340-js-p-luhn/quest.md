---
slug: "js-p-luhn"
title: "Practice: The Luhn Checksum"
type: "code"
language: "js"
xp: 15
hints: ["Iterate from the right using `digits.length - 1 - i`."]
---
# Practice: The Luhn Checksum

Credit card numbers include a **Luhn** check digit that catches most single-digit typos before a payment request is even sent.

Algorithm: from the **rightmost** digit, moving left, double every second digit. If doubling gives more than 9, subtract 9. Sum all the digits; the number is valid if the sum is divisible by 10.

## Your task
`luhnValid(number)` accepts a string that may contain spaces, requires at least 2 digits (and nothing else), and returns whether it passes.

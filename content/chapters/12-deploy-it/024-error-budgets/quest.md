---
slug: "deploy-error-budgets"
title: "SLOs & Error Budgets"
type: "code"
language: "ts"
xp: 20
hints: ["The allowed error rate is `(100 - slo) / 100`.", "There are `days * 24 * 60` minutes in the window."]
resources: [{"title": "Google SRE book: Embracing risk", "url": "https://sre.google/sre-book/embracing-risk/"}]
---
# SLOs & Error Budgets

How reliable is "reliable enough"? Teams set a **Service Level Objective**, such as "99.9% of requests succeed over 30 days". The remaining 0.1% is the **error budget**: failures you can "spend" on deploys and experiments.

- 99.9% over 30 days ≈ **43 minutes** of downtime.
- Budget left → ship faster.
- Budget burned → freeze risky changes and focus on reliability.

**Burn rate** says how fast you're using it: a burn rate of 1 uses exactly the whole budget over the window, while a burn rate of 10 exhausts it in a tenth of the time. Alerts usually fire on high burn rates.

## Your task

1. `downtimeAllowed(slo, days)` returns the allowed downtime in **minutes** for an availability SLO (like `99.9`), rounded to 1 decimal place.
2. `budgetReport(slo, total, failed)` returns `{ availability, budgetUsed, remaining }`, where availability is a percentage rounded to 3 decimals, `budgetUsed` is the fraction of the error budget consumed, rounded to 2 decimals, and `remaining` is the number of failures still allowed (0 if over budget).
3. `burnRate(slo, windowTotal, windowFailed)` returns the error rate in the window divided by the allowed error rate (`(100 - slo) / 100`), rounded to 1 decimal place.

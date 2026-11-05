---
slug: "sd06-error-budget-8"
title: "Design Drill: Error budgets #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **7 million** requests and **21,000** failures. How much error budget is left?","options":["70,000 failed requests (100% of the budget)","None: it's overspent by 50,000","49,000 failed requests (70% of the budget)","98,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **74 million** requests and **518,000** failures. How much error budget is left?","options":["740,000 failed requests (100% of the budget)","444,000 failed requests (60% of the budget)","None: it's overspent by 223,000","222,000 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **58 million** requests and **174,000** failures. How much error budget is left?","options":["580,000 failed requests (100% of the budget)","812,000 failed requests (99% of the budget)","None: it's overspent by 407,000","406,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **51 million** requests and **612,000** failures. How much error budget is left?","options":["None: it's overspent by 103,000","204,000 failed requests (40% of the budget)","510,000 failed requests (100% of the budget)","None: it's overspent by 102,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **89 million** requests and **623,000** failures. How much error budget is left?","options":["None: it's overspent by 268,000","534,000 failed requests (60% of the budget)","267,000 failed requests (30% of the budget)","890,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #8

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

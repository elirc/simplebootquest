---
slug: "sd06-error-budget-56"
title: "Design Drill: Error budgets #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **47 million** requests and **56,400** failures. How much error budget is left?","options":["None: it's overspent by 9400","None: it's overspent by 10,400","47,000 failed requests (100% of the budget)","18,800 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **57 million** requests and **399,000** failures. How much error budget is left?","options":["570,000 failed requests (100% of the budget)","171,000 failed requests (30% of the budget)","342,000 failed requests (60% of the budget)","None: it's overspent by 172,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **68 million** requests and **816,000** failures. How much error budget is left?","options":["None: it's overspent by 137,000","272,000 failed requests (40% of the budget)","None: it's overspent by 136,000","680,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **77 million** requests and **462,000** failures. How much error budget is left?","options":["385,000 failed requests (100% of the budget)","154,000 failed requests (40% of the budget)","None: it's overspent by 77,000","None: it's overspent by 78,000"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **15 million** requests and **4500** failures. How much error budget is left?","options":["10,500 failed requests (70% of the budget)","15,000 failed requests (100% of the budget)","None: it's overspent by 11,500","21,000 failed requests (99% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #56

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

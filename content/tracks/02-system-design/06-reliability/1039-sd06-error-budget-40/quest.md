---
slug: "sd06-error-budget-40"
title: "Design Drill: Error budgets #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **33 million** requests and **9900** failures. How much error budget is left?","options":["46,200 failed requests (99% of the budget)","23,100 failed requests (70% of the budget)","33,000 failed requests (100% of the budget)","None: it's overspent by 24,100"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **94 million** requests and **1.13 million** failures. How much error budget is left?","options":["940,000 failed requests (100% of the budget)","None: it's overspent by 188,000","None: it's overspent by 189,000","376,000 failed requests (40% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **32 million** requests and **38,400** failures. How much error budget is left?","options":["None: it's overspent by 7400","32,000 failed requests (100% of the budget)","12,800 failed requests (40% of the budget)","None: it's overspent by 6400"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **38 million** requests and **45,600** failures. How much error budget is left?","options":["38,000 failed requests (100% of the budget)","None: it's overspent by 7600","15,200 failed requests (40% of the budget)","None: it's overspent by 8600"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **30 million** requests and **600,000** failures. How much error budget is left?","options":["600,000 failed requests (99% of the budget)","300,000 failed requests (100% of the budget)","None: it's overspent by 301,000","None: it's overspent by 300,000"],"answer":3}]
---
# Design Drill: Error budgets #40

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

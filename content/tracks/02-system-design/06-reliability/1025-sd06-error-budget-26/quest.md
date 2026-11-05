---
slug: "sd06-error-budget-26"
title: "Design Drill: Error budgets #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **53 million** requests and **371,000** failures. How much error budget is left?","options":["530,000 failed requests (100% of the budget)","159,000 failed requests (30% of the budget)","318,000 failed requests (60% of the budget)","None: it's overspent by 160,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **99 million** requests and **693,000** failures. How much error budget is left?","options":["None: it's overspent by 298,000","990,000 failed requests (100% of the budget)","297,000 failed requests (30% of the budget)","594,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **80 million** requests and **96,000** failures. How much error budget is left?","options":["None: it's overspent by 16,000","None: it's overspent by 17,000","80,000 failed requests (100% of the budget)","32,000 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **83 million** requests and **290,500** failures. How much error budget is left?","options":["249,000 failed requests (60% of the budget)","124,500 failed requests (30% of the budget)","415,000 failed requests (100% of the budget)","None: it's overspent by 125,500"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **45 million** requests and **13,500** failures. How much error budget is left?","options":["None: it's overspent by 32,500","31,500 failed requests (70% of the budget)","45,000 failed requests (100% of the budget)","63,000 failed requests (99% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #26

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

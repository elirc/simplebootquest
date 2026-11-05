---
slug: "sd06-error-budget-28"
title: "Design Drill: Error budgets #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **58 million** requests and **69,600** failures. How much error budget is left?","options":["None: it's overspent by 11,600","None: it's overspent by 12,600","58,000 failed requests (100% of the budget)","23,200 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **58 million** requests and **17,400** failures. How much error budget is left?","options":["58,000 failed requests (100% of the budget)","81,200 failed requests (99% of the budget)","None: it's overspent by 41,600","40,600 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **15 million** requests and **10,500** failures. How much error budget is left?","options":["None: it's overspent by 5500","9000 failed requests (60% of the budget)","15,000 failed requests (100% of the budget)","4500 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **23 million** requests and **46,000** failures. How much error budget is left?","options":["23,000 failed requests (100% of the budget)","None: it's overspent by 23,000","None: it's overspent by 24,000","46,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **5 million** requests and **50,000** failures. How much error budget is left?","options":["50,000 failed requests (99% of the budget)","None: it's overspent by 25,000","25,000 failed requests (100% of the budget)","None: it's overspent by 26,000"],"answer":1}]
---
# Design Drill: Error budgets #28

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

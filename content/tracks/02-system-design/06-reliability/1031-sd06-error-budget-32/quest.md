---
slug: "sd06-error-budget-32"
title: "Design Drill: Error budgets #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **66 million** requests and **46,200** failures. How much error budget is left?","options":["None: it's overspent by 20,800","19,800 failed requests (30% of the budget)","66,000 failed requests (100% of the budget)","39,600 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **14 million** requests and **168,000** failures. How much error budget is left?","options":["56,000 failed requests (40% of the budget)","140,000 failed requests (100% of the budget)","None: it's overspent by 28,000","None: it's overspent by 29,000"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **46 million** requests and **322,000** failures. How much error budget is left?","options":["None: it's overspent by 139,000","460,000 failed requests (100% of the budget)","138,000 failed requests (30% of the budget)","276,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **18 million** requests and **12,600** failures. How much error budget is left?","options":["None: it's overspent by 6400","5400 failed requests (30% of the budget)","18,000 failed requests (100% of the budget)","10,800 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **83 million** requests and **581,000** failures. How much error budget is left?","options":["249,000 failed requests (30% of the budget)","None: it's overspent by 250,000","498,000 failed requests (60% of the budget)","830,000 failed requests (100% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #32

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

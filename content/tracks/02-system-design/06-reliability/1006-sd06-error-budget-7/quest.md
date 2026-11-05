---
slug: "sd06-error-budget-7"
title: "Design Drill: Error budgets #7"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **56 million** requests and **196,000** failures. How much error budget is left?","options":["None: it's overspent by 85,000","280,000 failed requests (100% of the budget)","84,000 failed requests (30% of the budget)","168,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **4 million** requests and **1200** failures. How much error budget is left?","options":["4000 failed requests (100% of the budget)","None: it's overspent by 3800","5600 failed requests (99% of the budget)","2800 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **95 million** requests and **66,500** failures. How much error budget is left?","options":["95,000 failed requests (100% of the budget)","28,500 failed requests (30% of the budget)","None: it's overspent by 29,500","57,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **98 million** requests and **1.96 million** failures. How much error budget is left?","options":["None: it's overspent by 980,000","None: it's overspent by 981,000","980,000 failed requests (100% of the budget)","1.96 million failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **80 million** requests and **24,000** failures. How much error budget is left?","options":["56,000 failed requests (70% of the budget)","None: it's overspent by 57,000","112,000 failed requests (99% of the budget)","80,000 failed requests (100% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #7

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

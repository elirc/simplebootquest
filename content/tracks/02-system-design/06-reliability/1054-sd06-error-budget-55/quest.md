---
slug: "sd06-error-budget-55"
title: "Design Drill: Error budgets #55"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **34 million** requests and **10,200** failures. How much error budget is left?","options":["34,000 failed requests (100% of the budget)","None: it's overspent by 24,800","47,600 failed requests (99% of the budget)","23,800 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **19 million** requests and **133,000** failures. How much error budget is left?","options":["None: it's overspent by 58,000","190,000 failed requests (100% of the budget)","57,000 failed requests (30% of the budget)","114,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **74 million** requests and **51,800** failures. How much error budget is left?","options":["22,200 failed requests (30% of the budget)","44,400 failed requests (60% of the budget)","None: it's overspent by 23,200","74,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **67 million** requests and **100,500** failures. How much error budget is left?","options":["None: it's overspent by 235,500","469,000 failed requests (99% of the budget)","335,000 failed requests (100% of the budget)","234,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **47 million** requests and **94,000** failures. How much error budget is left?","options":["None: it's overspent by 47,000","94,000 failed requests (99% of the budget)","47,000 failed requests (100% of the budget)","None: it's overspent by 48,000"],"answer":0}]
---
# Design Drill: Error budgets #55

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

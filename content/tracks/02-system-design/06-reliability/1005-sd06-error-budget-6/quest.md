---
slug: "sd06-error-budget-6"
title: "Design Drill: Error budgets #6"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **26 million** requests and **39,000** failures. How much error budget is left?","options":["182,000 failed requests (99% of the budget)","91,000 failed requests (70% of the budget)","130,000 failed requests (100% of the budget)","None: it's overspent by 92,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **23 million** requests and **276,000** failures. How much error budget is left?","options":["None: it's overspent by 47,000","92,000 failed requests (40% of the budget)","230,000 failed requests (100% of the budget)","None: it's overspent by 46,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **28 million** requests and **56,000** failures. How much error budget is left?","options":["None: it's overspent by 28,000","None: it's overspent by 29,000","28,000 failed requests (100% of the budget)","56,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **83 million** requests and **166,000** failures. How much error budget is left?","options":["166,000 failed requests (99% of the budget)","None: it's overspent by 84,000","83,000 failed requests (100% of the budget)","None: it's overspent by 83,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **52 million** requests and **104,000** failures. How much error budget is left?","options":["52,000 failed requests (100% of the budget)","104,000 failed requests (99% of the budget)","None: it's overspent by 53,000","None: it's overspent by 52,000"],"answer":3}]
---
# Design Drill: Error budgets #6

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

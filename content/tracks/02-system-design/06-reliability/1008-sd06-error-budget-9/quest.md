---
slug: "sd06-error-budget-9"
title: "Design Drill: Error budgets #9"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **39 million** requests and **46,800** failures. How much error budget is left?","options":["15,600 failed requests (40% of the budget)","39,000 failed requests (100% of the budget)","None: it's overspent by 8800","None: it's overspent by 7800"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **9 million** requests and **54,000** failures. How much error budget is left?","options":["None: it's overspent by 10000","None: it's overspent by 9000","18,000 failed requests (40% of the budget)","45,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **17 million** requests and **59,500** failures. How much error budget is left?","options":["None: it's overspent by 26,500","51,000 failed requests (60% of the budget)","25,500 failed requests (30% of the budget)","85,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **94 million** requests and **112,800** failures. How much error budget is left?","options":["37,600 failed requests (40% of the budget)","94,000 failed requests (100% of the budget)","None: it's overspent by 18,800","None: it's overspent by 19,800"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **12 million** requests and **18,000** failures. How much error budget is left?","options":["84,000 failed requests (99% of the budget)","60,000 failed requests (100% of the budget)","42,000 failed requests (70% of the budget)","None: it's overspent by 43,000"],"answer":2}]
---
# Design Drill: Error budgets #9

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

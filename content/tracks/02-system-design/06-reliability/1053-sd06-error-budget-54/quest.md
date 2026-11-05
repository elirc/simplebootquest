---
slug: "sd06-error-budget-54"
title: "Design Drill: Error budgets #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **33 million** requests and **39,600** failures. How much error budget is left?","options":["33,000 failed requests (100% of the budget)","None: it's overspent by 7600","None: it's overspent by 6600","13,200 failed requests (40% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **27 million** requests and **40,500** failures. How much error budget is left?","options":["None: it's overspent by 95,500","135,000 failed requests (100% of the budget)","189,000 failed requests (99% of the budget)","94,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **62 million** requests and **18,600** failures. How much error budget is left?","options":["43,400 failed requests (70% of the budget)","62,000 failed requests (100% of the budget)","None: it's overspent by 44,400","86,800 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **10 million** requests and **3000** failures. How much error budget is left?","options":["7000 failed requests (70% of the budget)","10,000 failed requests (100% of the budget)","14,000 failed requests (99% of the budget)","None: it's overspent by 8000"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **28 million** requests and **336,000** failures. How much error budget is left?","options":["112,000 failed requests (40% of the budget)","None: it's overspent by 56,000","None: it's overspent by 57,000","280,000 failed requests (100% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #54

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

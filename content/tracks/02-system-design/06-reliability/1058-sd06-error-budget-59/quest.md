---
slug: "sd06-error-budget-59"
title: "Design Drill: Error budgets #59"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **40 million** requests and **60,000** failures. How much error budget is left?","options":["200,000 failed requests (100% of the budget)","None: it's overspent by 141,000","140,000 failed requests (70% of the budget)","280,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **35 million** requests and **70,000** failures. How much error budget is left?","options":["70,000 failed requests (99% of the budget)","35,000 failed requests (100% of the budget)","None: it's overspent by 35,000","None: it's overspent by 36,000"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **93 million** requests and **930,000** failures. How much error budget is left?","options":["None: it's overspent by 465,000","930,000 failed requests (99% of the budget)","None: it's overspent by 466,000","465,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **6 million** requests and **21,000** failures. How much error budget is left?","options":["30,000 failed requests (100% of the budget)","18,000 failed requests (60% of the budget)","9000 failed requests (30% of the budget)","None: it's overspent by 10,000"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **7 million** requests and **14,000** failures. How much error budget is left?","options":["None: it's overspent by 8000","14,000 failed requests (99% of the budget)","7000 failed requests (100% of the budget)","None: it's overspent by 7000"],"answer":3}]
---
# Design Drill: Error budgets #59

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-39"
title: "Design Drill: Error budgets #39"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **66 million** requests and **99,000** failures. How much error budget is left?","options":["231,000 failed requests (70% of the budget)","462,000 failed requests (99% of the budget)","330,000 failed requests (100% of the budget)","None: it's overspent by 232,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **10 million** requests and **100,000** failures. How much error budget is left?","options":["50,000 failed requests (100% of the budget)","None: it's overspent by 50,000","100,000 failed requests (99% of the budget)","None: it's overspent by 51,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **6 million** requests and **72,000** failures. How much error budget is left?","options":["60,000 failed requests (100% of the budget)","None: it's overspent by 13,000","24,000 failed requests (40% of the budget)","None: it's overspent by 12,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **8 million** requests and **96,000** failures. How much error budget is left?","options":["32,000 failed requests (40% of the budget)","None: it's overspent by 16,000","None: it's overspent by 17,000","80,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **81 million** requests and **162,000** failures. How much error budget is left?","options":["81,000 failed requests (100% of the budget)","None: it's overspent by 82,000","162,000 failed requests (99% of the budget)","None: it's overspent by 81,000"],"answer":3}]
---
# Design Drill: Error budgets #39

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

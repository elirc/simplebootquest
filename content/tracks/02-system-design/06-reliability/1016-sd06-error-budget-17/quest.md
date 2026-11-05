---
slug: "sd06-error-budget-17"
title: "Design Drill: Error budgets #17"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **35 million** requests and **420,000** failures. How much error budget is left?","options":["350,000 failed requests (100% of the budget)","None: it's overspent by 70,000","140,000 failed requests (40% of the budget)","None: it's overspent by 71,000"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **45 million** requests and **90,000** failures. How much error budget is left?","options":["None: it's overspent by 45,000","None: it's overspent by 46,000","90,000 failed requests (99% of the budget)","45,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **81 million** requests and **283,500** failures. How much error budget is left?","options":["243,000 failed requests (60% of the budget)","405,000 failed requests (100% of the budget)","None: it's overspent by 122,500","121,500 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **8 million** requests and **48,000** failures. How much error budget is left?","options":["None: it's overspent by 9000","16,000 failed requests (40% of the budget)","None: it's overspent by 8000","40,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **23 million** requests and **69,000** failures. How much error budget is left?","options":["322,000 failed requests (99% of the budget)","None: it's overspent by 162,000","161,000 failed requests (70% of the budget)","230,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #17

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

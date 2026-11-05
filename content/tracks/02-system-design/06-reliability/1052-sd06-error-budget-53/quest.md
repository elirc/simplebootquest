---
slug: "sd06-error-budget-53"
title: "Design Drill: Error budgets #53"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **98 million** requests and **343,000** failures. How much error budget is left?","options":["294,000 failed requests (60% of the budget)","147,000 failed requests (30% of the budget)","None: it's overspent by 148,000","490,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **99 million** requests and **346,500** failures. How much error budget is left?","options":["495,000 failed requests (100% of the budget)","297,000 failed requests (60% of the budget)","None: it's overspent by 149,500","148,500 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **28 million** requests and **280,000** failures. How much error budget is left?","options":["None: it's overspent by 141,000","None: it's overspent by 140,000","140,000 failed requests (100% of the budget)","280,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **23 million** requests and **460,000** failures. How much error budget is left?","options":["None: it's overspent by 230,000","460,000 failed requests (99% of the budget)","230,000 failed requests (100% of the budget)","None: it's overspent by 231,000"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **51 million** requests and **61,200** failures. How much error budget is left?","options":["None: it's overspent by 11,200","51,000 failed requests (100% of the budget)","20,400 failed requests (40% of the budget)","None: it's overspent by 10,200"],"answer":3}]
---
# Design Drill: Error budgets #53

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

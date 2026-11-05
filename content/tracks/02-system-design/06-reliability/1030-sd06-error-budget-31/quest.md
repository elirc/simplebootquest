---
slug: "sd06-error-budget-31"
title: "Design Drill: Error budgets #31"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **19 million** requests and **228,000** failures. How much error budget is left?","options":["None: it's overspent by 39,000","190,000 failed requests (100% of the budget)","76,000 failed requests (40% of the budget)","None: it's overspent by 38,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **6 million** requests and **42,000** failures. How much error budget is left?","options":["None: it's overspent by 19,000","18,000 failed requests (30% of the budget)","60,000 failed requests (100% of the budget)","36,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **98 million** requests and **980,000** failures. How much error budget is left?","options":["490,000 failed requests (100% of the budget)","None: it's overspent by 491,000","980,000 failed requests (99% of the budget)","None: it's overspent by 490,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **34 million** requests and **119,000** failures. How much error budget is left?","options":["51,000 failed requests (30% of the budget)","None: it's overspent by 52,000","102,000 failed requests (60% of the budget)","170,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **58 million** requests and **696,000** failures. How much error budget is left?","options":["580,000 failed requests (100% of the budget)","None: it's overspent by 117,000","232,000 failed requests (40% of the budget)","None: it's overspent by 116,000"],"answer":3}]
---
# Design Drill: Error budgets #31

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-21"
title: "Design Drill: Error budgets #21"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **95 million** requests and **1.14 million** failures. How much error budget is left?","options":["None: it's overspent by 190,000","None: it's overspent by 191,000","950,000 failed requests (100% of the budget)","380,000 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **25 million** requests and **175,000** failures. How much error budget is left?","options":["150,000 failed requests (60% of the budget)","None: it's overspent by 76,000","250,000 failed requests (100% of the budget)","75,000 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **66 million** requests and **396,000** failures. How much error budget is left?","options":["132,000 failed requests (40% of the budget)","None: it's overspent by 66,000","None: it's overspent by 67,000","330,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **29 million** requests and **101,500** failures. How much error budget is left?","options":["87,000 failed requests (60% of the budget)","43,500 failed requests (30% of the budget)","145,000 failed requests (100% of the budget)","None: it's overspent by 44,500"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **7 million** requests and **24,500** failures. How much error budget is left?","options":["21,000 failed requests (60% of the budget)","35,000 failed requests (100% of the budget)","None: it's overspent by 11,500","10,500 failed requests (30% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #21

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-60"
title: "Design Drill: Error budgets #60"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **12 million** requests and **240,000** failures. How much error budget is left?","options":["None: it's overspent by 121,000","240,000 failed requests (99% of the budget)","None: it's overspent by 120,000","120,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **26 million** requests and **260,000** failures. How much error budget is left?","options":["None: it's overspent by 131,000","None: it's overspent by 130,000","130,000 failed requests (100% of the budget)","260,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **29 million** requests and **174,000** failures. How much error budget is left?","options":["58,000 failed requests (40% of the budget)","None: it's overspent by 30,000","145,000 failed requests (100% of the budget)","None: it's overspent by 29,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **48 million** requests and **336,000** failures. How much error budget is left?","options":["144,000 failed requests (30% of the budget)","None: it's overspent by 145,000","480,000 failed requests (100% of the budget)","288,000 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **27 million** requests and **162,000** failures. How much error budget is left?","options":["54,000 failed requests (40% of the budget)","None: it's overspent by 27,000","None: it's overspent by 28,000","135,000 failed requests (100% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #60

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

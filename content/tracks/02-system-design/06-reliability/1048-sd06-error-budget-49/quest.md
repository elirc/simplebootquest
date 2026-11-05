---
slug: "sd06-error-budget-49"
title: "Design Drill: Error budgets #49"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **49 million** requests and **171,500** failures. How much error budget is left?","options":["73,500 failed requests (30% of the budget)","147,000 failed requests (60% of the budget)","245,000 failed requests (100% of the budget)","None: it's overspent by 74,500"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **84 million** requests and **252,000** failures. How much error budget is left?","options":["None: it's overspent by 589,000","1.18 million failed requests (99% of the budget)","840,000 failed requests (100% of the budget)","588,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **89 million** requests and **311,500** failures. How much error budget is left?","options":["133,500 failed requests (30% of the budget)","267,000 failed requests (60% of the budget)","445,000 failed requests (100% of the budget)","None: it's overspent by 134,500"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **57 million** requests and **684,000** failures. How much error budget is left?","options":["228,000 failed requests (40% of the budget)","None: it's overspent by 114,000","570,000 failed requests (100% of the budget)","None: it's overspent by 115,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **15 million** requests and **105,000** failures. How much error budget is left?","options":["45,000 failed requests (30% of the budget)","150,000 failed requests (100% of the budget)","90,000 failed requests (60% of the budget)","None: it's overspent by 46,000"],"answer":0}]
---
# Design Drill: Error budgets #49

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

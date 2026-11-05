---
slug: "sd06-error-budget-29"
title: "Design Drill: Error budgets #29"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **41 million** requests and **49,200** failures. How much error budget is left?","options":["None: it's overspent by 9200","None: it's overspent by 8200","16,400 failed requests (40% of the budget)","41,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **75 million** requests and **90,000** failures. How much error budget is left?","options":["30,000 failed requests (40% of the budget)","None: it's overspent by 15,000","75,000 failed requests (100% of the budget)","None: it's overspent by 16,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **27 million** requests and **324,000** failures. How much error budget is left?","options":["None: it's overspent by 54,000","None: it's overspent by 55,000","270,000 failed requests (100% of the budget)","108,000 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **36 million** requests and **720,000** failures. How much error budget is left?","options":["360,000 failed requests (100% of the budget)","None: it's overspent by 360,000","None: it's overspent by 361,000","720,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **96 million** requests and **336,000** failures. How much error budget is left?","options":["480,000 failed requests (100% of the budget)","None: it's overspent by 145,000","144,000 failed requests (30% of the budget)","288,000 failed requests (60% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #29

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

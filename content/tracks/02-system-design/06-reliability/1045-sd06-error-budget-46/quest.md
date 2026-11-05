---
slug: "sd06-error-budget-46"
title: "Design Drill: Error budgets #46"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **76 million** requests and **22,800** failures. How much error budget is left?","options":["76,000 failed requests (100% of the budget)","106,400 failed requests (99% of the budget)","None: it's overspent by 54,200","53,200 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **2 million** requests and **12,000** failures. How much error budget is left?","options":["None: it's overspent by 3000","4000 failed requests (40% of the budget)","10,000 failed requests (100% of the budget)","None: it's overspent by 2000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **32 million** requests and **384,000** failures. How much error budget is left?","options":["None: it's overspent by 64,000","128,000 failed requests (40% of the budget)","320,000 failed requests (100% of the budget)","None: it's overspent by 65,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **44 million** requests and **440,000** failures. How much error budget is left?","options":["440,000 failed requests (99% of the budget)","None: it's overspent by 220,000","220,000 failed requests (100% of the budget)","None: it's overspent by 221,000"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **15 million** requests and **30,000** failures. How much error budget is left?","options":["None: it's overspent by 15,000","30,000 failed requests (99% of the budget)","15,000 failed requests (100% of the budget)","None: it's overspent by 16,000"],"answer":0}]
---
# Design Drill: Error budgets #46

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-47"
title: "Design Drill: Error budgets #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **10 million** requests and **30,000** failures. How much error budget is left?","options":["70,000 failed requests (70% of the budget)","None: it's overspent by 71,000","100,000 failed requests (100% of the budget)","140,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **54 million** requests and **648,000** failures. How much error budget is left?","options":["540,000 failed requests (100% of the budget)","None: it's overspent by 108,000","216,000 failed requests (40% of the budget)","None: it's overspent by 109,000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **22 million** requests and **220,000** failures. How much error budget is left?","options":["220,000 failed requests (99% of the budget)","None: it's overspent by 111,000","None: it's overspent by 110,000","110,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **38 million** requests and **11,400** failures. How much error budget is left?","options":["26,600 failed requests (70% of the budget)","None: it's overspent by 27,600","53,200 failed requests (99% of the budget)","38,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **55 million** requests and **550,000** failures. How much error budget is left?","options":["None: it's overspent by 275,000","275,000 failed requests (100% of the budget)","550,000 failed requests (99% of the budget)","None: it's overspent by 276,000"],"answer":0}]
---
# Design Drill: Error budgets #47

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-3"
title: "Design Drill: Error budgets #3"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **84 million** requests and **126,000** failures. How much error budget is left?","options":["None: it's overspent by 295,000","420,000 failed requests (100% of the budget)","588,000 failed requests (99% of the budget)","294,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **86 million** requests and **516,000** failures. How much error budget is left?","options":["None: it's overspent by 86,000","430,000 failed requests (100% of the budget)","172,000 failed requests (40% of the budget)","None: it's overspent by 87,000"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **22 million** requests and **26,400** failures. How much error budget is left?","options":["22,000 failed requests (100% of the budget)","8800 failed requests (40% of the budget)","None: it's overspent by 5400","None: it's overspent by 4400"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **2 million** requests and **6000** failures. How much error budget is left?","options":["14,000 failed requests (70% of the budget)","None: it's overspent by 15,000","20,000 failed requests (100% of the budget)","28,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **47 million** requests and **14,100** failures. How much error budget is left?","options":["65,800 failed requests (99% of the budget)","None: it's overspent by 33,900","47,000 failed requests (100% of the budget)","32,900 failed requests (70% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #3

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-11"
title: "Design Drill: Error budgets #11"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **76 million** requests and **53,200** failures. How much error budget is left?","options":["22,800 failed requests (30% of the budget)","45,600 failed requests (60% of the budget)","None: it's overspent by 23,800","76,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **69 million** requests and **483,000** failures. How much error budget is left?","options":["690,000 failed requests (100% of the budget)","None: it's overspent by 208,000","207,000 failed requests (30% of the budget)","414,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **5 million** requests and **6000** failures. How much error budget is left?","options":["None: it's overspent by 1000","2000 failed requests (40% of the budget)","5000 failed requests (100% of the budget)","None: it's overspent by 2000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **17 million** requests and **25,500** failures. How much error budget is left?","options":["119,000 failed requests (99% of the budget)","None: it's overspent by 60,500","59,500 failed requests (70% of the budget)","85,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **8 million** requests and **80,000** failures. How much error budget is left?","options":["None: it's overspent by 40,000","None: it's overspent by 41,000","40,000 failed requests (100% of the budget)","80,000 failed requests (99% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #11

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

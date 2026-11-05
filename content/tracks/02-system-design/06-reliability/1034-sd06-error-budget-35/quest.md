---
slug: "sd06-error-budget-35"
title: "Design Drill: Error budgets #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **69 million** requests and **103,500** failures. How much error budget is left?","options":["241,500 failed requests (70% of the budget)","None: it's overspent by 242,500","483,000 failed requests (99% of the budget)","345,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **10 million** requests and **120,000** failures. How much error budget is left?","options":["100,000 failed requests (100% of the budget)","40,000 failed requests (40% of the budget)","None: it's overspent by 20,000","None: it's overspent by 21,000"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **56 million** requests and **16,800** failures. How much error budget is left?","options":["56,000 failed requests (100% of the budget)","39,200 failed requests (70% of the budget)","78,400 failed requests (99% of the budget)","None: it's overspent by 40,200"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **5 million** requests and **7500** failures. How much error budget is left?","options":["17,500 failed requests (70% of the budget)","None: it's overspent by 18,500","25,000 failed requests (100% of the budget)","35,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **24 million** requests and **28,800** failures. How much error budget is left?","options":["None: it's overspent by 5800","None: it's overspent by 4800","24,000 failed requests (100% of the budget)","9600 failed requests (40% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #35

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

---
slug: "sd06-error-budget-50"
title: "Design Drill: Error budgets #50"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **55 million** requests and **110,000** failures. How much error budget is left?","options":["55,000 failed requests (100% of the budget)","None: it's overspent by 56,000","None: it's overspent by 55,000","110,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **40 million** requests and **48,000** failures. How much error budget is left?","options":["40,000 failed requests (100% of the budget)","None: it's overspent by 8000","None: it's overspent by 9000","16,000 failed requests (40% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **77 million** requests and **115,500** failures. How much error budget is left?","options":["None: it's overspent by 270,500","269,500 failed requests (70% of the budget)","539,000 failed requests (99% of the budget)","385,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **2 million** requests and **1400** failures. How much error budget is left?","options":["None: it's overspent by 1600","2000 failed requests (100% of the budget)","1200 failed requests (60% of the budget)","600 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **42 million** requests and **840,000** failures. How much error budget is left?","options":["None: it's overspent by 421,000","None: it's overspent by 420,000","420,000 failed requests (100% of the budget)","840,000 failed requests (99% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #50

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

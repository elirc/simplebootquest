---
slug: "sd06-error-budget-15"
title: "Design Drill: Error budgets #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **33 million** requests and **115,500** failures. How much error budget is left?","options":["99,000 failed requests (60% of the budget)","None: it's overspent by 50,500","165,000 failed requests (100% of the budget)","49,500 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **13 million** requests and **9100** failures. How much error budget is left?","options":["7800 failed requests (60% of the budget)","3900 failed requests (30% of the budget)","13,000 failed requests (100% of the budget)","None: it's overspent by 4900"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **64 million** requests and **448,000** failures. How much error budget is left?","options":["None: it's overspent by 193,000","640,000 failed requests (100% of the budget)","192,000 failed requests (30% of the budget)","384,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **71 million** requests and **852,000** failures. How much error budget is left?","options":["None: it's overspent by 142,000","710,000 failed requests (100% of the budget)","None: it's overspent by 143,000","284,000 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **94 million** requests and **1.88 million** failures. How much error budget is left?","options":["None: it's overspent by 941,000","940,000 failed requests (100% of the budget)","None: it's overspent by 940,000","1.88 million failed requests (99% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #15

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

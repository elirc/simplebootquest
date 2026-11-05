---
slug: "sd06-error-budget-27"
title: "Design Drill: Error budgets #27"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **4 million** requests and **6000** failures. How much error budget is left?","options":["28,000 failed requests (99% of the budget)","20,000 failed requests (100% of the budget)","14,000 failed requests (70% of the budget)","None: it's overspent by 15,000"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **67 million** requests and **20,100** failures. How much error budget is left?","options":["None: it's overspent by 47,900","93,800 failed requests (99% of the budget)","67,000 failed requests (100% of the budget)","46,900 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **10 million** requests and **35,000** failures. How much error budget is left?","options":["15,000 failed requests (30% of the budget)","30,000 failed requests (60% of the budget)","50,000 failed requests (100% of the budget)","None: it's overspent by 16,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **13 million** requests and **130,000** failures. How much error budget is left?","options":["130,000 failed requests (99% of the budget)","None: it's overspent by 65,000","None: it's overspent by 66,000","65,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **72 million** requests and **864,000** failures. How much error budget is left?","options":["None: it's overspent by 145,000","288,000 failed requests (40% of the budget)","None: it's overspent by 144,000","720,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #27

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

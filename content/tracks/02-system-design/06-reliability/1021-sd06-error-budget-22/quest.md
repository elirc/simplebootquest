---
slug: "sd06-error-budget-22"
title: "Design Drill: Error budgets #22"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **20 million** requests and **14,000** failures. How much error budget is left?","options":["12,000 failed requests (60% of the budget)","6000 failed requests (30% of the budget)","20,000 failed requests (100% of the budget)","None: it's overspent by 7000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **52 million** requests and **520,000** failures. How much error budget is left?","options":["None: it's overspent by 260,000","260,000 failed requests (100% of the budget)","None: it's overspent by 261,000","520,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **78 million** requests and **1.56 million** failures. How much error budget is left?","options":["None: it's overspent by 781,000","1.56 million failed requests (99% of the budget)","780,000 failed requests (100% of the budget)","None: it's overspent by 780,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **89 million** requests and **1.78 million** failures. How much error budget is left?","options":["None: it's overspent by 890,000","890,000 failed requests (100% of the budget)","None: it's overspent by 891,000","1.78 million failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **5 million** requests and **10,000** failures. How much error budget is left?","options":["5000 failed requests (100% of the budget)","10000 failed requests (99% of the budget)","None: it's overspent by 5000","None: it's overspent by 6000"],"answer":2}]
---
# Design Drill: Error budgets #22

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

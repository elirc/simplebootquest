---
slug: "sd06-error-budget-36"
title: "Design Drill: Error budgets #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **20 million** requests and **60,000** failures. How much error budget is left?","options":["200,000 failed requests (100% of the budget)","280,000 failed requests (99% of the budget)","None: it's overspent by 141,000","140,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **12 million** requests and **84,000** failures. How much error budget is left?","options":["None: it's overspent by 37,000","120,000 failed requests (100% of the budget)","36,000 failed requests (30% of the budget)","72,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **46 million** requests and **276,000** failures. How much error budget is left?","options":["92,000 failed requests (40% of the budget)","None: it's overspent by 47,000","230,000 failed requests (100% of the budget)","None: it's overspent by 46,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **40 million** requests and **240,000** failures. How much error budget is left?","options":["None: it's overspent by 40,000","200,000 failed requests (100% of the budget)","None: it's overspent by 41,000","80,000 failed requests (40% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **24 million** requests and **168,000** failures. How much error budget is left?","options":["240,000 failed requests (100% of the budget)","72,000 failed requests (30% of the budget)","144,000 failed requests (60% of the budget)","None: it's overspent by 73,000"],"answer":1}]
---
# Design Drill: Error budgets #36

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

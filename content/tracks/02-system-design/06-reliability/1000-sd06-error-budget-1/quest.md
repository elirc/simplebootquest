---
slug: "sd06-error-budget-1"
title: "Design Drill: Error budgets #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **84 million** requests and **504,000** failures. How much error budget is left?","options":["168,000 failed requests (40% of the budget)","None: it's overspent by 84,000","420,000 failed requests (100% of the budget)","None: it's overspent by 85,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **94 million** requests and **282,000** failures. How much error budget is left?","options":["940,000 failed requests (100% of the budget)","658,000 failed requests (70% of the budget)","1.32 million failed requests (99% of the budget)","None: it's overspent by 659,000"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **50 million** requests and **60,000** failures. How much error budget is left?","options":["None: it's overspent by 10000","20,000 failed requests (40% of the budget)","None: it's overspent by 11,000","50,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **53 million** requests and **106,000** failures. How much error budget is left?","options":["106,000 failed requests (99% of the budget)","None: it's overspent by 54,000","53,000 failed requests (100% of the budget)","None: it's overspent by 53,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **72 million** requests and **1.44 million** failures. How much error budget is left?","options":["1.44 million failed requests (99% of the budget)","None: it's overspent by 721,000","None: it's overspent by 720,000","720,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #1

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

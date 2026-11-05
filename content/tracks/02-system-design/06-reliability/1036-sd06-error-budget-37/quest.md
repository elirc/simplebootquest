---
slug: "sd06-error-budget-37"
title: "Design Drill: Error budgets #37"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **32 million** requests and **48,000** failures. How much error budget is left?","options":["112,000 failed requests (70% of the budget)","224,000 failed requests (99% of the budget)","160,000 failed requests (100% of the budget)","None: it's overspent by 113,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **79 million** requests and **790,000** failures. How much error budget is left?","options":["395,000 failed requests (100% of the budget)","None: it's overspent by 396,000","None: it's overspent by 395,000","790,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **42 million** requests and **147,000** failures. How much error budget is left?","options":["210,000 failed requests (100% of the budget)","63,000 failed requests (30% of the budget)","126,000 failed requests (60% of the budget)","None: it's overspent by 64,000"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **19 million** requests and **13,300** failures. How much error budget is left?","options":["None: it's overspent by 6700","11,400 failed requests (60% of the budget)","19,000 failed requests (100% of the budget)","5700 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **42 million** requests and **294,000** failures. How much error budget is left?","options":["252,000 failed requests (60% of the budget)","126,000 failed requests (30% of the budget)","420,000 failed requests (100% of the budget)","None: it's overspent by 127,000"],"answer":1}]
---
# Design Drill: Error budgets #37

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

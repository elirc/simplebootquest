---
slug: "sd06-error-budget-45"
title: "Design Drill: Error budgets #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **71 million** requests and **497,000** failures. How much error budget is left?","options":["None: it's overspent by 214,000","710,000 failed requests (100% of the budget)","213,000 failed requests (30% of the budget)","426,000 failed requests (60% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **60 million** requests and **90,000** failures. How much error budget is left?","options":["210,000 failed requests (70% of the budget)","None: it's overspent by 211,000","300,000 failed requests (100% of the budget)","420,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **60 million** requests and **72,000** failures. How much error budget is left?","options":["60,000 failed requests (100% of the budget)","24,000 failed requests (40% of the budget)","None: it's overspent by 13,000","None: it's overspent by 12,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **63 million** requests and **75,600** failures. How much error budget is left?","options":["63,000 failed requests (100% of the budget)","None: it's overspent by 12,600","25,200 failed requests (40% of the budget)","None: it's overspent by 13,600"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **3 million** requests and **9000** failures. How much error budget is left?","options":["42,000 failed requests (99% of the budget)","30,000 failed requests (100% of the budget)","21,000 failed requests (70% of the budget)","None: it's overspent by 22,000"],"answer":2}]
---
# Design Drill: Error budgets #45

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

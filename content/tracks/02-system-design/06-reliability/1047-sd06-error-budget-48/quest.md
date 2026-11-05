---
slug: "sd06-error-budget-48"
title: "Design Drill: Error budgets #48"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **16 million** requests and **48,000** failures. How much error budget is left?","options":["224,000 failed requests (99% of the budget)","112,000 failed requests (70% of the budget)","160,000 failed requests (100% of the budget)","None: it's overspent by 113,000"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **90 million** requests and **27,000** failures. How much error budget is left?","options":["63,000 failed requests (70% of the budget)","90,000 failed requests (100% of the budget)","126,000 failed requests (99% of the budget)","None: it's overspent by 64,000"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **67 million** requests and **234,500** failures. How much error budget is left?","options":["100,500 failed requests (30% of the budget)","201,000 failed requests (60% of the budget)","335,000 failed requests (100% of the budget)","None: it's overspent by 101,500"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **24 million** requests and **48,000** failures. How much error budget is left?","options":["24,000 failed requests (100% of the budget)","48,000 failed requests (99% of the budget)","None: it's overspent by 25,000","None: it's overspent by 24,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **72 million** requests and **144,000** failures. How much error budget is left?","options":["72,000 failed requests (100% of the budget)","144,000 failed requests (99% of the budget)","None: it's overspent by 73,000","None: it's overspent by 72,000"],"answer":3}]
---
# Design Drill: Error budgets #48

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

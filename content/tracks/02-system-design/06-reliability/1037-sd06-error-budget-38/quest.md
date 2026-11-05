---
slug: "sd06-error-budget-38"
title: "Design Drill: Error budgets #38"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **41 million** requests and **82,000** failures. How much error budget is left?","options":["82,000 failed requests (99% of the budget)","None: it's overspent by 42,000","41,000 failed requests (100% of the budget)","None: it's overspent by 41,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **92 million** requests and **184,000** failures. How much error budget is left?","options":["None: it's overspent by 93,000","None: it's overspent by 92,000","184,000 failed requests (99% of the budget)","92,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **43 million** requests and **860,000** failures. How much error budget is left?","options":["None: it's overspent by 430,000","860,000 failed requests (99% of the budget)","None: it's overspent by 431,000","430,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **33 million** requests and **66,000** failures. How much error budget is left?","options":["None: it's overspent by 33,000","33,000 failed requests (100% of the budget)","66,000 failed requests (99% of the budget)","None: it's overspent by 34,000"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **63 million** requests and **756,000** failures. How much error budget is left?","options":["630,000 failed requests (100% of the budget)","252,000 failed requests (40% of the budget)","None: it's overspent by 126,000","None: it's overspent by 127,000"],"answer":2}]
---
# Design Drill: Error budgets #38

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

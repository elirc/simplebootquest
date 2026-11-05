---
slug: "sd06-error-budget-43"
title: "Design Drill: Error budgets #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **89 million** requests and **890,000** failures. How much error budget is left?","options":["None: it's overspent by 446,000","None: it's overspent by 445,000","890,000 failed requests (99% of the budget)","445,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **28 million** requests and **196,000** failures. How much error budget is left?","options":["168,000 failed requests (60% of the budget)","280,000 failed requests (100% of the budget)","None: it's overspent by 85,000","84,000 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **74 million** requests and **444,000** failures. How much error budget is left?","options":["None: it's overspent by 74,000","148,000 failed requests (40% of the budget)","None: it's overspent by 75,000","370,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **18 million** requests and **27,000** failures. How much error budget is left?","options":["63,000 failed requests (70% of the budget)","90,000 failed requests (100% of the budget)","126,000 failed requests (99% of the budget)","None: it's overspent by 64,000"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **37 million** requests and **11,100** failures. How much error budget is left?","options":["25,900 failed requests (70% of the budget)","None: it's overspent by 26,900","51,800 failed requests (99% of the budget)","37,000 failed requests (100% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #43

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

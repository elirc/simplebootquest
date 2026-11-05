---
slug: "sd06-error-budget-4"
title: "Design Drill: Error budgets #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **61 million** requests and **732,000** failures. How much error budget is left?","options":["None: it's overspent by 123,000","610,000 failed requests (100% of the budget)","None: it's overspent by 122,000","244,000 failed requests (40% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **74 million** requests and **259,000** failures. How much error budget is left?","options":["222,000 failed requests (60% of the budget)","111,000 failed requests (30% of the budget)","370,000 failed requests (100% of the budget)","None: it's overspent by 112,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **3 million** requests and **36,000** failures. How much error budget is left?","options":["None: it's overspent by 7000","None: it's overspent by 6000","30,000 failed requests (100% of the budget)","12,000 failed requests (40% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **28 million** requests and **33,600** failures. How much error budget is left?","options":["None: it's overspent by 6600","11,200 failed requests (40% of the budget)","28,000 failed requests (100% of the budget)","None: it's overspent by 5600"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **41 million** requests and **28,700** failures. How much error budget is left?","options":["12,300 failed requests (30% of the budget)","41,000 failed requests (100% of the budget)","24,600 failed requests (60% of the budget)","None: it's overspent by 13,300"],"answer":0}]
---
# Design Drill: Error budgets #4

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

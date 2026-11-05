---
slug: "sd06-error-budget-57"
title: "Design Drill: Error budgets #57"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **7 million** requests and **42,000** failures. How much error budget is left?","options":["35,000 failed requests (100% of the budget)","14,000 failed requests (40% of the budget)","None: it's overspent by 8000","None: it's overspent by 7000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **38 million** requests and **456,000** failures. How much error budget is left?","options":["152,000 failed requests (40% of the budget)","None: it's overspent by 77,000","None: it's overspent by 76,000","380,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **95 million** requests and **142,500** failures. How much error budget is left?","options":["332,500 failed requests (70% of the budget)","None: it's overspent by 333,500","475,000 failed requests (100% of the budget)","665,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **55 million** requests and **192,500** failures. How much error budget is left?","options":["82,500 failed requests (30% of the budget)","275,000 failed requests (100% of the budget)","None: it's overspent by 83,500","165,000 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **14 million** requests and **4200** failures. How much error budget is left?","options":["14,000 failed requests (100% of the budget)","9800 failed requests (70% of the budget)","19,600 failed requests (99% of the budget)","None: it's overspent by 10,800"],"answer":1}]
---
# Design Drill: Error budgets #57

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

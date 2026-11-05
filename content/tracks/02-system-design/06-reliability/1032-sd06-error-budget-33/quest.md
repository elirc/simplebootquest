---
slug: "sd06-error-budget-33"
title: "Design Drill: Error budgets #33"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **18 million** requests and **63,000** failures. How much error budget is left?","options":["90,000 failed requests (100% of the budget)","27,000 failed requests (30% of the budget)","None: it's overspent by 28,000","54,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **56 million** requests and **168,000** failures. How much error budget is left?","options":["None: it's overspent by 393,000","560,000 failed requests (100% of the budget)","392,000 failed requests (70% of the budget)","784,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **52 million** requests and **15,600** failures. How much error budget is left?","options":["52,000 failed requests (100% of the budget)","36,400 failed requests (70% of the budget)","72,800 failed requests (99% of the budget)","None: it's overspent by 37,400"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **87 million** requests and **1.04 million** failures. How much error budget is left?","options":["None: it's overspent by 175,000","870,000 failed requests (100% of the budget)","348,000 failed requests (40% of the budget)","None: it's overspent by 174,000"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **68 million** requests and **204,000** failures. How much error budget is left?","options":["952,000 failed requests (99% of the budget)","None: it's overspent by 477,000","476,000 failed requests (70% of the budget)","680,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #33

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

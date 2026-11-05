---
slug: "sd06-error-budget-16"
title: "Design Drill: Error budgets #16"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **85 million** requests and **595,000** failures. How much error budget is left?","options":["510,000 failed requests (60% of the budget)","255,000 failed requests (30% of the budget)","850,000 failed requests (100% of the budget)","None: it's overspent by 256,000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **91 million** requests and **546,000** failures. How much error budget is left?","options":["182,000 failed requests (40% of the budget)","None: it's overspent by 91,000","None: it's overspent by 92,000","455,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **99 million** requests and **297,000** failures. How much error budget is left?","options":["1.39 million failed requests (99% of the budget)","693,000 failed requests (70% of the budget)","990,000 failed requests (100% of the budget)","None: it's overspent by 694,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **58 million** requests and **1.16 million** failures. How much error budget is left?","options":["580,000 failed requests (100% of the budget)","1.16 million failed requests (99% of the budget)","None: it's overspent by 581,000","None: it's overspent by 580,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **65 million** requests and **227,500** failures. How much error budget is left?","options":["325,000 failed requests (100% of the budget)","195,000 failed requests (60% of the budget)","97,500 failed requests (30% of the budget)","None: it's overspent by 98,500"],"answer":2}]
---
# Design Drill: Error budgets #16

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

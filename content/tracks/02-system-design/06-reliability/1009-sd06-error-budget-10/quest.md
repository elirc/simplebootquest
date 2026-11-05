---
slug: "sd06-error-budget-10"
title: "Design Drill: Error budgets #10"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **91 million** requests and **910,000** failures. How much error budget is left?","options":["910,000 failed requests (99% of the budget)","None: it's overspent by 455,000","455,000 failed requests (100% of the budget)","None: it's overspent by 456,000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **97 million** requests and **145,500** failures. How much error budget is left?","options":["None: it's overspent by 340,500","679,000 failed requests (99% of the budget)","485,000 failed requests (100% of the budget)","339,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **41 million** requests and **287,000** failures. How much error budget is left?","options":["410,000 failed requests (100% of the budget)","123,000 failed requests (30% of the budget)","246,000 failed requests (60% of the budget)","None: it's overspent by 124,000"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **61 million** requests and **183,000** failures. How much error budget is left?","options":["None: it's overspent by 428,000","854,000 failed requests (99% of the budget)","610,000 failed requests (100% of the budget)","427,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **41 million** requests and **246,000** failures. How much error budget is left?","options":["82,000 failed requests (40% of the budget)","None: it's overspent by 41,000","205,000 failed requests (100% of the budget)","None: it's overspent by 42,000"],"answer":1}]
---
# Design Drill: Error budgets #10

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

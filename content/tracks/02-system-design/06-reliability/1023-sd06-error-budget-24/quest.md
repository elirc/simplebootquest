---
slug: "sd06-error-budget-24"
title: "Design Drill: Error budgets #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **6 million** requests and **9000** failures. How much error budget is left?","options":["30,000 failed requests (100% of the budget)","42,000 failed requests (99% of the budget)","21,000 failed requests (70% of the budget)","None: it's overspent by 22,000"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **63 million** requests and **94,500** failures. How much error budget is left?","options":["None: it's overspent by 221,500","441,000 failed requests (99% of the budget)","315,000 failed requests (100% of the budget)","220,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **25 million** requests and **50,000** failures. How much error budget is left?","options":["None: it's overspent by 26,000","50,000 failed requests (99% of the budget)","None: it's overspent by 25,000","25,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **83 million** requests and **1.66 million** failures. How much error budget is left?","options":["830,000 failed requests (100% of the budget)","None: it's overspent by 831,000","1.66 million failed requests (99% of the budget)","None: it's overspent by 830,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **23 million** requests and **34,500** failures. How much error budget is left?","options":["161,000 failed requests (99% of the budget)","None: it's overspent by 81,500","80,500 failed requests (70% of the budget)","115,000 failed requests (100% of the budget)"],"answer":2}]
---
# Design Drill: Error budgets #24

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

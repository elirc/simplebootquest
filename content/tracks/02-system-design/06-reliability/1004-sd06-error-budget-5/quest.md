---
slug: "sd06-error-budget-5"
title: "Design Drill: Error budgets #5"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **82 million** requests and **246,000** failures. How much error budget is left?","options":["1.15 million failed requests (99% of the budget)","574,000 failed requests (70% of the budget)","820,000 failed requests (100% of the budget)","None: it's overspent by 575,000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **21 million** requests and **31,500** failures. How much error budget is left?","options":["105,000 failed requests (100% of the budget)","None: it's overspent by 74,500","147,000 failed requests (99% of the budget)","73,500 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **84 million** requests and **168,000** failures. How much error budget is left?","options":["None: it's overspent by 85,000","None: it's overspent by 84,000","168,000 failed requests (99% of the budget)","84,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **38 million** requests and **57,000** failures. How much error budget is left?","options":["None: it's overspent by 134,000","266,000 failed requests (99% of the budget)","190,000 failed requests (100% of the budget)","133,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **42 million** requests and **84,000** failures. How much error budget is left?","options":["None: it's overspent by 43,000","42,000 failed requests (100% of the budget)","84,000 failed requests (99% of the budget)","None: it's overspent by 42,000"],"answer":3}]
---
# Design Drill: Error budgets #5

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

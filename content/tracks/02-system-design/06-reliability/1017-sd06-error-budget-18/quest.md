---
slug: "sd06-error-budget-18"
title: "Design Drill: Error budgets #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **70 million** requests and **420,000** failures. How much error budget is left?","options":["None: it's overspent by 71,000","140,000 failed requests (40% of the budget)","None: it's overspent by 70,000","350,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **8 million** requests and **24,000** failures. How much error budget is left?","options":["None: it's overspent by 57,000","56,000 failed requests (70% of the budget)","112,000 failed requests (99% of the budget)","80,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **89 million** requests and **267,000** failures. How much error budget is left?","options":["None: it's overspent by 624,000","890,000 failed requests (100% of the budget)","623,000 failed requests (70% of the budget)","1.25 million failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **36 million** requests and **126,000** failures. How much error budget is left?","options":["108,000 failed requests (60% of the budget)","54,000 failed requests (30% of the budget)","None: it's overspent by 55,000","180,000 failed requests (100% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **56 million** requests and **1.12 million** failures. How much error budget is left?","options":["560,000 failed requests (100% of the budget)","1.12 million failed requests (99% of the budget)","None: it's overspent by 560,000","None: it's overspent by 561,000"],"answer":2}]
---
# Design Drill: Error budgets #18

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

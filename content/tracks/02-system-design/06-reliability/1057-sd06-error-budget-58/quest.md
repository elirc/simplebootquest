---
slug: "sd06-error-budget-58"
title: "Design Drill: Error budgets #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **47 million** requests and **470,000** failures. How much error budget is left?","options":["None: it's overspent by 235,000","235,000 failed requests (100% of the budget)","None: it's overspent by 236,000","470,000 failed requests (99% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **69 million** requests and **1.38 million** failures. How much error budget is left?","options":["690,000 failed requests (100% of the budget)","None: it's overspent by 691,000","None: it's overspent by 690,000","1.38 million failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **75 million** requests and **525,000** failures. How much error budget is left?","options":["450,000 failed requests (60% of the budget)","750,000 failed requests (100% of the budget)","225,000 failed requests (30% of the budget)","None: it's overspent by 226,000"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **98 million** requests and **147,000** failures. How much error budget is left?","options":["490,000 failed requests (100% of the budget)","686,000 failed requests (99% of the budget)","None: it's overspent by 344,000","343,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **61 million** requests and **91,500** failures. How much error budget is left?","options":["213,500 failed requests (70% of the budget)","427,000 failed requests (99% of the budget)","None: it's overspent by 214,500","305,000 failed requests (100% of the budget)"],"answer":0}]
---
# Design Drill: Error budgets #58

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

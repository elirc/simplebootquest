---
slug: "sd06-error-budget-25"
title: "Design Drill: Error budgets #25"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **42 million** requests and **12,600** failures. How much error budget is left?","options":["42,000 failed requests (100% of the budget)","None: it's overspent by 30,400","58,800 failed requests (99% of the budget)","29,400 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **60 million** requests and **600,000** failures. How much error budget is left?","options":["300,000 failed requests (100% of the budget)","None: it's overspent by 300,000","None: it's overspent by 301,000","600,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **86 million** requests and **1.03 million** failures. How much error budget is left?","options":["None: it's overspent by 172,000","None: it's overspent by 173,000","344,000 failed requests (40% of the budget)","860,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **11 million** requests and **16,500** failures. How much error budget is left?","options":["None: it's overspent by 39,500","38,500 failed requests (70% of the budget)","55,000 failed requests (100% of the budget)","77,000 failed requests (99% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **80 million** requests and **560,000** failures. How much error budget is left?","options":["None: it's overspent by 241,000","480,000 failed requests (60% of the budget)","800,000 failed requests (100% of the budget)","240,000 failed requests (30% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #25

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

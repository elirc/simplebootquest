---
slug: "sd06-error-budget-13"
title: "Design Drill: Error budgets #13"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **56 million** requests and **84,000** failures. How much error budget is left?","options":["280,000 failed requests (100% of the budget)","None: it's overspent by 197,000","392,000 failed requests (99% of the budget)","196,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **21 million** requests and **6300** failures. How much error budget is left?","options":["29,400 failed requests (99% of the budget)","14,700 failed requests (70% of the budget)","21,000 failed requests (100% of the budget)","None: it's overspent by 15,700"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **28 million** requests and **560,000** failures. How much error budget is left?","options":["280,000 failed requests (100% of the budget)","560,000 failed requests (99% of the budget)","None: it's overspent by 280,000","None: it's overspent by 281,000"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **19 million** requests and **114,000** failures. How much error budget is left?","options":["None: it's overspent by 20,000","38,000 failed requests (40% of the budget)","95,000 failed requests (100% of the budget)","None: it's overspent by 19,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **90 million** requests and **63,000** failures. How much error budget is left?","options":["90,000 failed requests (100% of the budget)","54,000 failed requests (60% of the budget)","None: it's overspent by 28,000","27,000 failed requests (30% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #13

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

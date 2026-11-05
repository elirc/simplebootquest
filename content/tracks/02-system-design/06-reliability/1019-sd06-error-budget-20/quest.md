---
slug: "sd06-error-budget-20"
title: "Design Drill: Error budgets #20"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **92 million** requests and **920,000** failures. How much error budget is left?","options":["460,000 failed requests (100% of the budget)","None: it's overspent by 460,000","920,000 failed requests (99% of the budget)","None: it's overspent by 461,000"],"answer":1},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **15 million** requests and **22,500** failures. How much error budget is left?","options":["52,500 failed requests (70% of the budget)","None: it's overspent by 53,500","105,000 failed requests (99% of the budget)","75,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **9 million** requests and **63,000** failures. How much error budget is left?","options":["None: it's overspent by 28,000","27,000 failed requests (30% of the budget)","90,000 failed requests (100% of the budget)","54,000 failed requests (60% of the budget)"],"answer":1},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **52 million** requests and **1.04 million** failures. How much error budget is left?","options":["1.04 million failed requests (99% of the budget)","None: it's overspent by 521,000","520,000 failed requests (100% of the budget)","None: it's overspent by 520,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **39 million** requests and **78,000** failures. How much error budget is left?","options":["None: it's overspent by 39,000","39,000 failed requests (100% of the budget)","78,000 failed requests (99% of the budget)","None: it's overspent by 40,000"],"answer":0}]
---
# Design Drill: Error budgets #20

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

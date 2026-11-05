---
slug: "sd06-error-budget-51"
title: "Design Drill: Error budgets #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **37 million** requests and **222,000** failures. How much error budget is left?","options":["185,000 failed requests (100% of the budget)","74,000 failed requests (40% of the budget)","None: it's overspent by 37,000","None: it's overspent by 38,000"],"answer":2},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **52 million** requests and **182,000** failures. How much error budget is left?","options":["78,000 failed requests (30% of the budget)","260,000 failed requests (100% of the budget)","None: it's overspent by 79,000","156,000 failed requests (60% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **49 million** requests and **980,000** failures. How much error budget is left?","options":["490,000 failed requests (100% of the budget)","980,000 failed requests (99% of the budget)","None: it's overspent by 491,000","None: it's overspent by 490,000"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **94 million** requests and **28,200** failures. How much error budget is left?","options":["94,000 failed requests (100% of the budget)","131,600 failed requests (99% of the budget)","None: it's overspent by 66,800","65,800 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **8 million** requests and **2400** failures. How much error budget is left?","options":["8000 failed requests (100% of the budget)","11,200 failed requests (99% of the budget)","5600 failed requests (70% of the budget)","None: it's overspent by 6600"],"answer":2}]
---
# Design Drill: Error budgets #51

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

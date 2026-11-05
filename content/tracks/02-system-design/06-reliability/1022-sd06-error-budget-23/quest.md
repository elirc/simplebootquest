---
slug: "sd06-error-budget-23"
title: "Design Drill: Error budgets #23"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **46 million** requests and **920,000** failures. How much error budget is left?","options":["None: it's overspent by 461,000","460,000 failed requests (100% of the budget)","None: it's overspent by 460,000","920,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **14 million** requests and **16,800** failures. How much error budget is left?","options":["None: it's overspent by 3800","14,000 failed requests (100% of the budget)","5600 failed requests (40% of the budget)","None: it's overspent by 2800"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **67 million** requests and **46,900** failures. How much error budget is left?","options":["40,200 failed requests (60% of the budget)","67,000 failed requests (100% of the budget)","20,100 failed requests (30% of the budget)","None: it's overspent by 21,100"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **87 million** requests and **609,000** failures. How much error budget is left?","options":["261,000 failed requests (30% of the budget)","None: it's overspent by 262,000","522,000 failed requests (60% of the budget)","870,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **18 million** requests and **54,000** failures. How much error budget is left?","options":["None: it's overspent by 127,000","126,000 failed requests (70% of the budget)","180,000 failed requests (100% of the budget)","252,000 failed requests (99% of the budget)"],"answer":1}]
---
# Design Drill: Error budgets #23

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

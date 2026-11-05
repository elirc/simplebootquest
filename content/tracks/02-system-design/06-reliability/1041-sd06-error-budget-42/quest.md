---
slug: "sd06-error-budget-42"
title: "Design Drill: Error budgets #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **31 million** requests and **93,000** failures. How much error budget is left?","options":["310,000 failed requests (100% of the budget)","None: it's overspent by 218,000","217,000 failed requests (70% of the budget)","434,000 failed requests (99% of the budget)"],"answer":2},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **44 million** requests and **880,000** failures. How much error budget is left?","options":["440,000 failed requests (100% of the budget)","880,000 failed requests (99% of the budget)","None: it's overspent by 441,000","None: it's overspent by 440,000"],"answer":3},{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **32 million** requests and **192,000** failures. How much error budget is left?","options":["None: it's overspent by 32,000","None: it's overspent by 33,000","64,000 failed requests (40% of the budget)","160,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **55 million** requests and **165,000** failures. How much error budget is left?","options":["770,000 failed requests (99% of the budget)","550,000 failed requests (100% of the budget)","None: it's overspent by 386,000","385,000 failed requests (70% of the budget)"],"answer":3},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **65 million** requests and **19,500** failures. How much error budget is left?","options":["91,000 failed requests (99% of the budget)","65,000 failed requests (100% of the budget)","None: it's overspent by 46,500","45,500 failed requests (70% of the budget)"],"answer":3}]
---
# Design Drill: Error budgets #42

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

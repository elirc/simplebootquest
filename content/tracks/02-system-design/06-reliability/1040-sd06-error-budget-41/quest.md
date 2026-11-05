---
slug: "sd06-error-budget-41"
title: "Design Drill: Error budgets #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"Your SLO is **99.5%** of requests succeeding this month. There have been **22 million** requests and **77,000** failures. How much error budget is left?","options":["None: it's overspent by 34,000","66,000 failed requests (60% of the budget)","110,000 failed requests (100% of the budget)","33,000 failed requests (30% of the budget)"],"answer":3},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **15 million** requests and **180,000** failures. How much error budget is left?","options":["None: it's overspent by 30,000","None: it's overspent by 31,000","60,000 failed requests (40% of the budget)","150,000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **86 million** requests and **60,200** failures. How much error budget is left?","options":["51,600 failed requests (60% of the budget)","None: it's overspent by 26,800","25,800 failed requests (30% of the budget)","86,000 failed requests (100% of the budget)"],"answer":2},{"prompt":"Your SLO is **99.9%** of requests succeeding this month. There have been **6 million** requests and **7200** failures. How much error budget is left?","options":["None: it's overspent by 1200","None: it's overspent by 2200","2400 failed requests (40% of the budget)","6000 failed requests (100% of the budget)"],"answer":0},{"prompt":"Your SLO is **99%** of requests succeeding this month. There have been **76 million** requests and **1.52 million** failures. How much error budget is left?","options":["None: it's overspent by 760,000","1.52 million failed requests (99% of the budget)","760,000 failed requests (100% of the budget)","None: it's overspent by 761,000"],"answer":0}]
---
# Design Drill: Error budgets #41

Error budget = (1 − SLO) × requests in the period. If you have already used more than the budget, slow down risky changes until reliability recovers.

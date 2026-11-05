---
slug: "sd08-cost-30"
title: "Design Drill: Back-of-the-envelope costs #30"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **230 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1660","$18.4","$166","$6720"],"answer":2},{"prompt":"You serve **1610 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$35,259","$96.6","$869","$8690"],"answer":2},{"prompt":"You serve **390 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$23.4","$2110","$8540","$211"],"answer":3},{"prompt":"You serve **340 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$17","$6210","$510","$5100"],"answer":2},{"prompt":"You serve **100 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$240","$2920","$2400","$8"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #30

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

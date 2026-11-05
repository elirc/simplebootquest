---
slug: "sd08-cost-47"
title: "Design Drill: Back-of-the-envelope costs #47"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1560 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$5620","$187","$56,160","$68,328"],"answer":0},{"prompt":"You serve **250 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$4560","$1130","$12.5","$113"],"answer":3},{"prompt":"You serve **1150 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$20,700","$2070","$25,185","$69"],"answer":1},{"prompt":"You serve **1740 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$4180","$139","$41,760","$50,808"],"answer":0},{"prompt":"You serve **1910 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$860","$34,858","$8600","$95.5"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #47

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

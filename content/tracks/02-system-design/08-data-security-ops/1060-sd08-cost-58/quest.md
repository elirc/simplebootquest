---
slug: "sd08-cost-58"
title: "Design Drill: Back-of-the-envelope costs #58"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1580 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$190","$1710","$69,204","$17,064"],"answer":1},{"prompt":"You serve **120 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$14.4","$1300","$130","$5260"],"answer":2},{"prompt":"You serve **1030 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$33,836","$27,810","$2780","$92.7"],"answer":2},{"prompt":"You serve **1350 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$24,638","$67.5","$608","$6080"],"answer":2},{"prompt":"You serve **1130 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$90.4","$32,996","$2710","$27,120"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #58

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

---
slug: "sd08-cost-4"
title: "Design Drill: Back-of-the-envelope costs #4"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **530 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$2390","$26.5","$9670","$239"],"answer":3},{"prompt":"You serve **860 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$28,251","$77.4","$23,220","$2320"],"answer":3},{"prompt":"You serve **1790 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1290","$52,268","$143","$12,888"],"answer":0},{"prompt":"You serve **10 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$7.2","$0.8","$292","$72"],"answer":0},{"prompt":"You serve **1900 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$171","$51,300","$62,415","$5130"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #4

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

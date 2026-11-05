---
slug: "sd08-cost-2"
title: "Design Drill: Back-of-the-envelope costs #2"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1280 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$56,064","$46,080","$154","$4610"],"answer":3},{"prompt":"You serve **1270 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$19,050","$23,178","$63.5","$1910"],"answer":3},{"prompt":"You serve **1870 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$50,490","$61,430","$168","$5050"],"answer":3},{"prompt":"You serve **690 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$3110","$311","$12,593","$34.5"],"answer":1},{"prompt":"You serve **270 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$648","$7880","$6480","$21.6"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #2

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

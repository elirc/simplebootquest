---
slug: "sd08-cost-24"
title: "Design Drill: Back-of-the-envelope costs #24"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **400 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$14,400","$17,520","$1440","$48"],"answer":2},{"prompt":"You serve **1630 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$29,748","$81.5","$2450","$24,450"],"answer":2},{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$7480","$20.5","$6150","$615"],"answer":3},{"prompt":"You serve **900 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$6480","$648","$72","$26,280"],"answer":1},{"prompt":"You serve **1960 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$42,924","$1060","$10,584","$118"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #24

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

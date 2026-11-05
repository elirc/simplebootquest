---
slug: "sd08-cost-14"
title: "Design Drill: Back-of-the-envelope costs #14"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **900 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$1620","$19,710","$54","$16,200"],"answer":0},{"prompt":"You serve **1290 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$77.4","$23,220","$2320","$28,251"],"answer":2},{"prompt":"You serve **1120 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$49,056","$134","$4030","$40,320"],"answer":2},{"prompt":"You serve **1190 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$857","$34,748","$8570","$95.2"],"answer":0},{"prompt":"You serve **320 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$7680","$768","$25.6","$9340"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #14

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

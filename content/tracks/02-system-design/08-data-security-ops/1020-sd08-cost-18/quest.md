---
slug: "sd08-cost-18"
title: "Design Drill: Back-of-the-envelope costs #18"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **580 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$6260","$626","$25,404","$69.6"],"answer":1},{"prompt":"You serve **120 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$216","$2160","$2630","$7.2"],"answer":0},{"prompt":"You serve **1300 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$42,705","$117","$10,530","$1050"],"answer":3},{"prompt":"You serve **1020 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$33,507","$27,540","$91.8","$2750"],"answer":3},{"prompt":"You serve **440 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$9640","$26.4","$792","$7920"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #18

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

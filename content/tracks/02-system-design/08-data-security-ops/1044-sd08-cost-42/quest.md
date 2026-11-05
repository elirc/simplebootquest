---
slug: "sd08-cost-42"
title: "Design Drill: Back-of-the-envelope costs #42"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1890 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$170","$62,087","$1530","$15,309"],"answer":2},{"prompt":"You serve **1320 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$79.2","$7130","$713","$28,908"],"answer":2},{"prompt":"You serve **150 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$270","$3290","$9","$2700"],"answer":0},{"prompt":"You serve **720 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$5830","$64.8","$583","$23,652"],"answer":2},{"prompt":"You serve **1310 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$57,378","$1410","$14,148","$157"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #42

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

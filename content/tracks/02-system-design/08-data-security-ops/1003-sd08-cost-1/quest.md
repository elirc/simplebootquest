---
slug: "sd08-cost-1"
title: "Design Drill: Back-of-the-envelope costs #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1870 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$81,906","$6730","$224","$67,320"],"answer":1},{"prompt":"You serve **630 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$5100","$56.7","$510","$20,696"],"answer":2},{"prompt":"You serve **1450 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$63,510","$52,200","$174","$5220"],"answer":3},{"prompt":"You serve **1590 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$95.4","$2860","$34,821","$28,620"],"answer":1},{"prompt":"You serve **1480 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$39,960","$133","$48,618","$4000"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #1

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

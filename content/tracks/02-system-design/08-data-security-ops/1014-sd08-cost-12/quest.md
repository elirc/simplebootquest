---
slug: "sd08-cost-12"
title: "Design Drill: Back-of-the-envelope costs #12"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **700 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$30,660","$84","$7560","$756"],"answer":3},{"prompt":"You serve **710 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$511","$20,732","$56.8","$5110"],"answer":0},{"prompt":"You serve **1370 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$110","$9860","$40,004","$986"],"answer":3},{"prompt":"You serve **1720 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$31,390","$86","$2580","$25,800"],"answer":2},{"prompt":"You serve **220 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$7920","$792","$26.4","$9640"],"answer":1}]
---
# Design Drill: Back-of-the-envelope costs #12

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

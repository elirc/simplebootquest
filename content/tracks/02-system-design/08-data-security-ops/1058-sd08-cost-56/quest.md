---
slug: "sd08-cost-56"
title: "Design Drill: Back-of-the-envelope costs #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1660 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$48,472","$3980","$133","$39,840"],"answer":1},{"prompt":"You serve **870 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$20,880","$2090","$69.6","$25,404"],"answer":1},{"prompt":"You serve **1690 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$84.5","$30,843","$7610","$761"],"answer":3},{"prompt":"You serve **1610 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$193","$70,518","$1740","$17,388"],"answer":2},{"prompt":"You serve **1970 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$4730","$57,524","$158","$47,280"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #56

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

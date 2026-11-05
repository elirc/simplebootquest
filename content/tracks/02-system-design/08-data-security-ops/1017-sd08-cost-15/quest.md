---
slug: "sd08-cost-15"
title: "Design Drill: Back-of-the-envelope costs #15"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1610 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$145","$1300","$13,041","$52,889"],"answer":1},{"prompt":"You serve **1760 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$950","$106","$9500","$38,544"],"answer":0},{"prompt":"You serve **1260 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$22,995","$18,900","$63","$1890"],"answer":3},{"prompt":"You serve **710 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$85.2","$31,098","$2560","$25,560"],"answer":2},{"prompt":"You serve **1630 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$196","$71,394","$5870","$58,680"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #15

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

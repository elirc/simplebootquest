---
slug: "sd08-cost-8"
title: "Design Drill: Back-of-the-envelope costs #8"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1290 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$37,668","$9290","$103","$929"],"answer":3},{"prompt":"You serve **1950 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1580","$176","$64,058","$15,795"],"answer":0},{"prompt":"You serve **170 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$4590","$5580","$459","$15.3"],"answer":2},{"prompt":"You serve **250 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$135","$15","$5480","$1350"],"answer":0},{"prompt":"You serve **1090 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$2940","$35,807","$98.1","$29,430"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #8

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

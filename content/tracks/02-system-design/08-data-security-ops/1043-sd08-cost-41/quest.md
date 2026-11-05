---
slug: "sd08-cost-41"
title: "Design Drill: Back-of-the-envelope costs #41"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **250 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1800","$180","$20","$7300"],"answer":1},{"prompt":"You serve **1710 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$56,174","$13,851","$1390","$154"],"answer":2},{"prompt":"You serve **1950 GB/day** of images. Egress costs **$0.05/GB**. Roughly what's the monthly egress bill?","options":["$29,250","$97.5","$2930","$35,588"],"answer":2},{"prompt":"You serve **930 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$30,551","$753","$7530","$83.7"],"answer":1},{"prompt":"You serve **1060 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$23,214","$63.6","$5720","$572"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #41

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

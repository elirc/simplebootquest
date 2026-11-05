---
slug: "sd08-cost-32"
title: "Design Drill: Back-of-the-envelope costs #32"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **720 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$57.6","$21,024","$5180","$518"],"answer":3},{"prompt":"You serve **1010 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$60.6","$18,180","$1820","$22,119"],"answer":2},{"prompt":"You serve **580 GB/day** of images. Egress costs **$0.09/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$4700","$52.2","$19,053","$470"],"answer":3},{"prompt":"You serve **30 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$135","$548","$13.5","$1.5"],"answer":2},{"prompt":"You serve **1430 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$172","$62,634","$15,444","$1540"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #32

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

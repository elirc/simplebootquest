---
slug: "sd08-cost-36"
title: "Design Drill: Back-of-the-envelope costs #36"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **1960 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$8820","$882","$98","$35,770"],"answer":1},{"prompt":"You serve **1920 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$2070","$20,736","$230","$84,096"],"answer":0},{"prompt":"You serve **470 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$56.4","$16,920","$1690","$20,586"],"answer":2},{"prompt":"You serve **1110 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$5000","$20,258","$500","$55.5"],"answer":2},{"prompt":"You serve **360 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$21.6","$7880","$194","$1940"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #36

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

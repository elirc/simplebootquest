---
slug: "sd08-cost-28"
title: "Design Drill: Back-of-the-envelope costs #28"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **220 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$990","$4020","$11","$99"],"answer":3},{"prompt":"You serve **810 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$23,652","$19,440","$1940","$64.8"],"answer":2},{"prompt":"You serve **1840 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$9940","$40,296","$110","$994"],"answer":3},{"prompt":"You serve **440 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$19,272","$475","$4750","$52.8"],"answer":1},{"prompt":"You serve **430 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1940","$7850","$21.5","$194"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #28

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

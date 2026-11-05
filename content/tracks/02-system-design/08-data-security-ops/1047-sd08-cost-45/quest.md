---
slug: "sd08-cost-45"
title: "Design Drill: Back-of-the-envelope costs #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **50 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$540","$6","$2190","$54"],"answer":3},{"prompt":"You serve **1330 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$35,910","$120","$43,691","$3590"],"answer":3},{"prompt":"You serve **310 GB/day** of images. Egress costs **$0.06/GB**. Roughly what's the monthly egress bill?","options":["$5580","$558","$18.6","$6790"],"answer":1},{"prompt":"You serve **1480 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$1070","$10,656","$118","$43,216"],"answer":0},{"prompt":"You serve **500 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$21,900","$60","$1800","$18,000"],"answer":2}]
---
# Design Drill: Back-of-the-envelope costs #45

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

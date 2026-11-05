---
slug: "sd08-cost-52"
title: "Design Drill: Back-of-the-envelope costs #52"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **20 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$144","$584","$14.4","$1.6"],"answer":2},{"prompt":"You serve **680 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$29,784","$81.6","$7340","$734"],"answer":3},{"prompt":"You serve **410 GB/day** of images. Egress costs **$0.09/GB**. Roughly what's the monthly egress bill?","options":["$36.9","$11,070","$1110","$13,469"],"answer":2},{"prompt":"You serve **1290 GB/day** of images. Egress costs **$0.08/GB**. Roughly what's the monthly egress bill?","options":["$103","$37,668","$3100","$30,960"],"answer":2},{"prompt":"You serve **480 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$3460","$14,016","$38.4","$346"],"answer":3}]
---
# Design Drill: Back-of-the-envelope costs #52

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

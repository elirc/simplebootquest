---
slug: "sd08-cost-43"
title: "Design Drill: Back-of-the-envelope costs #43"
type: "quiz"
xp: 10
optional: true
section: "Practice: Estimation & Design Drills"
questions: [{"prompt":"You serve **530 GB/day** of images. Egress costs **$0.08/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$3820","$42.4","$382","$15,476"],"answer":2},{"prompt":"You serve **70 GB/day** of images. Egress costs **$0.05/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$31.5","$3.5","$1280","$315"],"answer":0},{"prompt":"You serve **330 GB/day** of images. Egress costs **$0.06/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$178","$19.8","$1780","$7230"],"answer":0},{"prompt":"You serve **1200 GB/day** of images. Egress costs **$0.12/GB**. Roughly what's the monthly egress bill?","options":["$144","$43,200","$4320","$52,560"],"answer":2},{"prompt":"You serve **160 GB/day** of images. Egress costs **$0.12/GB**, but a CDN with a ~70% cache hit ratio means only 30% of it leaves your origin (ignore the CDN's own fee). Roughly what's the monthly egress bill?","options":["$173","$1730","$7010","$19.2"],"answer":0}]
---
# Design Drill: Back-of-the-envelope costs #43

Cloud bills are mostly compute, storage and **egress** (outbound bandwidth). Estimate each from your traffic numbers before you choose an architecture.

---
slug: "sd-d-estimate-feature"
title: "Design Doc: Estimating a New Feature"
type: "design"
xp: 40
hints: ["Bandwidth is often the surprise cost with images. Multiply views × images per view × size."]
rubric: ["States assumptions explicitly, with numbers", "Computes reads/s and writes/s, including a peak factor", "Separates database storage from object storage for images", "Estimates bandwidth or egress for serving images", "Draws a clear architectural conclusion from the numbers", "Names the riskiest assumption and how to validate it"]
minWords: 150
---
# Design Doc: Estimating a New Feature

Product wants to add **comments with image attachments** to the recipe app (or your own capstone app). Before anyone writes code, you've been asked for a one-page estimate: is this a small change, or does it need new infrastructure?

### What to include
1. **Assumptions**: users, the share who comment, comments per day, the share with images, and the image size after resizing.
2. **Traffic**: reads and writes per second, average and peak.
3. **Storage**: database growth and object storage growth per year, kept **separate**.
4. **Bandwidth**: image egress per day, and whether you need a CDN.
5. **Conclusion**: what changes in the architecture (if anything), and the riskiest assumption.

Show your arithmetic. Round aggressively.

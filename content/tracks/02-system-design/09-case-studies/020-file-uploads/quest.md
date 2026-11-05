---
slug: "sd-case-file-uploads"
title: "Case Study: Photo Uploads & Thumbnails"
type: "design"
xp: 50
hints: ["Never let a 15 MB file pass through your API servers."]
rubric: ["States functional and non-functional requirements, with rough numbers", "Includes a high-level diagram or component list showing how requests flow", "Defines the data model (tables or collections, with key fields and indexes)", "Describes the API endpoints or interfaces between components", "Identifies the main bottleneck or risk and how the design handles it", "Names at least two trade-offs or rejected alternatives", "Uses direct-to-storage uploads (presigned URLs) and asynchronous processing"]
minWords: 150
---
# Case Study: Photo Uploads & Thumbnails

Users of your capstone can attach up to 10 photos per record. Photos come straight from phones (5–15 MB, sometimes HEIC). They must appear as thumbnails in lists (200 px), medium images on detail pages (1,200 px), and be downloadable in the original quality.

Assume 50k uploads/day. Design the upload and processing pipeline, including validation, processing, storage layout, delivery, deletion, and what the user sees while processing is in progress.

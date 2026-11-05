---
slug: "deploy-deploy-order-1"
title: "Deploy Drill: Safe deployment order #1"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"You need to **change the JWT signing key** with zero downtime. What's the safe approach?","options":["Store the key in the frontend","Swap the key and log everyone out","Keep the old key forever","Accept old and new keys during a transition window (key ids), then retire the old one"],"answer":3},{"prompt":"You need to **remove an unused API field** with zero downtime. What's the safe approach?","options":["Stop sending it after confirming no clients use it (logs/deprecation), then remove the code","Rename it first","Return null for it forever","Delete it from the code today"],"answer":0},{"prompt":"You need to **switch to a new database host** with zero downtime. What's the safe approach?","options":["Replicate to the new host, switch reads/writes during a short window with a rollback plan","Copy the data with a spreadsheet","Change DATABASE_URL and restart","Point half the instances at each host forever"],"answer":0},{"prompt":"You need to **add a required `country` column to a big users table** with zero downtime. What's the safe approach?","options":["Skip the migration and store it in JSON","Add it as NOT NULL in one step","Add it NOT NULL with no default during peak hours","Add it nullable (or with a default), backfill, deploy code that sets it, then add NOT NULL"],"answer":3},{"prompt":"You need to **rename column `name` to `full_name`** with zero downtime. What's the safe approach?","options":["Add `full_name`, write both, backfill, switch reads, then drop `name` later","Drop `name` first, then add `full_name`","Rename the column in one migration","Rename it and redeploy quickly"],"answer":0}]
---
# Deploy Drill: Safe deployment order #1

Databases and code must stay compatible during a deploy, because old and new code run side by side for a while. The **expand → migrate → contract** pattern: add new things first (backwards compatible), deploy code that uses them, backfill, then remove the old things in a *later* deploy.

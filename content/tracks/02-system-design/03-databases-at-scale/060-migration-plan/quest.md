---
slug: "sd-migration-plan"
title: "Design Doc: A Zero-Downtime Schema Change"
type: "design"
xp: 40
hints: ["At every moment, both the old and the new code version must work against the current schema.", "Write the rollback for each step before running it."]
rubric: ["Uses expand → migrate → contract (no step breaks the code that is still running)", "Specifies the order of migrations and code deploys explicitly", "Defines a mapping for messy existing values, including unknown ones", "Backfills in batches, with throttling or monitoring", "Handles the new required column for existing rows (default, backfill, then NOT NULL)", "Describes a rollback path for each step", "Includes verification queries or checks between steps"]
minWords: 200
---
# Design Doc: A Zero-Downtime Schema Change

Your capstone stores a todo's priority as free text (`priority TEXT`: `"high"`, `"High"`, `"urgent!!"`, …) on a table with **20 million rows**. Product wants a proper enum (`low | medium | high`) and a new required column, `due_date`, **without any downtime**. The API runs as 4 instances with rolling deploys.

Write the migration plan:

- The sequence of migrations **and** code deploys, in order.
- How you'll clean the messy existing priority data (what happens to `"urgent!!"`?).
- How you'll backfill 20M rows safely.
- How you'll handle `due_date` being required when old rows have none.
- How you'll roll back at each step if something goes wrong.
- How you'll verify each step before moving on.

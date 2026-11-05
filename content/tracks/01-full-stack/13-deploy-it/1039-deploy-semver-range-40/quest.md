---
slug: "deploy-semver-range-40"
title: "Deploy Drill: Which version does npm install? #40"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.1.0\"`. The registry has: `0.0.9`, `0.1.0`, `0.1.1`, `0.2.0`, `0.3.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.9`","`0.1.0`","`0.1.1`","`0.2.0`"],"answer":2,"explanation":"`0.1.1` is the highest version matching `~0.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.1.0\"`. The registry has: `1.0.9`, `1.1.0`, `1.1.3`, `1.2.0`, `1.4.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.0`","`1.0.9`","`1.2.0`","`1.1.3`"],"answer":3,"explanation":"`1.1.3` is the highest version matching `~1.1.0`."},{"prompt":"`package.json` has `\"some-lib\": \"1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.4`, `1.5.0`, `1.7.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.4`","`1.5.0`","`1.3.9`","`1.4.2`"],"answer":3,"explanation":"`1.4.2` is the highest version matching `1.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.4.0\"`. The registry has: `1.3.9`, `1.4.0`, `1.4.1`, `1.5.0`, `1.6.0`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.1`","`1.4.0`","`1.3.9`","`1.5.0`"],"answer":0,"explanation":"`1.4.1` is the highest version matching `~1.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^3.2.3\"`. The registry has: `3.1.9`, `3.2.3`, `3.2.6`, `3.3.0`, `3.5.2`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.2.3`","`3.1.9`","`3.5.2`","`3.2.6`"],"answer":2,"explanation":"`3.5.2` is the highest version matching `^3.2.3`."}]
---
# Deploy Drill: Which version does npm install? #40

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.

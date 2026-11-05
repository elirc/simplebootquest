---
slug: "deploy-semver-range-35"
title: "Deploy Drill: Which version does npm install? #35"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^1.4.2\"`. The registry has: `1.3.9`, `1.4.2`, `1.4.4`, `1.5.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.2`","`1.3.9`","`1.4.4`","`1.7.2`"],"answer":3,"explanation":"`1.7.2` is the highest version matching `^1.4.2`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.0.1\"`. The registry has: `0.0.1`, `0.0.4`, `0.0.9`, `0.1.0`, `0.2.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.9`","`0.1.0`","`0.0.1`","`0.0.4`"],"answer":0,"explanation":"`0.0.9` is the highest version matching `~0.0.1`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.0.1\"`. The registry has: `0.0.1`, `0.0.3`, `0.0.9`, `0.1.0`, `0.2.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.1`","`0.1.0`","`0.0.9`","`0.0.3`"],"answer":2,"explanation":"`0.0.9` is the highest version matching `^0.0.1`."},{"prompt":"`package.json` has `\"some-lib\": \"3.0.4\"`. The registry has: `3.0.4`, `3.0.7`, `3.0.9`, `3.1.0`, `3.2.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.0.4`","`3.0.7`","`3.1.0`","`3.0.9`"],"answer":0,"explanation":"`3.0.4` is the highest version matching `3.0.4`."},{"prompt":"`package.json` has `\"some-lib\": \"1.3.2\"`. The registry has: `1.2.9`, `1.3.2`, `1.3.4`, `1.4.0`, `1.5.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.3.4`","`1.3.2`","`1.2.9`","`1.4.0`"],"answer":1,"explanation":"`1.3.2` is the highest version matching `1.3.2`."}]
---
# Deploy Drill: Which version does npm install? #35

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.

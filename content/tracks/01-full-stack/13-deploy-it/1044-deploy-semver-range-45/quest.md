---
slug: "deploy-semver-range-45"
title: "Deploy Drill: Which version does npm install? #45"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"^3.5.1\"`. The registry has: `3.4.9`, `3.5.1`, `3.5.2`, `3.6.0`, `3.7.0`, `4.0.0-beta.1`, `4.0.0`. Which version does a fresh `npm install` pick?","options":["`3.5.1`","`3.7.0`","`3.5.2`","`3.4.9`"],"answer":1,"explanation":"`3.7.0` is the highest version matching `^3.5.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.4.1\"`. The registry has: `1.3.9`, `1.4.1`, `1.4.4`, `1.5.0`, `1.7.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.4.1`","`1.3.9`","`1.4.4`","`1.5.0`"],"answer":2,"explanation":"`1.4.4` is the highest version matching `~1.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.3.1\"`. The registry has: `0.2.9`, `0.3.1`, `0.3.3`, `0.4.0`, `0.5.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.4.0`","`0.3.1`","`0.3.3`","`0.2.9`"],"answer":2,"explanation":"`0.3.3` is the highest version matching `~0.3.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~1.1.2\"`. The registry has: `1.0.9`, `1.1.2`, `1.1.4`, `1.2.0`, `1.3.1`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.2`","`1.1.4`","`1.0.9`","`1.2.0`"],"answer":1,"explanation":"`1.1.4` is the highest version matching `~1.1.2`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.1.0\"`. The registry has: `1.0.9`, `1.1.0`, `1.1.2`, `1.2.0`, `1.4.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.1.0`","`1.0.9`","`1.1.2`","`1.4.2`"],"answer":3,"explanation":"`1.4.2` is the highest version matching `^1.1.0`."}]
---
# Deploy Drill: Which version does npm install? #45

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.

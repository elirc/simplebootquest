---
slug: "deploy-semver-range-26"
title: "Deploy Drill: Which version does npm install? #26"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.4.3\"`. The registry has: `0.3.9`, `0.4.3`, `0.4.6`, `0.5.0`, `0.7.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.9`","`0.4.6`","`0.5.0`","`0.4.3`"],"answer":1,"explanation":"`0.4.6` is the highest version matching `~0.4.3`."},{"prompt":"`package.json` has `\"some-lib\": \"0.3.0\"`. The registry has: `0.2.9`, `0.3.0`, `0.3.3`, `0.4.0`, `0.6.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.3.3`","`0.4.0`","`0.2.9`","`0.3.0`"],"answer":3,"explanation":"`0.3.0` is the highest version matching `0.3.0`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.2.0\"`. The registry has: `0.1.9`, `0.2.0`, `0.2.1`, `0.3.0`, `0.4.0`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.2.0`","`0.3.0`","`0.1.9`","`0.2.1`"],"answer":3,"explanation":"`0.2.1` is the highest version matching `~0.2.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^1.5.0\"`. The registry has: `1.4.9`, `1.5.0`, `1.5.2`, `1.6.0`, `1.8.2`, `2.0.0-beta.1`, `2.0.0`. Which version does a fresh `npm install` pick?","options":["`1.8.2`","`1.5.0`","`1.4.9`","`1.5.2`"],"answer":0,"explanation":"`1.8.2` is the highest version matching `^1.5.0`."},{"prompt":"`package.json` has `\"some-lib\": \"^0.0.4\"`. The registry has: `0.0.4`, `0.0.5`, `0.0.9`, `0.1.0`, `0.3.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.0.9`","`0.0.4`","`0.1.0`","`0.0.5`"],"answer":0,"explanation":"`0.0.9` is the highest version matching `^0.0.4`."}]
---
# Deploy Drill: Which version does npm install? #26

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.

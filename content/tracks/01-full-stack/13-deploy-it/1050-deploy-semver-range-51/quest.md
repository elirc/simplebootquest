---
slug: "deploy-semver-range-51"
title: "Deploy Drill: Which version does npm install? #51"
type: "quiz"
xp: 10
optional: true
section: "Practice: Deploy & Operate Drills"
questions: [{"prompt":"`package.json` has `\"some-lib\": \"~0.0.0\"`. The registry has: `0.0.0`, `0.0.2`, `0.0.9`, `0.1.0`, `0.3.1`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.1.0`","`0.0.0`","`0.0.2`","`0.0.9`"],"answer":3,"explanation":"`0.0.9` is the highest version matching `~0.0.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.4.1\"`. The registry has: `2.3.9`, `2.4.1`, `2.4.4`, `2.5.0`, `2.7.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.9`","`2.4.4`","`2.5.0`","`2.4.1`"],"answer":3,"explanation":"`2.4.1` is the highest version matching `2.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"2.4.1\"`. The registry has: `2.3.9`, `2.4.1`, `2.4.3`, `2.5.0`, `2.7.1`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.4.1`","`2.3.9`","`2.4.3`","`2.5.0`"],"answer":0,"explanation":"`2.4.1` is the highest version matching `2.4.1`."},{"prompt":"`package.json` has `\"some-lib\": \"~0.4.0\"`. The registry has: `0.3.9`, `0.4.0`, `0.4.3`, `0.5.0`, `0.6.2`, `1.0.0-beta.1`, `1.0.0`. Which version does a fresh `npm install` pick?","options":["`0.5.0`","`0.4.0`","`0.3.9`","`0.4.3`"],"answer":3,"explanation":"`0.4.3` is the highest version matching `~0.4.0`."},{"prompt":"`package.json` has `\"some-lib\": \"2.3.0\"`. The registry has: `2.2.9`, `2.3.0`, `2.3.2`, `2.4.0`, `2.6.0`, `3.0.0-beta.1`, `3.0.0`. Which version does a fresh `npm install` pick?","options":["`2.3.0`","`2.2.9`","`2.3.2`","`2.4.0`"],"answer":0,"explanation":"`2.3.0` is the highest version matching `2.3.0`."}]
---
# Deploy Drill: Which version does npm install? #51

`^1.4.2` allows any `1.x.y` ≥ 1.4.2 (but for `0.x` versions, only the same minor). `~1.4.2` allows `1.4.x` ≥ 1.4.2. Pre-releases (`2.0.0-beta.1`) are never picked by ranges like these. npm installs the **highest** version that satisfies the range.

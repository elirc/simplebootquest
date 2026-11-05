---
slug: "testing-mocks-54"
title: "Testing Drill: Mock function calls #54"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadEmployee = vi.fn((id) => id * 2);\nloadEmployee.mockReturnValueOnce(20);\nconst results = [5, 1, 4].map((id) => loadEmployee(id));\n```\n\nAfter this runs, how many times was `loadEmployee` called?","options":["3","5","4","2"],"answer":0},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(72);\nconst results = [1, 3, 5, 3].map((id) => loadSong(id));\n```\n\nAfter this runs, what is `loadSong.mock.calls[1]`?","options":["`3`","`[1]`","`[1,3]`","`[3]`"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(45);\nconst results = [5, 4].map((id) => loadHotel(id));\n```\n\nAfter this runs, does `expect(loadHotel).toHaveBeenCalledWith(4)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","Yes","No: it only checks the first call"],"answer":2},{"prompt":"```js\nconst loadSong = vi.fn((id) => id * 2);\nloadSong.mockReturnValueOnce(70);\nconst results = [2, 1].map((id) => loadSong(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[70,1]`","`[2,1]`","`[70,2]`","`[4,2]`"],"answer":2},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(68);\nconst results = [2, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[4,4]`","`[68,2]`","`[2,2]`","`[68,4]`"],"answer":3}]
---
# Testing Drill: Mock function calls #54

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.

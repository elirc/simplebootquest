---
slug: "testing-mocks-79"
title: "Testing Drill: Mock function calls #79"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(16);\nconst results = [3, 3, 3, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, how many times was `loadRecipe` called?","options":["4","2","3","5"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(14);\nconst results = [3, 3, 2].map((id) => loadRecipe(id));\n```\n\nAfter this runs, how many times was `loadRecipe` called?","options":["2","4","3"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(40);\nconst results = [4, 4, 4, 3].map((id) => loadEvent(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[40,8,8,6]`","`[4,4,4,3]`","`[40,4,4,3]`","`[8,8,8,6]`"],"answer":0},{"prompt":"```js\nconst loadRecipe = vi.fn((id) => id * 2);\nloadRecipe.mockReturnValueOnce(75);\nconst results = [3, 4, 5, 1].map((id) => loadRecipe(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[75,8,10,2]`","`[6,8,10,2]`","`[3,4,5,1]`","`[75,4,5,1]`"],"answer":0},{"prompt":"```js\nconst loadTransaction = vi.fn((id) => id * 2);\nloadTransaction.mockReturnValueOnce(40);\nconst results = [5, 2, 2, 3].map((id) => loadTransaction(id));\n```\n\nAfter this runs, does `expect(loadTransaction).toHaveBeenCalledWith(3)` pass?","options":["Yes","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","No: it compares return values"],"answer":0}]
---
# Testing Drill: Mock function calls #79

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.

---
slug: "testing-mocks-56"
title: "Testing Drill: Mock function calls #56"
type: "quiz"
xp: 10
optional: true
section: "Practice: Assertions, Mocks & Strategy"
questions: [{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(87);\nconst results = [2, 2, 3, 1].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["3","5","4"],"answer":2},{"prompt":"```js\nconst loadFlight = vi.fn((id) => id * 2);\nloadFlight.mockReturnValueOnce(22);\nconst results = [5, 2].map((id) => loadFlight(id));\n```\n\nAfter this runs, how many times was `loadFlight` called?","options":["1","3","2","4"],"answer":2},{"prompt":"```js\nconst loadEvent = vi.fn((id) => id * 2);\nloadEvent.mockReturnValueOnce(20);\nconst results = [1, 3, 1].map((id) => loadEvent(id));\n```\n\nAfter this runs, does `expect(loadEvent).toHaveBeenCalledWith(1)` pass?","options":["No: it compares return values","No: it needs toHaveBeenLastCalledWith","No: it only checks the first call","Yes"],"answer":3},{"prompt":"```js\nconst loadHotel = vi.fn((id) => id * 2);\nloadHotel.mockReturnValueOnce(45);\nconst results = [5, 4, 2].map((id) => loadHotel(id));\n```\n\nAfter this runs, what does `results` contain?","options":["`[45,4,2]`","`[10,8,4]`","`[45,8,4]`","`[5,4,2]`"],"answer":2},{"prompt":"```js\nconst loadCity = vi.fn((id) => id * 2);\nloadCity.mockReturnValueOnce(27);\nconst results = [1, 4].map((id) => loadCity(id));\n```\n\nAfter this runs, what is `loadCity.mock.calls[1]`?","options":["`[1,4]`","`[1]`","`4`","`[4]`"],"answer":3}]
---
# Testing Drill: Mock function calls #56

`vi.fn()` records every call. `toHaveBeenCalledTimes(n)` counts them, `toHaveBeenCalledWith(...args)` checks that **some** call had those exact arguments, and `.mock.calls` is the full list. `mockReturnValueOnce` values are used first, then the default.

---
slug: "ae-q-verify-ui"
title: "Verifying UI Changes"
type: "quiz"
xp: 15
questions: [{"prompt": "All unit tests pass after a UI change. What else should you do?", "options": ["Nothing", "Run the app and exercise the feature, including empty, error and small-screen states", "Delete the tests"], "answer": 1}, {"prompt": "How can an agent provide evidence that a UI flow works?", "options": ["A confident summary", "Driving a real browser (e.g. Playwright) through the flow and capturing screenshots", "Printing the JSX"], "answer": 1}, {"prompt": "What is a quick accessibility check?", "options": ["Changing the font", "Tab through the page with the keyboard: is focus visible, and can every action be reached?", "Removing labels"], "answer": 1}, {"prompt": "Why test with long text?", "options": ["For fun", "Real data (long names, translations) breaks layouts that look fine with \"Test\"", "It is faster"], "answer": 1}, {"prompt": "Which Testing Library query style best matches how users find elements?", "options": ["container.querySelector(\".btn\")", "getByRole(\"button\", { name: /save/i })", "getByTestId everywhere"], "answer": 1}]
---
# Verifying UI Changes

Type-checking and unit tests say little about whether a UI change **looks and behaves right**. Before you accept an agent's frontend change:

- **Run the app and use the feature yourself**, including the unhappy paths: empty states, errors, slow networks (DevTools throttling), and long text.
- **Check responsive layouts**: phone width, tablet, wide screens.
- **Keyboard and screen reader basics**: tab through the page, check that focus is visible, that buttons are buttons, and that inputs have labels.
- **Both themes** if you support dark mode.
- **Component tests** with Testing Library (`getByRole`), for behaviour that should never regress.
- **Browser automation**: an agent with a browser tool (such as Playwright) can load the page, click through the flow, and take screenshots. That's great evidence to attach to a PR, but you still need to *look* at the screenshots.
- **Visual regression tests** (screenshot diffs) for design-critical pages.

"The tests pass" isn't the same as "the feature works for a person".

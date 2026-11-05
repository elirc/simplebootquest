---
slug: "ae-examples-references"
title: "Examples, References & Ambiguity"
type: "quiz"
xp: 15
questions: [{"prompt": "What is the most reliable way to get code that matches your project's style?", "options": ["Describe the style in adjectives", "Point to an existing file that does something similar", "Hope"], "answer": 1}, {"prompt": "The agent uses an API from an older library version. What prevents this?", "options": ["Asking it to be careful", "Stating the version and having it check the installed types, docs or changelog", "Nothing"], "answer": 1}, {"prompt": "When should an agent ask questions rather than assume?", "options": ["Never", "When there are real product or architecture decisions with no clear default", "For every variable name"], "answer": 1}, {"prompt": "For a data transformation task, a great addition to the prompt is…", "options": ["A motivational quote", "A concrete example input and the exact expected output", "The company history"], "answer": 1}, {"prompt": "When the agent does make an assumption, you want it to…", "options": ["Hide it", "State it explicitly, so you can confirm or correct it", "Make many more"], "answer": 1}]
---
# Examples, References & Ambiguity

### Show, don't just tell

The most reliable way to get code in your style is to **point at an example**:

- "Implement `DELETE /api/tags/:id` the same way `DELETE /api/recipes/:id` works in `routes/recipes.ts`."
- "Write tests in the style of `test/quests.test.ts`."
- Paste a sample input and the exact expected output for data transformations.

### Point at the truth for external facts

Agents' knowledge of libraries can be outdated. For anything version-specific:

- Name the version: "We use Prisma 7 with the pg driver adapter".
- Point to the docs, or let the agent read the installed package's types and changelog in `node_modules`.
- Ask it to *check* rather than recall: "Look at the generated client to confirm the method name".

### Handling ambiguity

When a request has real unknowns (product decisions, trade-offs), tell the agent to **ask first**: *"If anything is ambiguous, ask me before implementing."* For small details, let it make a reasonable assumption **and state it**, so you can correct it in review.

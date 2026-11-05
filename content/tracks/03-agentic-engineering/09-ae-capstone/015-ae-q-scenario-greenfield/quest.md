---
slug: "ae-q-scenario-greenfield"
title: "Scenarios: Starting a New Project with Agents"
type: "quiz"
xp: 15
questions: [{"prompt": "What should be in place before asking an agent to build many features in a new repo?", "options": ["Nothing", "Type-checking, linting and formatting, tests, CI, and a context file with the commands", "A logo"], "answer": 1}, {"prompt": "What is a \"walking skeleton\"?", "options": ["A Halloween demo", "A minimal end-to-end slice of the system that is built, tested and deployed", "An empty repo"], "answer": 1}, {"prompt": "The agent suggests a database you have never used, \"because it is popular\". What do you do?", "options": ["Accept it", "Decide deliberately based on requirements and team skills, and document the choice", "Use two databases"], "answer": 1}, {"prompt": "Why write a short ADR for early decisions?", "options": ["Bureaucracy", "Future you, teammates and agents can see why things are the way they are", "It is legally required"], "answer": 1}, {"prompt": "After a day of fast agent-driven progress, what is a good habit?", "options": ["Keep going without looking", "Review the code as a whole, refactor duplication, and update the docs and context files", "Delete the tests to save time"], "answer": 1}]
---
# Scenarios: Starting a New Project with Agents

Starting from an empty repo is where agents feel most magical, and where early decisions quietly lock in. A few hours of setup pay off for the whole life of the project:

- **Choose the stack deliberately**, not by default from whatever the agent suggests.
- **Set up the guard rails first**: TypeScript strict mode, lint and format, a test runner, CI, and a `CLAUDE.md` with the commands.
- **Walking skeleton first**: one thin feature end to end (database → API → UI → deployed) before many features.
- **Write things down**: decisions (ADRs), conventions and the data model.
- **Commit early and often**, and review even your own early code.

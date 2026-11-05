---
slug: "ae-pr-hygiene"
title: "PR Hygiene with Agent-Written Code"
type: "quiz"
xp: 15
questions: [{"prompt": "Who should be the first human to read agent-written code?", "options": ["The reviewer", "The PR author, before opening the PR", "Nobody"], "answer": 1}, {"prompt": "An agent produced a 3,000-line PR mixing a rename and a feature. Best move?", "options": ["Open it as is", "Split it into a mechanical rename PR and a smaller behavioural PR", "Squash it"], "answer": 1}, {"prompt": "What should a PR description contain?", "options": ["Nothing: the code speaks for itself", "What changed, why, how it was tested, and the risks", "The full chat log"], "answer": 1}, {"prompt": "Why might teams disclose AI assistance on PRs?", "options": ["To assign blame", "So reviewers can calibrate scrutiny, and the team can track how tools are used", "It is legally required everywhere"], "answer": 1}, {"prompt": "Responding to review feedback well means…", "options": ["Forwarding comments to the agent and pushing whatever it returns", "Understanding the feedback, making or directing the change, and verifying it", "Ignoring it"], "answer": 1}]
---
# PR Hygiene with Agent-Written Code

Agents make it easy to produce **big** PRs quickly. Reviewers' attention doesn't scale with that. Norms that keep review effective:

- **Small, focused PRs**: one logical change, ideally under a few hundred lines. Split mechanical changes (renames, formatting) from behavioural ones.
- **A description written for humans**: what changed, *why*, how it was tested, and anything risky. Agents can draft it, but you must check it's accurate.
- **The author reviews first.** Never open a PR for code you haven't read yourself. "The AI wrote it" isn't a review.
- **Disclose AI assistance** according to your team's norms (some teams use a `Co-Authored-By` trailer or a PR label). It helps reviewers calibrate where to look harder.
- **Respond to review** with understanding, not just by pasting feedback back into the agent and pushing whatever comes out.

The goal: a reviewer should never be the first human to read a line of code.

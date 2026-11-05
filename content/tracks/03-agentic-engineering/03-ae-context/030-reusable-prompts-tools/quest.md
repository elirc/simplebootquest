---
slug: "ae-reusable-prompts-tools"
title: "Reusable Commands, Skills & Tools"
type: "quiz"
xp: 15
resources: [{"title": "Model Context Protocol", "url": "https://modelcontextprotocol.io/"}, {"title": "Claude Code: Hooks", "url": "https://code.claude.com/docs/en/hooks"}]
questions: [{"prompt": "You must guarantee the formatter runs after every agent edit. Best option?", "options": ["Ask nicely in CLAUDE.md", "A hook (or CI check) that runs it deterministically", "Hope"], "answer": 1}, {"prompt": "What does an MCP server provide to an agent?", "options": ["More training data", "Additional tools and data sources (e.g. issue tracker, database schema, browser)", "A faster model"], "answer": 1}, {"prompt": "When should you create a reusable command or skill?", "options": ["Never", "When you keep repeating the same instructions for a recurring workflow", "For every single task"], "answer": 1}, {"prompt": "Why prefer deterministic enforcement for critical rules?", "options": ["It is faster to write", "Instructions are requests the model might not follow; hooks, linters and CI always run", "Agents ignore all instructions"], "answer": 1}, {"prompt": "Adding an MCP server that reads arbitrary web pages introduces…", "options": ["No risk", "A path for untrusted text (possible prompt injection) into the agent's context", "Slower builds"], "answer": 1}]
---
# Reusable Commands, Skills & Tools

When you find yourself writing the same instructions again and again, package them:

- **Custom commands / prompt files**: a saved prompt for a recurring workflow, e.g. `/review` ("review the staged diff against our checklist") or `/new-endpoint`.
- **Skills**: packaged instructions (and sometimes scripts) that the agent loads when a task matches, such as "how we write migrations here".
- **Hooks**: deterministic scripts the harness runs at specific points, e.g. run the formatter after every edit, or block edits to `src/generated/`. Unlike instructions, hooks **always** run, so the model can't forget them.
- **MCP servers** (Model Context Protocol): give the agent new tools, such as querying your issue tracker, reading database schemas, or driving a browser.

### Instructions vs enforcement

Anything in a context file or prompt is a **request**, which the model usually follows but might not. For rules that must hold every time (formatting, forbidden paths, required checks), use **deterministic enforcement**: hooks, CI checks, linters, permission rules.

⚠️ Every tool you add is an attack surface: an MCP server that reads web pages or tickets can bring **untrusted text** into the agent's context (see the Safety chapter).

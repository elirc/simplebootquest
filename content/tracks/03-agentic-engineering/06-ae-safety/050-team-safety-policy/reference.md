# Coding agent safety policy

## Environments & access
- **Interactive agents** run on developer machines in the project directory only, on a feature branch, with no production credentials present (developers don't keep prod creds locally; prod access goes through the deploy pipeline only).
- **The background issue bot** runs in an ephemeral cloud container per issue, with a GitHub token scoped to this single repository (contents: write on non-protected branches, pull requests: write), and outbound network limited to the npm registry and GitHub.
- `main` is protected: PRs need review and green CI, with no force-pushes.

## Secrets & data
- Agents may read `.env.example`; reading `.env*` is denied by permission rules.
- No customer data in prompts. Use the seed script's synthetic data.
- Secret scanning runs in a pre-commit hook and in CI. Any leaked key is rotated within 1 hour, and deleting the commit is not considered a fix.

## Permissions

| Allow (no prompt) | Ask | Deny |
|-------------------|-----|------|
| read/search files, `git status/diff/log`, `npm test`, `npm run typecheck/lint` | file edits outside `src/` and `test/`, `npm install <pkg>`, migrations on the dev DB, `git commit` | `git push --force`, `rm -rf`, `git clean -fdx`, reading `.env*`, `curl \| sh`, any prod or `DATABASE_URL` override, publishing packages |

## Untrusted input & prompt injection
Untrusted inputs: issue bodies and comments, PR review comments, web pages, dependency files and READMEs. For the issue bot this is the main risk, so we remove legs of the lethal trifecta: **no secrets** in its container (it can't exfiltrate what it can't read), a restricted network, and its output is only a PR that a human reviews. PRs that modify `.github/workflows`, `package.json` scripts or lockfiles get a mandatory second reviewer.

## Production & destructive actions
Agents never deploy or touch production. Deploys only happen from `main` through CI. Data fixes are written as reviewed scripts, run by a human against a backup-verified database.

## When things go wrong
1. Stop the agent session and revoke its token.
2. Assess: check the git diff and reflog, and the command history, for what it ran.
3. Rotate any credential that may have been exposed.
4. Restore from git or a backup if needed.
5. Blameless postmortem focused on which guardrail was missing, then update this policy and the permission rules.

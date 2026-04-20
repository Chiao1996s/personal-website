@AGENTS.md

# Project Rules for Claude Code

## About this project
Personal portfolio website. Stack: Next.js 16, React 19, TypeScript, Tailwind CSS v4. Deployed on Vercel with auto-deploy from `main`.

## Git workflow
- Never commit directly to `main`. Always work on a feature branch.
- Branch naming: `feat/xyz`, `fix/xyz`, `chore/xyz` (kebab-case)
- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`
- After merge, delete the feature branch

## Pull Requests
When I ask you to make a PR:
1. Create a feature branch with a descriptive kebab-case name
2. Use conventional commit format for the commit message
3. PR title should clearly state what changed
4. PR description should include: what changed, why, and how to test locally
5. Open the PR in my browser when done
6. Never auto-merge — I want to review first

## Security
- `.env.local` and any `.env*` file (except `.env.example`) must never be committed
- Always check `.gitignore` before the first commit of any new project
- When adding a new environment variable, also update `.env.example` with a placeholder

## Code style
- Explain new concepts the first time they appear (I'm still learning)
- Prefer clarity over cleverness
- Comment non-obvious code
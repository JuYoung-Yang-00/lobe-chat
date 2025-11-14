# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

read @.cursor/rules/project-introduce.mdc

## Directory Structure

read @.cursor/rules/project-structure.mdc

## Development

### Git Workflow

- use rebase for git pull
- git commit message should prefix with gitmoji
- git branch name format example: tj/feat/feature-name
- use .github/PULL_REQUEST_TEMPLATE.md to generate pull request description

### Package Management

This repository adopts a monorepo structure.

- Use `pnpm` as the primary package manager for dependency management
- Use `bun` to run npm scripts
- Use `bunx` to run executable npm packages

### TypeScript Code Style Guide

see @.cursor/rules/typescript.mdc

### Testing

- **Required Rule**: read `@.cursor/rules/testing-guide/testing-guide.mdc` before writing tests
- **Commands**: Project has 3000+ tests, so always filter to specific tests:
  - Main app tests: `bunx vitest run --silent='passed-only' '[file-path-pattern]'`
  - Package tests: `cd packages/[package-name] && bunx vitest run --silent='passed-only' '[file-path-pattern]'`
  - Server DB tests: `cd packages/database && TEST_SERVER_DB=1 bunx vitest run --silent='passed-only' '[file-path-pattern]'`

**Critical rules**:
- Always wrap file paths in single quotes to avoid shell expansion
- Never run `bun run test`, `npm test`, or `vitest` without file filters - takes 10+ minutes
- Run tests by file pattern or test name (`-t "test name"`)
- Stop after 1-2 failed attempts and ask for help

### Typecheck

- use `bun run type-check` to check type errors.

### i18n

- **Keys**: Add to `src/locales/default/namespace.ts`
- **Dev**: Translate `locales/zh-CN/namespace.json` and `locales/en-US/namespace.json` locales file only for dev preview
- DON'T run `pnpm i18n`, let CI auto handle it

### Build and Development

- **Development server**: `pnpm dev` (port 3010), `pnpm dev:desktop` (port 3015), `pnpm dev:mobile` (port 3018)
- **Build**: `pnpm build` (includes prebuild linting and post-build sitemap generation)
- **Lint**: `pnpm lint` (runs TypeScript, style, type-check, and circular dependency checks)

### Database Operations

- **Generate schema**: `pnpm db:generate` (generates Drizzle schema and client)
- **Run migrations**: `pnpm db:migrate` (for server database)
- **Database studio**: `pnpm db:studio` (Drizzle Kit UI)

## Architecture Overview

### Data Flow Patterns
- **Web with ClientDB**: React → Client Service → Model → PGLite (WASM)
- **Web with ServerDB**: React → Client Service → tRPC → Server Services → PostgreSQL
- **Desktop**: Electron → Client Service → tRPC → Local/Cloud Services → PGLite/PostgreSQL

### Key Directory Structure
- `src/services/` - Cross-platform services (client.ts for clientDB, server.ts for serverDB)
- `src/server/` - Server-only code (services can access DB, modules cannot)
- `packages/database/` - Drizzle schemas, models, and repositories
- `src/store/` - Zustand state management
- `src/app/(backend)/` - API routes (REST and tRPC)

## Rules Index

All project rules are in @.cursor/rules/rules-index.mdc - key ones include:
- `testing-guide/testing-guide.mdc` - Comprehensive testing guide
- `typescript.mdc` - TypeScript style guide
- `react-component.mdc` - React patterns
- `zustand-*.mdc` - State management patterns
- `desktop-*.mdc` - Electron-specific guides

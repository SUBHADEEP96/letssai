<!-- BEGIN:repo-agent-rules -->

# Project guidance

This project uses Next.js 16 with the latest Sanity 5 stack for headless content management.

## Important conventions

- Treat this as a modern Next.js app with App Router and React 19.
- Use the latest Sanity patterns for Studio and content modeling.
- Prefer Sanity 5 APIs such as `defineConfig`, `defineType`, `defineField`, `structureTool`, and `visionTool`.
- Keep the Studio mounted at `/lsai-studio` and use the existing Sanity configuration in `sanity.config.ts`.

## Content management expectations

- Add or update content schemas in `sanity/schemaTypes/`.
- Keep the Studio structure configuration in `sanity/structure.ts`.
- Use the shared client from `sanity/lib/client.ts` for fetching content with `next-sanity`.
- Read environment values from `sanity/env.ts` and keep them aligned with the Sanity project configuration.

## When making changes

- Follow current Next.js conventions and avoid legacy patterns from older versions.
- Do not introduce deprecated Sanity APIs or old Studio patterns.
- Preserve the existing project structure unless a change clearly requires reorganization.
- Prefer minimal, type-safe updates and validate them with the available checks.

<!-- END:repo-agent-rules -->

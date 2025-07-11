---
sidebar_position: 3
---

# Skaya Next.js Template

Skaya provides optimized Next.js templates for AI-powered Web3 development with built-in TypeScript support and smart defaults.


## Initializing a Next.js Project

To create a new Next.js project with Skaya:

```bash
skaya init
? Please select a project type: Frontend
? Enter frontend project folder name: my-next-app
? How would you like to create your frontend project? Use a framework (React, Next.js, Vite)
? Select frontend framework: Next.js
```


:::tip[Info]
- The template will automatically configure with these recommended settings:

```
TypeScript: Enabled (always true)
ESLint: Enabled
src/ directory: Enabled
App Router: Enabled
Import alias: *@/* (default always enabled)*
Turbopack: Disabled (for better Web3 compatibility)
```
:::



## Running Your Project

After initialization, you can start your development servers:

### Start Frontend Only

```bash
skaya start frontend
```


## What's Next?

Continue your Skaya journey with these guides:

- [Creating Frontend Component](/docs/skaya-frontend/Create/Component) - Learn how to create custom ai generated components with apis and previous components integration in your fresh frontend app.

- [Creating Frontend Pages](/docs/skaya-frontend/Create/Page) - Learn how to create custom ai generated pages with apis and previous components integration in your fresh frontend app.


- [Creating Frontend Apis](/docs/skaya-frontend/Create/Api) - Learn how to create custom ai generated apis.


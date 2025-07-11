---
sidebar_position: 1
---

# Skaya Templates

Skaya provides powerful templates to jumpstart your AI-powered Web3 development. These templates cover frontend, backend, and smart contract development with integrated AI capabilities.

## Template Types

Skaya offers three main categories of templates:

1. **Frontend Templates** - Web3-ready UI components and pages with built-in:
   - Wallet connection (Web3.0 auth)
   - AI-powered UI components
   - Responsive layouts

2. **Backend Templates** - AI-enhanced API services featuring:
   - Pre-configured Web3 providers
   - AI model integration endpoints
   - JWT authentication
   - Database connectors

3. **Blockchain Templates** - Secure blockchain contracts including:
   - Custom Blockchain Nodes
   - Custom Enum File (For creating TypeScript types)
   - Token standards (ERC-20, ERC-721)
   - DeFi protocol starters
   - Gas-optimized patterns


## Initializing a Project with Templates

To create a new project using Skaya templates, run the following command in your terminal:

```bash
skaya init
```

You'll be guided through an interactive setup process:

1. First select your project type:
```bash
skaya init
? Please select a project type: (Use arrow keys)
❯ Frontend
  Backend
  Smart Contract
```
2. Enter your project name:
```bash
`? Enter frontend project folder name: my-web3-app
```
3. For frontend projects, choose between frameworks or templates:
```bash
? How would you like to create your frontend project?
❯ Use a framework (React, Next.js, Vite) 
  Use a template
```

4. If selecting a framework:
```bash
? Select frontend framework:
❯ React (via create-react-app)
  Next.js
  Vite
```

5. If selecting skaya templates, choose from available categories:
```bash
? Select frontend template category:
❯ Skaya Official
  Skaya Starter Kit
  Blank
  Custom Repo
```

6. Then select a specific template:
```bash
? Select a frontend template:
❯ REACT TS
  VITE TS
  NEXTJS
```

## Running Your Project

After initialization, you can start your development servers:

### Start Frontend Only

```bash
skaya start frontend
```

### Start Backend Only

```bash
skaya start backend
```

### Smart Contract Development

```bash
skaya start blockchain
```

### Start All Services

- Starts frontend, backend and blockchain services
- Enables cross-service communication
- Monitors both servers with unified logging

```bash
skaya start
```


## What's Next?

Continue your Skaya journey with these guides:

- [Creating Frontend Component type](docs/category/create) - Learn how to create custom ai generated components,apis,pages in your fullstack Web3 application

- [Creating custom templates](../template-development) - Build and share your own Skaya templates (Coming Soon as open-source)

---
sidebar_position: 1
---

# Getting Started

<div
  style={{
    display: 'flex',
    alignItems: 'center',
    borderRadius: '4px',
    height: '20px',
    marginBottom:'14px',
    border:'2px solid red',
    padding:'1rem'
  }}
>
  <a
    href="https://www.npmjs.com/package/skaya"
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#cb3837',
      textDecoration: 'none',
      fontWeight: 'bold',
    }}
  >
    <img
      src="/img/npm-logo-red.png"
      alt="npm logo"
      style={{
        height: '12px',
      }}
    />
    <span>| Skaya v1.0.0</span>
  </a>
</div>
:::tip[Info]
Skaya is a versatile CLI toolkit designed to supercharge your full-stack web3 project setup, with comprehensive support for frontend, backend, and blockchain development.
:::

## Quickstart Guide

This guide provides a streamlined approach to bootstrap a new **Skaya** project in under 5 minutes.

## Prerequisites

Ensure you have the following dependencies installed on your system:

- **Node.js**: Version 18.0 or a later stable release. We recommend using a version manager like `nvm` (Node Version Manager) for seamless version switching.
- **npm** or **Yarn**: The Node.js package manager is bundled with Node.js.

## Installation

For a global installation of the Skaya CLI, execute the following command in your terminal:

```bash
npm install -g skaya
```

:::info[API Key Required]
To enable AI-powered website creation features, you'll need to configure your API key.

[Click here to set up your API key](/docs/api)
:::

## Initiate a new project

Generate a new Skaya project using our production-ready templates:

```bash
npx skaya init
```

You can run this command in Command Prompt, Powershell, Terminal, or any other integrated terminal.

#### For frontend projects:

```bash
npx skaya init frontend
# Enter project name: my-web3-app
# Select template:
# ❯ React + TypeScript (Production-ready)
#  Vite + TypeScript (Coming soon)
#  Next.js (Coming soon)
```

:::danger Coming Soon

#### For backend projects (coming soon):

```bash
npx skaya init backend
# Enter project name: my-web3-apis
```

:::

:::danger Coming Soon

#### For Blockchain projects (coming soon):

```bash
npx skaya init smart-contract
# Enter project name: my-web3-contracts
```

:::

## Start your development

After project generation, navigate to your new project directory and start the development server.

```bash
cd my-web3-app
npm install
npm run dev
```

The `cd` command changes the directory you're working with. In order to work with your newly created Skaya site, you'll need to navigate the terminal there.

The `npm run dev` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:5173/ or http://localhost:3000/.

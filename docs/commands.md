---
sidebar_position: 3
---

# Commands

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
    target='blank'
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
# Web3 Scaffolding Tool CLI Reference

| Command       | Option Flags                  | Description                                                                 | Example Usage                                 |
|---------------|-------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------|
| **`init`**    | (Interactive)                 | Initializes a new project with optional type selection                      | `skaya init frontend`                         |
|               |                               | - Prompts for project type if not provided                                  | `skaya init`                                  |
|               |                               | - Asks for folder name (default: `read From config`)                        |                                               |
| **`create`**  | `-p, --project <type>`        | Specifies project type (`frontend`/`backend`/`blockchain`)                  | `skaya create -p frontend -f Button`          |
|               | `-f, --filename <name>`       | Sets component filename (capitalized automatically)                         |                                               |
|               | `-a, --ai`                    | Enables AI-generated component                                              | `skaya create modal -a -d "Popup dialog"`     |
|               | `-d, --description <text>`    | Provides context for AI generation                                          |                                               |
| **`update`**  | `-p, --project <type>`        | Specifies project type to update                                            | `skaya update -p backend middleware`          |
|               | `-a, --ai`                    | Uses AI for component updates                                               |                                               |
|               | `-d, --description <text>`    | New specifications for AI updates                                           |                                               |
| **`start`**   | `-a, --all`                   | Starts all project services simultaneously                                  | `skaya start --all`                           |
|               | (Checkbox prompt)             | Interactive selection when no flags provided                                | `skaya start` (then select)                   |
| **`install`** | `-a, --all`                   | Installs dependencies for all project types                                 | `skaya install -a`                            |
|               | `-f, --frontend`              | Installs frontend dependencies                                              | `skaya install -f`                            |
|               | `-b, --backend`               | Installs backend dependencies                                               | `skaya install -b`                            |
|               | `-c, --blockchain`            | Installs blockchain dependencies                                            | `skaya install -c`                            |
|               | `-l, --legacy-peer-deps`      | Uses legacy peer dependency resolution                                      | `skaya install -l`                            |
|               | `[additional_args]`           | Passes extra arguments to package manager                                   | `skaya install --force`                       |

## Key Features Explained

1. **Smart Defaults**  
   - `init` auto-suggests folder names (`frontendSkayaProject`)  
   - `create` capitalizes filenames (`button` → `Button`)

2. **Context-Aware Prompts**  
   - `create` shows only relevant component types based on project selection  
   - `update` scans existing components to prevent duplicates

3. **AI Integration**  
   - Flags `-a` and `-d` work across `create`/`update` for:  
     ✓ Code generation  
     ✓ Component modifications  
     ✓ Documentation updates

4. **Installation Flexibility**  
   - Supports mixed project types:  
     ```bash
     skaya install -f -c --legacy-peer-deps
     ```
   - Forwards args like `--force` to npm/yarn

5. **Error Prevention**  
   - Validates project/component types before execution  
   - Requires filenames in non-interactive mode  
   - Confirms folder changes when default exists
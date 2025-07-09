---
sidebar_position: 1
---

# Component

Skaya's AI-powered component generator accelerates UI development with smart, context-aware scaffolding. Generate production-ready components with integrated testing, styling, and documentation in seconds.

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

:::tip[Prerequisites]
This guide assumes knowledge of:
- [Basic Skaya project initialization](/docs/category/init)
- Fundamental React concepts
:::

## Key Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **🤖 AI-Powered**      | Context-aware generation with dynamic prop/state suggestions                |
| **🌐 Language Support**| TypeScript (`tsx`) with strict typing enforcement                           |
| **🎨 Styling Options** | `CSS` \| `SCSS` \| `styled-components` \| `Tailwind`                       |
| **🧪 Test Coverage**   | Auto-generated Jest/Vitest + Storybook stories                              |
| **🔄 Dependency Import**| Seamlessly import existing components and APIs                              |


Every component includes:
- ✅ **Core component file** with TypeScript interface
- ✅ **Storybook integration** for visual testing
- ✅ **Unit tests** with sample test cases
- ✅ **Style file** (CSS/SCSS) or CSS-in-JS setup

## Creating Components

### Interactive Mode
```bash
skaya create
# Follow the interactive prompts
```

### Direct Generation
```bash
skaya create component --project frontend --filename WalletButton
```

### Quick Start with npx
```bash
npx skaya create component -p frontend -f WalletButton
```

## Command Options

### Core Options
| Option                | Alias | Description                               | Values                                  | Default          |
|-----------------------|-------|-------------------------------------------|-----------------------------------------|------------------|
| `--project`           | `-p`  | Project type                              | `frontend`, `backend`, `blockchain`     | `frontend`       |
| `--filename`          | `-f`  | Component filename (auto-capitalized)     | Any valid name                          | Required         |



:::danger[Advanced Configuration]
#### Custom Template Setup (Coming in v2.0)
`skaya create component --template path/to/template.json`
:::




## Example Workflow with Custom imports
Here's the complete interactive flow for AI generation:

```bash
skaya create component -f WalletButton
```

Interactive prompts:
```bash
✔ Enter the folder where you want to create the component for Walletbutton:
myapp/src/components
✔ Use AI to generate the component? Yes
? Select which required components you would like to import: 
(Press <space> to select, <a> to toggle all, <i> to invert selection)
  ◉ component
❯ ◯ api
```

  You can select existing components or APIs to import into your newly generated component, allowing for seamless integration and reusability. For instance, you might want to import a `Walletbutton` component and a `Login` API into a new `NftCard` component.

- Learn how to create Apis in our [Api Create Guide](/docs/skaya-frontend/Create/Api).

```bash
✔ Select which required components you would like to import: component, api
? Select component components to import:
(Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to proceed)
❯◉ Walletbutton
```

```bash
✔ Select component components to import: Walletbutton
? Select api components to import:
❯◉ Login
```

```bash
✔ Select component components to import: Walletbutton
✔ Select api components to import: Login

--- Dependencies to be imported ---

Dependencies (component):
- Walletbutton

Dependencies (api):
- Login
-------------------------------------------------
? Enter AI Prompt on how the files and code should work: Import the walletconenctbutton and use login api to create a nftcard
```

Successful generation output:
```bash
✅ component file created at myapp/src/components/Walletbutton/Walletbutton.tsx
✅ component file created at myapp/src/components/Walletbutton/Walletbutton.stories.tsx
✅ component file created at myapp/src/components/Walletbutton/Walletbutton.test.tsx
✅ component file created at myapp/src/components/Walletbutton/Walletbutton.css
```

### Key Notes
1. When using AI generation:
    - You can import existing components if needed, fostering a modular and reusable codebase.
    - Provide clear, specific prompts for best results, especially when defining how imported components or APIs should interact.
    - Generated files include tests and stories by default.

2. Folder structure:
    - Components are created in PascalCase
    - Test/story files are automatically paired
    - CSS modules are generated by default


### Import Behavior
- **Automatic Props Binding**: Imported components' props are automatically wired
- **API Hook Generation**: Required API hooks are generated with proper typing
- **Dependency Tracking**: All imports are tracked in the component's metadata



## Updating Components
Learn how to modify existing components in our [Component Update Guide](/docs/skaya-frontend/Update/Component).
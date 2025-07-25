---
sidebar_position: 3
---

# API

Skaya's AI-powered API generator streamlines backend-frontend integration with intelligent, context-aware scaffolding. Generate production-ready API endpoints within seconds.


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


## API Generation Options

Skaya provides two API generation patterns:

1. **Redux-integrated APIs** (with automatic state management)
2. **Direct APIs** (simple request/response pattern)


## Key Features

| Feature                | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| **🚀 Rapid Scaffolding** | Generate complete API endpoints with 1 command                              |
| **🔄 Dual Mode**        | Redux-integrated or direct API patterns                                     |
| **🔐 Auth-Ready**       | Auto-generated auth headers and token handling                              |
| **📦 Centralized Config** | Unified endpoint management in `apiEndpoints.ts`                          |
| **🧩 Modular Design**   | Isolated API modules for better maintainability                            |
| **📊 TypeScript First**  | Full type definitions for requests/responses                                |
| **⚡ Auto-Sync**        | Keep frontend and backend types in sync                                     |


Every Api includes:
- ✅ **Core apiEndpoint file** to store endpoint detials
- ✅ **backend Request integration** for calling backend

## Creating Components

### Interactive Mode
```bash
skaya create
# Follow the interactive prompts
```

### Direct Generation
```bash
skaya create api --project frontend --filename Profile
```

### Quick Start with npx
```bash
npx skaya api component -p frontend -f Profile
```

## Example Workflow 

### 1: Initiate Creation
```bash
skaya create
```

### 2: Configuration
```bash
✔ Select project type: frontend  
✔ Select component type: api  
✔ Enter filename (without extension): Profile  
✔ Enter folder path: myapp/src/apis  
```

### 3. API Type Selection
```bash
? Select API type:
❯ API with Redux
  API without Redux

✔ Select API type: API with Redux
```

### 4. API Specification
```bash
? Enter API ID: 45
✔ Enter API ID: 45

? Does this endpoint require auth? (Y/n) y
✔ Does this endpoint require auth? Yes

? Enter the API URL: /profile
✔ Enter the API URL: /profile

? Select the HTTP method:
❯ GET
  POST
  PUT
  PATCH
  DELETE

  ✔ Select the HTTP method: GET
```

### 5. File Generation Output
```bash
store doesn't exist creating one
Backend API Call added: /.../src/apis/backendRequest.ts
✅ api file created at /.../src/apis/redux/store.tsx
✅ api file created at /.../src/apis/redux/storeProvider.tsx
✅ api file created at /.../src/apis/Profile/index.ts
✅ api file created at /.../src/apis/apiEndpoints.ts
```
#### apiEndpoints.ts storing all endpoints data
```typescript
export const ApiEndpoint = {
  PROFILE: {
    apiId: 101,
    withAuth: false,
    url: "v1/profile",
    method: "GET"
  }
};
```

## Redux API Implementation

### File Structure
```bash
src/apis/  
├── Profile/  
│   └── index.ts          # Redux slice definition  
├── redux/  
│   ├── store.ts  
│   └── storeProvider.tsx  
├── apiEndpoints.ts  
└── backendRequest.ts  
```

## Direct API Implementation

### File Structure
```bash
src/apis/  
├── apiEndpoints.ts  
└── backendRequest.ts  
```

## Usage Examples

### Redux API Usage
```typescript
const dispatch = useAppDispatch();
const { loading, error } = fetchProfileData(state => state.auth);

const handleLogin = () => {
  dispatch(loginUser({ email, password }));
};
```

### Direct API Usage
```typescript
const loadData = async () => {
  try {
    const response = Request({
    endpointId: 'PROFILE',
    slug: userId
  });
    setProfile(response.data);
  } catch (error) {
    console.error('Fetch failed:', error);
  }
};
```

## Feature Comparison

| Feature          | Redux API                | Direct API               |
|------------------|--------------------------|--------------------------|
| State Management | Built-in                 | Manual                   |
| Complexity       | Higher                   | Lower                    |
| Best For         | Global state             | Local component data     |


## Best Practices

1. Use Redux APIs for:
   - Authentication flows  
   - App-wide settings  
   - Frequently accessed data  

2. Use Direct APIs for:
   - Form submissions  
   - One-time data fetches  
   - Simple component data  

3. Always:
   - Keep endpoint definitions centralized  
   - Implement consistent error handling  
   - Type all request/response payloads
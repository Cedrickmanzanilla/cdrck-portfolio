# 🚀 How to Start Development Server

## Problem
NODE_ENV is set to "production" which prevents devDependencies from loading properly.

## Solution - Choose ONE method:

### Method 1: Use the dev script (Recommended)
```powershell
npm run dev:win
```

### Method 2: Manual fix
```powershell
# Clear NODE_ENV
$env:NODE_ENV = ''

# Clear vite cache
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue

# Run dev server
npm run dev
```

### Method 3: Permanent fix (Set in PowerShell profile)
Add this to your PowerShell profile:
```powershell
# Open profile
notepad $PROFILE

# Add this line:
$env:NODE_ENV = ''
```

Then restart PowerShell and run:
```powershell
npm run dev
```

---

## Quick Start
Just run:
```powershell
npm run dev:win
```

This will automatically fix the NODE_ENV issue and start the server.


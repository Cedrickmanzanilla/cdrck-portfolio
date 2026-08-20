# 🚀 Quick Start Guide

## Para mag-run ng development server:

### Option 1: Gamitin ang dev script (RECOMMENDED)
```powershell
npm run dev:win
```

### Option 2: Manual (Kung ayaw gumana ang Option 1)
```powershell
# I-clear ang NODE_ENV
$env:NODE_ENV = ''

# I-run ang dev server
npm run dev
```

### Option 3: Direktang gamitin ang vite
```powershell
$env:NODE_ENV = ''
npx vite
```

---

## ⚠️ Important Notes:

1. **Laging i-clear ang NODE_ENV** bago mag-run ng `npm run dev`
2. **Gamitin ang `npm run dev:win`** para automatic na ma-fix
3. Kung may error pa, i-check kung naka-set sa "production" ang NODE_ENV:
   ```powershell
   $env:NODE_ENV
   ```
   Dapat walang lalabas o empty string lang.

---

## ✅ After running, i-open sa browser:
http://localhost:5173


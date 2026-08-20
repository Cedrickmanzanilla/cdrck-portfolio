# Development script - fixes NODE_ENV issue
# Run this instead of npm run dev directly

# Clear NODE_ENV
$env:NODE_ENV = ''

# Clear vite cache
Remove-Item -Recurse -Force node_modules\.vite -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force .vite -ErrorAction SilentlyContinue

# Run dev server directly with vite
Write-Host "Starting development server..." -ForegroundColor Green
Write-Host "NODE_ENV is set to: $env:NODE_ENV" -ForegroundColor Yellow
npx vite


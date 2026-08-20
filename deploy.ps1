# Deployment script for GitHub Pages
# This script builds and deploys your portfolio to GitHub Pages

Write-Host "🚀 Starting deployment process..." -ForegroundColor Cyan

# Step 1: Build the project
Write-Host "`n📦 Building project..." -ForegroundColor Yellow
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build successful!" -ForegroundColor Green

# Step 2: Switch to gh-pages branch
Write-Host "`n🌿 Switching to gh-pages branch..." -ForegroundColor Yellow
git checkout gh-pages

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  gh-pages branch doesn't exist locally, creating it..." -ForegroundColor Yellow
    git checkout --orphan gh-pages
    git rm -rf --cached .
}

# Step 3: Copy dist files to root
Write-Host "`n📋 Copying build files..." -ForegroundColor Yellow
Remove-Item -Recurse -Force * -Exclude .git,node_modules -ErrorAction SilentlyContinue
Copy-Item -Path dist\* -Destination . -Recurse -Force

# Step 4: Remove node_modules if accidentally copied
if (Test-Path "node_modules") {
    Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
}

# Step 5: Stage and commit
Write-Host "`n💾 Committing changes..." -ForegroundColor Yellow
git add .
git commit -m "Update portfolio - $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Step 6: Push to GitHub
Write-Host "`n☁️  Pushing to GitHub..." -ForegroundColor Yellow
git push origin gh-pages --force

if ($LASTEXITCODE -eq 0) {
    Write-Host "`n✅ Deployment successful!" -ForegroundColor Green
    Write-Host "🌐 Your portfolio will be live at: https://cedrickmanzanilla.github.io/cdrck-portfolio/" -ForegroundColor Cyan
    Write-Host "⏳ It may take a few minutes for changes to appear." -ForegroundColor Yellow
} else {
    Write-Host "`n❌ Deployment failed!" -ForegroundColor Red
    exit 1
}

# Step 7: Switch back to main branch
Write-Host "`n🔄 Switching back to main branch..." -ForegroundColor Yellow
git checkout main

Write-Host "`n✨ Done! You can continue working on your portfolio." -ForegroundColor Green


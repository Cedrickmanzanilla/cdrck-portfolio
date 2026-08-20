# 📋 Portfolio Update Guide

Ito ang step-by-step guide para mag-update ng portfolio mo at i-deploy sa GitHub Pages.

## 🚀 Quick Update Process

### Option 1: Gamit ang Deployment Script (Recommended)

1. **Gumawa ng changes** sa portfolio mo (edit files sa `src/` folder)
2. **I-test locally** (optional pero recommended):
   ```bash
   npm run dev
   ```
   I-open ang `http://localhost:5173` sa browser para makita ang changes

3. **I-commit ang changes** sa git:
   ```bash
   git add .
   git commit -m "Update portfolio: [describe your changes]"
   git push origin main
   ```

4. **I-deploy sa GitHub Pages**:
   ```bash
   npm run deploy:manual
   ```
   
   O kaya diretso:
   ```bash
   powershell -ExecutionPolicy Bypass -File ./deploy.ps1
   ```

5. **Wait 2-5 minutes** - Ang website mo ay mag-uupdate sa:
   https://cedrickmanzanilla.github.io/cdrck-portfolio/

---

### Option 2: Manual Deployment (Kung may issue ang script)

1. **Build ang project**:
   ```bash
   npm run build
   ```

2. **Switch to gh-pages branch**:
   ```bash
   git checkout gh-pages
   ```

3. **Copy dist files**:
   ```bash
   # Delete old files (except .git)
   Remove-Item -Recurse -Force * -Exclude .git -ErrorAction SilentlyContinue
   
   # Copy new build files
   Copy-Item -Path dist\* -Destination . -Recurse -Force
   ```

4. **Commit at push**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin gh-pages --force
   ```

5. **Bumalik sa main branch**:
   ```bash
   git checkout main
   ```

---

## 📝 Common Updates

### Mag-update ng Text/Content
- Edit ang files sa `src/components/` folder
- Example: `src/components/About.jsx`, `src/components/Hero.jsx`

### Mag-add ng New Skills
- Edit `src/components/Skills.jsx`
- Add new skill objects sa array

### Mag-update ng Portfolio Items
- Edit `src/components/VideoEditingPortfolio.jsx` o
- Edit `src/components/GraphicDesignPortfolio.jsx`

### Mag-change ng Images
- I-lagay ang bagong images sa `public/` folder
- I-update ang image paths sa components

### Mag-change ng Colors/Theme
- Edit `src/index.css` para sa global styles
- O edit individual components para sa specific styling

---

## ⚠️ Important Notes

1. **Always test locally first** gamit ang `npm run dev` bago mag-deploy
2. **Commit changes sa main branch** bago mag-deploy
3. **Wait 2-5 minutes** after deployment para makita ang changes
4. **Clear browser cache** kung hindi nag-appear ang changes (Ctrl+Shift+R)

---

## 🐛 Troubleshooting

### Hindi nag-appear ang changes?
- Wait 2-5 minutes (GitHub Pages may take time to update)
- Clear browser cache (Ctrl+Shift+R)
- Check GitHub repository → Settings → Pages → Source (dapat `gh-pages` branch)

### Build errors?
- I-check ang console para sa error messages
- I-verify na lahat ng imports ay tama
- I-run `npm install` kung may missing dependencies

### Deployment failed?
- I-check na naka-login ka sa git
- I-verify na may internet connection
- I-try ulit ang deployment script

---

## 📞 Need Help?

Kung may issues, i-check:
1. Git status: `git status`
2. Build output: `npm run build`
3. GitHub repository settings

---

**Happy coding! 🎉**


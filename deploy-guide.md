# GitHub + Netlify Deployment Guide

## Step 1: Push Code to GitHub

1. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Name: `rahul-portfolio`
   - Make it **Public**
   - Don't initialize with README (we have one)

2. **Push your code:**
   ```bash
   cd "c:/Rahul/Rahul's Portfolio- main"
   git init
   git add .
   git commit -m "Initial portfolio with Research Exposure section"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/rahul-portfolio.git
   git push -u origin main
   ```

## Step 2: Connect Netlify

1. **Go to Netlify:** https://app.netlify.com

2. **Click "Add new site" → "Import an existing project"**

3. **Select GitHub** and choose your `rahul-portfolio` repository

4. **Build settings (auto-detected):**
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Click "Deploy site"**

## Step 3: Automatic Deployments

Once connected:
- **Push changes to GitHub** → Netlify automatically builds & deploys
- No manual uploads needed
- Custom domain can be added in Netlify settings

## Fix npm install Issue (Run Once)

If npm install fails, run these commands in PowerShell as **Administrator**:

```powershell
cd "c:/Rahul/Rahul's Portfolio- main"
npm uninstall -g npm
npm install -g npm@latest
npm cache clean --force
rmdir /s /q node_modules
del package-lock.json
npm install
npm run dev
```

## Your Images

Paste these files in `public/exposures/`:
- `1.jpg` - Healthcare Summit 2025
- `2.jpg` - Visit to IIT Indore
- `3.jpg` - Attended GIAN at IIT Indore
- `4.jpg` - Academic Poster Presentation

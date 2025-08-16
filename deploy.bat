@echo off
echo Starting Vutrium GitHub Pages deployment...

echo.
echo Step 1: Building for GitHub Pages...
call pnpm run build:gh
if %errorlevel% neq 0 (
    echo Build failed! Exiting.
    pause
    exit /b 1
)

echo.
echo Step 2: Creating .nojekyll and favicon...
node -e "fs=require('fs');fs.mkdirSync('out',{recursive:true});fs.closeSync(fs.openSync('out/.nojekyll','w'));try{fs.copyFileSync('out/vutrium-logo.png','out/favicon.ico')}catch(e){}"

echo.
echo Step 3: Committing build files...
git add -f out
git commit -m "deploy: gh-pages" || echo skip

echo.
echo Step 4: Cleaning up old deployment branch...
git branch -D gh-pages-deploy 2>NUL || echo skip

echo.
echo Step 5: Creating deployment branch...
git subtree split --prefix out -b gh-pages-deploy

echo.
echo Step 6: Pushing to gh-pages branch...
git push -f origin gh-pages-deploy:gh-pages

echo.
echo Step 7: Cleaning up deployment branch...
git branch -D gh-pages-deploy

echo.
echo Deployment complete! Your site should be live at:
echo https://needlesspage819.github.io/VutriumSite/
echo.
echo Note: It may take a few minutes for changes to appear.
pause

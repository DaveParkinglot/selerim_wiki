@echo off
cd /d %~dp0

echo Syncing local notes to content/...
npx quartz sync --no-pull

echo Building and serving the site...
npx quartz build --serve

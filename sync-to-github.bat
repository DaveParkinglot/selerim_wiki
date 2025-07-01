cd /d %~dp0

echo Syncing local notes to content/...
npx quartz sync --no-pull

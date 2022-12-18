@ECHO OFF
cd "ink-lang"
del "package-lock.json"
rmdir /S /Q "node_modules"
call npm install
call npm pack --pack-destination ./pack


if "%1"=="--run" (
cd ..
cd "runner"
del "package-lock.json"
rmdir /S /Q "node_modules"
call npm install
call npm run dev
)
PAUSE
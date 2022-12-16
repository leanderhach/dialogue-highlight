@ECHO OFF
cd "ink-lang"
del "package-lock.json"
rmdir /S /Q "node_modules"
call npm install
cd ..
cd "runner"
del "package-lock.json"
rmdir /S /Q "node_modules"
call npm install
PAUSE
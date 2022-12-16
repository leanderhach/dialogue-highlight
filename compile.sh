cd "ink-lang"
rm "package-lock.json"
rm -r "node_modules"
npm install .
cd ..
cd "runner"
rm "package-lock.json"
rm -r "node_modules"
npm install
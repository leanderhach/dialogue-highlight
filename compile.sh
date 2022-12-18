cd "ink-lang"
rm "package-lock.json"
rm -r "node_modules"
npm install .
npm pack --pack-destination ./pack


if [[ $* == *--run* ]]
then
    cd ..
    cd "runner"
    rm "package-lock.json"
    rm -r "node_modules"
    npm install
    npm run dev
fi
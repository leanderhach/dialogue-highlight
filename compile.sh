if [[ $* == *--ink* ]]
then
    cd "ink-lang"
    rm "package-lock.json"
    rm -r "node_modules"
    npm install .
    npm pack --pack-destination ./pack
fi

if [[ $* == *--yarn* ]]
then
    cd "yarn-lang"
    rm "package-lock.json"
    rm -r "node_modules"
    npm install .
    npm pack --pack-destination ./pack
fi

if [[ $* == *--run* ]]
then
    cd ..
    cd "runner"
    rm "package-lock.json"
    rm -r "node_modules"
    npm install
    npm run dev
fi
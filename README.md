# Ink-highlight

Basic lexing and highlighting support for the Ink scripting language written using the Lezer framework for the Codemirror code editor.

## Building package

### Windows

```
.\compile.bat --run
```
> Omit the run flag to just build the language package 

### Mac

```
bash compile.sh --ink --yarn --run
```

> One of either ```--ink``` or ```--yarn``` must be included, ```--run``` can be ommitted to just build the package
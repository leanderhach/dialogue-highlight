<svelte:head>
    <link rel="stylesheet" href="/app.css">
</svelte:head>
<main>
  <h2>Ink Highlighting Demo</h2>
  <div id="ink-editor" bind:this="{inkEditorWrapper}"></div>

  <h2>Yarn Highlighting Demo</h2>
  <div id="yarn-editor" bind:this="{yarnEditorWrapper}"></div>
</main>

<script lang="ts">
  import {basicSetup, EditorView} from "codemirror";
  import { javascript } from "@codemirror/lang-javascript"
  import { Ink } from "@codemirror/lang-ink"
  import { Yarn } from "@codemirror/lang-yarn"
  import inkContent from './linter/samples/example.ink?raw';
  import yarnContent from './linter/samples/example.yarn?raw';
  import { onMount } from "svelte";
  import { oneLight } from "./linter/styles/theme-light";
  import { Compartment, EditorState } from "@codemirror/state";
  import { oneDark } from "./linter/styles/theme-dark";

  let inkEditorWrapper;
  let yarnEditorWrapper;

  let editorTheme = new Compartment();

  onMount(() => {
    new EditorView({
      parent: inkEditorWrapper,
      state: EditorState.create({
        doc: inkContent,
        extensions: [
          editorTheme.of(oneDark),
          basicSetup,
          Ink()
        ]
      })
    })

    new EditorView({
      parent: yarnEditorWrapper,
      state: EditorState.create({
        doc: yarnContent,
        extensions: [
          editorTheme.of(oneDark),
          basicSetup,
          Yarn()
        ]
      })
    })
  })
</script>

<style>
  body {
    padding: 5em;
  }

  html {
      background-color: #ffffff;
  }

  h2 {
    color: darkgray;
  }

  .cm-editor {
    border-radius: 10px;
  }
</style>
<svelte:head>
    <link rel="stylesheet" href="/app.css">
</svelte:head>
<main bind:this="{editorWrapper}">
</main>

<script lang="ts">
  import {basicSetup, EditorView} from "codemirror";
  import { javascript } from "@codemirror/lang-javascript"
  import { Ink } from "@codemirror/lang-ink"
  import content from './linter/samples/example.ink?raw';
  import { onMount } from "svelte";
    import { oneLight } from "./linter/styles/theme-light";
    import { Compartment, EditorState } from "@codemirror/state";
    import { oneDark } from "./linter/styles/theme-dark";

  let editorWrapper;

  let editorTheme = new Compartment();

  onMount(() => {
    new EditorView({
      parent: editorWrapper,
      state: EditorState.create({
        doc: content,
        extensions: [
          editorTheme.of(oneDark),
          basicSetup,
          Ink()
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
</style>
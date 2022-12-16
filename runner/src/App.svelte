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

  let editorWrapper;

  onMount(() => {
    new EditorView({
      doc: content,
      extensions: [basicSetup, Ink()],
      parent: editorWrapper,
    })
  })
</script>

<style>
  body {
    padding: 5em;
  }

  html {
      background-color: #242424;
  }
</style>
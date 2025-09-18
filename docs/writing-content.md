# Writing Content

This page explains how to write content for your documentation using Markdown and some of VitePress's special features.

## Markdown

VitePress uses standard Markdown. You can use all the usual Markdown syntax, including:

*   Headings (`#`, `##`, `###`)
*   Lists (`-`, `*`, `1.`)
*   Links (`[text](url)`)
*   Images (`![alt](url)`)
*   Bold (`**text**`) and italic (`*text*`) text

## VitePress Features

VitePress adds some extra features to Markdown to make your documentation more interactive.

### Callouts

You can use callouts to highlight important information.

```markdown
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a danger box.
:::
```

### Code Blocks

You can create code blocks with syntax highlighting by using triple backticks.

````markdown
```javascript
// This is a JavaScript code block
console.log('Hello, VitePress!');
```
````

You can also add line numbers to your code blocks:

````markdown
```javascript{line-numbers}
// This code block has line numbers
function add(a, b) {
  return a + b;
}
```
````

For more information, see the [VitePress documentation](https://vitepress.dev/guide/markdown).
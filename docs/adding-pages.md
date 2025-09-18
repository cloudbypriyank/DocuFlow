# Adding and Managing Pages

This guide will walk you through how to add new pages to your documentation, give them titles, and organize your sidebar for easy navigation.

## 1. Adding a New Page

Adding a new page is as simple as creating a new Markdown file in the `docs` directory.

For example, if you want to create a page about a new feature, you can create a file named `new-feature.md` inside the `docs` directory.

## 2. Adding a Title and Content

To give your page a title, use a top-level Markdown heading (a single `#`). This title will be used as the main heading on the page and will also appear in the browser tab.

Open your new `docs/new-feature.md` file and add your content:

```markdown
# My New Awesome Feature

This is a page explaining my new feature. You can use any standard Markdown syntax here.

- Feature A
- Feature B
- Feature C
```

## 3. Adding the Page to the Sidebar

To make your new page accessible to users, you need to add a link to it in the sidebar. The sidebar is configured in the `docs/.vitepress/config.js` file.

1.  **Open `docs/.vitepress/config.js`**.
2.  **Find the `sidebar` object**.
3.  **Add a new item** to the `items` array. The `text` is what users will see in the sidebar, and the `link` is the path to your new file (without the `docs` prefix and with a leading slash).

```javascript
// docs/.vitepress/config.js

export default {
  // ...
  themeConfig: {
    // ...
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            // ... other items
            { text: 'My New Feature', link: '/new-feature' }
          ]
        }
      ]
    }
  }
}
```

## 4. Organizing the Sidebar

As your documentation grows, you might want to organize your sidebar into multiple sections. You can do this by adding more objects to the main sidebar array.

Each object with a `text` and `items` property will create a new collapsible section in the sidebar.

Here's an example of a more organized sidebar with multiple sections:

```javascript
// docs/.vitepress/config.js

export default {
  // ...
  themeConfig: {
    // ...
    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Installation', link: '/installation' }
          ]
        },
        {
          text: 'Customization',
          items: [
            { text: 'Configuration', link: '/configuration' },
            { text: 'Styling', link: '/styling' },
            { text: 'Theming', link: '/theming' }
          ]
        },
        {
          text: 'Contributing',
          items: [
            { text: 'Writing Content', link: '/writing-content' },
            { text: 'Adding Pages', link: '/adding-pages' }
          ]
        }
      ]
    }
  }
}
```

This configuration will create three distinct sections in your sidebar: "Getting Started", "Customization", and "Contributing", making your documentation much easier to navigate.

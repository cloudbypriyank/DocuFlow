# Customizing Styles

VitePress is built on top of Vue.js and uses its single-file component style. However, for simple style customizations, you don't need to dive deep into Vue. You can easily override the default styles with your own CSS.

## Adding Custom CSS

The recommended way to add custom styles is to create a new CSS file in the `.vitepress` directory and link to it from the configuration file.

1.  **Create a custom CSS file:**

    Create a file named `custom.css` in the `docs/.vitepress` directory.

2.  **Add your custom styles:**

    You can add any valid CSS to this file. For example, to change the default primary color, you can add the following:

    ```css
    :root {
      --vp-c-brand: #646cff;
      --vp-c-brand-light: #747bff;
      --vp-c-brand-dark: #535bf2;
    }
    ```

3.  **Link to the CSS file in the configuration:**

    Open the `docs/.vitepress/config.js` file and add a link to your custom CSS file in the `head` section:

    ```js
    export default {
      // ...
      head: [['link', { rel: 'stylesheet', href: '/custom.css' }]],
      // ...
    }
    ```

    VitePress will automatically bundle this CSS and apply it to your site.

## Using CSS Pre-processors

VitePress has built-in support for CSS pre-processors like Sass, Less, and Stylus. You can use them by simply installing the required dependencies:

```bash
# Sass
npm install -D sass

# Less
npm install -D less

# Stylus
npm install -D stylus
```

Once installed, you can use the corresponding file extensions (`.scss`, `.less`, `.styl`) for your custom style sheets.

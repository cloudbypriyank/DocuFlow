# Theming

DocuFlow uses the default VitePress theme, which is highly customizable. You can change the colors, fonts, and other theme-specific options to match your brand.

## Customizing the Theme

All theme-related options are configured in the `themeConfig` object in the `docs/.vitepress/config.js` file.

### Colors

You can customize the color palette of your site by overriding the default theme colors. The easiest way to do this is by using CSS variables, as explained in the [Styling](./styling.md) guide.

### Fonts

By default, the VitePress theme uses the system's default UI font. You can use a custom font by linking to it in the `head` section of your configuration file and then applying it to the `body` element in your custom CSS.

1.  **Link to your font in the configuration:**

    ```js
    export default {
      // ...
      head: [
        [
          'link',
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap'
          }
        ]
      ],
      // ...
    }
    ```

2.  **Apply the font in your custom CSS:**

    ```css
    body {
      font-family: 'Inter', sans-serif;
    }
    ```

### Other Theme Options

The VitePress theme has many other options that you can use to customize your site. For example, you can add a search bar, social links, and a footer.

For a complete list of all available theme options, please refer to the [VitePress documentation](https://vitepress.dev/reference/default-theme-config).

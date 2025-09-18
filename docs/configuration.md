# Configuration

This page explains the main configuration options for this documentation template, located in `docs/.vitepress/config.mjs`.

## Main Configuration

The `export default` object in `config.mjs` contains all the configuration for your VitePress site.

### `title`

*   **Type:** `string`
*   **Description:** The title of your documentation site. It appears in the browser tab.

### `description`

*   **Type:** `string`
*   **Description:** The meta description for your site, which helps with search engine optimization (SEO).

## Theme Configuration (`themeConfig`)

This object contains all the theme-specific options for your site.

### `nav`

*   **Type:** `array`
*   **Description:** The navigation bar links at the top of the page.

    ```javascript
    nav: [
      { text: 'Guide', link: '/installation' },
      { text: 'GitHub', link: 'https://github.com/cloudbypriyank/DocuFlow' }
    ]
    ```

### `sidebar`

*   **Type:** `object`
*   **Description:** The sidebar links. You can organize them into sections.

    ```javascript
    sidebar: {
      '/': [
        {
          text: 'Guide',
          items: [
            { text: 'Introduction', link: '/' },
            { text: 'Installation', link: '/installation' }
          ]
        }
      ]
    }
    ```

### `socialLinks`

*   **Type:** `array`
*   **Description:** Links to your social media profiles, which appear in the navigation bar.

    ```javascript
    socialLinks: [
      { icon: 'github', link: '...' }
    ]
    ```

### `footer`

*   **Type:** `object`
*   **Description:** The content of the footer at the bottom of the page.

    ```javascript
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Your Name'
    }
    ```
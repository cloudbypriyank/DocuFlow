import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'DocuFlow',
  description: 'A simple and elegant documentation template.',
  // Base path for GitHub Pages deployment
  base: '/DocuFlow/',
  head: [
    // Favicon from your original config
    ['link', { rel: 'icon', href: '/images/logo.svg' }]
  ],

  themeConfig: {
    logo: '/images/logo.svg',

    // Merged Nav bar: Your 'Guide' link + the new 'Community' dropdown
    nav: [
      { text: 'Guide', link: '/installation' },
      {
        text: 'Community',
        items: [
          { text: 'Upcoming Feature', link: '#' }
        ]
      }
    ],

    // Your exact sidebar structure
    sidebar: {
      '/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'Installation', link: '/installation' },
            { text: 'Usage as a Template', link: '/usage' }
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
        },
        {
          text: 'Deployment',
          items: [{ text: 'Deploying', link: '/deploying' }]
        }
      ]
    },

    // Your social links, including LinkedIn
    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudbypriyank/DocuFlow' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/thepriyank-pawar-698631238/' }
    ],

    // Your footer configuration
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Pawar Priyank'
    },

    // Your edit link configuration
    editLink: {
      pattern: 'https://github.com/cloudbypriyank/DocuFlow/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    // Your settings for lastUpdated and search
    lastUpdated: true,
    search: {
      provider: 'local'
    }
  }
})

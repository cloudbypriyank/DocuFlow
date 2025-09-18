export default {
  title: 'DocuFlow',
  description: 'A simple and elegant documentation template.',
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],

  themeConfig: {
    logo: '/images/logo.svg',

    nav: [
      { text: 'Guide', link: '/installation' },
      { text: 'GitHub', link: 'https://github.com/cloudbypriyank/DocuFlow' }
    ],

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

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cloudbypriyank/DocuFlow' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/thepriyank-pawar-698631238/'}
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 Pawar Priyank'
    },

    editLink: {
      pattern: 'https://github.com/cloudbypriyank/DocuFlow/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    lastUpdated: true,
    search: {
      provider: 'local'
    }
  }
}

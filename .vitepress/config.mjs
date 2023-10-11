import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/botsu-docs/',
  title: "Botsu",
  description: "Documentation for Botsu bot",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' }
    ],

    sidebar: [
      {
        text: 'User Guide',
        items: [
          { text: 'Introduction', link: '/guide/introduction' },
          { text: 'Getting Started', link: '/guide/get-started' },
          { text: 'Logging', link: '/guide/logging' },
          { text: 'Configuration', link: '/guide/config' },
          { text: 'Viewing Activity', link: '/guide/viewing-activity' },
          { text: 'Exporting', link: '/guide/export' },
        ]
      },
      {
        text: 'Reference Guide',
        items: [
          { text: 'Introduction', link: '/reference/introduction' },
          { text: 'Activity', link: '/reference/activity' },
          { text: 'Using Exports', link: '/reference/exports' },
        ]
      },
      {
        text: 'Self-Hosting',
        items: [
          { text: 'Introduction', link: '/self-hosting/introduction' },
          { text: 'Database Setup', link: '/self-hosting/database' },
          { text: 'Configuration', link: '/self-hosting/configuration' },
          { text: 'Data Sources', link: '/self-hosting/data' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/UTD-JLA/botsu' }
    ],

    search: {
      provider: 'local',
    }
  }
})

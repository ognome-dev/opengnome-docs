import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'OpenGnome',
  description: 'Verifiable biomedical signal instrument — documentation',
  lang: 'en-US',

  head: [
    ['meta', { name: 'theme-color', content: '#1a1f2e' }],
    ['meta', { property: 'og:title', content: 'OpenGnome Docs' }],
    ['meta', { property: 'og:description', content: 'Documentation for the OpenGnome biomedical signal instrument' }],
  ],

  themeConfig: {
    logo: null,
    siteTitle: 'OpenGnome',

    nav: [
      { text: 'Guide', link: '/guide/what-it-does' },
      { text: 'API Reference', link: '/api/overview' },
      { text: 'Platform', link: 'https://opengnome.bio' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What it does', link: '/guide/what-it-does' },
            { text: 'Quick start', link: '/guide/quick-start' },
            { text: 'How the pipeline works', link: '/guide/pipeline' },
            { text: 'Evidence sources', link: '/guide/evidence-sources' },
            { text: 'The reasoning engine', link: '/guide/reasoning-engine' },
            { text: 'Signal report structure', link: '/guide/report-structure' },
            { text: 'Rarity tiers', link: '/guide/rarity-tiers' },
          ],
        },
        {
          text: 'NFT Anchoring',
          items: [
            { text: 'Overview', link: '/guide/nft-overview' },
            { text: 'Minting pipeline', link: '/guide/nft-pipeline' },
            { text: 'Trading card generation', link: '/guide/nft-card' },
            { text: 'On-chain anchoring modes', link: '/guide/nft-modes' },
          ],
        },
        {
          text: 'Platform',
          items: [
            { text: 'Privacy and anonymity', link: '/guide/privacy' },
            { text: 'Rate limiting', link: '/guide/rate-limiting' },
            { text: 'Revenue model', link: '/guide/revenue-model' },
            { text: 'Known limitations', link: '/guide/limitations' },
            { text: 'Disclaimer', link: '/guide/disclaimer' },
          ],
        },
      ],

      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/overview' },
            { text: 'POST /analyze', link: '/api/analyze' },
            { text: 'GET /analysis/:id', link: '/api/analysis-id' },
            { text: 'POST /mint/public', link: '/api/mint-public' },
            { text: 'GET /feed', link: '/api/feed' },
            { text: 'GET /stats', link: '/api/stats' },
            { text: 'GET /metadata/:id', link: '/api/metadata-id' },
            { text: 'GET /rate-limit-status', link: '/api/rate-limit-status' },
            { text: 'GET /corpus-stream', link: '/api/corpus-stream' },
            { text: 'GET /healthz', link: '/api/healthz' },
          ],
        },
      ],

      '/self-hosting/': [
        {
          text: 'Self Hosting',
          items: [
            { text: 'Overview', link: '/self-hosting/overview' },
            { text: 'Environment variables', link: '/self-hosting/environment-variables' },
            { text: 'Database setup', link: '/self-hosting/database' },
            { text: 'Solana wallet setup', link: '/self-hosting/solana-wallet' },
            { text: 'Merkle tree setup', link: '/self-hosting/merkle-tree' },
            { text: 'Local development', link: '/self-hosting/local-development' },
            { text: 'Architecture', link: '/self-hosting/architecture' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ognome-dev/opengnome' },
    ],

    footer: {
      message: 'OpenGnome is research tooling, not a clinical product.',
      copyright: 'MIT 2025 ognome-dev',
    },

    search: {
      provider: 'local',
    },

    editLink: {
      pattern: 'https://github.com/ognome-dev/opengnome-docs/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },

  markdown: {
    lineNumbers: true,
  },
})
import { withMermaid } from 'vitepress-plugin-mermaid';
import type { UserConfig } from 'vitepress';

export default withMermaid({
  title: "NP(D)M",
  description: "Documentation for NPDM",
  base: '/docs/',

  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/introduction/why-npdm' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Why NP(D)M?', link: '/introduction/why-npdm' },
          { text: 'System Components', link: '/introduction/system-components' },
          { text: 'Module Federation', link: '/introduction/module-federation' },
          { text: 'Example', link: '/introduction/example' },
          { text: 'Contribution', link: '/introduction/contribution' },
        ]
      },
      {
        text: 'API Reference',
        items: [
          { text: '@npdm/core', link: '/api-reference/npdm-core' },
          { text: '@npdm/express', link: '/api-reference/npdm-express' },
          { text: '@npdm/module-federation', link: '/api-reference/npdm-module-federation' }
        ]
      },
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/orgs/npdmjs/repositories' }
    ]
  }
} as UserConfig);

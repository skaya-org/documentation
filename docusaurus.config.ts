import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Skaya',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Skaya v4
  },

  // Set the production url of your site here
  url: 'https://docs.skaya.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'skaya', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'es', 'de', 'it', 'pt', 'ru', 'zh', 'ja', 'ar'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skaya-org',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/skaya-org',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false, // set to true if you want to hide the theme switch
      respectPrefersColorScheme: false, // set to false to ignore OS/browser preferences
    },
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Skaya',
      logo: {
        alt: 'Skaya Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {
          href: 'https://github.com/skaya-org',
          label: 'GitHub',
          position: 'right',
        },

        //todo add language switcher
        // {
        //   type: 'localeDropdown',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Frontend',
              to: '/docs/category/skaya-frontend',
            },
            {
              label: 'Backend',
              to: '/docs/category/skaya-backend',
            },
            {
              label: 'Blockchain',
              to: 'docs/category/skaya-blockhain',
            },
          ],
        },
        {
          title: 'Community',
          items: [
              {
              label: 'GitHub',
              href: 'https://github.com/skaya-org',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/skaya',
            },
            {
              label: 'Linkedin',
              href: 'https://linkedin.com/company/skaya-org',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/skaya',
            },
          ],
        },
      
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Skaya, Inc. Built with Skaya.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

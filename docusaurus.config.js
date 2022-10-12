// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Wäit'ndjerk",
  tagline: 'Waaver Vjeans en Alle Vässies',
  url: 'https://waitndjerk.nl',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl'],
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1320, // max resized image's size.
        min: 640, // if original is lower, use this size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'poems',
          breadcrumbs: true,
          showLastUpdateTime: true,
          sidebarCollapsed: false,
          include: ['**/*.md', '**/*.mdx'],
          routeBasePath: 'gedichten',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/webbertakken/waitndjerk.nl/tree/main/',
        },
        blog: {
          showReadingTime: false,
          editUrl: 'https://github.com/webbertakken/waitndjerk.nl/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Wäit'ndjerk",
        logo: {
          alt: "Wäit'ndjerk",
          src: 'img/logo.png',
        },
        items: [
          // {to: '/blog', label: 'Blog', position: 'left'},
          { type: 'doc', docId: 'index', label: 'Gedichten', position: 'left' },
          {
            href: 'https://github.com/webbertakken/waitndjerk.nl',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} - Webbink family`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

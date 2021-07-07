const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "The Unofficial LCSR Docs",
  tagline: "A Docsite for Grad School",
  url: "https://todo-url.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "benjamindkilleen", // Usually your GitHub org/user name.
  projectName: "lcsr-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "LCSR Docs",
      logo: {
        alt: "LCSR Logo",
        src: "img/lcsr-logo.svg",
      },
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "New Students",
        },
        {
          href: "https://github.com/benjamindkilleen/lcsr-docs",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "New Students",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/HopkinsEngineer",
            },
            {
              label: "Intranet",
              href: "https://intranet.lcsr.jhu.edu",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/benjamindkilleen/lcsr-docs",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Johns Hopkins University. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/benjamindkilleen/lcsr-docs/edit/master/website/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/benjamindkilleen/lcsr-docs/edit/master/website/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

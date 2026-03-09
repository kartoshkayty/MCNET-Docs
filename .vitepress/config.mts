import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "MCNET-Docs",
  description: "Rapapa",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    outline: { label: "Навигация" },
    sidebar: [
      {
        text: "Информация",
        collapsed: false,
        items: [
          { text: "Начало", link: "/main" },
          { text: "Механики", link: "/mechanics" },
          { text: "Правила", link: "/codex" },
        ],
      },
      {
        text: "Обновления",
        collapsed: false,
        items: [{ text: "09.03.2026", link: "/codex" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://minecis.net/" }],
  },
});

import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "MCNET-Docs",
  description: "Rapapa",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Письки", link: "/main" }],
    outline: { label: "Навигация" },
    sidebar: [
      {
        text: "ИНФОРМАЦИЯ",
        collapsed: false,
        items: [
          { text: "Начало", link: "/main" },
          { text: "Механики", link: "/mechanics" },
          { text: "Правила", link: "/codex" },
        ],
      },
      {
        text: "СЕЗОНЫ",
        collapsed: false,
        items: [{ text: "1 СЕЗОН", link: "/season1" }],
      },
      {
        text: "ОБНОВЛЕНИЯ",
        collapsed: false,
        items: [{ text: "15.03.2026", link: "/codex" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://minecis.net/" }],
  },
});

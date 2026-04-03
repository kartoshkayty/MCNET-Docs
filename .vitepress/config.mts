import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",

  title: "Вики MINECRAFT СНГ",
  description: "Wiki о Minecraft сервере от MINECRAFT СНГ",
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
        text: "ССЫЛКИ",
        collapsed: false,
        items: [
          { text: "Сборка", link: "/season1" },
          { text: "Мерч", link: "/season1" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://minecis.net/" }],
  },
});

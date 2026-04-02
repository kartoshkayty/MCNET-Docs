// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";
import Header from "./Header.vue";

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-before": () => h(Header),
    });
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  },
} satisfies Theme;

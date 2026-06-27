import * as path from 'node:path';
import { defineConfig } from '@rspress/core';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  lang: 'ru',
  title: 'MINECRAFT СНГ WIKI',
  icon: '/icon.png',
  logoText: 'MINECRAFT СНГ',
  themeConfig: {
    socialLinks: [],
  },
});

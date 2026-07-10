// @ts-check
import { defineConfig } from 'astro/config';

// カスタムドメイン (home.musicatechlab.com) で配信。CNAME は public/CNAME。
export default defineConfig({
  site: 'https://home.musicatechlab.com',
});

// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (musicatechlab.github.io/home/) 用設定。
// カスタムドメイン（musicatechlab.com 等）へ移行したら site を差し替え、base を削除する。
export default defineConfig({
  site: 'https://musicatechlab.github.io',
  base: '/home',
});

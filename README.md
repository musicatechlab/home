# MusicaTechLab ポータルサイト

MusicaTechLabの各プロジェクト（MIDI-to-MP3、開発ブログなど）へアクセスするための軽量かつ高速な母艦となるポータルサイトです。

このプロジェクトは [Astro](https://astro.build) を使用して構築されています。

## 特徴

- **超軽量＆高速:** Astroのアーキテクチャにより、最小限のJavaScriptで高速なページロードを実現。
- **モダンなデザイン:** Vanilla CSSを活用したダークテーマ、グラスモーフィズム、ホバーアニメーション。
- **拡張性:** Google AdSenseコンポーネントを標準搭載し、新しいプロジェクトリンクも簡単に追加可能。

## ローカルでの開発

### 前提条件
- Node.js (v18以降を推奨)

### インストールと起動

1. 依存関係のインストール
   ```bash
   npm install
   ```

2. 開発サーバーの起動
   ```bash
   npm run dev
   ```
   ブラウザで `http://localhost:4321` にアクセスしてプレビューを確認できます。

### ビルド

本番環境用のビルドを作成するには、以下のコマンドを実行します：
```bash
npm run build
```
ビルドされたファイルは `dist/` ディレクトリに出力されます。

## ディレクトリ構成

- `src/layouts/Layout.astro`: サイト全体のベースレイアウトとグローバルCSS
- `src/pages/index.astro`: トップページ（リンクカード配置）
- `src/components/AdSense.astro`: Google AdSense用の再利用可能なコンポーネント
- `astro.config.mjs`: Astroの設定ファイル

## カスタマイズ

- **リンクの追加:** `src/pages/index.astro` 内の `projects` 配列を編集することで、新しいプロジェクトリンクカードを追加できます。
- **AdSenseの設定:** `src/components/AdSense.astro` の呼び出し時に `client` と `slot` プロパティを渡すことで、実際の広告枠を設定できます。

# profile-ts

TypeScript を使ったシンプルなプロフィール Web ページのアウトライン。

初期ファイル:
- src/: TypeScript ソース
- public/: ビルド出力（簡易）
- package.json, tsconfig.json

セットアップ

1. 依存インストール

```bash
npm install
```

2. ビルド

```bash
npm run build
```

3. 生成された `public/index.html` をブラウザで開く

開発

- 変更を監視してビルドだけ行う場合:

```bash
npm run dev
```

注意

- 現在は最小構成で、簡易的に `src/main.ts` を実行して `public/index.html` を生成する作りになっています。フロントエンド開発用に本格的に使うなら Vite/Parcel/webpack + React 等の導入をおすすめします。
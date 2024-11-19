# このアプリケーションについて

## 概要

このアプリケーションは、[PokeAPI](https://pokeapi.co/) を使用して任意のポケモンを表示するシンプルなポケモン検索アプリです。

## アプリ作成の意図

このアプリを作成する目的は以下の通りです：

- E2E テストに慣れる
  - [Playwright](https://playwright.dev/docs/intro) の操作や仕様に慣れる
- TypeScript を使用したフロントエンド開発の経験を積む

---

<br>

# 環境環境について

このアプリケーションは React + TypeScript + Vite を使用しています。
このテンプレートは、Vite 環境での React の動作やホットリロード（HMR）を実現するための最小限の設定を提供し、基本的な ESLint ルールも含まれています。

## 使用している公式プラグイン

現在、以下の公式プラグインを使用しています：

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): [Babel](https://babeljs.io/) を使用してホットリロードを実現
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): [SWC](https://swc.rs/) を使用してホットリロードを実現

## ESLint 設定の拡張

本番環境向けのアプリケーションを開発する際には、型認識に基づいたリントルールを有効にすることを推奨します。以下の設定を追加して、ESLint の設定を拡張してください：

1. `parserOptions` プロパティを次のように設定します：

   ```js
   export default {
     // 他のルール...
     parserOptions: {
       ecmaVersion: "latest",
       sourceType: "module",
       project: ["./tsconfig.json", "./tsconfig.node.json"],
       tsconfigRootDir: __dirname,
     },
   };
   ```

2. `plugin:@typescript-eslint/recommended` を `plugin:@typescript-eslint/recommended-type-checked` または `plugin:@typescript-eslint/strict-type-checked` に置き換えます。必要に応じて `plugin:@typescript-eslint/stylistic-type-checked` を追加してください。

3. `eslint-plugin-react` をインストールし、`plugin:react/recommended` と `plugin:react/jsx-runtime` を `extends` リストに追加します。

## 開発サーバーの起動方法

以下のコマンドを実行して、開発サーバーを起動します：

```bash
npm install
npm run dev
```

## Playwright の実行方法

E2E テストを実行するには、以下のコマンドを使用します：

### Playwright の依存関係をインストールする：

```bash
npx playwright install
```

以下のコマンドでテストを実行します :

```bash
npx playwright test
```

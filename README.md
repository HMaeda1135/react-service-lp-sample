# まなびスタート LP Sample

## 概要

React / TypeScriptで作成した、架空の個人向けオンライン講座サービスLPサンプルです。ポートフォリオ掲載用に、ファーストビュー、サービス紹介、料金プラン、FAQ、CTAなど、サービス紹介ページに必要な基本構成を実装しています。

## 使用技術

- React 19
- TypeScript
- Vite
- CSS（App.css 中心）

## このサンプルで確認できること

- サービス紹介LPの基本構成（ヘッダー、FV、悩み、サービス、特徴、料金、FAQ、CTA、フッター）
- コンポーネント分割によるセクション単位の構成
- ページ内リンクによるナビゲーション（スティッキーヘッダー対応）
- FAQの開閉UI（`useState`）
- お問い合わせモーダル（デモ送信）
- キーボード操作向けのフォーカススタイル（`:focus-visible`）
- OGP / Twitter Card メタタグ
- レスポンシブ対応（スマホ・タブレット・PC）
- 画像を使わないCSSベースのカードUI
- 外部UIライブラリを使わない実装

## セットアップ

```bash
npm install
```

## 起動方法

```bash
npm run dev
```

ブラウザで表示されるURL（通常は `http://localhost:5173`）にアクセスしてください。

## ビルド

```bash
npm run build
```

ビルド成果物は `dist` フォルダに出力されます。プレビューする場合は以下を実行します。

```bash
npm run preview
```

## 主なファイル構成

```
react-service-lp-sample/
├── index.html              # エントリーHTML（OGPメタタグ含む）
├── src/
│   ├── main.tsx            # Reactのエントリーポイント
│   ├── App.tsx             # LP全体の組み立て
│   ├── App.css             # LPのスタイル
│   ├── index.css           # グローバルリセット
│   └── components/
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Problems.tsx
│       ├── Services.tsx
│       ├── Features.tsx
│       ├── Pricing.tsx
│       ├── Faq.tsx
│       ├── Cta.tsx
│       ├── Footer.tsx
│       └── ContactModal.tsx
├── public/
│   ├── favicon.svg
│   └── og-image.svg        # OGP用サムネイル
├── package.json
└── README.md
```

## 補足

このページは実在するサービスではなく、ポートフォリオ掲載用の架空LPサンプルです。

## 参考

- [React 公式ドキュメント](https://react.dev/)
- [Vite 公式ドキュメント](https://vite.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/)

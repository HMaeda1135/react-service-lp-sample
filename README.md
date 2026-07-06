# ReactサービスLPサンプル

## 概要

React / TypeScriptで作成した、架空の個人向けオンライン講座サービス「**まなびスタート**」のLPサンプルです。ポートフォリオ掲載用に、ファーストビュー、課題提起、サービス紹介、学びの流れ、LP構成の見どころ、FAQ、CTAなど、サービス紹介ページに必要な基本構成を実装しています。

## 使用技術

- React 19
- TypeScript
- Vite
- CSS（App.css 中心）

## このサンプルで確認できること

- 架空サービスLPの基本構成（8セクション）
- コンポーネント分割と `lpContent.ts` によるデータ管理
- ページ内リンク・スティッキーヘッダー
- 学びの流れタイムラインUI（PC横並び / スマホ縦並び）
- LP構成の見どころカード（自主制作サンプルラベル付き）
- FAQアコーディオン（`useState`）
- お問い合わせモーダル（デモ送信）
- レスポンシブ対応・日本語の読みやすい改行
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
├── index.html
├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   ├── data/
│   │   └── lpContent.ts          # 文言・データ定義
│   └── components/
│       ├── Header.tsx
│       ├── HeroSection.tsx
│       ├── ProblemSection.tsx
│       ├── ServiceSection.tsx
│       ├── StrengthSection.tsx
│       ├── FlowSection.tsx
│       ├── WorksSection.tsx
│       ├── FaqSection.tsx
│       ├── CtaSection.tsx
│       ├── SectionHeader.tsx
│       ├── ContactModal.tsx
│       └── Footer.tsx
├── public/
│   ├── favicon.svg
│   └── og-image.svg
└── README.md
```

## 補足

- **作品名（ポートフォリオ表記）**: ReactサービスLPサンプル
- **LP内の架空サービス名**: まなびスタート

このページは実在するサービス・事業者ではなく、ポートフォリオ掲載用の架空LPサンプルです。

## 参考

- [React 公式ドキュメント](https://react.dev/)
- [Vite 公式ドキュメント](https://vite.dev/)
- [TypeScript 公式ドキュメント](https://www.typescriptlang.org/)

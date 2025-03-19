# ポモドーロタイマー

Next.js と TypeScript で実装したシンプルなポモドーロタイマーアプリケーションです。

![ポモドーロタイマー](https://github.com/yourusername/pomodoro-timer/raw/main/public/screenshot.png)

## 機能

- 作業時間（デフォルト: 25 分）と休憩時間（デフォルト: 5 分）の切り替え
- タイマーの開始、停止、リセット
- 視覚的な円形プログレスバー
- モードに応じた色の変更（作業時間: 赤、休憩時間: 緑）
- タイマー終了時の通知音

## 使い方

1. **タイマーの開始**: 「開始」ボタンをクリックしてタイマーを開始します
2. **タイマーの停止**: 「停止」ボタンをクリックしてタイマーを一時停止します
3. **タイマーのリセット**: 「リセット」ボタンをクリックして現在のモードのタイマーをリセットします
4. **モードの切り替え**: 「作業モードへ」または「休憩モードへ」ボタンをクリックして、モードを手動で切り替えます
5. **自動切り替え**: タイマーが 0 になると、自動的に次のモードに切り替わります（作業 → 休憩、休憩 → 作業）

## 技術スタック

- [Next.js](https://nextjs.org/) - React フレームワーク
- [TypeScript](https://www.typescriptlang.org/) - 型安全な JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - ユーティリティファースト CSS フレームワーク
- [shadcn/ui](https://ui.shadcn.com/) - 再利用可能な UI コンポーネント
- [Web Audio API](https://developer.mozilla.org/ja/docs/Web/API/Web_Audio_API) - 通知音の生成

## インストール

```bash
# リポジトリのクローン
git clone https://github.com/yourusername/pomodoro-timer.git
cd pomodoro-timer

# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認できます。

## プロジェクト構造

```
pomodoro-timer/
├── public/              # 静的ファイル
├── src/                 # ソースコード
│   ├── app/             # Next.js App Router
│   ├── components/      # Reactコンポーネント
│   │   ├── TimerApp.tsx       # メインのタイマーコンポーネント
│   │   ├── CircleProgress.tsx # 円形プログレスバー
│   │   └── Controls.tsx       # タイマー制御ボタン
│   └── utils/           # ユーティリティ関数
│       └── sound.ts     # 通知音の再生機能
└── ...                  # その他の設定ファイル
```

## 開発ガイド

詳細な開発手順は [CHANGELOG.md](./CHANGELOG.md) を参照してください。ステップバイステップでアプリケーションの実装方法が記載されています。

## ライセンス

MIT

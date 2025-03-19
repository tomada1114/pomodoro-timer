# ポモドーロタイマー開発チュートリアル

このドキュメントでは、Next.js、TypeScript、Tailwind CSS、shadcn/ui を使用してポモドーロタイマーアプリを段階的に構築する方法を説明します。

## 1. プロジェクト初期化

### 1.1 Git リポジトリの初期化

まず、新しい Git リポジトリを作成します。

```bash
# 新しいディレクトリを作成し、その中でGitリポジトリを初期化
mkdir pomodoro-timer
cd pomodoro-timer
git init
```

### 1.2 Next.js プロジェクトの作成

Next.js の公式 CLI ツールを使用して、新しいプロジェクトを作成します。

```bash
# create-next-appを使用してNext.jsプロジェクトを作成
npx create-next-app@latest . --typescript --eslint --tailwind --app --src-dir --import-alias "@/*"
```

このコマンドは以下の設定でプロジェクトを作成します：

- TypeScript サポート
- ESLint の設定
- Tailwind CSS の設定
- App Router の使用
- src ディレクトリ構造
- `@/*`というインポートエイリアス

### 1.3 shadcn/ui のセットアップ

shadcn/ui は、スタイリングされた UI コンポーネントのコレクションです。これを使用することで、美しい UI を簡単に構築できます。

```bash
# shadcn/uiをインストール
npx shadcn@latest init
```

セットアッププロセスでは、以下の質問に答えます：

- スタイルの設定（デフォルトの Tailwind CSS を選択）
- コンポーネントの保存場所（`@/components`を選択）
- ユーティリティの保存場所（`@/lib/utils`を選択）
- カラーテーマ（お好みで選択）

初期コミットを作成して、プロジェクトの初期状態を保存します：

```bash
git add .
git commit -m "feat(init): プロジェクト初期化"
```

## 2. 基本的な UI 実装

### 2.1 基本コンポーネントの作成

まず、基本的な TimerApp コンポーネントを作成します。

```bash
# componentsディレクトリが存在しない場合は作成
mkdir -p src/components
```

`src/components/TimerApp.tsx`ファイルを作成し、基本的な UI を実装します。

また、アプリケーションのメタデータとレイアウトを更新します：

- `src/app/layout.tsx`：タイトルと言語設定を更新
- `src/app/page.tsx`：TimerApp コンポーネントをインポートして表示

この段階では、静的な UI のみを実装し、タイマー機能はまだ実装していません。

```bash
git add .
git commit -m "feat(ui): 基本的なUIコンポーネントを実装"
```

### 2.2 タイマー状態管理の実装

次に、タイマーの状態を管理するための useState フックを追加します。

`src/components/TimerApp.tsx`を更新して、以下の機能を追加します：

- `"use client"`ディレクティブを追加（クライアントコンポーネントの指定）
- タイマー状態を管理する useState フックを追加
- 時間表示のフォーマット関数を実装
- モードに応じたタイトル表示の切り替え

```bash
git add .
git commit -m "feat(timer): タイマー状態管理を実装"
```

### 2.3 タイマー制御機能の実装

タイマーを制御するためのボタンとロジックを実装します。

まず、`src/components/Controls.tsx`ファイルを作成し、タイマー制御ボタン（開始/停止、リセット）を実装します。

次に、`src/components/TimerApp.tsx`を更新して、以下の機能を追加します：

- useEffect を使用したタイマーのカウントダウン処理
- タイマー開始/停止機能
- タイマーリセット機能
- モード切り替え機能

```bash
git add .
git commit -m "feat(controls): タイマー制御機能を実装"
```

### 2.4 円形プログレスバーの実装

タイマーの進行状況を視覚的に表示するための円形プログレスバーを実装します。

`src/components/CircleProgress.tsx`ファイルを作成し、SVG を使用した円形プログレスバーを実装します。

次に、`src/components/TimerApp.tsx`を更新して、CircleProgress コンポーネントを統合し、進捗率の計算ロジックを追加します。

```bash
git add .
git commit -m "feat(progress): 円形プログレスバーを実装"
```

### 2.5 モード切替ボタンの追加

作業モードと休憩モードを手動で切り替えるためのボタンを追加します。

`src/components/Controls.tsx`を更新して、モード切替ボタンを追加します。

次に、`src/components/TimerApp.tsx`を更新して、モード切替機能を実装します。

```bash
git add .
git commit -m "feat(controls): モード切替ボタンを追加"
```

### 2.6 通知機能の実装

タイマーが 0 になったときに通知音を再生する機能を実装します。

`src/utils/sound.ts`ファイルを作成し、Web Audio API を使用した通知音の再生機能を実装します。

次に、`src/components/TimerApp.tsx`を更新して、タイマー終了時に通知音を再生する機能を追加します。

```bash
git add .
git commit -m "feat(notification): 通知機能を実装"
```

## 3. 学習ポイント

このプロジェクトを通じて学べる主なポイント：

### 3.1 Next.js App Router

- ページとレイアウトの構造
- クライアントコンポーネントとサーバーコンポーネントの違い
- `"use client"`ディレクティブの使用方法

### 3.2 React Hooks

- `useState`を使用した状態管理
- `useEffect`を使用した副作用の処理
- `useCallback`を使用したコールバック関数の最適化

### 3.3 TypeScript

- インターフェースを使用した型定義
- コンポーネントの props に型を適用
- 型安全なコードの記述

### 3.4 SVG

- SVG を使用した円形プログレスバーの実装
- SVG 要素のスタイリング
- 動的な SVG 属性の変更

### 3.5 Web Audio API

- オーディオコンテキストの作成
- オシレーターを使用した音の生成
- ブラウザでの音声再生

## 4. 発展課題

このプロジェクトをさらに拡張するためのアイデア：

1. **ダークモード対応**：ダークモードとライトモードの切り替え機能を追加
2. **タイマー時間設定機能**：作業時間と休憩時間をカスタマイズできる設定画面を追加
3. **LocalStorage 保存**：設定を LocalStorage に保存して、ページをリロードしても設定が保持されるようにする
4. **セッション履歴**：完了したポモドーロセッションの履歴を記録する機能を追加
5. **Vercel へのデプロイ**：アプリケーションを Vercel にデプロイして、公開する

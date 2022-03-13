# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

---

## 【課題】

都道府県別の総人口推移グラフを表示する SPA(Single Page Application)を構築せよ
ワイヤーフレーム
https://www.notion.so/yumemi/7646721865fa47e7b2c9b2a52c8c40ac

### ＜内容＞

1. RESAS(地域経済分析システム) API の「都道府県一覧」から API を取得する
2. API レスポンスから都道府県一覧のチェックボックスを動的に生成する
3. 都道府県にチェックを入れると、RESAS API から選択された都道府県の「人口構成」を取得する
4. 人口構成 API レスポンスから、X 軸:年、Y 軸:人口数の折れ線グラフを動的に生成して表示する

### ＜制約＞

- 都道府県一覧および総人口情報は RESAS API のデータを用いること
- グラフは Highcharts や Rechart.js などのサードパーティ製のグラフライブラリを用いて描画すること（ただし、グラフライブラリは上記のものに限らず、任意のものを用いてよい)
- Google Chrome 最新版で正しく動くこと
- PC/スマートフォン表示に対応すること(レスポンシブデザイン対応)（ただし実機でなく、Google Chrome の検証ツールで確認できればよい
- リンターやフォーマッターを適切に設定すること
- リンターには ESLint、フォーマッターには Prettier を使用すること
- style は自分で記述し、CSS・UI フレームワークなどは原則使用しないこと（ただし、chart ライブラリ内包の style、リセット系の CSS ライブラリについてはこの限りではない）
- また、css-in-js や css-modules、sass などのエコシステムの利用を妨げるものではなく、あくまで css の記述力を測る趣旨に留まる

### ＜注意事項＞

・RESAS API の利用登録(無料)を行い、API Key を発行する必要がある
・ソースコードは Git で管理し、作成したソースコードは GitHub にアップロードすること
・Netlify / GitHub Pages / Firebase hosting / Vercel 等のホスティングサービスにデプロイし、インターネット経由で閲覧できる状態にし、その URL を提出時に共有すること
・セキュリティを考慮してコードを記述すること
・アプリのコンポーネント粒度の設計、Git コミットメッセージやコミット粒度、ドキュメンテーション等もレビュー対象となる
・チーム開発を意識してコードを記述すること

#### 参考

- RESAS API: https://opendata.resas-portal.go.jp/
- RESAS API 仕様書: https://opendata.resas-portal.go.jp/docs/api/v1/index.html
- Highcharts: https://www.highcharts.com/
- Recharts.js: http://recharts.org/en-US/

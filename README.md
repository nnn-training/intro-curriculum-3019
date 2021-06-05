# intro-curriculum-3019
入門コースの3章20節の練習 (ISC License)

## note

### RESTfulなURIの設計 (一例)

|  メソッド  |  パスとクエリ  | 処理 |
| ---- | ---- | ---- |
|  GET  |  /posts  | 投稿一覧 | 
|  POST  |  /posts  | 投稿とリダイレクト |
|  POST  |  /posts?delete=1  | 削除 |
|  GET  |  /logout | ログアウト |
|  GET  |  /favicon.ico  | ファビコン |

### モジュール設計 (一例)

|  ファイルパス  | モジュールの役割 |
| ---- | ---- | ---- |
|  index.js  | HTTPサーバーを起動する | 
|  lib/router.js  | リクエストに対し処理を行うハンドラに振り分ける |
|  lib/posts-handler.js  | /posts のリクエストを処理する |
|  lib/handler-utiles.js | その他のリクエストを処理する |
|  lib/post.js  | 投稿を追加、取得、削除する |

- router.js でルーティングを実装
- posts-handler.js, handler-utiles.js はルーターによって振り分けられた処理を具体的に実行する

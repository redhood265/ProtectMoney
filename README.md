# 【目的】

- 家電のよくばり買いの撲滅。家電やデーム購入で毎月のクレカ代金がやばいので、無駄遣いを抑止したい
- 毎月、何を買ったか、入力して、ログとして保存。何年何月にいくらの何を買ったかを見れるようにする
- クレカ、高額請求一覧(高額とは、インフラ代・食費を除いた請求で2000円を超える or 家電又はゲームのカテゴリに属する)

## 【仕様検討】

### 一覧画面

- indexは今月を含めた直近三ヶ月を表示
- indexでは今月にカテゴリ全てを購入している場合には、購入できませんとメッセージをずっと表示
- 利用月で既に購入した家電等はその月中ずっと画面に表示
- 承認済みのみ画面表示
- 各月の利用額を棒グラフで確認したい(JavaScriptでやりたい　JSのフレームワークやライブラリは好きなのを使う)

### ログ画面(データ貯まって見辛くなったら実装でも良さそう)

- データ表示は検索ボタンをクリックしたあと or まえ？
- 検索ボタンをつけた理由は、データが増えた時に探したいデータを早く見つけるため

### メール機能

- 家電を購入する際には、メールで承認を得る
- 承認はメール内の「承認」「否認」のどちらかのリンクを押して意思決定

### LINE機能

- BOTを利用して、LINE通知で承認したデータを通知及び月末にその月の利用金額を通知

### グラフ表示対応

- 利用技術候補
  - chartkick
  - chart.js
- ログ画面 or 一覧画面に設ける

## 搭載機能一覧

- [x] 一覧画面
- [x] 新規作成画面
- [ ] ログ一覧画面(作成したデータを確認す画面))
- [ ] メール機能
- [ ] Lineでの通知機能(bot利用)
- [x] 利用額を棒グラフで表示(チャート画面を作成)
- [ ] バリデーション
- [ ] スマホ表示に対応する
  - gemの選定
- [ ] クラウドへのデプロイ
- [ ] Rspecによるテストコード
- [ ] フロント側をRailsのデフォルトではなく、React、Vue等で実装する(技術の幅を広げる)

## __初期設定__

### プロジェクト作成

```rails
rails new ProtectMoney -d postgresql
rails new プロジェクト名 -d mysql
```

### Gemの追加

```Rails
gem 'pg'
gem 'slim-rails'
gem 'html2slim'
gem 'bootstrap'
gem 'jquery-rails'
gem 'rails-i18n'
gem 'ransack'
gem 'chartkick'
```

### そのアプリケーションの中だけにインストール(bundle install)

(※railsアプリのルートディレクトリの下のvendor/bundleディレクトリにインストール)  

```rails
bundle install --path vendor/bundle
```

### DB

postgresqlの設定

```Rails
【database.ymlを書き換えた後、コンソールで以下を実行】
createuser user
createdb ProtectMoney_development
createdb ProtectMoney_test
createdb ProtectMoney_production

【ログイン出来る事を確認】
psql -d ProtectMoney_development
```

モデル(単数形,先頭大文字で宣言。モデルの項目は小文字)

```Rails
rails g model Category name:string
rails g model BuyItem category_id:integer name:string price:integer approval:boolean
```

コントローラー(モデルの複数形を名前とする)

```Rails
rails g controller BuyItems
```

### DBマイグレーション

```Rails
rails db:migrate
```

### Railsサーバ起動

```rails
#デフォルトポート(3000番)
rails s
#ポート指定(3030番ポート)
rails s -p 3030
```

___

## 色々な備忘録

### VSCodeのプラグイン

#### Markdown

- markdownlint
- Markdown All in One

#### Slim

- Slim
- Slim Lint

### カラーテーマ

- Noctis

#### psqlのコマンド

```psql
【テーブルのデータ全削除(連番も初期化】
TRUNCATE TABLE <table_name> RESTART IDENTITY;

TRUNCATE TABLE categories RESTART IDENTITY;
TRUNCATE TABLE buy_items RESTART IDENTITY;


【データベースの削除】
dropdb データベース名
dropdb ProtectMoney_development
dropdb ProtectMoney_test
dropdb ProtectMoney_production
```

#### html2slimのコマンド(既存のhtmlをslimに変換)  

```rails
bundle exec erb2slim app/views/ --delete
```

#### Rails dbコマンド

```Rails
rails db:create
rails db:migrate
rails db:migrate version=20191009125118
rails db:migrate:reset
rails db:seed
rails db:rollback
rails db:drop
```

#### 個別のRailsアプリにインストールされているgemの一覧  

```rails
bundle list
```

## Qiita投稿ネタ

- Rila6でのメール送信
- LINEBotとRailsを組み合わせる
- チャート表示のネタ(棒グラフだけで良い。Rails6で実装したことに意味がある)
- chartkickの各オプション適用時のグラフィックを用いて記事化
- バリデーション&関連付けをまとめる

# README

## 機能メモ

### 【目的】

- 家電のよくばり買いの撲滅。家電やデーム購入で毎月のクレカ代金がやばいので、無駄遣いを抑止したい

### 【要件】

- 毎月、何を買ったか、入力して、ログとして保存。何年何月にいくらの何を買ったかを見れるようにする
- 家電を購入する際には、メールで承認を得る
- 承認はメール内の「承認」「否認」のどちらかのリンクを押して意思決定
- 利用月で既に購入した家電等はその月中ずっと画面に表示
- クレカ、高額請求一覧(高額とは、インフラ代・食費を除いた請求で2000円を超える or 家電又はゲームのカテゴリに属する)
- indexは今月を含めた直近三ヶ月を表示
- indexでは今月にカテゴリ全てを購入している場合には、購入できませんとメッセージをずっと表示
- 画面遷移なしで、システム稼動からのサマリ（合計支払額）を表示する
- 承認済みのみ画面表示
- BOTを利用して、LINE通知で承認したデータを通知及び月末にその月の利用金額を通知
- 各月の利用額を棒グラフで確認したい(JavaScriptでやりたい　JSのフレームワークやライブラリは好きなのを使う)

## 搭載機能一覧

- [x] 一覧画面
- [x] 新規作成画面
- [x] ログ一覧画面(作成したデータを確認す画面))
- [ ] メール機能
- [ ] Lineでの通知機能(bot利用)
- [ ] 利用額を棒グラフで表示
- [ ] バリデーション

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
rails s
```

___

## 色々な備忘録

### VSCodeのプラグイン

#### Markdown

- Auto-Open Markdown Preview
- markdownlint
- Markdown All in One

#### Slim

- Slim
- Slim Lint

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

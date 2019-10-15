# README

## 機能

あとで記載

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

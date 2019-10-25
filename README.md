# フロントをReactに以降(Bootstrapを利用しない)

- React導入(Rails6) <https://github.com/reactjs/react-rails>
- React導入(Rails6)のエラー回避 <https://qiita.com/NaokiIshimura/items/e01cb95d71ffa5811f63>
- マテリアルUI導入 <http://yucatio.hatenablog.com/entry/2018/12/02/102403>
- マテリアルUIのボタン導入 <http://yucatio.hatenablog.com/entry/2018/12/03/092939>

## Rspecの導入

### Gemファイル編集

- Gemファイルのgroup :development配下に以下追記
  - gem 'rspec-rails'
  - gem 'spring-commands-rspec'

bundle install --path vendor/bundle

### Rspecインストール

- rails generate rspec:install
- bundle exec spring binstub rspec

yarn add styled-components

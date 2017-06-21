# taowebsite

## 開発環境の作り方(macOS)

### Homebrew のインストール

http://qiita.com/is0me/items/475fdbc4d770534f9ef1

### RubyとNode.jsのインストール

```
brew install node rbenv ruby-build
rbenv install 2.4.1
```

### ライブラリのインストール

リポジトリをcloneしてきたディレクトリに移動して、rubyの処理系が2.4.1になっているのを確認する。

```
$ ruby --version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]
```

bundlerとnpmで必要なパッケージをインストールする。

```
gem install bundler
bundle install
npm install
```

### 動作確認

以下のコマンドを実行し、 http://localhost:4567 にアクセス出来ることを確認する。

```
bundle exec middleman
```

## デプロイ方法

```
bundle exec middleman deploy
```

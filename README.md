# taowebsite

## 開発環境の作り方(macOS)

### Homebrew のインストール

Homebrewへのパスをbash_profileに追記する。

```
$ vim ~/.bash_profile

export PATH=/usr/local:$PATH
```

Homebrewでインストールされるソフトウェアの保存先が無ければ作成する。

```
$ sudo mkdir /usr/local/
```

Homebrewをインストールする。

```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

先ほど編集したbash_profileを再読み込み。

```
$ source ~/.bash_profile
```

インストールできているか確認

```
$ brew -v
```

### readline, ruby, rbenv, node.js のインストール

```
$ brew update
$ git clone https://github.com/sstephenson/ruby-build.git ~/.rbenv/plugins/ruby-build
$ brew install readline ruby-build rbenv node
```

### パスの設定

```
$ vi ~/.bash_profile
```

bash_profile 内に記載する文字列

```
export PATH=$HOME/.rbenv/bin:$PATH
eval "$(rbenv init -)"
```
記載内容を反映

```
$ source ~/.bash_profile
```
rbenv が有効か確認

```
$ rbenv --version
```
### rbenv と ruby をインストール

rbenv でインストール可能なバージョン一覧

```
$ rbenv install -l
```
rbenv をインストール

```
$ rbenv install 2.4.1
```
rbenv が 2.4.1 になっているのを確認する

```
$ rbenv versions
$ rbenv global 2.4.1
  system
* 2.4.1 (set by /Users/xxxxx/.rbenv/version)
```
Ruby が 2.4.1 になっているのを確認する

```
$ ruby --version
ruby 2.4.1p111 (2017-03-22 revision 58053) [x86_64-darwin16]
```

### ソースコードを clone する

```
$ git clone https://github.com/fullvirtue/taowebsite.git /git/taowebsite/
$ cd /git/taowebsite/
```

### リポジトリのフォルダ上で、bundlerとnpmで必要なパッケージをインストールする。

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

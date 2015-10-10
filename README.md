# ftnd-test-ja
日本語のFTND (Fagerstrom Test for Nicotine Dependence) の質問票の文言と点数計算

## install

```sh
npm install ftnd-test-ja
```

## usage

```js
var FTND = require('ftnd-test-ja');
```

質問一覧を取得
```js
FTND.getQuestions();
```

質問の選択肢を取得
```js
FTND.getChoices(0); // Q1の選択肢の配列
FTND.getChoices(4); // Q5の選択肢の配列
```

点数を計算
```js
// 引数はQ1~Q6 の回答の配列. getChoices で得られた配列のインデックスの値の列を渡す
FTND.calculate([2,1,0,3,1,0]); // 6 を返す。
```

## LICENSE
MIT

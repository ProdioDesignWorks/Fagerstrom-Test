# Fagerstrom-Test
FTND (Fagerstrom Test for Nicotine Dependence) questionnaire wording and score calculation

## install

```sh
npm install ftnd-test-ja
```

## usage

```js
const FTND = require('fagerstrom-test');
```

Get a list of questions
```js
FTND.getQuestions();
```

Get question choices
```js
FTND.getChoices(0); // Q1 choice array
FTND.getChoices(4); // Q5 choice array
```

Calculate score
```js
// Argument is an array of answers from Q1 to Q6. It passes a column of array index values ​​obtained with getChoices
FTND.calculate([2,1,0,3,1,0]); // Returns 6.
```

## LICENSE
MIT

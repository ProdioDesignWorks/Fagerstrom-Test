module.exports = {

    /**
    質問一覧を返す

    @method getQuestions
    @return {Array(String)}
    */
    getQuestions: function() {

        return [
            'あなたは、朝目覚めてから何分ぐらいで最初のタバコを吸いますか。',
            'あなたは、喫煙が禁じられている場所、例えば図書館、映画館などでタバコを吸うのをがまんすることを難しいと感じますか。',
            'あなたは、一日の中でどの時間帯のたばこをやめるのに最も未練がのこりますか。',
            'あなたは、一日何本タバコを吸いますか。',
            'あなたは、目覚めてから2、3時間以内のほうがその後の時間帯よりも頻繁にタバコを吸いますか。',
            'あなたは、病気でほとんど一日中寝ている時でも、タバコを吸いますか。'
        ];
   },

    /**
    indexで与えられた質問の選択肢を返す

    @method getChoices
    @param {Number} qsIndex 質問票のインデックス 0, 1, 2, ...
    @return {Array(String)}
    */
    getChoices: function(qsIndex) {

        return [
            ['５分以内', '６〜３０分', '３１〜６０分 ', '６１分以後'],
            ['はい', 'いいえ'],
            ['朝起きた時の目覚めの１本', 'それ以外'],
            ['１０本以下', '１１〜２０本', '２１〜３０本', '３１本以上'],
            ['はい', 'いいえ'],
            ['はい', 'いいえ']
        ][qsIndex];
    },


    /**
    indexで与えられた選択肢の配列から、点数を計算する
    具体的には 与えられた配列の "0" の数を数える

    @method calculate
    @param {Array(Number)} answerIndexes 選んだ選択肢のインデックスの配列(質問順)
    @return {Number} 点数
    */
    calculate: function(answerIndexes) {

        if (answerIndexes.length !== 6) {
            throw new Error('引数の長さが6でない');
        }

        var points = [
            [3, 2, 1, 0],
            [1, 0],
            [1, 0],
            [0, 1, 2, 3],
            [1, 0],
            [1, 0]
        ];

        return answerIndexes.reduce(function(total, qsIndex, i) {

            var point = points[i][qsIndex];

            if (point === undefined) {
                throw new Error((i + 1) + '番目の値が不正');
            }

            return total + point;

        }, 0);
    }
};


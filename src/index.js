const { questionnaire } = require('../questionnaire');

const FTND = {
    /**
        Return a list of questions

        @method getQuestions
        @return {Array(String)}
    */
    getQuestions: () => questionnaire.questions,

    /**
        What is the score when you answer answerIndex to the question corresponding to qsIndex?
        @method getScore
        @param {Array(Number)} answerIndex An array of indices of the selected options (in order of questions)
        @return {Number} Score
    */
    getScore: (qsIndex, answerIndex) => questionnaire.points[qsIndex][answerIndex],

    /**
        Returns the question choice given by index

        @method getChoices
        @param {Number} qsIndex Questionnaire index 0, 1, 2, ...
        @return {Array (String)}
    */
    getChoices: (qsIndex) => questionnaire.choices[qsIndex],


    /**
        Calculate the score from the array of choices given by index
        Calculate the score for each question from the score table

        @method calculate
        @param {Array (Number)} answerIndexes Array of selected choice indices (in order of questions)
        @return {Number} points
    */
    calculate: (answerIndexes) => {
        if (answerIndexes.length !== 6) {
            throw new Error ('argument length is not 6');
        }

        return answerIndexes.reduce((total, answerIndexes, qsIndex) => {
            const point = FTND.getScore (qsIndex, answerIndexes);
            if (point === undefined) {
                throw new Error ((i + 1) + 'Illegal value');
            }

            return total + point;

        }, 0);
    }
};

module.exports = FTND;

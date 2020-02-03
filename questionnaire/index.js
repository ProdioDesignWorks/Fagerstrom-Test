// http://ndri.curtin.edu.au/btitp/documents/Fagerstrom_test.pdf

const questions = [
    'How many packets of tobacco do you consume everyday?',
    'How much do you spend on tobacco a day?',
    'How soon after waking up do you consume tobacco?',
    'When do you consume a higher proportion of tobacco?',
    'Do you consume tobacco even when you are seriously ill?',
    'Do you find it difficult to refrain from smoking in public places?'
];

const choices = [
	['10 or less', '11 ‐ 20', '21 ‐ 30','31 or more'],
	['100 or less', '101 - 200', '201 - 300', '301 or more']
	['within 5 minutes', '6-30 minutes', '31-60 minutes', 'After 60 minutes']
	['Day', 'Night']
	['Yes', 'No'],
	['Yes', 'No']
]

const points = [
    [0, 1, 2, 3],
    [0, 1, 2, 3],
    [3, 2, 1, 0],
    [1, 0],
    [1, 0],
    [1, 0]
];

exports.questions = questions;
exports.choices = choices;
exports.points = points;
exports.questionnaire = { questions, choices, points };
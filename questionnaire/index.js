// http://ndri.curtin.edu.au/btitp/documents/Fagerstrom_test.pdf

const questions = [
    'How many minutes after you wake up in the morning do you smoke the first cigarette?',
    'Do you find it difficult to smoke at places where smoking is prohibited, such as libraries and cinemas?',
    'In what time of the day do you have the most patience to quit smoking?',
    'How many cigarettes do you smoke a day',
    'Do you smoke more often within a few hours of waking up than during later hours?',
    'Do you smoke even when you are sick and sleep almost all day long?'
];

const choices = [
	['Within 5 minutes', '6-30 minutes', '31-60 minutes', 'after 61 minutes'],
	['Yes, No'],
	['Awakening when waking up in the morning', 'Others'],
	['10 or fewer', '11-20', '21-30', '31 or more'],
	['Yes', 'No'],
	['Yes', 'No']
]

const points = [
    [3, 2, 1, 0],
    [1, 0],
    [1, 0],
    [0, 1, 2, 3],
    [1, 0],
    [1, 0]
];

exports.questions = questions;
exports.choices = choices;
exports.points = points;
exports.questionnaire = { questions, choices, points };
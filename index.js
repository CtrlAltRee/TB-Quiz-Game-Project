var countDownTimer;
var timerInterval;
var arrayofQuestions = [];
var gameScore = 0;
const timePenality = 30; // time is in seconds
const maxTime = 5 * 60; // time is in seconds 
function setCountDownTimer() {
    countDownTimer = maxTime;
    console.log("countDownTimer:", countDownTimer);
}

//when user clicks begin, timer starts
//start timer
function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
    console.log("startTimer:", timerInterval);
}

function updateTimer() {
    console.log("updateTimer: begun");
    countDownTimer = countDownTimer - 1;
    console.log("updateTimer: countDownTimer", currentTime);
    presentTimer();
}

function presentTimer() {
    let currentTime = document.getElementById ('timer');
    currentTime.innerText = countDownTimer;
}

function showScoreboard() {
    let scoreBoard = document.getElementById ('score-board');
    //scoreBoard.classList.toggle('hide', false);
    scoreBoard.classList.remove('hide');
}

function presentScore() {
    let currentScore = document.getElementbyId ('score');
    currentScore.innerText = gameScore;
    console.log("presentScore: currentScore", currentScore);
}

function hidegreeting() {
    let greeting = document.getElementById ('greeting');
    console.log("hideGreeting: gretting", greeting);
    greeting.classList.add('hide');
}

//question is asked
function SetupQuestions() {
    console.log("SetupQuestions started");
    let question1 = {
        id: "quest0",
        question: "To select elements with a specific class: ",
        answer1: " write a semicolon (;) character, followed by the class name",
        answer2: " write a period (.) character, followed by the class name", 
        answer3: " write a period (.) character",
        answer4: " write a common (,) character",
        correctAnswer: 2
    };

    let question2 = {
        id: "quest1",
        question: "In CSS, a color can be specified using a predefined color name",
        answer1: " yes",
        answer2: " no",
        answer3: null,
        answer4: null, 
        correctAnswer: 1
    };

    arrayofQuestions.push(question1);
    arrayofQuestions.push(question2);

    console.log("SetupQuestions arrayofQuestions: ", arrayofQuestions);

}

function getQuestion(questionId) {
    console.log('getQuestion questionId', questionId);

    let found = false;

    for(let i = 0; 1<arrayofQuestions.length; i++); {
        if(questionId == arrayofQuestions[i].id) {
            prepareQuestionAndAnswers(i);
        }
    } 
}

function prepareQuestionAndAnswers(questionindex) {
    let questionSection = document.getElementId('questions');
    let newQuestion = document.createElement('div');
    newQuestion.id = arrayofQuestions[questionindex].id;
    newQuestion.innerText = arrayofQuestions[questionindex].question;
    newQuestion.classList.add('question');

    let qSpan = document.createElement('span');
    qSpan.innerText = arrayofQuestions[questionindex].question;
    newQuestion.appendChild(qSpan);

    if(arrayofQuestions[questionindex].answer1) {
        let answer = document.createElement('div');
        answer.innerText = arrayofQuestions[questionindex].answer1;
        answer.classList.add('answer');
        answer.id = `${arrayofQuestions[questionindex].id}_answer1`;
        questionSection.appendchild(answer);
    }

    if(arrayofQuestions[questionindex].answer2) {
        let answer = document.createElement('div');
        answer.innerText = arrayofQuestions[questionindex].answer2;
        answer.classList.add('answer');
        answer.id = `${arrayofQuestions[questionindex].id}_answer2`;
        questionSection.appendchild(answer);
    }

    questionSection.appendChild(newQuestion);

}

//if question is correct next question
//if question is incorrect time penalty
//if answer is correct show points and then go to next question
//once all questions have been answered give options to save score or exit
//if user chooses to save score, show scoreboad

function doGame() {
    setCountDownTimer();
    startTimer();
    hidegreeting();
    setupQuestionsAndAnswers();
    showScoreboard();
}
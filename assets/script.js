//select classes from html to use in javascript
var clickBtn = document.querySelector(".click")
var rmvCenter = document.querySelector(".central-display")
var section = document.querySelector(".question")
var timerEl = document.querySelector(".timer-display")
var highScore = document.querySelector(".your-score-display")

//name variables globally to be used in functions
var number = 60
var timerid;
var questionPosition = 0;
var startScore = 100

//starts the quiz
function start() {
    //hides the originally html content
    clickBtn.classList.add('hide')
    rmvCenter.classList.add('hide')
    //starts timer
    timerEl.textContent = number + " seconds";
    timerid = setInterval(timer, 1000)
    //shows timer
    highScore.textContent = "Your score: " + startScore + " points";
    //displays questions and answers
    displayQues()


}

//creates an array of questions and answers
var questionArray = [
    {
        question: "What does HTML stand for?",
        answer: ["HyperTest Markup Language", "HyperText Markup Language", "HyperText Marking Language"],
        correctAnswer: "HyperText Markup Language"
    },
    {
        question: "How do you denote a string in coding?",
        answer: ["parentheses", "quotes", "curly brackets"],
        correctAnswer: "quotes"
    },
    {
        question: "What does CSS stand for?",
        answer: ["Cascading Style Sheets", "Crossing Style Sheets", "Cascading Simple Sheets"],
        correctAnswer: "Cascading Style Sheets"
    },
    {
        question: "How do you denote an array in coding?",
        answer: ["brackets", "pound sign", "curly brackets"],
        correctAnswer: "brackets"
    }
]

//creates a function for cycling thru each question
function displayQues() {
    section.innerHTML = '';

    var currentQues = document.createElement("h2");
    currentQues.textContent = questionArray[questionPosition].question
    var currentAns = document.createElement("div");
//creates a button for each answer
    for (var i = 0; i < questionArray[questionPosition].answer.length; i++) {
        var answerBtn = document.createElement('button')
        answerBtn.textContent = questionArray[questionPosition].answer[i];
        answerBtn.addEventListener('click', click)
        currentAns.append(answerBtn)
    }
//attches answer to qeustion
    section.append(currentQues, currentAns)
}

//creates a function for the timer
function timer() {
    number--
    timerEl.textContent = number + " seconds";
    //clears the timer once it reaches 0
    if (number <= 0) {
        clearInterval(timerid)
    }
}

//creates a function for clicking on each answer
function click() {
    //decreases time by 10 seconds if clicked on a wrong answer
    if (this.textContent !== questionArray[questionPosition].correctAnswer) {
        number -= 10
        timerEl.textContent = number + " seconds";
        //decreases score by 25 pts if clickec on a wrong answer
        startScore -= 25
        highScore.textContent = "Your score: " + startScore + " points";
    }
    questionPosition++

    displayQues()

}

//creates an event listner for clicking on the start button 
clickBtn.addEventListener('click', start)



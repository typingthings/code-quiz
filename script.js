var choicefour = document.querySelector("#choicefour")
var choicethree = document.querySelector("#choicethree")
var choicetwo = document.querySelector("#choicetwo")
var choiceone = document.querySelector("#choiceone")
var questionTitle = document.querySelector("#questiontitle")
var introduction = document.querySelector("#introduction")
var second = document.querySelector("#second")
var start = document.querySelector("#start")
var timer = document.querySelector("#timer")
var third = document.querySelector("#third")
var fourth = document.querySelector("#fourth")
var index = 0
var questions = [{
    questionTitle: "Commonly used data types do NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    solutions: "alerts"
}, {
    questionTitle: "The condition in an if/else statement is enclosed with _____.",
    choices: ["quotes", "curly brackets", "paranthesis", "square brackets"],
    solutions: "paranthesis"
},
{
    questionTitle: "Arrays in Javascript can be used to store _____.",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    solutions: "all of the above"

},
{
    questionTitle: "String values must be enclosed within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "paranthesis"],
    solutions: "quotes"
},
{
    questionTitle: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    solutions: "console.log"
}]

var secondsRemaining = questions.length * 15
var clockId = ""
start.addEventListener("click", function () {
    introduction.classList.add("hide")
    second.classList.remove("hide")
    displayQuestion()
    clockId = setInterval(countdown, 1000)
})
choiceone.addEventListener("click", function () {
    if (this.textContent===questions[index].solutions) {
        alert("correct")
    }
    else {
        alert("wrong")
    }
    index++
    if (index < questions.length) {
        displayQuestion()
    }
    else {
        clearInterval(clockId)
        second.classList.add("hide")
        third.classList.remove("hide")
    }

})
choicetwo.addEventListener("click", function () {
    if (this.textContent===questions[index].solutions) {
        alert("correct")
    }
    else {
        alert("wrong")
    }
    index++
    if (index < questions.length) {
        displayQuestion()
    }
    else {
        clearInterval(clockId)
        second.classList.add("hide")
        third.classList.remove("hide")
    }

})
choicethree.addEventListener("click", function () {
    if (this.textContent===questions[index].solutions) {
        alert("correct")
    }
    else {
        alert("wrong")
    }
    index++
    if (index < questions.length) {
        displayQuestion()
    }
    else {
        clearInterval(clockId)
        second.classList.add("hide")
        third.classList.remove("hide")
    }
})
choicefour.addEventListener("click", function () {
    if (this.textContent===questions[index].solutions) {
        alert("correct")
    }
    else {
        alert("wrong")
    }
    index++
    if (index < questions.length) {
        displayQuestion()
    }
    else {
        clearInterval(clockId)
        second.classList.add("hide")
        third.classList.remove("hide")
    }

})
function countdown() {

    timer.textContent = secondsRemaining--
}
function displayQuestion() {
    questionTitle.textContent = questions[index].questionTitle
    choiceone.textContent = questions[index].choices[0]
    choicetwo.textContent = questions[index].choices[1]
    choicethree.textContent = questions[index].choices[2]
    choicefour.textContent = questions[index].choices[3]
}

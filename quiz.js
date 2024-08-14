let actualPage = document.getElementById("actualpage");
let question1A = document.getElementById("question1answerchoiceA");
let question1B = document.getElementById("question1answerchoiceB");
let question1C = document.getElementById("question1answerchoiceC");
let question1D = document.getElementById("question1answerchoiceD");
let question2A = document.getElementById("question2answerchoiceA");
let question2B = document.getElementById("question2answerchoiceB");
let question2C = document.getElementById("question2answerchoiceC");
let question2D = document.getElementById("question2answerchoiceD");
let question3A = document.getElementById("question3answerchoiceA");
let question3B = document.getElementById("question3answerchoiceB");
let question3C = document.getElementById("question3answerchoiceC");
let question3D = document.getElementById("question3answerchoiceD");
let question4A = document.getElementById("question4answerchoiceA");
let question4B = document.getElementById("question4answerchoiceB");
let question4C = document.getElementById("question4answerchoiceC");
let question4D = document.getElementById("question4answerchoiceD");
let imDoneButton = document.getElementById("imdonebutton");
let question1selectedAnswer = "none";
let question2selectedAnswer = "none";
let question3selectedAnswer = "none";
let question4selectedAnswer = "none";
let question5selectedAnswer = "none";
let question6selectedAnswer = "none";
let question1Done = false;
let question2Done = false;
let question3Done = false;
let question4Done = false;
let question5Done = false;
let question6Done = false;
let finishedPage = document.getElementById("finishedpage");
let correctAnswerCounter = document.getElementById("xouttax");
let perfectScore = document.getElementById("perfectscore");
let correctAnswers = 0;
let question1RightWrongIndicator = document.getElementById("question1rightwrongindicator");
let question1AOnFinishedPage = document.getElementById("question1answerchoiceAonfinishedpage");
let question1BOnFinishedPage = document.getElementById("question1answerchoiceBonfinishedpage");
let question1COnFinishedPage = document.getElementById("question1answerchoiceConfinishedpage");
let question1DOnFinishedPage = document.getElementById("question1answerchoiceDonfinishedpage");
let question2RightWrongIndicator = document.getElementById("question2rightwrongindicator");
let question2AOnFinishedPage = document.getElementById("question2answerchoiceAonfinishedpage");
let question2BOnFinishedPage = document.getElementById("question2answerchoiceBonfinishedpage");
let question2COnFinishedPage = document.getElementById("question2answerchoiceConfinishedpage");
let question2DOnFinishedPage = document.getElementById("question2answerchoiceDonfinishedpage");
let question3RightWrongIndicator = document.getElementById("question3rightwrongindicator");
let question3AOnFinishedPage = document.getElementById("question3answerchoiceAonfinishedpage");
let question3BOnFinishedPage = document.getElementById("question3answerchoiceBonfinishedpage");
let question3COnFinishedPage = document.getElementById("question3answerchoiceConfinishedpage");
let question3DOnFinishedPage = document.getElementById("question3answerchoiceDonfinishedpage");
let question4RightWrongIndicator = document.getElementById("question4rightwrongindicator");
let question4AOnFinishedPage = document.getElementById("question4answerchoiceAonfinishedpage");
let question4BOnFinishedPage = document.getElementById("question4answerchoiceBonfinishedpage");
let question4COnFinishedPage = document.getElementById("question4answerchoiceConfinishedpage");
let question4DOnFinishedPage = document.getElementById("question4answerchoiceDonfinishedpage");

function highlight(object, bgcolor, color2, object2, object3, object4, bgcolor2, color3){
    object.style.backgroundColor = bgcolor;
    object.style.color = color2;
    object2.style.backgroundColor = bgcolor2;
    object2.style.color = color3;
    object3.style.backgroundColor = bgcolor2;
    object3.style.color = color3;
    object4.style.backgroundColor = bgcolor2;
    object4.style.color = color3;
}

console.log(finishedPage)

question1A.addEventListener("click", function(){
    highlight(question1A, "dodgerblue", "white", question1B, question1C, question1D, "white", "black");
    question1selectedAnswer = "answerchoiceA"
    question1Done = true
})

question1B.addEventListener("click", function(){
    highlight(question1B, "dodgerblue", "white", question1A, question1C, question1D, "white", "black");
    question1selectedAnswer = "answerchoiceB"
    question1Done = true
})

question1C.addEventListener("click", function(){
    highlight(question1C, "dodgerblue", "white", question1A, question1B, question1D, "white", "black");
    question1selectedAnswer = "answerchoiceC"
    question1Done = true
    correctAnswers += 1
})

question1D.addEventListener("click", function(){
    highlight(question1D, "dodgerblue", "white", question1A, question1B, question1C, "white", "black");
    question1selectedAnswer = "answerchoiceD"
    question1Done = true
})

question2A.addEventListener("click", function(){
    highlight(question2A, "dodgerblue", "white", question2B, question2C, question2D, "white", "black");
    question2selectedAnswer = "answerchoiceA"
    question2Done = true
})

question2B.addEventListener("click", function(){
    highlight(question2B, "dodgerblue", "white", question2A, question2C, question2D, "white", "black");
    question2selectedAnswer = "answerchoiceB"
    question2Done = true
    correctAnswers += 1
})

question2C.addEventListener("click", function(){
    highlight(question2C, "dodgerblue", "white", question2A, question2B, question2D, "white", "black");
    question2selectedAnswer = "answerchoiceC"
    question2Done = true
})

question2D.addEventListener("click", function(){
    highlight(question2D, "dodgerblue", "white", question2A, question2B, question2C, "white", "black");
    question2selectedAnswer = "answerchoiceD"
    question2Done = true
})

question3A.addEventListener("click", function(){
    highlight(question3A, "dodgerblue", "white", question3B, question3C, question3D, "white", "black");
    question3selectedAnswer = "answerchoiceA"
    question3Done = true
})

question3B.addEventListener("click", function(){
    highlight(question3B, "dodgerblue", "white", question3A, question3C, question3D, "white", "black");
    question3selectedAnswer = "answerchoiceB"
    question3Done = true
})

question3C.addEventListener("click", function(){
    highlight(question3C, "dodgerblue", "white", question3A, question3B, question3D, "white", "black");
    question3selectedAnswer = "answerchoiceC"
    question3Done = true
    correctAnswers += 1
})

question3D.addEventListener("click", function(){
    highlight(question3D, "dodgerblue", "white", question3A, question3B, question3C, "white", "black");
    question3selectedAnswer = "answerchoiceD"
    question3Done = true
})

question4A.addEventListener("click", function(){
    highlight(question4A, "dodgerblue", "white", question4B, question4C, question4D, "white", "black");
    question4selectedAnswer = "answerchoiceA"
    question4Done = true
})

question4B.addEventListener("click", function(){
    highlight(question4B, "dodgerblue", "white", question4A, question4C, question4D, "white", "black");
    question4selectedAnswer = "answerchoiceB"
    question4Done = true
})

question4C.addEventListener("click", function(){
    highlight(question4C, "dodgerblue", "white", question4A, question4B, question4D, "white", "black");
    question4selectedAnswer = "answerchoiceC"
    question4Done = true
    correctAnswers += 1
})

question4D.addEventListener("click", function(){
    highlight(question4D, "dodgerblue", "white", question4A, question4B, question4C, "white", "black");
    question4selectedAnswer = "answerchoiceD"
    question4Done = true
})

imDoneButton.addEventListener("click", function() {
    if (question1Done == true && question2Done == true && question3Done == true && question4Done == true) {
        actualPage.style.display = "none";
        finishedPage.style.display = "flex";
        correctAnswerCounter.innerText = "You got " + correctAnswers + "/4";
        if (correctAnswers == 4) {
            perfectScore.innerText = "Perfect score?! Props to you!";
        }
        if (question1selectedAnswer == "answerchoiceC") {
            question1RightWrongIndicator.style.backgroundColor = "limegreen";
            question1RightWrongIndicator.style.color = "white";
            question1RightWrongIndicator.innerText = "Correct!"
            question1COnFinishedPage.style.backgroundColor = "limegreen";
            question1COnFinishedPage.style.color = "white";
            question1COnFinishedPage.innerText = "C. Rising temperatures on a global scale <-- You picked the right answer";
        }
        else {
            question1RightWrongIndicator.style.backgroundColor = "maroon";
            question1RightWrongIndicator.style.color = "white";
            question1RightWrongIndicator.innerText = "Wrong";
            question1COnFinishedPage.innerText = "C. Rising temperatures on a global scale <-- This was the answer";
            if (question1selectedAnswer == "answerchoiceA") {
                question1AOnFinishedPage.style.backgroundColor = "maroon";
                question1AOnFinishedPage.style.color = "white";
                question1AOnFinishedPage.innerText = "A. Everyone around the globe warming up to eachother <-- You picked this";
            }
            if (question1selectedAnswer == "answerchoiceB") {
                question1BOnFinishedPage.style.backgroundColor = "maroon";
                question1BOnFinishedPage.style.color = "white";
                question1BOnFinishedPage.innerText = "B. Another term for summer <-- You picked this";
            }
            if (question1selectedAnswer == "answerchoiceD") {
                question1DOnFinishedPage.style.backgroundColor = "maroon";
                question1DOnFinishedPage.style.color = "white";
                question1DOnFinishedPage.innerText = "D. Heat from computer fans heating up the atmosphere <-- You picked this";
            }
        }

        if (question2selectedAnswer == "answerchoiceB") {
            question2RightWrongIndicator.style.backgroundColor = "limegreen";
            question2RightWrongIndicator.style.color = "white";
            question2RightWrongIndicator.innerText = "Correct!"
            question2BOnFinishedPage.style.backgroundColor = "limegreen";
            question2BOnFinishedPage.style.color = "white";
            question2BOnFinishedPage.innerText = "B. Human activities that pollute the air <-- You picked the right answer";
        }
        else {
            question2RightWrongIndicator.style.backgroundColor = "maroon";
            question2RightWrongIndicator.style.color = "white";
            question2RightWrongIndicator.innerText = "Wrong";
            question2BOnFinishedPage.innerText = "C. Rising temperatures on a global scale <-- This was the answer";
            if (question2selectedAnswer == "answerchoiceA") {
                question2AOnFinishedPage.style.backgroundColor = "maroon";
                question2AOnFinishedPage.style.color = "white";
                question2AOnFinishedPage.innerText = "A. Intensified sunlight <-- You picked this";
            }
            if (question2selectedAnswer == "answerchoiceC") {
                question2COnFinishedPage.style.backgroundColor = "maroon";
                question2COnFinishedPage.style.color = "white";
                question2COnFinishedPage.innerText = "C. High body temperatures around the globe <-- You picked this";
            }
            if (question2selectedAnswer == "answerchoiceD") {
                question2DOnFinishedPage.style.backgroundColor = "maroon";
                question2DOnFinishedPage.style.color = "white";
                question2DOnFinishedPage.innerText = "D. Rising temperatures of earth's core <-- You picked this";
            }
        }

        if (question3selectedAnswer == "answerchoiceC") {
            question3RightWrongIndicator.style.backgroundColor = "limegreen";
            question3RightWrongIndicator.style.color = "white";
            question3RightWrongIndicator.innerText = "Correct!"
            question3COnFinishedPage.style.backgroundColor = "limegreen";
            question3COnFinishedPage.style.color = "white";
            question3COnFinishedPage.innerText = "C. If it continues, earth could become uninhabitable <-- You picked the right answer";
        }
        else {
            question3RightWrongIndicator.style.backgroundColor = "maroon";
            question3RightWrongIndicator.style.color = "white";
            question3RightWrongIndicator.innerText = "Wrong";
            question3COnFinishedPage.innerText = "C. If it continues, earth could become uninhabitable <-- This was the answer";
            if (question3selectedAnswer == "answerchoiceA") {
                question3AOnFinishedPage.style.backgroundColor = "maroon";
                question3AOnFinishedPage.style.color = "white";
                question3AOnFinishedPage.innerText = "A. We could make perfect conditions for the Precursors to move in <-- You picked this";
            }
            if (question3selectedAnswer == "answerchoiceB") {
                question3BOnFinishedPage.style.backgroundColor = "maroon";
                question3BOnFinishedPage.style.color = "white";
                question3BOnFinishedPage.innerText = "B. Humans can't handle the heat <-- You picked this";
            }
            if (question3selectedAnswer == "answerchoiceD") {
                question3DOnFinishedPage.style.backgroundColor = "maroon";
                question3DOnFinishedPage.style.color = "white";
                question3DOnFinishedPage.innerText = "D. It isn't bad <-- You picked this";
            }
        }

        if (question4selectedAnswer == "answerchoiceC") {
            question4RightWrongIndicator.style.backgroundColor = "limegreen";
            question4RightWrongIndicator.style.color = "white";
            question4RightWrongIndicator.innerText = "Correct!"
            question4COnFinishedPage.style.backgroundColor = "limegreen";
            question4COnFinishedPage.style.color = "white";
            question4COnFinishedPage.innerText = "C. If it continues, earth could become uninhabitable <-- You picked the right answer";
        }
        else {
            question4RightWrongIndicator.style.backgroundColor = "maroon";
            question4RightWrongIndicator.style.color = "white";
            question4RightWrongIndicator.innerText = "Wrong";
            question4COnFinishedPage.innerText = "C. If it continues, earth could become uninhabitable <-- This was the answer";
            if (question4selectedAnswer == "answerchoiceA") {
                question4AOnFinishedPage.style.backgroundColor = "maroon";
                question4AOnFinishedPage.style.color = "white";
                question4AOnFinishedPage.innerText = "A. Remove all airplanes from the sky and cars from the road <-- You picked this";
            }
            if (question4selectedAnswer == "answerchoiceB") {
                question4BOnFinishedPage.style.backgroundColor = "maroon";
                question4BOnFinishedPage.style.color = "white";
                question4BOnFinishedPage.innerText = "B. Don't pollute <-- You picked this";
            }
            if (question4selectedAnswer == "answerchoiceD") {
                question4DOnFinishedPage.style.backgroundColor = "maroon";
                question4DOnFinishedPage.style.color = "white";
                question4DOnFinishedPage.innerText = "D. None of the above <-- You picked this";
            }
        }
    }
    else {
        alert("Please finish the quiz");
    }
})
/*
console.log(questionslist);
let allQuestions = questionslist;

// for loop to look at each element in the array
  // createElement and appendChild to add the html for each question


console.log(allQuestions);

let question1Number = Math.floor(Math.random() * allQuestions.length - 1);
console.log(question1Number);
let questionNumber1 = allQuestions[question1Number];

question1title.innerText = allQuestions[question1Number].thequestion
*/

// double class HTML
// nth child classes and JS
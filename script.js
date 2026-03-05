const quizData = [
{
question: "What is the capital of India?",
options: ["Mumbai","Delhi","Kolkata","Chennai"],
answer: 1
},

{
question: "Which language runs in browser?",
options: ["Python","Java","C","JavaScript"],
answer: 3
},

{
question: "2 + 2 = ?",
options: ["3","4","5","6"],
answer: 1
},

{
question: "HTML stands for?",
options: [
"Hyper Text Markup Language",
"High Text Machine Language",
"Hyper Tool Multi Language",
"None"
],
answer: 0
}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion(){

let q = quizData[currentQuestion];

document.getElementById("question").innerText = q.question;

let options = document.getElementsByClassName("option");

for(let i=0;i<options.length;i++){
options[i].innerText = q.options[i];
}

}

function checkAnswer(option){

let correct = quizData[currentQuestion].answer;

if(option === correct){
alert("Correct Answer");
score++;
}
else{
alert("Wrong Answer");
}

}

function nextQuestion(){

currentQuestion++;

if(currentQuestion < quizData.length){
loadQuestion();
}
else{
document.getElementById("question").innerText="Quiz Finished";
document.querySelector(".options").style.display="none";
document.getElementById("nextBtn").style.display="none";

document.getElementById("score").innerText =
"Your Score: "+score+" / "+quizData.length;
}

}

loadQuestion();
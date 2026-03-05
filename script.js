const quizData = [

{
question:"What does HTML stand for?",
a:"Hyper Text Markup Language",
b:"Home Tool Markup Language",
c:"Hyperlinks Text Mark Language",
d:"Hyper Tool Multi Language",
correct:"a"
},

{
question:"Which language is used for styling web pages?",
a:"HTML",
b:"JQuery",
c:"CSS",
d:"Python",
correct:"c"
},

{
question:"Which language runs in browser?",
a:"Java",
b:"C++",
c:"Python",
d:"JavaScript",
correct:"d"
},

{
question:"Which company developed Java?",
a:"Microsoft",
b:"Sun Microsystems",
c:"Google",
d:"IBM",
correct:"b"
},

{
question:"Which tag is used for image in HTML?",
a:"<img>",
b:"<image>",
c:"<pic>",
d:"<src>",
correct:"a"
}

];

const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const submit = document.getElementById("submit");
const answers = document.querySelectorAll("input[name='answer']");
const timerText = document.getElementById("timer");

let currentQuiz = 0;
let score = 0;

let timeLeft = 10;
let timer;

loadQuiz();

function loadQuiz(){

clearInterval(timer);
timeLeft = 10;
startTimer();

answers.forEach(answer => answer.checked = false);

const data = quizData[currentQuiz];

question.innerText = data.question;
a_text.innerText = data.a;
b_text.innerText = data.b;
c_text.innerText = data.c;
d_text.innerText = data.d;

}

function startTimer(){

timerText.innerText = "Time: " + timeLeft;

timer = setInterval(()=>{

timeLeft--;

timerText.innerText = "Time: " + timeLeft;

if(timeLeft === 0){
nextQuestion();
}

},1000);

}

function getSelected(){

let answer;

answers.forEach(ans=>{
if(ans.checked){
answer = ans.id;
}
});

return answer;

}

submit.addEventListener("click", nextQuestion);

function nextQuestion(){

clearInterval(timer);

const answer = getSelected();

if(answer === quizData[currentQuiz].correct){
score++;
}

currentQuiz++;

if(currentQuiz < quizData.length){
loadQuiz();
}
else{

document.querySelector(".quiz-container").innerHTML =
`
<h2>Your Score: ${score}/${quizData.length}</h2>
<button onclick="location.reload()">Restart Quiz</button>
`;

}

}

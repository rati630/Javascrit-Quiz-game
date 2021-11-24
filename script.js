const quizDB =[
 {
    question: "Q1: The central Rice Research Station is situated in?",
    a: "Chennai",
    b: "Cuttack",
    c: "Bangalore",
    d: "Quilon",
    ans: "ans2"
},

{
    question: "Q2: Garampaani sanctuary is located at",
    a: "Junagarh,Gujarat",
    b: "Diphu,Assam",
    c: "Kohima,Nagaland",
    d: "Gangtok,sikkim",
    ans: "ans2"
},

{
    question: "Q3: Epsom(England) is the place associated with",
    a: "Horse Racing",
    b: "Polo",
    c: "Shooting",
    d: "Snooker",
    ans: "ans1"
},

{
    question: "Q4: What is the Fullform of CSS?",
    a: "Cascading style sheets",
    b: "Cascading style sheep",
    c: "cartoon style sheets",
    d: "Cascading super sheets",
    ans: "ans1"
}
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}
loadQuestion();

const getCheckedAnswer = () => {
let answer;

answers.forEach((curAnsElem)=> {
    if(curAnsElem.checked){
        answer = curAnsElem.id;
    }  
});
return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);

}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizDB.length}</h3>
        <button class="btn" onclick="location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
        

    }
});
    

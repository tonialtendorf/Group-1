
// const ul_1 = document.querySelector(".option1");
// const ul_2 = document.querySelector(".option2");
// const ul_3 = document.querySelector(".option3");

// const q1 = document.querySelector(".q1");
// const q2= document.querySelector(".q2");
// const q3 = document.querySelector(".q3");


// const first = document.querySelector(".first")
// const questions = document.querySelector(".questionContainer");

// add in end
// const end = document.querySelector(".end");

// first.addEventListener("click", function(){
//   q1.style.display="block";
//   first.style.display = "none";
// })
//first questions
// ul_1.addEventListener("click", function(){
//   q1.style.display ="none";
//   q2.style.display ="block";

// });

// ul_2.addEventListener("click", function(){
//   q2.style.display ="none";
//   q3.style.display ="block";

// });

// ul_3.addEventListener("click", function(){
//   q2.style.display ="none";
//   q3.style.display ="block";

// });

// var warm = document.querySelector(".warm")
// var cool = document.querySelector(".cool")

// var thrifty = document.querySelector(".thrifty")
// var luxury = document.querySelector(".luxury")

// var yes = document.querySelector(".yes")
// var no = document.querySelector(".no")

// var selectedAnswer1 = ["warm","cool"]
// var selectedAnswer2 = ("")
// var selectedAnswer3 = ("")

//change if statement 

// if (selectedAnswer1 == [0]){
//  console.log("Miami, Florida");
// }
// }
// else if (warm && luxury){
//   return ("Bali, Indonesia");


 //Find answer for client based on clients answers
 //Need a button to start quiz
 //User will see first question and select 1 out of 2 answers
// After user selects answer the next questions will show
// Repeat for remaining questions
// User will be displayed with a travel destination based on their choices
// task choose tailwind css modal for questions 
// modal will be javascript putting html dynamically 
// finish tailwind, modal and logic aspect on wednesday

const Questions = [{
  id: 0,
  q: "Do you prefer a warm beach or cool moutains?",
  a: [{ text: "warm", isCorrect: true },
  { text: "cool", isCorrect: false },
  ]
},
{
  id: 1,
  q:"Are you a thrify traveler or a luxury traveler?",
  a: [{ text: "Thrifty", isCorrect: true },
  { text: "Luxury", isCorrect: false },
]
},
{
  id: 2,
    q: "Do you need accommodations?",
      a: [{ text: "Yes please!", isCorrect: true },
      { text: "No, I have a place to stay!", isCorrect: false },
      ]
}

]

const startButton = document.querySelector(".first")
startButton.addEventListener('click', startQuiz)
var questionContainerElement = document.querySelector(".questionContainer")

// var buttonEl = document.createElement("button")
// buttonEl.innerHTML = Questions[0].a

function startQuiz() {
  startButton.classList.add('hide');
  console.log("clicked")
  var currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  // setNextQuestion();
}


// function setNextQuestion(){

// }
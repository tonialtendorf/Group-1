
const ul_1 = document.querySelector(".option1");
const ul_2 = document.querySelector(".option2");
const ul_3 = document.querySelector(".option3");

const q1 = document.querySelector(".q1");
const q2= document.querySelector(".q2");
const q3 = document.querySelector(".q3");


const first = document.querySelector(".first")
const questions = document.querySelector(".questionContainer");

// add in end
const end = document.querySelector(".end");

first.addEventListener("click", function(){
  q1.style.display="block";
  first.style.display = "none";
})
//first questions
ul_1.addEventListener("click", function(){
  q1.style.display ="none";
  q2.style.display ="block";

});

ul_2.addEventListener("click", function(){
  q2.style.display ="none";
  q3.style.display ="block";

});

ul_3.addEventListener("click", function(){
  q2.style.display ="none";
  q3.style.display ="block";

});

var warm = document.querySelector(".warm")
var cool = document.querySelector(".cool")

var thrifty = document.querySelector(".thrifty")
var luxury = document.querySelector(".luxury")

var yes = document.querySelector(".yes")
var no = document.querySelector(".no")

var selectedAnswer1 = ["warm","cool"]
// var selectedAnswer2 = ("")
// var selectedAnswer3 = ("")

//change if statement 
if (selectedAnswer1 === "warm"){
 console.log("Miami, Florida");
 
// }
// else if (warm && luxury){
//   return ("Bali, Indonesia");
}


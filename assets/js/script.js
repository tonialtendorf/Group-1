  //Find answer for client based on clients answers 
 //Need a button to start quiz
 
 const modal = document.querySelector('.modal');
 const startBtn = document.querySelector('.startBtn');
 const closeModal = document.querySelector('.closeModal')
 
 startBtn.addEventListener('click', function () {
   modal.classList.remove('hidden')
   startBtn.classList.add('hidden')
 });
 
 //event listeners for quiz options
 const warm = document.querySelector('.selectWarm');
 const cool = document.querySelector('.selectCool');
 const luxury = document.querySelector('.selectLuxury');
 const thrifty = document.querySelector('.selectThrifty');
 const yesHotel = document.querySelector('.selectYes');
 const noHotel = document.querySelector('.selectNo');
 
 //User will see first question and select 1 out of 2 answers
 // After user selects answer they will continue to answer all questions
 warm.addEventListener("click", e => {
   //console.log("warm selected")
   warm.style.backgroundColor = 'lightblue'
   cool.style.backgroundColor = '#F7E4D6'
 })
 
 cool.addEventListener("click", e => {
   //console.log("cool selected")
   cool.style.backgroundColor = 'lightblue'
   warm.style.backgroundColor = '#F7E4D6'
 
 })
 
 luxury.addEventListener("click", e => {
   //console.log("luxury selected")
   luxury.style.backgroundColor = 'lightblue'
   thrifty.style.backgroundColor = '#F7E4D6'
 })
 
 thrifty.addEventListener("click", e => {
   //console.log("thrifty selected")
   thrifty.style.backgroundColor = 'lightblue'
   luxury.style.backgroundColor = '#F7E4D6'
 })
 
 yesHotel.addEventListener("click", e => {
   //console.log("hotel selected")
   yesHotel.style.backgroundColor = 'lightblue'
   noHotel.style.backgroundColor = '#F7E4D6'
 })
 
 noHotel.addEventListener("click", e => {
   //console.log("no hotel selected")
   noHotel.style.backgroundColor = 'lightblue'
   yesHotel.style.backgroundColor = '#F7E4D6'
 })
 
 // User will be displayed with a travel destination based on their choices
 const bali = document.querySelector('.bali')
 const florida = document.querySelector('.florida')
 const newZealand = document.querySelector('.newZealand')
 const colorado = document.querySelector('.colorado')
 
 warm && luxury.addEventListener("click", function() {
   console.log("bali")
   florida.classList.add('hidden')
   bali.classList.remove('hidden')
   newZealand.classList.add('hidden')
   colorado.classList.add('hidden')
 })
 
 warm && thrifty.addEventListener("click", function() {
   console.log("florida")
   florida.classList.remove('hidden')
   bali.classList.add('hidden')
   newZealand.classList.add('hidden')
   colorado.classList.add('hidden')
 })
 
 cool && luxury.addEventListener("click", function() {
   console.log("New Zealand")
   florida.classList.add('hidden')
   bali.classList.add('hidden')
   newZealand.classList.remove('hidden')
   colorado.classList.add('hidden')
 })
 
 cool && thrifty.addEventListener("click", function() {
   console.log("Colorado")
   florida.classList.add('hidden')
   bali.classList.add('hidden')
   newZealand.classList.add('hidden')
   colorado.classList.remove('hidden')
 })
 
//Find answer for client based on clients answers
//Need a button to start quiz

const modal = document.querySelector(".modal");
const startBtn = document.querySelector(".startBtn");
const closeModal = document.querySelector(".closeModal");

startBtn.addEventListener("click", function () {
  modal.classList.remove("hidden");
  startBtn.classList.add("hidden");
});

//event listeners for quiz options
const warm = document.querySelector(".selectWarm");
const cool = document.querySelector(".selectCool");
const luxury = document.querySelector(".selectLuxury");
const thrifty = document.querySelector(".selectThrifty");
const yesHotel = document.querySelector(".selectYes");
const noHotel = document.querySelector(".selectNo");

//User will see first question and select 1 out of 2 answers
// After user selects answer they will continue to answer all questions
warm.addEventListener("click", (e) => {
  //console.log("warm selected")
  warm.style.backgroundColor = "lightblue";
  cool.style.backgroundColor = "#F7E4D6";
});

cool.addEventListener("click", (e) => {
  //console.log("cool selected")
  cool.style.backgroundColor = "lightblue";
  warm.style.backgroundColor = "#F7E4D6";
});

luxury.addEventListener("click", (e) => {
  //console.log("luxury selected")
  luxury.style.backgroundColor = "lightblue";
  thrifty.style.backgroundColor = "#F7E4D6";
});

thrifty.addEventListener("click", (e) => {
  //console.log("thrifty selected")
  thrifty.style.backgroundColor = "lightblue";
  luxury.style.backgroundColor = "#F7E4D6";
});

yesHotel.addEventListener("click", (e) => {
  //console.log("hotel selected")
  yesHotel.style.backgroundColor = "lightblue";
  noHotel.style.backgroundColor = "#F7E4D6";
});

noHotel.addEventListener("click", (e) => {
  //console.log("no hotel selected")
  noHotel.style.backgroundColor = "lightblue";
  yesHotel.style.backgroundColor = "#F7E4D6";
});

// User will be displayed with a travel destination based on their choices
const honolulu = document.querySelector(".honolulu");
const florida = document.querySelector(".florida");
const newZealand = document.querySelector(".newZealand");
const colorado = document.querySelector(".colorado");


warm &&
  luxury.addEventListener("click", function () {
    console.log("honolulu");
    florida.classList.add("hidden");
    honolulu.classList.remove("hidden");
    newZealand.classList.add("hidden");
    colorado.classList.add("hidden");
    randomApi()
  });

warm &&
  thrifty.addEventListener("click", function () {
    console.log("florida");
    florida.classList.remove("hidden");
    honolulu.classList.add("hidden");
    newZealand.classList.add("hidden");
    colorado.classList.add("hidden");
    randomApi()
  });

cool &&
  luxury.addEventListener("click", function () {
    console.log("New Zealand");
    florida.classList.add("hidden");
    honolulu.classList.add("hidden");
    newZealand.classList.remove("hidden");
    colorado.classList.add("hidden");
    randomApi()
  });

cool &&
  thrifty.addEventListener("click", function () {
    console.log("Colorado");
    florida.classList.add("hidden");
    honolulu.classList.add("hidden");
    newZealand.classList.add("hidden");
    colorado.classList.remove("hidden");
    randomApi()
  });

  //hotel
 const newZealandHotelApi = document.getElementById('newZealandHotel')
 const coloradoHotelApi = document.getElementById('coloradoHotel')
 const floridaHotelApi = document.getElementById('floridaHotel')
 const honoluluHotelApi = document.getElementById('honoluluHotel')
 
 warm && luxury.addEventListener("click", function() {
   florida.classList.add('hidden')
   honolulu.classList.remove('hidden')
   newZealand.classList.add('hidden')
   colorado.classList.add('hidden')
   newZealandHotelApi.classList.add('hidden')
  coloradoHotelApi.classList.add('hidden')

   randomApi()
 })

 warm && thrifty.addEventListener("click", function() {
  florida.classList.remove('hidden')
  honolulu.classList.add('hidden')
  newZealand.classList.add('hidden')
  colorado.classList.add('hidden')
  newZealandHotelApi.classList.add('hidden')
  coloradoHotelApi.classList.add('hidden')
  randomApi()
})
 cool && luxury.addEventListener("click", function() {
   florida.classList.add('hidden')
   honolulu.classList.add('hidden')
   newZealand.classList.remove('hidden')
   colorado.classList.add('hidden')
   newZealandHotelApi.classList.remove('hidden')
   coloradoHotelApi.classList.add('hidden')
   randomApi()
 })


 cool && thrifty.addEventListener("click", function() {
   florida.classList.add('hidden')
   honolulu.classList.add('hidden')
   newZealand.classList.add('hidden')
   colorado.classList.remove('hidden')
   coloradoHotelApi.classList.remove('hidden')
   newZealandHotelApi.classList.add('hidden')
   randomApi()
 })


//Colorado hotel api response
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'd1e9c4d63amshea5bc8876b95c99p14cd23jsnccae2b29f053',
    'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
   
  }
};


let coloradoResponse = fetch('https://hotels4.p.rapidapi.com/locations/v3/search?q=denver&locale=en_US&langid=1033&siteid=300000001', options)
.then(coloradoResponse => coloradoResponse.json())
.then(coloradoResponse => {
  console.log(coloradoResponse),
//.then(response => console.log(response)
  coloradoHotelApi.innerHTML = `<p>${coloradoResponse.q}</p>`
  coloradoHotelApi.innerHTML = `<p>${coloradoResponse.sr[4].hotelAddress.street + ". " + coloradoResponse.sr[4].hotelAddress.city + ", "+ coloradoResponse.sr[4].hotelAddress.province}</p>`
})

//add js here with query selector or get query by id to post it to the hotel tile
.catch(err => console.error(err))

let newZealandResponse = fetch('https://hotels4.p.rapidapi.com/locations/v3/search?q=queenstown&locale=en_US&langid=1033&siteid=300000001', options)
.then(newZealandResponse => newZealandResponse.json())
.then(newZealandResponse => {
  console.log(newZealandResponse),
  newZealandHotelApi.innerHTML = `<p>${newZealandResponse.q}</p>`
   newZealandHotelApi.innerHTML = `<p>${newZealandResponse.sr[8].hotelAddress.street + ". " + newZealandResponse.sr[8].hotelAddress.city}</p>`


})

//add js here with query selector or get query by id to post it to the hotel tile
.catch(err => console.error(err))


//florida hotel response

let floridaResponse = fetch('https://hotels4.p.rapidapi.com/locations/v3/search?q=miami&locale=en_US&langid=1033&siteid=300000001', options)
.then(floridaResponse => floridaResponse.json())
.then(floridaResponse => {
  console.log(floridaResponse),
  floridaHotelApi.innerHTML = `<p>${floridaResponse.q}</p>`
   floridaHotelApi.innerHTML = `<p>${floridaResponse.sr[3].hotelAddress.street + ". " + floridaResponse.sr[3].hotelAddress.city + ", " + floridaResponse.sr[3].hotelAddress.province}</p>`


})

//add js here with query selector or get query by id to post it to the hotel tile
.catch(err => console.error(err))



//honolulu hotel api response
let honoluluResponse = fetch('https://hotels4.p.rapidapi.com/locations/v3/search?q=honolulu&locale=en_US&langid=1033&siteid=300000001', options)
.then(honoluluResponse => honoluluResponse.json())
.then(honoluluResponse => {
  console.log(honoluluResponse),
  honoluluHotelApi.innerHTML = `<p>${honoluluResponse.q}</p>`
   honoluluHotelApi.innerHTML = `<p>${honoluluResponse.sr[7].hotelAddress.street + ". " + honoluluResponse.sr[7].hotelAddress.city}</p>`


})

//add js here with query selector or get query by id to post it to the hotel tile
.catch(err => console.error(err))


// find clients things to do in location with bored api
// add api to java script
// attach api to browser
// retrieve data from api
// have "things to do" appear on browser

function randomApi(){

  const bored_url = "https://www.boredapi.com/api/activity";
  const thingsToDo = document.getElementById("coloradoThings");

  fetch(bored_url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    thingsToDo.classList.remove("hidden")
    thingsToDo.innerHTML = data.activity
  });

}

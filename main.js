//npm install node-fetch --save
const fetch = require("node-fetch")


// NEED TO REQUEST TEMP ACCESS TO CORS-ANYWHERE TO USE EACH DAY! 
//fetch api data for cocktail- user presses button and cocktail appears underneath
//function that fetches a random cocktail

//cors-anywhere.herokuapp.com/


function fetchDrinks(){
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/random.php`).then(response => response.json()) // error occuring here, but not sure how to fix or validate?
  .then(data => {
  displayCocktail(data)})
}


function displayCocktail(data) {

  const cocktail = data.drinks[0];
  const cocktailDiv = document.getElementById("cocktail");    
  

  // cocktail name
  let cocktailName = cocktail.strDrink;
  let heading = document.createElement("h3");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);

}
// ADD IN API AND UNIT TEST- ADD TO DOM LATER AFTER TESTING!

function fetchMargarita() { 
  fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
    .then(response => response.json())
    .then(data => {
      console.log(data.marg)
    })
  }

// JOKE OF THE DAY CODE:

//create the fetch call to the api address
//on the html page the end-user is able to generate random joke
//user can click on the button to generate the joke

let getButton = document.getElementById("jokeBtn");

getButton.addEventListener('click', function(){

  //adding the API url for joke generator
  let fetchJoke = fetch("https://api.jokes.one/jod");
  
  let jsonJokeResp = fetchJoke.then(function(response){
    console.log("Processing the results", response);
    return response.json();
    
  })
  jsonJokeResp.then (function(json){
    console.log("json =", json)
    processJoke(json.contents.jokes[0].joke.text);
  })
 })
  
 let processJoke =function(joke) {
    // newContent and extracted .json result
    const newJoke = document.createTextNode(joke);
    // getting the element from html file 
    const currentDiv = document.getElementById("jokeText")
    // add text node joke to child element 
    currentDiv.appendChild(newJoke);
    
  }


//'use strict'

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
    const newContent = document.createTextNode(joke);
    // getting the element from html file 
    const currentDiv = document.getElementById("jokeText")
    // add text node joke to child element 
    currentDiv.appendChild(newContent);
    
  }

// COCKTAIL INPUT FORM API CODE:

  //getting button element from dom and adding event listener to it
document.getElementById("button").addEventListener("click", function(){
  console.log("the button was clicked");

  //getting input search term for ingredient by user
let input = document.getElementById("input");
let searchTerm = input.value;
console.log("user input = ", searchTerm);
fetchSearch(searchTerm);
})

// NEED TO REQUEST TEMP ACCESS TO CORS-ANYWHERE TO USE EACH DAY?! 
//fetch api data for cocktail based on user input ingredient
function fetchSearch (searchTerm) {
  fetch(`https://cors-anywhere.herokuapp.com/www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchTerm}`)
  .then(function(response){
    return response.json()
  }) .then(function(json){
    console.log("search results:", json); //console.log to make sure getting array/objects
  })
}

let processInput =function(drink) {
  // newContent and extracted .json result
  const newContent = document.createTextNode(drink);
  // getting the element from html file 
  const currentDiv = document.getElementById("drinks")
  // add text node joke to child element 
  currentDiv.appendChild(newContent);
  
}
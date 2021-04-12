//'use strict'

// JOKE OF THE DAY CODE:

//create the fetch call to the api address
//on the html page the end-user is able to generate random joke
//user can click on the button to generate the joke


// let fetchDrink = fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php`)

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


  // FIX BUGS WHEN GET A CHANCE
// COCKTAIL INPUT FORM API CODE:

  //getting button element from dom and adding event listener to it
//document.getElementById("button").addEventListener("click", function(){
//   console.log("the button was clicked");

//   //getting input search term for ingredient by user
// // let input = document.getElementById("input");
// let searchTerm = input.value;
// console.log("user input = ", searchTerm);
// fetchSearch(searchTerm);
// })

// NEED TO REQUEST TEMP ACCESS TO CORS-ANYWHERE TO USE EACH DAY! 
//fetch api data for cocktail- user presses button and cocktail appears underneath
//function that fetches a random cocktail

//cors-anywhere.herokuapp.com/






// // Display drinks based on ingredient 
// function displayDrinks(x) {
//   console.log(x)
//   x.forEach(drink => {
//     if(drink.strDrink === input.value) {
//       let ul = document.getElementById("drinkListUl")
//       let string = "strIngredient"
//       for(let i = 1; drink[string + i] != null; i++) {
//         let li = document.createElement("li")
//         li.innerText = `${drink[string + i]}`
//         ul.appendChild(li)
//       }
//     }
//   })
//   }



// // function arrToUl(div, drinksList) {
// //   console.log(drinksList);
// //   var ul = document.getElementById('drinksListUl');
// //   div.appendChild(ul); // append the created ul to the root
// //             //RETURNING UNDEFINED IN DOM, BUT OKAY AS ARRAY IN CONSOLE?!?!?!?!
// //     li = document.createElement('li'); // create a new list item
// //     // let s = drinkList.strDrink;
// //     // console.log(s);
// //     li.appendChild(document.createTextNode(drinksList.strDrink)); // append the text to the li
// //     ul.appendChild(li); // append the list item to the ul
// //   };
// // // }
// //  arrToUl(div, drinksList);
// // // })
// // })
// //}






// // function render(results) {
// //   const root = document.querySelector("#root");
// //   const list = results.map(itemToLi).join("");

// //   root.innerHTML = `<ul>
// //     ${list}
// //   </ul>`
// // }

// // function itemToLi(item) {
// //   return `<li>${item.name}</li>`;
// // }



// // let processInput =function(drink) {
// //   // newContent and extracted .json result
// //   const newDrinks = document.createElement('li');
// //   // getting the element from html file 
// //   const currentDiv = document.getElementById("drinks")
// //   // add text node cocktail to child element 
// //   currentDiv.appendChild(newDrinks); // append the list items to the ul
  
 

// 5 unit tests needed:

const fetch = require("node-fetch")
var assert = require('assert');

describe('Fetch Cocktail & Joke APIs', () => {
  it('should fetch a random cocktail', async() => {
    let fetchDrinks;
    await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(data => {
    displayCocktail(data)})     
    })
    assert.equal(drink)
  })

  it('should fetch the assigned joke of the day', async() => {
    let fetchJoke;
    await fetch("https://api.jokes.one/jod");
    let jsonJokeResp = fetchJoke.then(function(response){
      return response.json();
    })
  
  it('should return a joke of the day from json data', async() => {
      let fetchJoke;
      jsonJokeResp.then (function(json){
      console.log("json =", json)
      processJoke(json.contents.jokes[0].joke.text);
  })
  




  //unit test example from Isaiah to use as template:
  // describe('Get star war movies', () => {
  //     it('should get 7', async () => {
  //         await fetch('http://swapi.co/api/films/')
  //             .then((res) => {
  //                 return res.json()
  //             })
  //             .then((res) => {
  //                 console.log(res);
  //                 assert.equal(res.count, 7)
  //             })
  //     })
   }) 
  })

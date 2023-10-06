// data is the name of array you can call it as you want
import data from './data.json';
import CardFood from './card';
import { useState } from 'react';
import './style.css';
import { useEffect } from 'react';

function Main() {

  let [items, setMeals] = useState([]);

  // fetch api data
  // fetch take time so we use await and put async for function & fetch take to parameters url and options 
  // the data returns from API should be in a fuction cause it returns promise
  // we need to use useState cause the data come from API take a time so we need an inital state 
  async function getData() {

    let url = "https://www.themealdb.com/api/json/v1/1/search.php?f=m"
    let response = await fetch(url);
    let result = await response.json();

    setMeals(result.meals);

  }
  //  useEffect build-in function we need just import to use it 
  // it take two parameterd the first function and the second is array 
  // the function will performd based on array so i can let function change based on spesific variable
  useEffect(function () {
    getData()
  }, [])

  // search bar functionality
  async function handleSubmit(event) {
    event.preventDefault();
    let searchedValue = event.target.search.value

    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + searchedValue);
    let result = await response.json();

    setMeals(result.meals)
    let filteredMeals = result.meals.filter(function (item) { return item.strMeal.toLowerCase().includes(searchedValue.toLowerCase()) })
    setMeals(filteredMeals);


  }

  return (
    <>
      {/* search bar */}
      <form id="search-bar" onSubmit={handleSubmit}>
        <input type="text" name="search" placeholder='Search'></input>
        <button id="search-btn" type="submit">Search</button>
      </form>

      {/* card to show the recipes in card */}
      <div id="card-style">
        {/* map = store data in a new array and iterate on array so meal here is an array*/}
        {
          items && items.length !== 0 ? items.map(function (item) {
            return (
              <>
                <CardFood key={item.idMeal} image={item.strMealThumb} title={item.strMeal} description={item.strInstructions} category={item.strCategory} FavoriteView={true}/>
              </>
            )
          }
          ) : <h3>No search results</h3>
        }
      </div>

    </>
  );
}

export default Main;
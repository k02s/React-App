import CardFood from './card';
import data from './data.json';
import { useEffect, useState } from 'react';
import './style.css';

function Recipes() {

    let [items, setItems] = useState([]);
    let [categories, setCategories] = useState([]);
    let [loading, setLoading] = useState(true);

    // render meals in this page by first letter which is c 
    async function getMeals() {

        let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=c`);
        let result = await response.json();
        setItems(result.meals);
        setLoading(false)
    }

    //  render the options of select from api
    async function fetchCategories() {
        let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        let result = await response.json();
        setCategories(result.categories);
    }

    //  change category based on api 
    async function fetchMealsByCategory(category) {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=` + category);
        const result = await response.json();
        setItems(result.meals);
    }



    useEffect(function () {
        fetchCategories();
        fetchMealsByCategory();
        getMeals('all');
    }, [])

    async function handleChange(event) {
        const changedValue = event.target.value;
        if (changedValue === "all") {
            await getMeals('all');
        } else {
            await fetchMealsByCategory(changedValue);
        }
    };

    return (
        <>
            {/* drop down menu */}
            <select id="select-category" onChange={handleChange} >
                <option value="all">All</option>
                {/* show options */}
                {categories.map((category) => (
                    <option key={category.strCategory} value={category.strCategory}> {category.strCategory} </option>
                ))}
            </select>


            {/* show cards */}
            <div id="card-style">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    items && items.length !== 0 ? (items.map((item) => (

                        <>
                            <CardFood key={item.idMeal} image={item.strMealThumb} title={item.strMeal} description={item.strInstructions} FavoriteView={true}
                            />
                        </>
                    ))
                    ) : (
                        <h3>No search results</h3>
                    )
                )}
            </div>

        </>
    );
}

export default Recipes;
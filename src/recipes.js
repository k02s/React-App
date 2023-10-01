import CardFood from './card';
import data from './data.json';
import { useState } from 'react';
import './style.css';

function Recipes() {
    let [selectedCategory, setSelectedCategory] = useState('All');

    function chageCategory(event){
        setSelectedCategory(event.target.value);
    }

    let filteredRecipes = data;
    if (selectedCategory !== 'All') {
        filteredRecipes = data.filter(function (item) {
            return item.category === selectedCategory;
        });
    }
    
    return (
        <>
            {/* drop down button */}
            <select id="select-category" onChange={chageCategory} value={selectedCategory}>
                <option value="All">All</option>
                <option value="Main Course">Main Course</option>
                <option value="Desserts">Dessert</option>
                <option value="Salads">Salads</option>
                <option value="Appetizers">Appetizers</option>
            </select>
        

            {/* show cards */}
            <div id="card-style">
                {filteredRecipes.map(function (item) {
                    return (
                        <CardFood image={item.image_url} title={item.title} description={item.description} />
                    )
                }) // for function
                }
            </div>

        </>
    );
}

export default Recipes;
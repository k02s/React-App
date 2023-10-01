// data is the name of array you can call it as you want
import data from './data.json';
import CardFood from './card';
import { useState } from 'react';
import './style.css';

function Main() {

  let [product, setProduct] = useState(data)

  function handleSearch(event){
    event.preventDefault()
    let searchedValue = event.target.search.value 
    let fileredProducts = data.filter(function(item){ return item.title.toLowerCase().includes(searchedValue.toLowerCase()) })
    setProduct(fileredProducts)
  }

  return ( 
    <>
    <form onSubmit={handleSearch} id="search-bar">
        <input type="text" name="search" placeholder='Search'></input>
        <button id="search-btn" type="submit">Search</button>
    </form>
    <div id = "card-style">
    {/* map = store data in a new array */}
    {product.length === 0 ? (
          <p style = {{marginLeft: "550px"}}> No search results found.</p>
        ) :(
    product.map(function(item){
        
        return (
            <CardFood  image = {item.image_url} title = {item.title} description = {item.description}/>
        )
    
    }) // for function 
        )
    }
        
    </div>
    </>
  );
}

export default Main;
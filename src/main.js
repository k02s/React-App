// data is the name of array you can call it as you want
import data from './data.json';
import CardFood from './card';
import { useState } from 'react';

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
    <form onSubmit={handleSearch} style= {{textAlign: "center" , marginTop: "20px" }}>
        <input type="text" name="search" placeholder='Search' style= {{width: "400px" }}></input>
        <button type="submit" style= {{borderRadius: "4px" , border: "none" , padding: "3px" , backgroundColor: "#0d6efd" , color: "white" , marginLeft: "3px"}}>Search</button>
    </form>
    <div style = {{"display":"grid" , "gridTemplateColumns": "repeat(auto-fill, minmax(280px, 1fr))" , "justifyContent":"space-between" , "gap":"3%" , "marginTop":"50px" ,"marginLeft":"20px" ,"marginRight":"20px"}}>
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
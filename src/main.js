// data is the name of array you can call it as you want
import data from './data.json';
import CardFood from './card';

function Main() {
  return ( 
    <>
    <div style = {{"display":"flex" , "flexWrap":"Warp" , "justifyContent":"space-between" , "gap":"25px" , "marginTop":"50px" ,"marginLeft":"20px" ,"marginRight":"20px"}}>
    {/* map = store data in a new array */}
    {data.map(function(item){
        
        return (
            <CardFood  image = {item.image_url} title = {item.title}/>
        )
    }) // for function 
    }
    </div>
    </>
  );
}

export default Main;
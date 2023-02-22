import { useState, useEffect } from "react";
import {restaurantList} from "../../restaurant-list.ts"
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";

// var Body = ()=>{
//     console.log(restaurantList[0].data)
//     const {name,cuisines,cloudinaryImageId,lastMileTravelString,locality} = restaurantList[0].data;
//     return (
//         <div className="restaurant-list">
//             <Restaurant name={name}
//             cuisines = {cuisines}
//             cloudinaryImageId= {cloudinaryImageId}
//             lastMileTravelString={lastMileTravelString}
//             locality= {locality}/>

//             {/*  use spread  operator instead*/ }
//             <Restaurant {...restaurantList[1].data} />
//             <Restaurant {...restaurantList[2].data} />
//             <Restaurant {...restaurantList[3].data} />
//             <Restaurant {...restaurantList[4].data} />
//             <Restaurant {...restaurantList[5].data} />
//         </div>
//     )
// }

function filterData(searchText,allRestaurants){
    return allRestaurants.filter((restaurant)=> restaurant?.data?.name?.toLowerCase().includes(searchText?.toLowerCase()));
}

var Body = ()=>{
    const [searchText, setSearchText] = useState("KFC")
    //to create state variables
    const [searchClicked, setSeachClicked] = useState();
    const [allRestaurants, setAllRestaurants] = useState();
    const [filteredRestaurants, setFilteredRestaurants] = useState();

    useEffect(()=>{
        //API call
        getRestaurants();
    },[])

    async function getRestaurants() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        // Optional Chaining
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //Early return
    if(!allRestaurants) return (<Shimmer></Shimmer>) ;

    return (
        <>
        <div className="search-container">
            <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange = {(e)=> {
                console.log(e.target.value )
                setSearchText(e.target.value);
            }}/>
            <button className="search-btn" onClick={()=> {
                 //filter dtata and update the restaurant list
                 //cant update directly so make a restaurant varaible in ract
                const data= filterData(searchText, allRestaurants);
                setFilteredRestaurants(data);
            }}>Search</button>
        </div>
        <div className="restaurant-list">
        {(filteredRestaurants?.length === 0) ? (<h2>No Restaurant Found !!</h2>) :
            (   filteredRestaurants.map((restaurant)=> {
                    //console.log(restaurant, restaurant.data.id);
                    return (
                        <Restaurant  {...restaurant.data} key={restaurant.data.id}/>
                    )
                })
            )
        }
        </div>
        </>
    )
}

export default Body;
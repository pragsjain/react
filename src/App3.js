//chapter 4
//destructuring props- 2 ways
//READ:  https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0

import ReactDOM, { createRoot } from "react-dom/client";
import {restaurantList} from "./restaurant-list.js.ts"

const Logo = ()=>{
    return (
        <div className="logo">
        <img alt="Food Villa"
        src="https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0"
        />
        </div>
    )
}

const Header =() =>{
    return(
        <div className="header">
            <Logo/>
            <ul key="rightNav" className="rightNav">
                <li key="cart">Cart</li>
                <li key="home">Home</li>
                <li key="link">Link</li>
            </ul>
        </div>
    )

}

var Body = ()=>{
    console.log('RestaurantList->',restaurantList);
    return (
        <div className="restaurant-list">
            <Restaurant restaurant={restaurantList[0]} />
            <Restaurant restaurant={restaurantList[1]} />
            <Restaurant restaurant={restaurantList[2]} />
            <Restaurant restaurant={restaurantList[3]} />
            <Restaurant restaurant={restaurantList[4]} />
            <Restaurant restaurant={restaurantList[5]} />
        </div>
    )
}

//way 1-> remove props
// var Restaurant = ({restaurant})=>{
//     //console.log(props);
//     //name-> props.restaurant.data?.name
//     return (
//             <div className="card">
//                 <img
//                     src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//                     restaurant.data?.cloudinaryImageId}/>
//                 <h2>{restaurant.data?.name}</h2>
//                 <h3>{restaurant.data?.locality}</h3>
//                 <h3>{restaurant.data?.cuisines.join(", ")}</h3>
//                 <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
//             </div>
//     )
// }

//way 2
//remove restaurant.data
const Restaurant = ({restaurant})=>{
    //console.log(props);
    //name-> props.restaurant.data?.name
    const {name,cuisines,cloudinaryImageId,lastMileTravelString,locality} = restaurant.data;
    return (
            <div className="card">
                <img
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    cloudinaryImageId}/>
                <h2>{name}</h2>
                <h3>{locality}</h3>
                <h3>{cuisines.join(", ")}</h3>
                <h4>{lastMileTravelString} minutes</h4>
            </div>
    )
}
const Footer = ()=>{
    return (
        <div className="footer">
        <h5 key="link1" id="link1">link1</h5>
        <h5 key="link2" id="link2">link2</h5>
        </div>

    )
}

const AppLayout =() =>{
    return(
        <>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
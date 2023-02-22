//chapter 4
//create swigy like app- taking swigy data into a js file
//import hardcoded data restaurantList from another js file
//making app layout -header,body , footer
//passing props restaurant to restaurant function from parent

import ReactDOM, { createRoot } from "react-dom/client";
import {restaurantList} from "./restaurant-list.js"

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

const Body = ()=>{
    //console.log('RestaurantList->',restaurantList);
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

const Restaurant = (props)=>{
    //console.log(props);
    //name-> props.restaurant.data?.name
    return (
            <div className="card">
                <img
                    src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
                    props.restaurant.data?.cloudinaryImageId}/>
                <h2>{props.restaurant.data?.name}</h2>
                <h3>{props.restaurant.data?.locality}</h3>
                <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
                <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
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
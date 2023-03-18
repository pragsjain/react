//chapter 4
//destructing by passing props seperately from parent -name,cuisines,cloudinaryImageId,lastMileTravelString,locality
//see how data is paased using spread operator for retaurnats 2,3,4,5,6
//Looping using map in functional programming-in body.js
//unique keys
//READ:  https://medium.com/@lcriswell/destructuring-props-in-react-b1c295005ce0
//chanpter 5
//structuring app
//making search work

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
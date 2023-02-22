//chapter 3
//use JSX instead of react.createElement =>functional component
//use ReactFragment or <>
//how to use one functional component inside other
import ReactDOM, { createRoot } from "react-dom/client";

const Title = ()=>{
    return (
        <h1 key="title" id="title">Title</h1>
    )
}

const HeaderComponent =() =>{
    return(
        <>
            <Title/>
            <ul key="rightNav">
                <li key="cart">Cart</li>
                <li key="home">Home</li>
                <li key="link">Link</li>
            </ul>
        </>
    )

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)
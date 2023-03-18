import LogoImg from "../assets/images/foodgram-logo1.jpg";

export const Logo = ()=>{
    return (
        <div className="logo">
        <img alt="Food Gram logo"
        src={LogoImg}
        />
        </div>
    )
}


const Header =() =>{
    return(
        <div className="header">
            <Logo/>
            <h1>Food Gram</h1>
            <ul key="rightNav" className="rightNav">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )

}

export default Header;


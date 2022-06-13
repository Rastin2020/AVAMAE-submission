import "./Navbar.css";
import logo from "../images/Logo.svg";

function Navbar() {
    return (
        <nav>
            <div className="grid-container general-padding">
                <div className="mobile-centered">
                    <a href="/"><img src={logo} className="mobile-show" width="300px" height="auto"/></a>
                </div>
                <div className="inline-flex mobile-hidden">
                    <a href="/">HOME</a>
                    <a href="/about-us">ABOUT US</a>
                    <a href="/contact-us">CONTACT US</a>
                    <button className="login-button"><b>Log in</b></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
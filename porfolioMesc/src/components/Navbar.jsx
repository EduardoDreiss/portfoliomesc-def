import { useEffect, useState } from "react";
import "./styleComponents/Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar({link1, link2, text1, text2}) {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    return (

        <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>

            <div className="navbar-brand">
                <a href="/">
                    <img src="/images/logoMESC.svg" alt="logo mesc" />
                </a>
            </div>

            <div className="navbar-links-container">

                <ul className="navbar-links">

                    <li>
                        <Link to={link1}>
                            {text1}
                        </Link>
                        <Link to={link2}>
                            {text2}
                        </Link>
                    </li>

                </ul>

            </div>

        </nav>

    );
}
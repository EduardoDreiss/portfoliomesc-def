import { useEffect, useState } from "react";
import "./styleComponents/Navbar.css";

export default function Navbar() {

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
                <a>
                    Mesc
                </a>
            </div>

            <div className="navbar-links-container">

                <ul className="navbar-links">

                    <li>
                        <a href="#trabalhos">
                            Meus trabalhos
                        </a>
                    </li>

                </ul>

            </div>

        </nav>

    );
}
import { useEffect, useState } from "react";
import "./styleComponents/NavbarStdrt.css";
import { Link } from "react-router-dom";

export default function NavbarStdrt({link1, link2, text1, text2, link3, text3}) {

    return (

        <nav className="navbar">

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
                        <Link to={link3}>
                            {text3}
                        </Link>
                    </li>

                </ul>

            </div>

        </nav>

    );
}
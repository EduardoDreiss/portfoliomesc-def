import { Link } from "react-router-dom";
import "./styleComponents/Button.css";

export default function Button({text, link, className = ""}){
    return(
        <Link to={link} className="Botao">{text}</Link>
    )
}
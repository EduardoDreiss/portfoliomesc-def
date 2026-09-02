import "./styleComponents/Button.css";

export default function Button({text}, link ="#", classname = ""){
    return(
        <a href="{link}" className="Botao">{text}</a>
    )
}
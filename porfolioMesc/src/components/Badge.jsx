import "./styleComponents/Badge.css";

export default function Badge({text}, classname = ""){
    return(
        <div className="badgeArea">
            <p>{text}</p>
        </div>
    )
}
import "./styleComponents/Badge.css";

export default function Badge({text}, classname = ""){
    return(
        <div className="badgeArea">
            <p className ="badgeText">{text}</p>
        </div>
    )
}
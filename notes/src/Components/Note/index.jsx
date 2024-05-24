import React from "react"
import "./styles.css";

const Note = ({title, description, ...props}) => {
    return (
        <div className="cardContainer">
            <span className="cardTitle">{title}</span>
            <p className="cardDescription">{description}</p>
        </div>
    )
}

export default Note;
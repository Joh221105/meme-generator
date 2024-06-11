import React from "react";
import "./Header.css"

function Header(props){

    let styleParam = {
        "backgroundColor": props.darkMode ? "#F5EEE6": "#1C1C1B",
        "color": props.darkMode ? "#CE4A7E" :"#CE4A7E"
    }

    return(
        <div style = {styleParam} id = "heading-container">
            <h1 id = "main-heading">Meme Generator Project</h1>
        </div>
    )
}

export default Header;
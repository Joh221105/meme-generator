import React from "react";
import "./Footer.css"

function Footer(props){

    let styleParams = {
        "backgroundColor": props.darkMode ? "#FFF8E3": "black",
        "color": props.darkMode ? "black" : "white"
    }
    return(
        <div style = {styleParams}id = "footer-container">
            <p>John's Project 2024</p>
        </div>
    )
}

export default Footer;
import './App.css'
import Header from "./components/Header/Header.jsx"
import Meme from "./components/Meme/Meme.jsx"
import Footer from "./components/Footer/Footer.jsx"
import React, {useState} from "react"


function App(){

    const[isDarkMode, setIsDarkMode] = useState(true)

    function toggleDarkMode(){
        console.log(isDarkMode)
        setIsDarkMode(prevMode => !prevMode)
}
    return (
        <div id = "main-container">
            <Header darkMode = {isDarkMode} />
            <Meme darkMode = {isDarkMode} />
            <Footer darkMode = {isDarkMode}/>
            <button id = "toggle-theme" onClick ={toggleDarkMode}>{isDarkMode ? "Toggle Dark Mode" :"Toggle Light Mode"}</button>
        </div>
    )
}

export default App
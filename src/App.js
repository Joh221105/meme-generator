import './App.css'
import Header from "./components/Header/Header.jsx"
import Meme from "./components/Meme/Meme.jsx"
import Footer from "./components/Footer/Footer.jsx"
import React from "react"

//Create a state that holds isDarkMode, pass the bool to each component to render


function App(){

    return (
        <div id = "main-container">
            <Header />
            <Meme />
            <Footer />
        </div>
    )
}

export default App
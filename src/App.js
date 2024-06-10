import './App.css'
import Header from "./components/Header"
import Meme from "./components/Meme"
import Footer from "./components/Footer"
import React, {useState} from "react"



function App(){
    
    const [state,setState] = useState(0)


    return (
        <div>
            <Header />
            <Meme />
            <Footer />
        </div>
    )
}

export default App
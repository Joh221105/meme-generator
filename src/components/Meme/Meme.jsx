import React, {useState, useEffect} from "react";
import "./Meme.css";


function Meme(props){

    const [meme, setMeme] = useState({
        "topText": "",
        "bottomText": "",
        "memeURL": "https://i.imgflip.com/1bij.jpg"
    })
    
    const[allMemes, setAllMemes] = useState({})

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(data => setAllMemes(data))
    }, [])

    function getNewImage(){
        let memeList = allMemes.data.memes
        let randomNum = Math.floor(Math.random() * memeList.length)
        setMeme(prevMeme => {
            return ({
                ...prevMeme,
                "memeURL": memeList[randomNum].url
            
    })})
    }
    function topInputChange(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            "topText": event.target.value
        }))
    }

    function bottomInputChange(event){
        setMeme(prevMeme => ({
            ...prevMeme,
            "bottomText": event.target.value
        }))
    }

    let topButtonParams = {
        "backgroundColor": props.darkMode ? "#E6A4B4" : "#CE4A7E",
        "color": props.darkMode ? "black" : "white"
    }

    let downloadButtonParams = {
        "backgroundColor": props.darkMode ? "#F3D7CA" : "#FFC0CB",
        "color": props.darkMode ? "black" : "white" 
    }
    
    


    return(
        <div style = {{"backgroundColor": props.darkMode ? "#FFF8E3": "black"}} id="meme-container">
            <div id ="form" style = {{"color": props.darkMode ? "black" : "white"}}>
                <label>
                    Top Text: 
                    <input onChange={topInputChange} id="top-text" type = "text"></input>
                </label>
                <label>
                    Bottom Text:
                    <input onChange={bottomInputChange} type = "text"></input>
                </label>
                
                
            </div>
            <div id="top-text-container">{meme.topText}</div>
            <div id ="bottom-text-container">{meme.bottomText}</div>
            <img id = "meme-image" src = {meme.memeURL} alt ="meme"></img>
            <div id ="top-two-buttons">
                <button style = {topButtonParams} className = "button" onClick = {getNewImage}> GET A NEW MEME </button>
                <button style = {topButtonParams}className= "button"> UPLOAD IMAGE</button>
            </div>
    
            <button style = {downloadButtonParams}className = "button" id = "download-meme-button"> DOWNLOAD MEME</button>
            
        </div> 
    )
}

export default Meme;

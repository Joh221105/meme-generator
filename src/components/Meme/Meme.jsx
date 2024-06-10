import React, {useState, useEffect} from "react";
import "./Meme.css";


function Meme(){

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

    return(
        <div id="meme-container">
            <div id ="form">
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
                <button className = "button" onClick = {getNewImage}> GET A NEW MEME </button>
                <button className= "button"> UPLOAD IMAGE</button>
            </div>
    
            <button className = "button" id = "download-meme-button"> DOWNLOAD MEME</button>
            
        </div> 
    )
}

export default Meme;

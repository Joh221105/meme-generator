import React, {useState, useEffect} from "react";


function Meme(){

    const [meme, setMeme] = useState({
        "topText": "",
        "bottomText": "",
        "memeURL": "https://i.imgflip.com/1bij.jpg"
    })
    
    const [allMemes, setAllMemes] = useState({})

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

    return(
        <div className="memeContainer">
            <button onClick = {getNewImage}> GET A NEW MEME </button>
            <input type = "text" placeholder="Top Text"></input>
            <img src = {meme.memeURL} alt ="placeholder"></img>
            <input type = "text" placeholder="Bottom text"></input>
        </div> 
    )
}

export default Meme;

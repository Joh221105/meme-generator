import React, {useState, useEffect, useRef} from "react";
import "./Meme.css";


function Meme(props){

    const [meme, setMeme] = useState({
        "topText": "",
        "bottomText": "",
        "memeURL": "https://i.imgflip.com/1bij.jpg"
    })
    
    const[allMemes, setAllMemes] = useState({})
    const canvasRef = useRef(null);

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

    function downloadMeme() {
        const canvas = canvasRef.current;
    
        const context = canvas.getContext("2d");
        const image = new Image();
        image.crossOrigin = "anonymous";
        image.src = meme.memeURL;
    
        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
    
          context.drawImage(image, 0, 0);
    
          context.font = "35px Impact";
          context.fillStyle = "white";
          context.textAlign = "center";
          context.strokeStyle = "black";
          context.lineWidth = 1.5;
    
          context.fillText(meme.topText, canvas.width / 2, 40);
          context.strokeText(meme.topText, canvas.width / 2, 40);
    
          context.fillText(meme.bottomText, canvas.width / 2, canvas.height - 20);
          context.strokeText(meme.bottomText, canvas.width / 2, canvas.height - 20);
    
          const resultURL = canvas.toDataURL("image/png");
          const link = document.createElement("a");
          link.href = resultURL;
          link.download = "meme.png";
          link.click();
        };
      }

      function handleFileChange(event){
        let file = event.target.files[0];
        let reader = new FileReader();

        reader.onload = function(event){
            setMeme(prevMeme => ({
                ...prevMeme,
                "memeURL": event.target.result
            }))
            
        
        };
        reader.readAsDataURL(file);
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
                <label style = {topButtonParams} htmlFor="file-upload" className="custom-file-upload">
                    Upload Image
                </label>
                <input onChange = {handleFileChange} id="file-upload" type="file" />
            </div>
    
            <button onClick = {downloadMeme} style = {downloadButtonParams}className = "button" id = "download-meme-button"> DOWNLOAD MEME</button>
            <canvas ref={canvasRef} style={{display: "none"}}></canvas>
        </div> 
    )
}

export default Meme;

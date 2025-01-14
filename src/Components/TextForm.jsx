import React, { useState } from 'react'
const colors = ["red","blue","green","yellow","purple","orange","pink","brown","gray","black"];
import { Switch } from "@material-tailwind/react";
const Textform = () => {
    const [text,setText] = useState("");
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleToggle = () =>{
        let newText = text.split('').map(char => char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()).join('');
        setText(newText);
    }
    const Capitalise =() =>{
        let newText = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        setText(newText);
    }
    const handleOnChange = (event) =>{
        console.log("On change")
        setText(event.target.value);
        }
        const changeColor = () =>{
            let color = colors[Math.floor(Math.random() * colors.length)];  
            document.getElementById("name").style.color = color;
            document.getElementById("name").style.fontWeight = "bold";
            setText(text.style.color = color);
        }
        const [btntxt, setBtnTxt] = useState("Change to Dark Mode");
        const[style,setStyle]= useState({
                color: "black",
                //backgroundColor : "white"
            });
        const toggleStyle = () =>{
             if(style.color === "black" ){
                setStyle({
                    color:"white",
                    backgroundColor:"#2E2E2E",
                    border:"2px solid white"
                });
                setBtnTxt("Change to light Mode");
                document.querySelectorAll('label').forEach(label => {
                    label.style.color = "white";
                });
             }
             else{
                setStyle({
                    color:"black",
                });
                setBtnTxt("Change to Dark Mode")
                document.querySelectorAll('label').forEach(label => {
                    label.style.color = "#2E2E2E";
                });
             }
        }
    
  return (
    <>
    <div className="container flex flex-col items-center font-bold justify-center h-screen w-screen max-w-screen-2xl mx-auto rounded-2xl bg-gray-100" style={style}>
      <h1 className="text-4xl font-bold py-12 m-0">Text Changer</h1>
    
    <div className="mb-3" style={style} >
        {/* <h1 className='text-2xl font-bold'>Text Editor</h1> */}
        <textarea name="name" id="name" fontWeight="bold" onChange={handleOnChange} style={style} placeholder="Write here" rows="10" value={text} cols="100" className='border-2 border-black rounded-md p-2'></textarea>
    </div>
    <div className='flex justify-center' >
    <button className='btn btn-primary mx-3 border-2 border-black rounded-md p-2 my-2'  style={style} onClick={handleUpClick}>Convert to uppercase</button>
    <button className='btn btn-primary mx-3 border-2 border-black rounded-md p-2 my-2' style={style} onClick={handleLowClick}>Convert to Lowercase</button>
    <button className='btn btn-primary mx-3 border-2 border-black rounded-md p-2 my-2' style={style} onClick={handleToggle}>Toggle the Case</button>
    <button className='btn btn-primary mx-3 border-2 border-black rounded-md p-2 my-2' style={style} onClick={changeColor}>Change Color</button>
    <button className='btn btn-primary mx-3 border-2 border-black rounded-md p-2 my-2' style={style} onClick={Capitalise}>Correct Case</button>
    <Switch label={btntxt} style={style} onClick={toggleStyle} />    
    </div>
    <div className="values mb-3" style={{...style, border: "none"}}>
        <p>Your text has {text.split(" ").length} words and {text.length} characters</p>
    </div>
    <h1 className='text-2xl font-bold'>Preview</h1>
    <div className="preview mx-40  rounded-md p-2 my-2" style={{...style, border:"none"}}>
        <p>{text}</p>
        </div></div>
    
    </>
  );
}

export default Textform
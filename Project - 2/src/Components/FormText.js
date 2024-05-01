import React, {useState} from 'react'
import './footerText.css'

export default function FormText(props){
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLwClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleCopyTextClick = () => {
        navigator.clipboard.writeText(text);
      }
    const handleResClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
      }
    const handleFindReplaceClick = () => {
      const find=document.getElementById("findText").value;
      const replace=document.getElementById("replaceText").value;
        if(!find || !replace){
          alert('Please enter both "Find" and "Replace" values.');
          return;
        } 
        const regex = new RegExp(find, 'g');
        const replacedText = text.replace(regex, " " + replace + " ");
        setText(replacedText);
      }
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    return(
        <>
        <div className = "container">
            <div className="mb-3 my-4">
            <h3 className={`text-${props.mode==='light'?'success':'info'}`}>{props.textAreaTitle}</h3>
            <textarea className= {`form-control placeholder-glow text-${props.mode==='light'?'dark':'light'} bg-${props.mode==='light'?'light':'dark'}`} placeholder='Enter your text here!' value={text} onChange={handleOnChange} id="myTextBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary fw-semibold mt-3" onClick={handleUpClick}>Change to Uppercase</button>
            <button className="btn btn-primary fw-semibold mt-3 mx-3" onClick={handleLwClick}>Change to Lowercase</button>
            <button className="btn btn-primary fw-semibold mt-3" onClick={handleCopyTextClick}>Copy Text</button>
            <button className="btn btn-primary fw-semibold mt-3 mx-3" onClick={handleResClick}>Remove Extra Space</button>
        <div className="container border border-3 my-3">
          <h4 className = {`text-${props.mode==='light'?'dark':'light'}`} >{text.split(" ").length} words and {text.length} characters.</h4>
          <h4 className = {`text-${props.mode==='light'?'dark':'light'}`} >Characters without spaces {text.match(/\S/g)?.length || 0}</h4>
        </div>
        <div className="container my-3">
          <div className="input-group">
            <span className="input-group-text rounded text-dark fs-5"><b>Word to Find</b></span>
            <input type="text" aria-label="First name" className="form-control border-dark-subtle rounded mx-3 w-25"  id='findText'/>
            <span className="input-group-text rounded text-dark fs-5"><b>Word to Replace</b></span>
            <input type="text" aria-label="Last name" className="form-control border-dark-subtle rounded mx-3 w-25" id='replaceText'/>
          <button className="btn btn-primary rounded fw-semibold mx-3" onClick={handleFindReplaceClick}>Replace</button>
          </div>
        </div>
        </div>
        </>
    )
}
import React, {useState} from 'react'



export default function TextForm(props) {
  function handleUpCase(){
    console.log("Handle button clicked ")
    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLoCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  function handleOnChange(event){
    console.log('Handle On Change');
    setText(event.target.value);
  }
  const [text,setText] = useState('');
  return (
    <>
    <h1>{props.heading} </h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange} id="MyApp" rows="8"></textarea>
  </div>
  <button className="btn btn-primary mx-3 my-2" onClick={handleUpCase}>Convert to upperCase</button>
  <button className="btn btn-primary" onClick={handleLoCase}>Convert to lpperCase</button>
  <div className= "container my-3">
  <h2>Text Summary</h2>
  <p>{text.split(" ").length} Word and {text.length} character</p>
  <p>{0.008* text.split(" ").length} Minute</p>
  <h2>Preview</h2>
  <p>{text}</p>
  </div>
    </>
  )
}

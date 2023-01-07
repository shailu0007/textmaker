import React, { useState } from "react";

const Textform = (props) => {
  const [text, textSet] = useState("");
  const uppercase = () => {
    let newtext = text.toUpperCase();
    textSet(newtext);
    props.showMessage('Text successfully converted to uppercase','success')
  };
  const lowercase = () => {
    let newtext = text.toLowerCase();
    textSet(newtext);
    props.showMessage('Text successfully converted to lowercase','success')
  };
  const duplicate = () => {
    let newtext1 = text.repeat(2);
    textSet( newtext1);
    props.showMessage('Text successfully duplicated ','success')
  };
  
  const clear = () => {
    textSet('');
    props.showMessage('Text clear successfully ','success')
  };
  const textonchange = (event) => {
    textSet(event.target.value);
  };
  return (
    <>
      <div className="container my-3">
        <h1 className={`text-${props.mode === 'light'?'dark':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mytext"
            rows="8"
            value={text}
            onChange={textonchange}
            style={{backgroundColor:props.mode === 'light'?'white':'grey',
                     color:props.mode === 'light'?'black':'white'}}
          ></textarea>
        </div>
        <button disabled={text.length===0} type="submit" className={`btn btn-primary mx-2 my-1 text-${props.mode === 'light'?'dark':'light'}`} onClick={uppercase}>
          Convert to uppercase
        </button>
        <button disabled={text.length===0} type="submit" className={`btn btn-primary mx-2 my-1 text-${props.mode === 'light'?'dark':'light'}`} onClick={lowercase}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} type="submit" className={`btn btn-primary mx-2 my-1 text-${props.mode === 'light'?'dark':'light'}`} onClick={duplicate}>
          Duplicate
        </button>
        <button disabled={text.length===0} type="submit" className={`btn btn-primary mx-2 my-1 text-${props.mode === 'light'?'dark':'light'}`} onClick={clear}>
          Clear
        </button>
      </div>
      <div className="container">
        <h2 className={`text-${props.mode === 'light'?'dark':'light'}`}>Text Summary</h2>
        <p className={`text-${props.mode === 'light'?'dark':'light'}`}>{text.length} words <br/>
           {text.split(' ').filter((element)=>{ return element.length!==0}).length} character
        </p>
        <h3 className={`text-${props.mode === 'light'?'dark':'light'}`}>Preview</h3>
       <center> <p className={`text-${props.mode === 'light'?'dark':'light'}`} style={{'word-wrap':'break-word',height:'3em',}}>{text}</p></center>
      </div>
    </>
  );
}

export default Textform
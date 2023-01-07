import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showMessage =(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
    }

  const selectMode = ()=>{
     if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'grey'
      showMessage('Dark mode enabled','success')
     }
     else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showMessage('Light mode enabled','success')
     }

  }
  return (
   <Router>
   <Navbar title="TextWorld" mode={mode} selectMode={selectMode} />
   <Alert alert={alert}/>
   <Routes>
           <Route exact path="/textmaker" element={<Textform showMessage={showMessage} heading="Enter text to analyze below" mode={mode}/>}/>
          <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
        </Router>
  );
}

export default App;

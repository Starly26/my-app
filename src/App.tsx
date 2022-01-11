import React, { useState } from 'react';
import './App.css';
import Dashbord from './components/Dashbord';
import Popup from './components/Popup';


function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(true)
  const [userName, setUserName] = useState('')

  return (
    <>
    {
    isPopupVisible ?  
    <Popup setName={setUserName} name={userName} saveName={() => setIsPopupVisible(false)} /> 
    : <Dashbord userName ={userName}/>
    }
   
    </>
  );
}

export default App;

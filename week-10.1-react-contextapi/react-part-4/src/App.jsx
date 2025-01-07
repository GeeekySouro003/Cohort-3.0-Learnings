import { createContext, useContext, useState } from 'react';
import './App.css';

const BulbContext=createContext();
function App() {
  const[bulbOn,setbulbOn]=useState(false); //returns an array[] 
return (
  <div>
    <BulbContext.Provider value={{
      bulbOn:bulbOn,
      setbulbOn:setbulbOn
    }}>
    <LightBulb/>
    </BulbContext.Provider>
  
  </div>
)
}
//Rolling up the state to the lowest common  ancestor of the two children possivble
function LightBulb() {

  return <div>
    <BulbState/>
    <ToggleBulbState/>
  </div>
}

function BulbState({bulbOn}) {
  const {bulbOn}=useContext(BulbContext)
return <div>
{
  bulbOn?"Bulb on":"Bulb off"
}
</div>
}

function ToggleBulbState({bulbOn,setbulbOn}) {

  const {bulbOn,setbulbOn}=useContext(BulbContext);
  function toggle() {
    setbulbOn(!bulbOn);
  }
  return<div>
    <button onClick={toggle}>
      Toogle the button
    </button>
  </div>
}

export default App;
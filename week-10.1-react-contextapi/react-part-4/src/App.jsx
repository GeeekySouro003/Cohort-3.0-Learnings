import { useState } from 'react';
import './App.css';

function App() {
return (
  <div>
  <LightBulb/>
  </div>
)
}
//Rolling up the state to the least ancestor possivble
function LightBulb() {
  const[bulbOn,setbulbOn]=useState(false);
  return <div>
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState bulbOn={bulbOn} setbulbOn={setbulbOn}/>
  </div>
}

function BulbState({bulbOn}) {
  
return <div>
{
  bulbOn?"Bulb on":"Bulb off"
}
</div>
}

function ToggleBulbState({bulbOn,setbulbOn}) {

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
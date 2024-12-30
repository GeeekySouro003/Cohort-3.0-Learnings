import { useState } from 'react';
import './App.css';

function App() {
  const[bulbOn,setbulbOn]=useState(false); //returns an array[] 
return (
  <div>
  <LightBulb bulbOn={bulbOn} setbulbOn={setbulbOn}/>
  </div>
)
}
//Rolling up the state to the lowest common  ancestor of the two children possivble
function LightBulb({bulbOn,setbulbOn}) {

  return <div>
    <BulbState/>
    <ToggleBulbState/>
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
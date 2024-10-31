import { useState } from 'react';
import './App.css';

export default function App() {

const [count,setcount]=useState(0);  // using useState hooks
function onclickHandler() {

  setcount(count+1);
}
  return(
    <div>
      <h1>Counter App</h1>
      <button onClick={onclickHandler}>
        Counter {count}
        </button>
    </div>
  )
}

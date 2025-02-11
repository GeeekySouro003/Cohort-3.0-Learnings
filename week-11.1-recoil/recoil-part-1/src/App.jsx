import { useState } from 'react'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil'
import { counterAtom } from './store/atoms/counter'
function App() {

  return (
    <RecoilRoot>
    <Counter/>
    </RecoilRoot>
  )
}


function Counter() {
  //const[count,setCount]=useState(0);
  //Creating a atom for counter
  return <div>
    <CurrentCount  />
    <br/>
    <Increase />
    <br/>
    <Decrease/>
  </div>
}

function CurrentCount(){
  const count=useRecoilValue(counterAtom);
  console.log("count is working")
  return<div>
    {count}
  </div>
}
function Increase() {  //Subscribed to the setter
 
  const setCount=useSetRecoilState(counterAtom);
  function increase() {
    setCount(c=>c+1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
}

function Decrease() {
  const setCount=useSetRecoilState(counterAtom);

  function decrease() {
    setCount(c=>c-1);

  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
}

export default App

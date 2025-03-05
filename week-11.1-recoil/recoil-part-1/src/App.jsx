import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/Counter';
import { memo } from 'react';

function App() {

 

  return (
   //<RecoilRoot>
    <Counter/>
   //</RecoilRoot>
  )
}

function Counter() {
  const[count,setCount] =useState(0);
  useEffect(() =>{
    setInterval(() => {

      setCount(c=>c+1);
    },3000)
  },[])
  return <div>
   <CurrentCount/>
    <Increase />
    <Decrease />
  </div>
}

//memo is used when a component doesnt receive the props and doesnot render 

//const MemoizedCurrentCount =memo(CurrentCount);
  const CurrentCount=memo (function() { // suppose to render the count atom from recoil
  //const count=useRecoilValue(counterAtom); // this currentcount component has subscribed to the value of this atom
return <div>
 1
</div>
})

const Increase=memo(function() {
  const setCount=useSetRecoilState(counterAtom); // this component is subscribed to the value of this atom which is setter

  function increase() {
    setCount(c=>c+1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
  </div>
})

const Decrease=memo(function() {
  const setCount=useSetRecoilState(counterAtom);
  function decrease() {
    setCount(c=>c-1);
  }
  return <div>
    <button onClick={decrease}>Decrease</button>
  </div>
})
export default App

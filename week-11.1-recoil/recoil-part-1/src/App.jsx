import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {RecoilRoot, useRecoilValue, useSetRecoilState} from 'recoil';
import { counterAtom } from './store/atoms/Counter';

function App() {
 

  return (
   <RecoilRoot>
    <Counter/>
   </RecoilRoot>
  )
}

function Counter() {
  return <div>
    <CurrentCount  />
    <Increase />
    <Decrease />
  </div>
}
function CurrentCount() { // suppose to render the count atom from recoil
  const count=useRecoilValue(counterAtom); // this currentcount component has subscribed to the value of this atom
return <div>
  {count}
</div>
}

function Increase() {
  const setCount=useSetRecoilState(counterAtom); // this component is subscribed to the value of this atom which is setter

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

import { useEffect, useState,memo } from 'react'
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import { counterAtom, evenSelector } from './store/atoms/Counter';

function App () {
return <div>
  <RecoilRoot>
  <Buttons />
  <Counter/>
  <IsEven/>
  </RecoilRoot>
 
</div>
}

function Buttons () {
  const setCount=useSetRecoilState(counterAtom); //setter of the counter
  function increase() {
    setCount(c=>c+2);
  }

  function decrease() {
    setCount(c=>c-1);
  }
  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count=useRecoilValue(counterAtom);//subscribing to the actual atom if changes re-renders
  return <div>
    {count}
  </div>
}

function IsEven() {
  const even=useRecoilValue(evenSelector); //subscribing to some part of atom
  return <div>
    {even ? "Even" : "Odd"}
  </div>
}

export default App;
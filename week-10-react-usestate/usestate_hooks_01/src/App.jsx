import { useState,useEffect } from "react";

function App() {
  return <div>
    <Counter></Counter>
  </div>
}

//mounting
function Counter() {

  // set the useState variables
  const [count,setcount]=useState(0);// intializing the current state to Zero


  console.log("counter");
// guard our setinterval from re-renders
  useEffect(function() {
    setInterval(function() {
      //setcount(count=>count+1);
      setcount(function(count) {
        return count+1;
      })
    },1000)
    console.log("mounted");
  }, []);  // dependency array is []
  // function increaseCount() {
  //   setcount(count+1);
  // }
/*
  function decreaseCount() {
    setcount(count-1);
  }

  function resetCount() {
    setcount(0);
  }
    */
  return <div>
    <h1 id="text">{count}</h1>
  </div>
}

export default App;
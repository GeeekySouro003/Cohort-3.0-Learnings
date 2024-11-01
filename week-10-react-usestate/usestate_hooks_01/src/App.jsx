import { useState,useEffect } from "react";

//conditional rendering
function App() {
  let [counterVisible,setcounterVisible] = useState(true);

  useEffect(function() {  // useeffect used for life cycle events but also when a lot of components needs to be changed
    setInterval(function() {
      setcounterVisible(count =>!count)
    },5000)
  },[])


  return <div>
    hi
    {counterVisible &&<Counter></Counter>}
    hello
  </div>
}

//mounting
function Counter() {

  // set the useState variables
  const [count,setcount]=useState(0);// intializing the current state to Zero



// guard our setinterval from re-renders
  useEffect(function() {
    console.log("mounted");
   let clock=setInterval(function() {
      //setcount(count=>count+1);
      setcount(function(count) {
        return count+1;
      })
    },1000)
    
    return function() {
      console.log("on umount")
      clearInterval(clock);
    }
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

import { useState } from 'react'
import './App.css'

//custom hooks for counter variables
function useCounter() {
  const[count,setcount]=useState(0);


  function increaseCount() {
    setcount(count=>count+1);
  }

  return { // returning a count and increasecount
    count:count,
    increaseCount:increaseCount
  }
}



function App() {
 
const{count,increaseCount} = useCounter(); // rendering the usecounter hook over the app component
  return (
    <>
      <div>
       <button onClick={increaseCount}>Increase {count} </button>
       </div>
    </>
  )
}

export default App

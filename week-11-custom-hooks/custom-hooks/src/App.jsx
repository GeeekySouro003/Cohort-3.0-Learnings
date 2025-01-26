import { useEffect, useState } from 'react'
import './App.css'
import {  useFetch, usePostTitle } from './hooks/useFetch'

function App() {
 //const postTitle=usePostTitle()

 const{finalData}=useFetch("https://jsonplaceholder.typicode.com/todos/1")
return (
  <div>
{JSON.stringify(finalData)}
  </div>
)  
}


export default App




//Custom hooks concept for state variable update useState

// import { useState } from 'react'
// import './App.css'

// //custom hooks for counter variables
// function useCounter() {
//   const[count,setcount]=useState(0);


//   function increaseCount() {
//     setcount(count=>count+1);
//   }

//   return { // returning or exporting the  count and increasecount
//     count:count,
//     increaseCount:increaseCount
//   }
// }



// function App() {
 
// const{count,increaseCount} = useCounter(); // rendering the usecounter hook over the app component
//   return (
//     <>
//       <div>
//        <button onClick={increaseCount}>Increase {count} </button>
//        </div>
//     </>
//   )
// }

// export default App

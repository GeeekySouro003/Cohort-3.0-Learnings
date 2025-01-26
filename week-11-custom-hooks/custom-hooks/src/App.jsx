import { useEffect, useState } from 'react'
import './App.css'
import {  useFetch, } from './hooks/useFetch'

function App() {
 //const postTitle=usePostTitle()
const[currentPost,setcurrentPost] = useState(1);
 const{finalData,loading}=useFetch("https://jsonplaceholder.typicode.com/posts/"+ currentPost)

 if(loading) {
  return <div>
    Loading....
  </div>
 }
return (
  <div>
    <button onClick={()=>setcurrentPost(1)}>1</button>
    <button onClick={()=>setcurrentPost(2)}>2</button>
    <button onClick={()=>setcurrentPost(3)}>3</button>
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

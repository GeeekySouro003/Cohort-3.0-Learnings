import { useRef, useState } from 'react';
import './App.css';

function App () {
  const[currentcount,setcurrentcount] =useState(0);
  //const [timer,setimer]=useState(0);
  const timer=useRef();
  
  return <div>
    {currentcount}
    <br />
    <button onClick={startclock}>Start</button>
    <button onClick={stopclock}>Stop</button>
  </div>

  function startclock() {
    let value=setInterval( () => {
      setcurrentcount(c => c+1);
    },1000);

    timer.current = value;
  }

  function stopclock() {
    console.log(timer);
    clearInterval(timer.current);
  }
}



export default App;

















//Code for SPA',routing,layouts


// import { useState } from 'react'
// import { BrowserRouter, Routes, Route,Link,useNavigate, Outlet } from "react-router-dom";
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <BrowserRouter>
      
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route path='/neet/online-coaching-class-11' element={<Class11Program />} />
//         <Route path='/neet/online-coaching-class-12' element={<Class12Program />} />
//         <Route path='/' element={<Landing />} />
//         <Route path='*' element={<ErrorPage />} /> 
//         </Route>
//       </Routes>
//       </BrowserRouter>
//       Footer | Contact
//     </div>
//   )
// }


// function Layout() {
//   return <div style={{height:"100vh", background:"black"}}> 
//     <Link to="/">Allen</Link>
//       |
//       <Link to="/neet/online-coaching-class-11">Class 11 Program</Link>
//       |
//       <Link to="/neet/online-coaching-class-12">Class 12 Program</Link>
//       <div style={{height:"90vh",background:"red"}}>
//       <Outlet/>
//       </div>
//     footer
//   </div>
// }
// function ErrorPage() {
//   return <div>
//     Sorry Page Not found!!
//   </div>
// }

// function Class11Program() {
//   return <div>
//     NEET programs for Class 11th
//   </div>
// }




// function Class12Program() {
//   const navigate=useNavigate();

//   function redirectUser() {
// navigate('/');
//   }
//   return <div>
//     NEET programs for Class 12th
//     <button onClick={redirectUser}>Go back to Landing Page</button>
//   </div>
// }


// function Landing() {
//   return <div>
//     Welcome to Allen!!
//   </div>
// }
// export default App

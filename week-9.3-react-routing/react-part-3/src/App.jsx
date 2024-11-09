import { useRef } from 'react';
import './App.css';

function App () {
  const inputref=useRef(); //Useref lets u reference a value so that when that value changes u dont need to re-render the whole component again


  function focusonInput() {
    //document.getElementById("name").focus();
    inputref.current.focus();
  }
return (
  <div>
    Sign up
    <input ref={inputref}  type={"text"}></input>
    <input type={"text"}></input>
    <button onClick={focusonInput}>Submit</button>
  </div>
)
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

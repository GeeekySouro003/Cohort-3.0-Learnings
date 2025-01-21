import React, { createContext, useContext, useState } from 'react';

const CountContext = createContext();

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0);

  return <CountContext.Provider value={{count, setCount}}>
    {children}
  </CountContext.Provider>
}

function Parent() {
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Decrease() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count=>count - 1)}>Decrease</button>;
}

function Increase() {
  const {setCount} = useContext(CountContext);
  return <button onClick={() => setCount(count=>count + 1)}>Increase</button>;
}

function Value() {
  const {count} = useContext(CountContext);
  return <p>Count: {count}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;


























// import { createContext, useContext, useState } from 'react';
// import './App.css';

// const BulbContext=createContext();


// //creating custom context providers

// function BulbProvider({children}) { // wrapper component
//   const[bulbOn,setbulbOn]=useState(false);
//   return <BulbContext.Provider value={{
//     bulbOn:bulbOn,
//     setbulbOn:setbulbOn
//   }}>
//  {children}
//   </BulbContext.Provider>

// }
// function App() {
//    //returns an array[] 
// return (
//   <div>
//     <BulbProvider>
//       <LightBulb/>
//     </BulbProvider>
    
//   </div>
  
// )
// }
// //Rolling up the state to the lowest common  ancestor of the two children possivble
// function LightBulb() {

//   return <div>
//     <BulbState/>
//     <ToggleBulbState/>
//   </div>
// }

// function BulbState() {
//   const {bulbOn}=useContext(BulbContext)
// return <div>
// {
//   bulbOn?"Bulb on":"Bulb off"
// }
// </div>
// }

// function ToggleBulbState() {

//   const {bulbOn,setbulbOn}=useContext(BulbContext);
//   function toggle() {
//     setbulbOn(!bulbOn);
//   }
//   return<div>
//     <button onClick={toggle}>
//       Toogle the button
//     </button>
//   </div>
// }

// export default App;

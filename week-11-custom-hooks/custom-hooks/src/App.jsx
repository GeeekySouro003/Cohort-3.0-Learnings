import { useEffect, useState } from 'react'
import './App.css'
import { useFetch } from './hooks/useFetch'
import { usePrev } from './hooks/use-prev'

// Custom Hook: useDebounce
// This hook delays updating the state value until after a specified delay period.
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup timeout to prevent unnecessary updates
    };
  }, [value, delay]);

  return debouncedValue;
};

function App() {
  const [inputVal, setInputVal] = useState(""); // State to store input value
  const debouncedValue = useDebounce(inputVal, 200); // Debounced value updates after delay

  // Function to handle input changes
  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    // Simulating an expensive operation that runs only when debouncedValue changes
    console.log("Expensive operation");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change} />
    </>
  );
}

export default App;

// ---------------------------- usePrev Hook Example ----------------------------
// usePrev Hook stores the previous state value
// function App() {
//   const [state, setState] = useState(0);
//   const prev = usePrev(state);

//   return (
//     <>
//       <p>{state}</p>
//       <button onClick={() => setState((currentState) => currentState + 1)}>
//         Click Me
//       </button>
//       <p>The previous value was {prev}</p>
//     </>
//   );
// }
// export default App;

// ---------------------------- useFetch Hook Example ----------------------------
// Custom hook to fetch data from an API
// function App() {
//   const [currentPost, setCurrentPost] = useState(1);
//   const { finalData, loading } = useFetch(
//     "https://jsonplaceholder.typicode.com/posts/" + currentPost
//   );

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>1</button>
//       <button onClick={() => setCurrentPost(2)}>2</button>
//       <button onClick={() => setCurrentPost(3)}>3</button>
//       {JSON.stringify(finalData)}
//     </div>
//   );
// }
// export default App;

// ---------------------------- useCounter Hook Example ----------------------------
// Custom Hook: useCounter
// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount((count) => count + 1);
//   }

//   return {
//     count,
//     increaseCount,
//   };
// }

// function App() {
//   const { count, increaseCount } = useCounter(); // Using the custom hook

//   return (
//     <>
//       <div>
//         <button onClick={increaseCount}>Increase {count}</button>
//       </div>
//     </>
//   );
// }
// export default App;

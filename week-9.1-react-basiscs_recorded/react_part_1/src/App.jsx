import { useEffect, useState } from "react";
import { PostComponent } from "./Post";


// Create a function component named App that will be rendered in the root element
function App() {
    // Create a state variable named showTimer and a function to update it named setShowTimer
    const [showTimer, setShowTimer] = useState(true);

    // Use the useEffect hook to toggle the showTimer state after 5 seconds using setTimeout
    useEffect(() => {
        // Create a timeout that toggles the showTimer state after 5 seconds
        setInterval(() => {
            // Update the showTimer state by toggling its current value
            setShowTimer((currentValue) => !currentValue);
        }, 5000);
    }, []); // Empty dependency array means this runs once when the component mounts.

    // return JSX that will be rendered in the root element
    return (
        <div style={{ margin: 20, textAlign: "center" }}>
            {/* Display the title of the app */}
            <h1 style={{ color: "purple" }}>Countdown App</h1>

            {
                // Use the showTimer state to conditionally render the Timer component
                showTimer && <Timer />
            }
        </div>
    );
}

// Create a function component named Timer that will be rendered in the App component
function Timer() {
    // Create a state variable named seconds and a function to update it named setSeconds
    const [seconds, setSeconds] = useState(0);

    // Use the useEffect hook to update the seconds state every second using setInterval
    useEffect(() => {
        // Create an interval that increments the seconds state by 1 every second
        const clock = setInterval(() => {
            console.log("Mounted");

            // Update the seconds state by incrementing it by 1 every second
            setSeconds((prev) => prev + 1);
        }, 1000);

        // Return a cleanup function that clears the interval when the component unmounts
        return function () {
            clearInterval(clock);
        };
    }, []); // Empty dependency array means this runs once when the component mounts.

    // return JSX that will be rendered in the root element
    return <h3>{seconds} seconds elapsed</h3>;
}

// Export the App component to use it in other files





// Useffect and dependecny array


// function App() {
//   const[currenttab,setcurrentab]=useState(1);
//   const [tabData,settabData]=useState({});
//   const[loading,setloading]=useState(true);
 
//  useEffect(function() {
//    setloading(true);
//    fetch("https://jsonplaceholder.typicode.com/todos/"+currenttab)
//    .then(async res => {
//      const json=await res.json();
//      settabData(json);
//      setloading(false);
//    })
//  },[currenttab])
 
//   return <div>
//    <button onClick={function() {
//      setcurrentab(1)
//    }} style={{color:currenttab == 1 ? "red":"black"}}>Todo #1</button>
//    <button onClick={function() {
//      setcurrentab(2)
//    }} style={{color:currenttab == 2 ? "red":"black"}}>Todo #2</button>
//    <button onClick={function() {
//      setcurrentab(3)
//    }} style={{color:currenttab == 3 ? "red":"black"}}>Todo #3</button>
//    <button onClick={function() {
//      setcurrentab(4)
//    }} style={{color:currenttab == 4 ? "red":"black"}}>Todo #4</button>
 
//    <br/>
//    {loading ? "Loading..." : tabData.title}
//   </div>
//  }
 










// const[posts,setposts]=useState([]) // posts is an empty array of objects

//  const postComponents =posts.map(post=> <PostComponent
//   name={post.name}
//   subtitle={post.subtitle}
//   time={post.time}
//   image={post.image}
//   description={post.description}
//  />)

//  function addPost() {
//   setposts([...posts,{
//     name:"souradip",
//     subtitle:"1000 followers",
//     time:"3m ago",
//     image:"https://i.pinimg.com/236x/c7/1d/54/c71d54529e950b10ccbd7ec04d529512.jpg",
//     description:"What to know how to be a achiever from cohort 3.0"
//   }])
//  }
//  return (
//   <div style={{background:"#dfe6e9",height:"100vh"}}>
//     <button onClick={addPost}>Add Post</button>
//     <div style={{display:"flex",justifyContent:"center"}}>
//       <div>
//         {postComponents}
//       </div>
//     </div>

//   </div>





// // Create a style object to apply styles to the div element in PostComponent
// const style = {
//   width: 250,
//   backgroundColor: "white",
//   borderRadius: 10,
//   borderColor: "gray",
//   borderWidth: 1,
//   padding: 20,
//   margin: 10,
// };

// Create a function component named PostComponent with props to render it in the App component
// function PostComponent({ name, followerCount, time, image, description }) {
//   // return JSX that will be rendered
//   return (
//       // Apply style object to the div element
//       <div style={style}>
//           {/* display the name, followerCount, time, image, and description using props */}
//           <div style={{ display: "flex" }}>
//               <img src={image} style={{ width: 40, height: 40, borderRadius: 40 }} />
//               <div style={{ fontSize: 14, marginLeft: 10 }}>
//                   <b>{name}</b> 
//                   <div>{followerCount} followers</div>
//                   <div>{time}</div>
//               </div>
//           </div>

//           <div style={{ fontSize: 14 }}>{description}</div>
//       </div>
//   );
// }





// {/* <div>
//                   <div>
//                       {/* Call PostComponent here with props to render it in the App component */}
//                       <PostComponent
//                           name={"Souradip"}
//                           followerCount={24}
//                           time={"2m ago"}
//                           image={"https://imgs.search.brave.com/F5OoHgfmJlOgbB00VWzyvvcxuQZk7JOPrCYV51JMmNU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI3/Mzc5NDUyL3Bob3Rv/L2tpdHR5LmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz13UWcw/TXdTcXJxZkkzWHdN/WGREVjhkY2RZMlNH/WVh2YndPdE12cUxX/UWpJPQ"}
//                           description={"What to know how to win big? Check out how these folks won $6000 in bounties."}
//                       />
//                   </div>
//                   <div>
//                       <div>
//                           {/* Call PostComponent here with props to render it in the App component */}
//                           <PostComponent
//                               name={"Harkirat"}
//                               followerCount={30}
//                               time={"3m ago"}
//                               image={"https://appx-wsb-gcp-mcdn.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
//                               description={"How to get hired in 2024? I lost my Job in 2023, this is the roadmap I followed to get hired in 2024."}
//                           />
//                       </div>
//                   </div>
//                   <div>
//                       <div>
//                         <PostComponent
//                         name={"Ravi"}
//                         followerCount={56}
//                         time={"1m ago"}
//                         image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s"}
//                         description={"Journey from Non tech to Software Engineer"}
//                         />
//                       </div>
//                   </div>
//               </div> */}

// Export App Component to use it in other components



//Toggle Notification Code


// function App() {
//   // return JSX that will be rendered
//   return (
//       // Apply inline styles to the div element
//       <div style={{ backgroundColor: "#dfe6e9", height: "100vh" }}>
//         <NotificationCount/>
//         <NotificationCount/>
//         <NotificationCount/>
//       </div>
//   );
// }


// const NotificationCount = () => {
//   // Create a state variable isVisible and a function setIsVisible to toggle the visibility of the message
//   const [notificationCount, setnotificationCount] = useState(0); // defining a new state variable

// //when the value of a state variable changes
// //the component that uses the state variable re-renders
// function increment() {
//   setnotificationCount(notificationCount+1);
// }

//   return (
//       <div>
//           {/* Create a button to toggle the visibility of the message */}
//           <button onClick={increment}>
//              Increase Count
//           </button>

//           {/* Conditionally render the message if isVisible is true */}
//           {notificationCount}
//       </div>
//   );
// };





export default App;
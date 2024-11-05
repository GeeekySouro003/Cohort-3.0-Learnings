import React from "react";  //Fragments in react

function App () {
  return (
  <>
  <div>Hi there</div>
  </>
  )
}

export default App;









//List and Keys

// import React from "react";

// const App = () => {
//   const todos=[{
//     title:"Go to gym",
//     done:false
//   }, {
//     title:"Attend cohort 3.0",
//     done:true
//   }];

//   const todosComponents=todos.map(todo => <Todo
//     title={todo.title} done={todo.done} />)
//     return (
//       <div>
//         {todosComponents} 
//         </div>  
//         )
     

  
// }

// function Todo({title,done}) {
//   return <div>
//     {title}-{done ? "Done" : "not done"}
// </div>

// }
// export default App;






















// Props and children in react

// import React from 'react';

// const Card = ({ children }) => {
//     return (
//         <div style={{
//             border: '1px solid #ccc',
//             borderRadius: '5px',
//             padding: '20px',
//             margin: '10px',
//             boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
//         }}>
//             {children}
//         </div>
//     );
// };

// const App = () => {
//     return (
//         <div>
//             <Card>
//                 <h2>Card Title</h2>
//                 <p>This is some content inside the card.</p>
//             </Card>
//             <Card>
//                 <h2>Another Card</h2>
//                 <p>This card has different content!</p>
//             </Card>
//         </div>
//     );
// };

// export default App;

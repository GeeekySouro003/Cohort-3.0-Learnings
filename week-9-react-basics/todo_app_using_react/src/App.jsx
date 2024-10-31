import { useState } from 'react';
import './App.css';

export default function App() {
  const [todos,settodos]=useState([
    {
      title:"Go to the cohort class",
      description:"Attend the class regularly",
      done:false
    },
  ]);

  function AddTodo() {
   /* let newArray=[];
    for(let i=0; i<todos.length; i++) {
      newArray.push(todos[i]);
  }
  newArray.push({

    title:"Go to the gym",
      description:"Attend the gym regularly",
      done:true
  });*/
  settodos([
    ...todos,{
      title:document.getElementById("title").value,
      description:document.getElementById("description").value,
      done:false
    }
  ]);
  }
  return (
    <div>
      <input id="title"type='text' placeholder='Title'></input>
      <br />
      <input id="description" type='text' placeholder='Description'></input>
      <br />
      <button onClick={AddTodo}>Add a Todo</button>
      {todos.map((todo)=>{
        <Todo 
        title={todo.title}
        description={todo.description}
        done={todo.done}
        />
      })}
    </div>
  );
}

function Todo(props) {
return (
<div>
  <h1>{props.title}</h1>
  <p>{props.description}</p>
  <p>{props.done ? "task is done":"Task is not done"}</p>
</div>
);
}


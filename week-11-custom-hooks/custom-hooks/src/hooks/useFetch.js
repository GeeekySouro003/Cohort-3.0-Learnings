import { useEffect, useState } from "react";
//you cant create function that use hooks under the hood
//every hook starts use with hook
export function usePostTitle() {
    const[post,setpost]=useState({});

async function getPosts() {
  const response=await fetch("https://jsonplaceholder.typicode.com/todos/1")
  const json=await response.json();
  setpost(json);
}
  useEffect(()=>{ // for rendering component when app is mounted and in useeffect you cannot use 
    //async in the function
getPosts();
  },[])

  return post.title;
}
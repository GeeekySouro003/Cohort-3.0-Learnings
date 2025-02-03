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


//useFetch custom hooks
export function  useFetch(url) {
    const[finalData,setfinalData]=useState({});
    const[loading,setLoading]=useState(true);

    async function getDetails() {
        setLoading(true);   
        const response=await fetch(url);
        const json=await response.json();
        setfinalData(json);
        setLoading(false);
    }
    useEffect(()=>{
        getDetails();
    },[url])

    //usefetch with refetchingg
    useEffect(()=>{
        setInterval(getDetails,10*1000) //cleanup
    },[])


    return {
        finalData,
        loading
    }
}
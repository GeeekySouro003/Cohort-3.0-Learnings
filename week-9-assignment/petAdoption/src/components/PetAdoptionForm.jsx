import React, { useState } from "react";

const PetForm = () => {
    const[petform,setpetform]=useState([]);
    const[petvalues,setpetvalues]=useState({
        petName:"",
        petType:"Dog",
        breed:"",
        adoptername:"",
        email:"",
        phone:""
    });


    const[table,settable]=useState(false);
    const{petName,petType,breed,adoptername,email,phone}=values;

    const[errors,seterrors]=useState({
        petName:"",
        petType:"",
        breed:"",
        adoptername:"",
        email:"",
        phone:""
    });
}
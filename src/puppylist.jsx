import { useState } from "react";
import React from 'react'

export default function PuppyList() {
    const [puppies, setPuppies] = useState(null)
  const [featPupId, setFeatPupId] = useState(null)
  const baseUrl = "https://fsa-puppy-bowl.herokuapp.com/api/"
  
  
  
  function handleClick(puppyId) {
    setFeatPupId(puppyId);
  }
  
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
    return (
        <div className="App">
         {puppies.map((puppy) => {
            return <p onClick={()=>{handleClick(puppy.id)}} key={puppy.id}>{puppy.name}</p>
          })}
          
  
    {featPupId && featuredPup ? (
    <div>
      <h2>{featuredPup.name}</h2>
      <ul>
        <li>Age: {featuredPup.age}</li>
        <li>Email: {featuredPup.email}</li>
      </ul>
    </div>
    ) : (
      <p>Select a puppy to see deatails.</p>
    )}
  </div>
    );
    }
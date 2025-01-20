import React, { useState } from "react";
import './person.css';

const Person = (props) => {
    const {firstName, lastName,age, hairColor} = props
    const [ageCount , setAgecount]=useState (age);

    const agePlus = () =>{
        setAgecount (ageCount +1)
    }

    return (
        <div className="card">
            <h1>{firstName} {lastName}</h1>
            <p>age:{ageCount}</p>
            <p>hair color:{hairColor}</p>
            <button onClick={agePlus}> Birthday button for {firstName} {lastName}</button>
        </div>

    );
}
export default Person;
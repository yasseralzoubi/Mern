import React from "react";
import './person.css';

const Person = (props) => {
    const {firstName, lastName,age, hairColor} = props
    return (
        <div className="card">
            <h1>{firstName} {lastName}</h1>
            <p>age:{age}</p>
            <p>hair color:{hairColor}</p>
        </div>

    );
}
export default Person;
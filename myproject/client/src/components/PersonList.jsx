import React from 'react'

import {Link,Routes,Route} from "react-router-dom";
import DeletePerson from './DeletePerson';

const PersonList = (props) => {
    
    const { removeFromDom, people} = props;

    return (
        <div>
            {people.map((person, i) => (
                <div key={i}>
                    <p>{person.name}, {person.age}</p>
                    <Link to={"/people/" + person._id + "/edit"}>Edit</Link>
                    <DeletePerson personId = {person._id} removeFromDom={removeFromDom}/>
                    <Link to={"/people/" + person._id }>View</Link>
                </div>
            ))}
        </div>
    )
}
    
export default PersonList;    


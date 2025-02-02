import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = (props) => {
    const [person, setPerson] = useState({})
    const { id } = useParams();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);
    
    return (
        <div>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>

            <Link to={"/people/" + person._id + "/edit"}>
            Edit
        </Link>

           <Link to={"/"}>Back</Link>
        </div>

      
    )
}
    
export default Detail;
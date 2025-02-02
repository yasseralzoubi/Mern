import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/users', {
            name,
            age,
        })
            .then(res => {
                console.log(res);
                setFlag(true)

            })
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }
    //onChange to update firstName and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            { errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>First Name</label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <p>
                <label>Age</label><br />
                <input type="number" onChange={(e) => setAge(parseInt(e.target.value, 10))} value={age} />
            </p>
            <input type="submit" />
        </form>



    )
}
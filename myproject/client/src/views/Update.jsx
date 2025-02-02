import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link, useNavigate  } from 'react-router-dom';

const Update = (props) => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const navigate = useNavigate(); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                setName(res.data.name);
                setAge(parseInt(res.data.age , 10));
            })
    }, []);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/users/' + id, {
            name,
            age
        })
            .then(res => {
                console.log(res); 
                
                navigate('/');
            }
        
        )
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>First Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Age</label><br />
                    <input type="number" 
                    name="age"
                    value={age} 
                    onChange={(e) => { setAge( parseInt(    e.target.value  , 10  )  ) }} />
                </p>
                <input type="submit" />
            </form>

               <Link to={"/"}>Back</Link>
        </div>
    )
}
    
export default Update;

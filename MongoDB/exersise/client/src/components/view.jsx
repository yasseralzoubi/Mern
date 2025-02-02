import React, { useEffect, useState } from "react";
import axios from "axios";
import Create from "./create";
import {
  Routes,
  Route,
  Link

} from "react-router-dom";

const View = () => {
  const [persons, setPersons] = useState([]);


  useEffect(() => {
    axios.get(`http://localhost:8000/api/person`)
        .then(response => {
            setPersons(response.data);  
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}, [  ]);



    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/person/${id}`)
            .then(response => {
                setPersons(persons.filter(person => person._id !== id));
            })
            .catch(error => {
                console.error('Error deleting person:', error);
            });
    }
  
    return (
      <div>
          <h1>Person List</h1>
          <Routes>
                  <Route path="/add" element={<Create persons={persons} setPersons={setPersons} />} />
          </Routes>        
          <a href="/add">Create Person</a>
          
          <ul>
              {persons.map((person) => (
                  <li key={person.id}>{person.firstName} {person.lastName} | <button onClick={() => handleDelete(person._id)}>Delete</button></li>
              ))}
          </ul>
      </div>
  );
  };


  export default View;

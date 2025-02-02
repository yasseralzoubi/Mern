import React, { useState } from "react";
import axios from "axios";




const Create = ({ persons, setPersons }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
  
        axios
            .post("http://localhost:8000/api/person", { firstName, lastName })
            .then((res) => {
                console.log("Person added:", res.data);
                setPersons([...persons, res.data]); 
                setFirstName("");  
                setLastName("");  
            })
            .catch((err) => console.error("Error posting data:", err));
    };

    return (
        <>
            <h3>Add a New Person</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    value={firstName}  
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    value={lastName}  
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <a href="/">Cancel</a> <br />
        </>
    );
};

export default Create;
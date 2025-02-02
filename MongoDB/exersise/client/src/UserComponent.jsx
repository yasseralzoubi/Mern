import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
            .then(response => {
                setUsers(response.data);  
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/users/delete/${id}`)
            .then(response => {
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <div>
            <h1>All Users</h1>
            {users.length === 0 ? (
                <p>No users found</p>
            ) : (
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>
                            {user.firstName} {user.lastName}
                            <p>{user._id}</p>
                            <button onClick={() => handleDelete(user._id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default UserComponent;
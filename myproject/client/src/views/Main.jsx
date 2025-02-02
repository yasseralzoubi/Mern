import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';
import Paper  from '@mui/material/Paper';
import Button from '@mui/material/Button';


  


const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users/allusers')
            .then(res=>{
                //console.log("Test")
                console.log(res.data)
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = (personId) => {
        setPeople(people.filter(person => person._id !== personId));  
    };
   
    return (
        <div>
           <PersonForm/>
           <hr/>
         

              {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}

              <Paper elevation={0} />
              <Paper />
              <Paper elevation={3} />

                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
              
        </div>
    )
}
    
export default Main;
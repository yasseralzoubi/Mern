// App.js  
import React from 'react';  
import FirstCounter from './components/FirstCounter';
import SecoundCounter from './components/SecoundCounter';

const App = () => {  
    return (  
        <div>  
            <h1>My first Counter App</h1>  
            <FirstCounter /><br/>


            <h1>My Secound Counter App</h1>


            <SecoundCounter />

        </div>  
    );  
};  

export default App;

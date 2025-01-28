// FirstCounter.js  
import React from 'react';  
import Counter from './Counter';  


// This is a render prop component
export default () => (  
    // The Counter component is rendered with an initialValue of 5
    <Counter  
    // The render prop is passed a function that takes count and increment as arguments
        initialValue={5}  
        render={({ count, increment }) => (  
            <>  
                <h2>The count is currently {count}!</h2>  
                <button onClick={increment}>Add One</button>  
            </>  
        )}  
    />  
);  
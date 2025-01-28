import React from 'react';  
import Counter from './Counter';  


// This is a render prop component
export default () => (  
    // The Counter component is rendered with an initialValue of 10
    <Counter  
        initialValue={10}  
        render={({ count, increment, decrement }) => (  
            <>  
                <button onClick={increment}>Increment</button>  
                <button onClick={decrement}>Decrement</button>  
                <p>Current Count: {count}</p>  
            </>  
        )}  
    />  
)  
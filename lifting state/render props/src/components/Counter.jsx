import React, { useState } from 'react';

// This is a render prop component

// It takes an initialValue and a render prop
// It initializes a count state with the initialValue
export default ({ initialValue = 0, render }) => {  

    // count state to keep track of the count
    const [count, setCount] = useState(initialValue);  

    // increment  function increments the count by 1
   
    function increment() {  
        setCount(count + 1);  
    }  
   
    // decrement function decrements the count by 1
    function decrement() {  
        setCount(count - 1);  
    }  

    // render the component with the count, increment and decrement functions
   
    return render({ count, increment, decrement });  
}  
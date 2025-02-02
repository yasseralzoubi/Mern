import React, { useState } from 'react';
import Create from './assets/components/create';

const App = () => {
    const [Products, setProducts] = useState([]);


  

    return (
        <div>
            <Create Products={Products} setProducts={setProducts} />
        </div>
    );
};

export default App;
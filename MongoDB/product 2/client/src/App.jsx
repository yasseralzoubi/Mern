import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Create from './assets/components/create';
import ProductDetails from './assets/components/ProductDetails';

const App = () => {
    const [Products, setProducts] = useState([]);


  

    return (
        <div>
            
            <Routes>
                <Route path="/" element={<Create Products={Products} setProducts={setProducts} />} />
                <Route path="/product/:id" element={<ProductDetails />} />  {/* صفحة التفاصيل */}
            </Routes>
            
        </div>
    );
};

export default App;
import React, { useState } from 'react';

function Map() {
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>
        { groceryList.map( (item, i) => 
            <li key={ i }>{ item }</li> ) }
        </ul>
    );
}
export default Map;
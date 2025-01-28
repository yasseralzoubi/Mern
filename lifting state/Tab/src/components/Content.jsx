import React, { useState } from 'react';



const Content = (props) => {
    const{showContent}=props;
    return (
        <div>
            Tab {[showContent]} Content goes here.
        </div>
    )
}
export default Content;
import React from 'react';

const Scroll = (props) =>{
    return (
        <div style={{overflow:'scroll',overflowX:'hidden',border:'1px solid white',height:'648px'}}>
            {props.children}
        </div>
    );
};


export default Scroll;

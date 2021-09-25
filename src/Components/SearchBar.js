import React from 'react';


const SearchBar = (props) => {
    return (
        <div>
            <input type='search' placeholder="search robots" className="pa3 b--green bg-light-blue" onChange={props.onChange}/>
        </div>
    );
    
}

export default SearchBar;
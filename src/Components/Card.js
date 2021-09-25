import React from 'react';


const Card = ({id,name,email}) => {
  
        return (
            <div className="tc bg-light-green ma2 pa3 br3 grow dib bw2 shadow-5">
                <img alt='robot{id}' src={`https://robohash.org/${id}?200x200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>

        );
}

export default Card;



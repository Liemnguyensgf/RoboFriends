import React from 'react';

const Card = ({email, name}) => {
    return(
        <>
        <div className='bg-green-200 dib rounded-lg p-3 m-2 shadow-lg hover:bg-green-300 hover:scale-110 transition-transform'>
            <img src={`https://robohash.org/${name}`} width='200' height='200' alt="picture" />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
        </>
    )
}
export default Card;

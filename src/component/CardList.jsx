import React from 'react';
import Card from './Card';

const CardList = ( { robots } ) =>{
    const CardComponent = robots.map((user ,i) => {
        return <Card name={robots[i].name} email={robots[i].email} id={robots[i].id}/>
    }
    )
    return(
        <div className='flex flex-wrap justify-center'>
            {CardComponent}
        </div>
    )
}
export default CardList;
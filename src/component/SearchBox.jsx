import React from 'react';

const SearchBox = ( {searchChange} ) => {
    return(
        <>
        
        <div>

        <input  
        className='p-4 border border-green-500 text-center bg-blue-100' 
        type='search' 
        placeholder='Search box' 
        onChange = { searchChange}
        />

        </div>
        
        </>
    )
}
export default SearchBox
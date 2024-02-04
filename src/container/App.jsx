import React, { useState, useEffect } from 'react';
import CardList from '../component/CardList.jsx';
import { robots } from '../robots.js';
import SearchBox from '../component/SearchBox.jsx';
import Scroll from '../component/Scroll.jsx'
import ErrorBoundry from '../component/ErrorBoundry.jsx'

const App = () => {
    const [searchField, setSearchField] = useState('');
    const [robots, setRobots] = useState([])
    const [isLoading, setIsLoading] = useState(true);


    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    };


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(users => {
                setRobots(users)
                setIsLoading(false);
            })
        ;}, []);


    const filteredRobots = robots.filter((robot) => {
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });


    return isLoading ? (
        <h1 className='text-center'>Loading</h1>
    ) : (
        <>
            <div className='text-center'>
                <h1 className='text-center'>RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        </>
    )
    }
export default App;

import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';
import './Main.css'

const Main = () => {
    // const [volunteers, setVolunteers] = useVolunteers ();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText));
                setSearchResult(match);
            })
    }, [searchText]);

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);

    }
    
    // example : 2
    /* const handleSearchChange = (event) => {
        const searchText = event.target.value;
        const match = volunteers.filter (volunteer => volunteer.title.includes (searchText));
        setSearchResult (match);
    } */

    return (
        <div>
            <h1>Volunteers Activities : {searchResult.length}</h1>
            <div style={{ width: '200px', margin: '0 auto' }}>
                <input onChange={handleSearchChange} style={{ marginBottom: '30px', padding: '10px' }} type="text" placeholder='search' />
            </div>
            <div className='activity-container'>
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>

        </div>
    );
};

export default Main;
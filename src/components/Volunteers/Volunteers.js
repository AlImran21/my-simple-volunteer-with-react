import React from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Volunteers = () => {
    const [volunteers, setVolunteers] = useVolunteers ();
    return (
        <div>
            <h1>All Volunteers</h1>
            <div className='activity-container'>
                {
                    volunteers.map (activity => <Activity
                    key={activity._id}
                    activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Volunteers;
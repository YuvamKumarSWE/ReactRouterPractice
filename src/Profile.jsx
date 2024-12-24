import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
    const { id } = useParams();
    // In general to get a object list of all params: const params = useParams(); then use console.log to find info
    return (
        <div>
            <h1>Profile Page</h1>
            <p>Welcome to your profile! {id}</p>
        </div>
    );
};

export default Profile;
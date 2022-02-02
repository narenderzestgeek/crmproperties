import React, { useState } from 'react';

import UserCard from './UserCard';
import withDashboard from './DashboardContainer';

const UserList = (props) => {
    const [users, setUsers] = useState(props.users);
    return (
        <>
            <h3 align="center">Registered User's</h3>
            <div>
                {
                    users?.map((user, i) => <UserCard key={i} {...user} />)
                }
            </div>
        </>
    );
};

export default withDashboard(UserList);
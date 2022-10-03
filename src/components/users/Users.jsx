import axios from 'axios';
import React, { useEffect, useState } from 'react'
import User from '../user/User';
import './Users.css'

 function Users() {
    const [users, setUsers] = useState([]);

    // Function to fetch Data from API using Axios library
    let getUsers = async () => {
        let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(data);
    }

    useEffect(() => {
      getUsers();
    
    }, [])
    
    return (
        <div className='users-container'>
            {
                users.length > 0 ? users.map((user)=> <User key={user.id} userInfo={user} />)
                : <h2 className='users-loading'> Loading ...</h2>
            }
        </div>
    )
};
export default React.memo(Users);

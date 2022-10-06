import axios from 'axios';
import React from 'react';
// import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import User from '../user/User';
import './Users.css'

 function Users() {
    // Fetching Api using React Query
    const {data , isLoading , isError , error } = useQuery('user' , ()=>{
        return axios.get('https://jsonplaceholder.typicode.com/users');
    })
    // console.log(data);
    if(isLoading){
        return <h2 className='users-loading'> Loading ...</h2>
    }
    if(isError){
        return <h2 className='users-loading'> {error.message}</h2>
    }

    // const [users, setUsers] = useState([]);
    // Function to fetch Data from API using Axios library
    // let getUsers = async () => {
    //     let {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    //     setUsers(data);
    // }

    // useEffect(() => {
    //   getUsers();
    
    // }, [])
    
    return (
        <div className='users-container'>
            {
                // users.length > 0 ? users.map((user)=> <User key={user.id} userInfo={user} />)
                // : <h2 className='users-loading'> Loading ...</h2>

                data?.data.map((user)=> <User key={user.id} userInfo={user} />)
            }
        </div>
    )
};
export default React.memo(Users);

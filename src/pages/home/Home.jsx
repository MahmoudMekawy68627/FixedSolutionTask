import React from 'react'
import Users from '../../components/users/Users'
import './Home.css'

export default function Home() {
    return (
        <div>
            <div className="title">
                <h1>Home Page</h1>
            </div>
            <Users />
        </div>
    )
}

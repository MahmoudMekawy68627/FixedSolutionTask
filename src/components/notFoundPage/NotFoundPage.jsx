import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className='title'>
        <h1>404 page</h1>
        <h3>Go To <Link to='home'  className='notFound-link'>Home Page</Link></h3>
    </div>
  )
}

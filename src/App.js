import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import Home from './pages/home/Home';
import UsersPosts from './pages/userPosts/UsersPosts';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/FixedSolutionTask' element={<Home/>} />
        <Route path='/FixedSolutionTask/' element={<Home/>} />
        <Route path='home' element={<Home />} />
        <Route path='user-posts' element={<UsersPosts />}>
          <Route path=':userId/:name' />
        </Route>


        <Route path='*' element={<NotFoundPage />} />

      </Routes>
    </div>
  )
}

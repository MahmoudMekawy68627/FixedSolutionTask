import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFoundPage from './components/notFoundPage/NotFoundPage';
import RQUsers from './components/rqUsers/RQUsers';
import Home from './pages/home/Home';
import UsersPosts from './pages/userPosts/UsersPosts';
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient();

export default function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/FixedSolutionTask' element={<Home />} />
          <Route path='/FixedSolutionTask/' element={<Home />} />
          <Route path='home' element={<Home />} />
          <Route path='user-posts' element={<UsersPosts />}>
            <Route path=':userId/:name' />
          </Route>
          <Route path='rqUsers' element={<RQUsers />} />


          <Route path='*' element={<NotFoundPage />} />

        </Routes>
      </QueryClientProvider>
    </div>
  )
}

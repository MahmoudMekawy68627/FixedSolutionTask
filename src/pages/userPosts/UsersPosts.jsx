import axios from 'axios';
import React from 'react'
// import { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Post from '../../components/post/Post';
import './UserPosts.css';

export default function UsersPosts() {
    let { userId, name: userName } = useParams();
    /*const [posts, setPosts] = useState([]);

    Function to fetch posts
    let getPosts = async () => {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPosts(data);
    }

    useEffect(() => {

        getPosts();

    }, [])
*/

    // fetching Data with React Query 
    let { data, isLoading, isError, error } = useQuery('post', () => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
    });

    if (isLoading) {
        return <h2 className='users-loading'> Loading ...</h2>
    }

    if (isError) {
        return <h2 className='users-loading'> {error.message}</h2>
    }

    return (
        <div>
            <div className="title">
                <h1>{userName} Posts</h1>
            </div>
            <div className='userPosts-container'>
                {
                    data?.data.map((post) => <Post key={post.id} postInfo={post} />)

                }
            </div>
        </div>
    )
}

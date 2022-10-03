import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Post from '../../components/post/Post';
import './UserPosts.css';

export default function UsersPosts() {
    const [posts, setPosts] = useState([]);
    let { userId, name: userName } = useParams();

    // Function to fetch posts
    let getPosts = async () => {
        let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
        setPosts(data);
    }

    useEffect(() => {

        getPosts();

    }, [])

    return (
        <div>
            <div className="title">
                <h1>{userName} Posts</h1>
            </div>
            <div className='userPosts-container'>
                {
                    posts.length > 0 ? posts.map((post) => <Post key={post.id} postInfo={post} />)
                        : <h2 className='users-loading'> Loading ...</h2>
                }
            </div>
        </div>
    )
}

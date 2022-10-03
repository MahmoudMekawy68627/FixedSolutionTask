import React, { useState } from 'react'
import './Post.css'

function Post({ postInfo }) {

    const [expanded, setExpanded] = useState(false);
    let expand = ()=>{
        setExpanded(!expanded);
    }

    return (
        <div>
            <div className='post' >
                <div className='post-title' onClick={expand}>
                    <p>Title : 
                        <span className="data-font">{postInfo.title}</span>
                    </p>
                </div>
                <div className={expanded ? 'post-data-expanded' : 'post-data-unexpanded'}>
                    <p>User Id :
                        <span className="data-font">{postInfo.userId}</span>
                    </p>
                    <p>Post Id :
                        <span className="data-font">{postInfo.id}</span>
                    </p>
                    <p>Body :
                        <span className="data-font">{postInfo.body}</span>
                    </p>
                </div>
            </div>
        </div>
    )
};
export default React.memo(Post);

import React from 'react'
import { useNavigate } from 'react-router-dom';
import './User.css'

function User({ userInfo }) {

    let navigate = useNavigate();

    let navigateToPosts = () => {
        navigate(`/user-posts/${userInfo.id}/${userInfo.name}`);
    };

    return (
        <div className='user-card-container'>
            <div className='user-card'>
                <p>Name :
                    <span className='data-font'>{userInfo.name}</span>
                </p>
                <p>UserName :
                    <span className="data-font">{userInfo.username}</span>
                </p>
                <p>Phone :
                    <span className='data-font'>{userInfo.phone}</span>
                </p>
                <p>Email :
                    <span className="data-font">{userInfo.email}</span>
                </p>
                <p>Street :
                    <span className="data-font">{userInfo.address.street}</span>
                </p>
                <p>City :
                    <span className="data-font">{userInfo.address.city}</span>
                </p>
                <p>Company Name :
                    <span className="data-font">{userInfo.company.name}</span>
                </p>
                <p>Website :
                    <span>
                        <a className="data-font" href={`https://www.${userInfo.website}`} target="_blank" rel="noreferrer" > {`www.${userInfo.website}`} </a>
                    </span>
                </p>
                <button onClick={navigateToPosts} className='user-post-button'>post button</button>
            </div>
        </div>
    )
};
export default React.memo(User);

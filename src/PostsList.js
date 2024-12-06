import React, {useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentsList from './CommentsList';

export default () => {
    const [posts, setPosts] = useState({});
    const fetchPosts = async () => {
        const res = await axios.get('http://localhost:4003/posts');
        
        setPosts (res.data);
    };
    useEffect(() => {
        fetchPosts();
    },[]);
    console.log(posts);

    const renderedPosts = Object.values(posts).map(post => {
        console.log(post.id);
        return (
            <div className='card' style={{width:'30%',marginBottom:'20px'}}key = {post.id}>
                <div className='card-body'>
                    <h3>{post.title}</h3>
                    <CommentsList comments= {post.comments}/>
                    <CommentCreate postId = {post.id}></CommentCreate>
                </div>    
            </div>
        );
    });

    return (
        <div className='d-flex flex-raw flex-wrap justify-content-between'>
            {renderedPosts}
        </div>
    );
}
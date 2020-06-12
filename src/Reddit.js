import React, { useState, useEffect } from 'react'

import axios from 'axios'
function Reddit(){
    const [posts,setPosts] = useState([])
    useEffect(() => {
        axios.get(`https://www.reddit.com/r/reactjs.json`)
       .then(res => {
        console.log(res)
        const newPost = res.data.data.children
    .map(obj => obj.data)
    setPosts(newPost)

    })

    }, [])
    return(
        <div>
        <ul>
            {posts.map(post => (
                <li key = {post.id}>
                <h1>
               <a href={`${post.url}`} target="_"> {post.title} </a> <br/>
               </h1>
               <h3> By: {post.author}</h3> 
               <p>Upvotes:{post.ups}</p>
                </li>
            ))}
            </ul>
        </div>
    )
            }
    export default Reddit
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
               <a href={`${post.url}`} target="_"> {post.title} </a> <br/>
                
                </li>
            ))}
            </ul>
        </div>
    )
            }
    export default Reddit
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
                <li key = {post.id}>{post.title}</li>
            ))}
            </ul>
        </div>
    )
            }
    export default Reddit
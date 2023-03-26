import axios from "axios";
import { useEffect, useState } from "react";

function PostsPage() {
    const [posts, setPost] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    async function getPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPost(response.data)
    }

    return (
        <>
            <h1 className="m-4">Posts</h1>
            <ul>
                {posts.map((post) => (
                    <>
                        <li> <a href={"/comments/" + post.id}>{post.title}</a> {post.body} </li>
                        <hr />
                    </>
                ))}
            </ul>
        </>
    )
}

export default PostsPage;
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CommentsPage() {
    const params = useParams();

    console.log(params)
    const [comments, setComments] = useState([])

    useEffect(() => {
        getComments()
    }, [])

    async function getComments() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.postId}/comments`)

        setComments(response.data)
    }

    return (
        <>
            <h1 className="m-4">Comentários</h1>
            <ul>
                {comments.map((comment) => (
                    <li>
                        <p><b>{comment.name}</b> {comment.email}</p>
                        <i>{comment.body}</i>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CommentsPage;
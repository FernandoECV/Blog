import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function DetailUserPage() {
    const params = useParams()
    const [user, setUser] = useState(null)

    useEffect(() => {
        getUser()
    }, [])

    async function getUser() {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.userId}`)

        setUser(response.data)
    }

    return (
        <>

            <h3 className="m-5">Detalhes de Usuário</h3>
            {user ? (
                <div className="m-5">
                    <h1>{user.name}</h1><br/>
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                    <p>{user.address?.street} - {user.address?.city} - {user.address?.zipcode}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                    <p>{user.company?.name}</p>
                </div>
            ) : (
                <p>Carregando...</p>
            )}
        </>
    )
}

export default DetailUserPage;

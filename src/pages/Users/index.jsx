import axios from "axios";
import { useEffect, useState } from "react";

function UsersPage() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers()
    }, [])

    async function getUsers() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')

        setUsers(response.data)
    }

    return (
        <>
            <div className="container mt-5">
                <h1>Usuários</h1>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Empresa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <td scope="row"><a href={`/detail-user/${user.id}`}>{user.name}</a></td>
                                <td>{user.email}</td>
                                <td>{user.address.street}</td>
                                <td>{user.company.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UsersPage;
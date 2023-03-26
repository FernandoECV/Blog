function HomePage() {
    return (
        <>
            <h1 className="m-3">Inicio</h1>
            <a href="/posts">
                <button className="btn btn-success m-3">Posts</button>
            </a>
            <a href="/users">
                <button className="btn btn-primary">Usuários</button>
            </a>
        </>
    )
}

export default HomePage;
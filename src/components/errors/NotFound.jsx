const NotFound = () => {

    return (
        <div className="min-w-screen w-full h-full m-auto">
            <div className="text-center py-[6rem] select-none">
                <h1 className="text-9xl font-extrabold text-red-500" >404</h1>
                <h2 className="text-5xl font-semibold p-16">Ups! Parece que te perdiste 😵‍💫</h2>
                <p className="text-3xl font-semibold">La pagina que estas intentando visitar no existe.<br />Intenta volviendo al inicio.</p>
            </div>
        </div>
    )
}

export default NotFound
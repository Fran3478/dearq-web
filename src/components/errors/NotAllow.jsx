const NotAllow = () => {

    return (
        <div className="min-w-screen w-full h-full m-auto">
            <div className="text-center py-[6rem] select-none">
                <h1 className="text-9xl font-extrabold text-red-500" >403</h1>
                <h2 className="text-5xl font-semibold p-16">Ups! Parece que no pudes continuar</h2>
                <p className="text-3xl font-semibold">Actualmente no tienes permiso para acceder a la pagina que estas solicitando.<br />Intenta cerrar y volver a inciar sesión.</p>
            </div>
        </div>
    )
}

export default NotAllow
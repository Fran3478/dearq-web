import { useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import Button from "../buttons/Button"
import Error from "../errors/Error"
import { useLocation, useNavigate } from "react-router-dom"

const LoginForm = () => {
    
    const {login} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const locationsMap = ["blog", "admin", "about", "services", "contact"]

    const [userForm, setUserForm] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        username: null,
        password: null,
        login: null
    })

    const notEmpty = ({value, field}) => {
        if(value.trim().length === 0){
            setError(prevError => ({
                ...prevError,
                [field]: field === "password" ? "Ingrese su contraseña" : "Ingrese su correo o usuario"
            }))
            return false
        } else {
            setError(prevError => ({
                ...prevError,
                [field]: ""
            }))
            return true
        }
    }

    const noError = () => {
        const userExist = notEmpty({value: userForm.username, field: "username"})
        const passExist = notEmpty({value: userForm.password, field: "password"})
        return userExist && passExist
    }

    const handleChange = ({value, field}) => {
        setUserForm({...userForm, [field]: value})
        notEmpty({value, field})
    }

    const handleClick = async (e) => {
        e.preventDefault()
        if(noError()) {
            const logging = await login(userForm)
            if(!logging.login) {
                const {error} = logging.err.response.data
                setError(prevError => ({
                    ...prevError,
                    login: error
                }))
            } else {
                if(locationsMap.includes(location.pathname.split("/")[1])) return navigate(-1)
                if(logging.user.role === "admin") return navigate("/admin/posts")
                return navigate("/home")
            }
        }
    }

    return(
        <div className="min-w-full w-full h-full m-auto items-center justify-center flex">
            <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow-md border">
                    <div className="p-5">
                        <div className="text-center">
                            <p className="mt-[2rem] mb-[3rem] text-3xl font-semibold leading-5 text-slate-900">Iniciar Sesión</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] "/>
                                Iniciar con Google
                            </button>
                        </div>
                        <div className="mt-2 flex w-full pt-6">
                            <div className="h-px w-full bg-slate-200"></div>
                        </div>
                        <form className="w-full">
                            <div className="h-[1.5rem] mb-[1rem]">
                                {
                                    error.login && <Error text={error.login} type={"fail"} />
                                }
                            </div>
                            <label htmlFor="username" className="sr-only">Correo o Usuario</label>
                            <input name="username" type="text" autoComplete="email"
                                className={`block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.username || error.login) && "ring-1 ring-red-500"}`}
                                placeholder="Correo o Usuario" 
                                value={userForm.username} 
                                onChange={({target}) => handleChange({value: target.value, field: "username"})}
                                onBlur={({target}) => notEmpty({value: target.value, field: "username"})}
                            />
                            <div className="h-[1.5rem] mb-[1rem]">
                                {
                                    error.username && <Error text={error.username} type={"fail"} />
                                }
                            </div>
                            <label htmlFor="password" className="sr-only">Contraseña</label>
                            <input name="password" type="password" autoComplete="current-password"
                                className={`mt-[1rem] block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.password || error.login) && "ring-1 ring-red-500"}`}
                                placeholder="Contraseña"
                                value={userForm.password}
                                onChange={({target}) => handleChange({value: target.value, field: "password"})}
                                onBlur={({target}) => notEmpty({value: target.value, field: "password"})}
                            />
                            <div className="h-[1.5rem] mb-[1rem]">
                                {
                                    error.password && <Error text={error.password} type={"fail"} />
                                }
                            </div>
                            <p className="mt-[1rem] text-sm text-gray-500">
                                <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Recuperar Contraseña</a>
                            </p>
                            <div className="my-[1.5rem] flex w-full justify-center">
                                <Button text={"Continuar"} handleClick={handleClick}/>
                            </div>
                        </form>

                        <div className="text-center text-sm text-slate-600">
                            <span> ¿No tienes una cuenta?&nbsp;
                                <button onClick={() => navigate("/auth/register")} className="text-blue-800 hover:text-blue-600">Registrase</button>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
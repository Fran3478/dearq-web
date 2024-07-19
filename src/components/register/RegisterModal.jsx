import { useState } from "react"
import Button from "../buttons/Button"
import Error from "../errors/Error"
import { useAuth } from "../../hooks/useAuth"
import PropTypes from "prop-types"

const RegisterModal = ({close, change, onRegister}) => {
    const {register} = useAuth()

    const [userForm, setUserForm] = useState({
        username: "",
        email: "",
        password: "",
        rePassword: ""
    })

    const [error, setError] = useState({
        username: null,
        email: null,
        password: null,
        rePassword: null,
        register: null
    })

    const notEmpty = ({value, field}) => {
        if(value.trim().length === 0){
            setError(prevError => ({
                ...prevError,
                [field]: field === "rePassword" ? "Repita la contraseña" : field === "password" ? "Ingrese una contraseña" : field === "email" ? "Ingrese un correo" : field === "username" && "Se te asignara un nombre de usuario en base a tu correo"
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

    const passwordsMatch = ({password, rePassword}) => {
        if(password !== rePassword) {
            setError(prevError => ({
                ...prevError,
                rePassword: "Las contraseñas son distintas"
            }))
            return false
        } else {
            setError(prevError => ({
                ...prevError,
                rePassword: ""
            }))
            return true
        }
    }

    const checkRePassword = ({value}) => {
        return notEmpty({value, field: "rePassword"}) && passwordsMatch({password: userForm.password, rePassword: value})
    }

    const noError = () => {
        notEmpty({value: userForm.username, field: "username"})
        const emailExist = notEmpty({value: userForm.email, field: "email"})
        const passExist = notEmpty({value: userForm.password, field: "password"})
        const rePassCheck = checkRePassword({value: userForm.rePassword})
        if(emailExist && passExist && rePassCheck) {
            return true
        }
        return false
    }

    const handleChange = ({value, field}) => {
        setUserForm({...userForm, [field]: value})
        notEmpty({value, field})
        setError(prevError => ({
            ...prevError,
            register: null
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        setError(prevError => ({
            ...prevError,
            register: null
        }))
        if(noError()) {
            const response = await register(userForm)
            if(!response.register) {
                const registerErrors = response.errors
                console.log(registerErrors)
                registerErrors.forEach(error => {
                    setError(prevError => ({
                        ...prevError,
                        [error.path]: error.msg
                    }))
                });
            } else {
                onRegister(response.email)
            }
        }
    }

    return(
        <div id="login-popup" tabIndex="-1" className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex">
            <div className="relative p-4 w-full max-w-md h-full md:h-auto">

                <div className="relative bg-white rounded-lg shadow">
                    <button 
                        type="button" 
                        className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                        onClick={close}
                    >
                        <svg aria-hidden="true" className="w-5 h-5" fill="#c6c7c7" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                        </svg>
                    </button>

                <div className="p-5">

                    <div className="text-center">
                        <p className="mt-[2rem] mb-[3rem] text-3xl font-semibold leading-5 text-slate-900">
                            Registrar Usuario
                        </p>
                        
                    </div>

                    <div className="flex flex-col gap-2">

                        <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-[18px] w-[18px] "/>
                            Registrar con Google
                        </button>

                    </div>

                    <div className="mt-2 flex w-full pt-6">
                        <div className="h-px w-full bg-slate-200"></div>
                    </div>


                    <form className="w-full">
                        <div className="h-[1.5rem] mb-[1rem]">
                            {
                                error.register && <Error text={error.register} type={"fail"} />
                            }
                        </div>
                        <label htmlFor="username" className="sr-only">Nombre de Usuario</label>
                        <input name="username" type="text"
                            className={`block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.username || error.register) && "ring-1 ring-red-500"}`}
                            placeholder="Nombre de Usuario" 
                            value={userForm.username} 
                            onChange={({target}) => handleChange({value: target.value, field: "username"})}
                            onBlur={({target}) => notEmpty({value: target.value, field: "username"})}
                        />
                        <div className="h-[1.5rem] mb-[1rem]">
                            {
                                error.username && <Error text={error.username} type={"warning"} /> 
                            }
                        </div>
                        <label htmlFor="email" className="sr-only">Correo</label>
                        <input name="email" type="email" autoComplete="email"
                            className={`block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.email || error.register) && "ring-1 ring-red-500"}`}
                            placeholder="Correo" 
                            value={userForm.email} 
                            onChange={({target}) => handleChange({value: target.value, field: "email"})}
                            onBlur={({target}) => notEmpty({value: target.value, field: "email"})}
                        />
                        <div className="h-[1.5rem] mb-[1rem]">
                            {
                                error.email && <Error text={error.email} type={"fail"} />
                            }
                        </div>
                        <label htmlFor="password" className="sr-only">Contraseña</label>
                        <input name="password" type="password" autoComplete="new-password"
                            className={`mt-[1rem] block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.password || error.register) && "ring-1 ring-red-500"}`}
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
                        <label htmlFor="re-password" className="sr-only">Repita la contraseña</label>
                        <input name="re-password" type="password" autoComplete="new-password"
                            className={`mt-[1rem] block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(error.rePassword || error.register) && "ring-1 ring-red-500"}`}
                            placeholder="Repita la contraseña"
                            value={userForm.rePassword}
                            onChange={({target}) => handleChange({value: target.value, field: "rePassword"})}
                            onBlur={({target}) => notEmpty({value: target.value, field: "rePassword"})}
                        />
                        <div className="h-[1.5rem] mb-[1rem]">
                            {
                                error.rePassword && <Error text={error.rePassword} type={"fail"} />
                            }
                        </div>
                        <div className="my-[1.5rem] flex w-full justify-center">
                            <Button text={"Continuar"} handleClick={handleClick}/>

                        </div>
                    </form>

                    <div className="text-center text-sm text-slate-600">
                        ¿Ya tienes cuenta?
                        <button className="text-blue-800 hover:text-blue-600" onClick={change}> Iniciar Sesión</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )

}

RegisterModal.propTypes = {
    close: PropTypes.func,
    change: PropTypes.func,
    onRegister: PropTypes.func
}

export default RegisterModal
import { useState } from "react"
import SmallButton from "../../components/buttons/SmallButton"
import Error from "../../components/errors/Error"
import { useAuth } from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const reEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/

const EmailNotValidated = () => {

    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState({
        email: null,
        general: null
    })

    const navigate = useNavigate()
    const {resendEmail} = useAuth()

    const validEmail = (value) => {
        if(value.trim().length === 0) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "El campo no puede quedar vacío"
            }))
            return false
        }
        if(!reEmail.test(value)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Formato de correo invalido"
            }))
            return false
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            email: null
        }))
        return true
    }

    const handleChange = (value) => {
        setEmail(value)
        validEmail(value)
        setErrors(prevErrors => ({
            ...prevErrors,
            general: null
        }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        setErrors(prevErrors => ({
            ...prevErrors,
            general: null
        }))
        if(validEmail(email)){
            const response = await resendEmail(email)
            if(!response.resend) {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    general: response.error
                }))
            } else {
                navigate("/auth/email-val-notif", {state: {email}})
            }
        }
    }

    return(
        <div tabIndex="-1" className="min-w-full w-full h-full m-auto items-center justify-center flex">
            <div className="p-4 w-full max-w-lg h-full md:h-auto">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-5">
                        <div className="text-center">
                            <p className="mt-[2rem] mb-[3rem] text-3xl font-semibold leading-5 text-slate-900">
                               Error al validar correo
                            </p>
                        </div>
                        <div className="flex flex-col gap-[1rem]">
                            <div className="flex flex-col gap-[1rem] m-[1rem]">
                                <p>Ocurrió un error al intentar validar el correo.</p>
                                <p>Ingrese el correo con el que se registró y presione reenviar para volver a intentarlo.</p>
                                <div className="h-[1.5rem] mb-[1rem]">
                                    {
                                        errors.general && <Error text={errors.general} type={"fail"} />
                                    }
                                </div>
                                <input name="email" type="email" autoComplete="email" 
                                    placeholder="Ingrese el correo" value={email} 
                                    className={`block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1 ${(errors.email) && "ring-1 ring-red-500"}`}
                                    onChange={({target}) => handleChange(target.value)} 
                                    onBlur={({target}) => validEmail(target.value)}
                                />
                                <div className="h-[1.5rem] mb-[1rem]">
                                    {
                                        errors.email && <Error text={errors.email} type={"fail"} />
                                    }
                                </div>
                            </div>
                            <div className="my-[1.5rem] flex gap-[1rem] w-full justify-center">
                                <SmallButton text={"Reenviar"}  handleClick={handleClick} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailNotValidated
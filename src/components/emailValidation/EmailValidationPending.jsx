import { useLocation, useNavigate } from "react-router-dom"
import SmallButton from "../buttons/SmallButton"
import Error from "../../components/errors/Error"
import { useAuth } from "../../hooks/useAuth"
import { useState } from "react"

const EmailValidationPending = () => {

    const {state} = useLocation()
    const navigate = useNavigate()
    const {resendEmail} = useAuth()

    const [error, setError] = useState(null)

    const handleClick = async () => {
        setError(null)
        const response = resendEmail(state.email)
        if(!response.resend) setError(response.error)
        else navigate("/auth/email-val-notif", {state: {email: state.email, resend: true}})

    }

    return(
        <div tabIndex="-1" className="min-w-full w-full h-full m-auto items-center justify-center flex">
            <div className="p-4 w-full max-w-lg h-full md:h-auto">
                <div className="bg-white rounded-lg shadow">
                <div className="p-5">
                    <div className="text-center">
                        <p className="mt-[2rem] mb-[3rem] text-3xl font-semibold leading-5 text-slate-900">
                            {!state.resend ? "Validar Correo" : "Reenvio de Correo"}
                        </p>
                    </div>
                    <div className="flex flex-col gap-[1rem]">
                        <div className="flex flex-col gap-[1rem] m-[1rem]">
                            <p>Hemos enviado un correo de validación al correo: <strong>{state.email}</strong>.</p>
                            <p>Por favor, revisa tu bandeja de entrada y sigue las instrucciones para verificar tu cuenta.</p>
                            <p>Si no has recibido el correo, revisa tu carpeta de spam o correo no deseado, si aún no lo encuentras intenta reenviar el correo de validación.</p>
                        </div>
                        <div className="h-[1.5rem] mb-[1rem]">
                            {
                                error && <Error text={error} type={"fail"} />
                            }
                        </div>
                        <div className="my-[1.5rem] flex gap-[1rem] w-full justify-center">
                            <SmallButton text={"Reenviar"} appearance={"light"} handleClick={handleClick}/>
                            <SmallButton text={"Iniciar Sesión"}  handleClick={() => navigate("/auth/login")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default EmailValidationPending
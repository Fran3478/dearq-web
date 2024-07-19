import { useNavigate } from "react-router-dom"
import SmallButton from "../../components/buttons/SmallButton"


const EmailValidated = () => {

    const navigate = useNavigate()

    return(
        <div tabIndex="-1" className="min-w-full w-full h-full m-auto items-center justify-center flex">
            <div className="p-4 w-full max-w-lg h-full md:h-auto">
                <div className="bg-white rounded-lg shadow">
                    <div className="p-5">
                        <div className="text-center">
                            <p className="mt-[2rem] mb-[3rem] text-3xl font-semibold leading-5 text-slate-900">
                                Correo Validado
                            </p>
                        </div>
                        <div className="flex flex-col gap-[1rem]">
                            <div className="flex flex-col gap-[1rem] m-[1rem]">
                                <p>La dirección de correo se ha validado correctamente, inicia sesión para continuar.</p>
                            </div>
                            <div className="my-[1.5rem] flex gap-[1rem] w-full justify-center">
                                <SmallButton text={"Iniciar Sesión"}  handleClick={() => navigate("/auth/login", {replace: true})} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmailValidated
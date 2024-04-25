import { useState } from "react"
import Button from "../buttons/Button"

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [motive, setMotive] = useState("")
    const [message, setMessage] = useState("")

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [motiveError, setMotiveError] = useState("")
    const [messageError, setMessageError] = useState("")



    return(
            <div className="flex flex-col xl:w-[80%] m-auto text-sm xs:text-base">
                <div className="flex flex-col md:flex-row xl:flex-col 2xl:flex-row justify-between mb-[1rem] md:mb-[1.5rem]">
                    <input className="grow xl:grow-0 md:mr-[2rem] xl:mr-0 mb-[1rem] md:mb-0 xl:mb-[1.5rem] 2xl:m-0 rounded p-[0.4rem] xl:w-[70%] 2xl:w-[18rem] outline-none" name="name" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className="grow xl:grow-0 rounded p-[0.4rem] xl:w-[70%] 2xl:w-[18rem] outline-none" name="email" type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <select required className="rounded p-[0.4rem] xs:w-fit h-fit outline-none invalid:text-[#999]" name="motive" value={motive} onChange={(e) => setMotive(e.target.value)}>
                    <option hidden disabled value="">Seleccione tipo de consulta</option>
                    <option className="text-black" value="option-1">Opción 1</option>
                    <option className="text-black" value="option-2">Opción 2</option>
                    <option className="text-black" value="option-3">Opción 3</option>
                    <option className="text-black" value="another">Otro</option>
                </select>
                <textarea name="message" placeholder="Ingrese su mensaje" className="resize-none rounded p-[0.4rem] my-[1rem] md:my-[1.5rem] outline-none" rows={4} value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                <div className="m-auto mb-[1rem] md:mb-[1.5rem]">
                    <Button text={"Enviar"} />
                </div>
            </div>
            
    )
}

export default Form
import { useState } from "react"

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
            <div className="flex flex-col w-[80%] m-auto">
                <div className="flex justify-between mb-[1.5rem]">
                    <input className="rounded p-[0.4rem] w-[18rem] outline-none" name="name" type="text" placeholder="Nombre" value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className="rounded p-[0.4rem] w-[18rem] outline-none" name="email" type="email" placeholder="Correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <select required className="rounded p-[0.4rem] w-fit h-fit outline-none invalid:text-[#999]" name="motive" value={motive} onChange={(e) => setMotive(e.target.value)}>
                    <option hidden disabled value="">Seleccione tipo de consulta</option>
                    <option className="text-black" value="option-1">Opción 1</option>
                    <option className="text-black" value="option-2">Opción 2</option>
                    <option className="text-black" value="option-3">Opción 3</option>
                    <option className="text-black" value="another">Otro</option>
                </select>
                <textarea name="message" placeholder="Ingrese su mensaje" className="resize-none rounded p-[0.4rem] my-[1.5rem]  outline-none" rows={4} value={message}  onChange={(e) => setMessage(e.target.value)}></textarea>
                <button 
                    className="rounded-full bg-white text-[#f2840a] text-lg font-semibold w-fit m-auto py-[0.4rem] px-[2rem] mb-[2rem] transition-all hover:text-white hover:bg-[#f2840a] hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]"
                >
                    Enviar
                </button>
            </div>
            
    )
}

export default Form
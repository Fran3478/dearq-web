import { useState } from "react"
import SmallButton from "../buttons/SmallButton"
import { AiOutlineSend } from "react-icons/ai";

const Subscribe = () => {
    const [email, setEmail] = useState("")

    const handleChange = (target) => {
        setEmail(target.value)
    }

    return (
        <div className="">
            <p className="max-w-fit mb-[0.5rem] text-sm md:text-base font-semibold">Para no perderte las novedades e información:</p>
            <div className="flex flex-nowrap">
                <input className="p-[0.5rem] mr-[1rem] rounded-md text-black outline-none" type="email" name="email" id="email" placeholder="Ingrese su email" value={email} onChange={handleChange} />
                <SmallButton text={"Suscribirse"} icon={<AiOutlineSend/>} appearance={"dark"}/>
            </div>
        </div>
    )
}

export default Subscribe
import { useState } from "react"
import SmallButton from "../buttons/SmallButton"
import { AiOutlineSend } from "react-icons/ai";

const Subscribe = () => {
    const [email, setEmail] = useState("")

    const handleChange = (target) => {
        setEmail(target.value)
    }

    return (
        <div className="max-w-full md:max-w-[30rem] w-full m-auto">
            <p className="mb-[0.5rem] text-sm md:text-base font-semibold">Para no perderte las novedades e información:</p>
            <div className="flex flex-nowrap">
                <div className="grow mr-[0.5rem]">
                    <input className="w-full p-[0.5rem] rounded-md text-black outline-none" type="email" name="email" id="email" placeholder="Ingrese su email" value={email} onChange={handleChange} />
                </div>
                <SmallButton text={"Suscribirse"} icon={<AiOutlineSend/>} appearance={"dark"}/>
            </div>
        </div>
    )
}

export default Subscribe
import { useState } from "react"


const SubscribeButton = () => {
    const [email, setEmail] = useState("")

    const handleChange = (target) => {
        setEmail(target.value)
    }

    return (
        <div className="hidden sm:block">
            <p className="hidden md:block mb-[0.5rem] text-lg">Para recibir novedades e información:</p>
            <div className="flex flex-nowrap">
                <input className="p-[0.5rem] rounded-l-lg" type="email" name="email" id="email" placeholder="Ingrese su email" value={email} onChange={handleChange} />
                <button className="p-[0.5rem] rounded-r-lg xl:font-semibold xl:text-lg bg-[#f2840a]" >Suscribirse</button>
            </div>
        </div>
    )
}

export default SubscribeButton
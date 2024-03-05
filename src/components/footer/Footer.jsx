import { useState } from "react";
import logo from "../../assets/svg/dearq-logo.svg"
import { BsWhatsapp, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    const [email, setEmail] = useState("")

    const handleChange = (target) => {
        setEmail(target.value)
    }

    return (
        <div className="min-w-screen w-screen h-[20] grid grid-cols-12 grid-flow-row bg-[#4E5152] text-white p-[2rem]">
            <div className="col-span-4 row-span-2 justify-self-center">
                <h2 className="text-2xl font-bold">Suscríbete al newsletter</h2>
                <p className="pt-[1.5rem] pl-[2rem]">Ingresá tu email para recibir novedades e información acerca del maravilloso mundo de la neuro arquitectura:</p>
                <div className="pt-[1.5rem] pl-[4rem]">
                    <input className="text-black p-[0.5rem] text-xl" type="email" name="email" id="email" placeholder="Ingrese su email" value={email} onChange={handleChange} />
                    <button className="ml-[1.5rem] p-[0.5rem] rounded-lg bg-[#f2840a] text-xl" onClick={""}>Suscribirse</button>
                </div>
            </div>
            <div className="col-span-4 col-start-9 w-fit">
                <h2 className="text-2xl font-bold">Redes Sociales</h2>
                <div className="flex text-2xl py-[1.5rem] pl-[2rem]">
                    <a href="https://www.instagram.com/andromeda.crea/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                    <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsFacebook /></a>
                    <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsTwitterX /></a>
                    <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsLinkedin /></a>
                </div>
            </div>
            <div className="col-span-4 row-start-2 col-start-9">
                <h2 className="text-2xl font-bold">Contacto</h2>
                <div className="flex flex-col text-xl pl-[2rem]">
                    <a href="mailto:andromedacreatuespacio@gmail.com" target="_blank" rel="noreferrer" className="flex items-center pt-[1rem] w-fit"><span className="text-2xl pr-3"><BsEnvelopeFill /></span>andromedacreatuespacio@gmail.com </a>
                    <a href="https://wa.me/+543518115507" target="_blank" rel="noreferrer" className="flex items-center pt-[1rem] w-fit"><span className="text-2xl pr-3"><BsWhatsapp /></span>+54 351 811-5507</a>
                    <p className="flex items-center pt-[1rem]"><span className="text-2xl pr-3"><BsGeoAltFill /></span>Córdoba, Argentina CP 5000 </p>
                </div>
            </div>
            <div className="col-span-2 row-span-2 row-start-2 col-start-6 justify-self-center">
                <img className="w-9 sm:w-16 pointer-events-none m-auto" src={logo} alt="logodearq" />
                <p className="text-white font-tt-commons-pro-expanded-bold font-bold text-2xl sm:text-4xl">DEArq</p>
            </div>
        </div>
    )
}

export default Footer
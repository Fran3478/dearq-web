import { useState } from "react";
import logo from "../../assets/svg/dearq-logo.svg"
import { BsWhatsapp, BsEnvelopeFill, BsGeoAltFill, BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    const [email, setEmail] = useState("")

    const handleChange = (target) => {
        setEmail(target.value)
    }

    return (
        <div className="min-w-screen w-full h-[20] bg-[#4E5152] text-white">
            <div className="flex flex-col md:grid md:grid-cols-11 lg:grid-cols-8 xl:grid-cols-12 grid-flow-row p-[2rem] md:px-[1rem] md:py-[2rem] lg:p-[2rem] overflow-hidden">
                <div className="hidden md:block col-span-2 lg:col-span-3 xl:col-span-4 xl:row-span-2">
                    <div className="w-[25rem]">
                        <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">Suscríbete al newsletter</h2>
                        <p className="hidden xl:block pt-[1rem]">Ingresá tu email para recibir novedades e información acerca del maravilloso mundo de la neuro arquitectura:</p>
                        <div className="flex flex-nowrap pt-[1rem] lg:pl-[2rem]">
                            <input className="text-black p-[0.5rem] text-lg lg:text-xl" type="email" name="email" id="email" placeholder="Ingrese su email" value={email} onChange={handleChange} />
                            <button className="ml-[1rem] 2xl:ml-[1.5rem] p-[0.5rem] rounded-lg bg-[#f2840a] text-lg lg:text-xl" >Suscribirse</button>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-5 lg:col-span-3 md:row-start-2 md:mt-[1.5rem] xl:justify-self-end xl:row-start-1 xl:mt-0 xl:col-span-4 xl:col-start-9 w-fit">
                    <div className="md:w-[25rem]">
                        <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">Redes</h2>
                        <div className="flex text-2xl py-[1.5rem]">
                            <a href="https://www.instagram.com/andromeda.crea/" target="_blank" rel="noreferrer"><BsInstagram /></a>
                            <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsFacebook /></a>
                            <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsTwitterX /></a>
                            <a href="" target="_blank" rel="noreferrer" className="pl-[1.5rem]"><BsLinkedin /></a>
                        </div>
                    </div>
                </div>
                <div className="pt-[0.5rem] md:col-span-5 md:col-start-7 lg:col-span-3 md:row-span-2 lg:col-start-6 xl:col-span-4 xl:row-span-1 xl:row-start-2 xl:col-start-9 justify-self-end">
                    <div className="xl:w-[25rem]">
                        <h2 className="text-xl font-semibold lg:text-2xl lg:font-bold">Contacto</h2>
                        <div className="flex flex-col text-lg lg:text-xl">
                            <a href="mailto:andromedacreatuespacio@gmail.com" target="_blank" rel="noreferrer" className="flex items-center pt-[1rem] w-fit text-sm ">
                                <span className="text-base md:text-2xl pr-3"><BsEnvelopeFill /></span>
                                andromedacreatuespacio@gmail.com
                            </a>
                            <a href="https://wa.me/+543518115507" target="_blank" rel="noreferrer" className="flex items-center pt-[1rem] w-fit text-sm"><span className="text-base md:text-2xl pr-3"><BsWhatsapp /></span>+54 351 811-5507</a>
                            <p className="flex items-center pt-[1rem] text-sm"><span className="text-base md:text-2xl pr-3"><BsGeoAltFill /></span>Córdoba, Argentina CP 5000</p>
                        </div>
                    </div>
                </div>
                <div className="mt-[2rem] md:mt-0 md:col-start-6 md:row-start-3 lg:col-span-2 lg:row-span-2 lg:row-start-2 lg:col-start-4 xl:col-start-6 justify-self-center">
                    <img className="w-9 lg:w-16 pointer-events-none m-auto" src={logo} alt="logodearq" />
                    <p className="w-fit m-auto text-white font-tt-commons-pro-expanded-bold font-bold text-2xl lg:text-4xl">DEArq</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
import { useEffect, useState } from "react"
import { NavLink, useLocation } from "react-router-dom"


const Navbar = () => {

    const [active, setActive] = useState("start")
    const location = useLocation()

    useEffect(() => {
        if(location.pathname === "/") {
            setActive("start")
        } else {
            setActive(location.pathname.slice(1))
        }
    }, [location])

    return (
        <div className="hidden md:block m-auto">
            <div className="grid grid-cols-5 gap-4 text-xl font-semibold text-center">
                <NavLink to={"/"} id="start" className={`p-1 ${active === "start" && "border-b-2 border-[#fed531]"}`} >Inicio</NavLink>
                <NavLink to={"/about"} id="about" className={`p-1 ${active === "about" && "border-b-2 border-[#fed531]"}`} >Nosotros</NavLink>
                <NavLink to={"/services"} id="services" className={`p-1 ${active === "services" && "border-b-2 border-[#fed531]"}`} >Servicios</NavLink>
                <NavLink to={"/blog"} id="blog" className={`p-1 ${active === "blog" && "border-b-2 border-[#fed531]"}`} >Blog</NavLink>
                <NavLink to={"/contact"} id="contact" className={`p-1 ${active === "contact" && "border-b-2 border-[#fed531]"}`} >Contacto</NavLink>
            </div>

        </div>

    )
}

export default Navbar
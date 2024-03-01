import { useState } from "react"
import { NavLink } from "react-router-dom"


const Navbar = () => {

    const [active, setActive] = useState("start")
    const handleButton = (event) => {
        setActive(event.target.id)
    }

    return (
        <div className="hidden md:block m-auto">
            <div className="grid grid-cols-5 gap-4 text-xl font-semibold text-center">
                <NavLink to={"dearq-web/"} id="start" onClick={handleButton} className={`p-1 ${active === "start" ? "border-b-2 border-[#fed531]" : ""}`} >Inicio</NavLink>
                <NavLink to={"dearq-web/about"} id="about" onClick={handleButton} className={`p-1 ${active === "about" ? "border-b-2 border-[#fed531]" : ""}`} >Nosotros</NavLink>
                <NavLink to={"dearq-web/services"} id="services" onClick={handleButton} className={`p-1 ${active === "services" ? "border-b-2 border-[#fed531]" : ""}`} >Servicios</NavLink>
                <NavLink to={"dearq-web/blog"} id="blog" onClick={handleButton} className={`p-1 ${active === "blog" ? "border-b-2 border-[#fed531]" : ""}`} >Novedades</NavLink>
                <NavLink to={"dearq-web/contact"} id="contact" onClick={handleButton} className={`p-1 ${active === "contact" ? "border-b-2 border-[#fed531]" : ""}`} >Contacto</NavLink>
            </div>

        </div>

    )
}

export default Navbar
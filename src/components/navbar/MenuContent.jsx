import PropTypes from "prop-types"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const MenuContent = ({ handleActiveMenu, activeMenu }) => {
    const [active, setActive] = useState("start")
    const handleButton = (event) => {
        setActive(event.target.id)
        handleActiveMenu()
    }

    return (
        <div className={`md:hidden h-screen ${!activeMenu && "hidden"}`} onClick={handleActiveMenu}>
            <div className={`w-screen grid grid-cols-12 sm:grid-cols-6 bg-slate-100 pb-6`}>
                <div className="col-start-2 col-span-10 sm:col-start-2 sm:col-span-4 rounded-b-md p-6">
                    <div className="w-3/4 sm:w-2/4 m-auto text-2xl md:text-3xl text-white flex flex-col justify-center">
                        <NavLink to={"/"} id="start" onClick={handleButton} className={`text-center px-auto ${active === "start" ? "border-2 border-t-yellow-100 border-l-yellow-100 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#fed531]" : "border-2 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#dfb15b]"}`}>Inicio</NavLink>
                        <NavLink to={"/about"} id="about" onClick={handleButton} className={`mt-4 text-center ${active === "about" ? "border-2 border-t-yellow-100 border-l-yellow-100 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#fed531]" : "border-2 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#dfb15b]"}`}>Nosotros</NavLink>
                        <NavLink to={"/services"} id="services" onClick={handleButton} className={`mt-4 text-center ${active === "services" ? "border-2 border-t-yellow-100 border-l-yellow-100 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#fed531]" : "border-2 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#dfb15b]"}`}>Servicios</NavLink>
                        <NavLink to={"/blog"} id="blog" onClick={handleButton} className={`mt-4 text-center ${active === "blog" ? "border-2 border-t-yellow-100 border-l-yellow-100 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#fed531]" : "border-2 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#dfb15b]"}`}>Novedades</NavLink>
                        <NavLink to={"/contact"} id="contact" onClick={handleButton} className={`mt-4 text-center ${active === "contact" ? "border-2 border-t-yellow-100 border-l-yellow-100 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#fed531]" : "border-2 border-b-yellow-700 border-r-yellow-700 rounded-md bg-[#dfb15b]"}`}>Contacto</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

MenuContent.propTypes = {
    handleActiveMenu: PropTypes.func,
    activeMenu: PropTypes.bool
}

export default MenuContent
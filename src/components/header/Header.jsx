import { useState } from "react"
import logo from "../../assets/svg/dearq-logo.svg"
import Navbar from "../navbar/Navbar"
import MenuButton from "../navbar/MenuButton"
import MenuContent from "../navbar/MenuContent"

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const handleActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }
    return (
        <>
            <div className="fixed top-0 left-0 max-w-screen w-screen h-[3.5rem] sm:h-[5rem] md:h-[9rem] lg:h-[5.6rem] flex md:flex-col lg:flex-row p-3 md:p-6 bg-slate-200 select-none z-50">
                <div className="flex md:hidden">
                    <MenuButton handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
                </div>
                <div className="flex m-auto p-0 md:pb-4 lg:p-0">
                    <img className="w-7 sm:w-10 pointer-events-none" src={logo} alt="DEArq-logo" />
                    <span className="text-[#4E5152] font-tt-commons-pro-expanded-bold font-bold text-2xl pl-2 sm:text-4xl md:pl-6 sm:mt-auto mb-auto">DEArq</span>
                </div>
                <Navbar />
            </div>
            <div className={`fixed top-[3.5rem] sm:top-[5rem] z-40 min-w-screen ${!activeMenu && "-top-full"} transition-all duration-300`}>
                <MenuContent handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
            </div>
        </>
    )
}

export default Header
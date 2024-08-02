import { useState } from "react"
import Navbar from "../navbar/Navbar"
import MenuButton from "../navbar/MenuButton"
import MenuContent from "../navbar/MenuContent"
import SessionButton from "../navbar/SessionButton"

const Header = () => {
    const [activeMenu, setActiveMenu] = useState(false)
    const handleActiveMenu = () => {
        setActiveMenu(!activeMenu)
    }
    return (
        <>
            <header className="sticky top-0 left-0 min-w-screen w-full h-[3.5rem] sm:h-[5rem] md:h-[9rem] lg:h-[4rem] p-3 bg-gray-50 shadow-md shadow-black/10 select-none z-20">
                <div className="flex md:flex-col lg:flex-row">
                    <div className="flex md:hidden">
                        <MenuButton handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
                    </div>
                    <div className="w-1/4 flex justify-center m-auto p-0 md:pb-4 lg:p-0 relative">
                        <p className="text-2xl sm:text-4xl sm:mt-auto mb-auto relative">
                            <span className="text-[#4E5152] font-lastica font-bold">DEA</span>
                            <span className="text-[#ecedee] font-segoe font-normal" >rq</span>
                            <div className="absolute top-1 sm:top-0 -right-[1.20rem] sm:-right-5 -z-10 w-[3rem] h-[2rem] sm:w-[4rem] sm:h-[3rem] bg-[url('/assets/dearq-logo-single.svg')] bg-contain bg-no-repeat"></div>
                        </p>
                        {/* <img className="w-7 sm:w-10 pointer-events-none" src={logo} alt="DEArq-logo" /> */}
                    </div>
                    <div className="w-full lg:w-3/4 m-auto hidden md:block">
                        <Navbar />
                    </div>
                    <div className="absolute top-0 right-0 py-2">
                        <SessionButton/>
                    </div>
                </div>
            </header>
            <div className={`fixed z-10 min-w-screen ${!activeMenu && "-top-full"} transition-all duration-300`}>
                <MenuContent handleActiveMenu={handleActiveMenu} activeMenu={activeMenu} />
            </div>
        </>
    )
}

export default Header
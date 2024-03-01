import { useEffect, useState } from "react"
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5"
import PropTypes from "prop-types"

const Carrusel = ({ children: slides, autoSlide = false, autoSlideInterval = 4000 }) => {
    const [current, setCurrent] = useState(0)

    const prevSlide = () => setCurrent((current) => current === 0 ? slides.length - 1 : current - 1)

    const nextSlide = () => setCurrent((current) => current === slides.length - 1 ? 0 : current + 1)

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(() => { nextSlide() }, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [])
    return (
        <div className="overflow-hidden relative group">
            <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${current * 100}%)` }}>{slides}</div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prevSlide} className="hidden group-hover:block p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white">
                    <IoChevronBackOutline size={40} />
                </button>
                <button onClick={nextSlide} className="hidden group-hover:block p-1 rounded-full shadow bg-white/80 text-grey-800 hover:bg-white">
                    <IoChevronForwardOutline size={40} />
                </button>
            </div>
            <div className="absolute bottom-4 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((s, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-white rounded-full ${current === i ? "p-2" : "bg-opacity-50"}`}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Carrusel.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element),
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number
}

export default Carrusel
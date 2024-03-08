import PropTypes from "prop-types"
import { useEffect, useRef, useState } from "react"

const Carrusel = ({ slides, autoSlide = false, slideDelay = 4000 }) => {

    const [current, setCurrent] = useState(0)
    const timeoutRef = useRef(null)
    function resetTimeout() {
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }

    useEffect(() => {
        if (!autoSlide) return
        resetTimeout()
        timeoutRef.current = setTimeout(
            () =>
                setCurrent((prevCurrent) =>
                    prevCurrent === slides.length - 1 ? 0 : prevCurrent + 1
                ),
            slideDelay
        )
        return () => {
            resetTimeout()
        }
    }, [current])

    return (
        <div className="overflow-hidden relative group sm:w-[80%] md:w-[60%] 2xl:max-w-[55rem] mx-auto">
            <div className="flex transition-transform ease-out duration-1000" style={{ transform: `translateX(-${current * 100}%)` }}>
                {
                    slides.map((slide, i) => (
                        <div key={slide.id || i} className="min-w-full relative">
                            <img src={slide.url} alt={slide.id} className="w-full" />
                            <p className="text-center text-xl sm:text-3xl font-semibold italic py-[1.5rem] static">
                                {slide.title1}
                                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f2840a] relative inline-block">
                                    <span className="relative text-white">{slide.span}</span>
                                </span>
                                {slide.title2}
                            </p>
                        </div>
                    ))
                }
            </div>
            <div className="absolute bottom-0 right-0 left-0">
                <div className="flex items-center justify-center gap-2">
                    {slides.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-[#f2840a] rounded-full hover:cursor-pointer ${current === i ? "p-2" : "bg-opacity-50"}`} onClick={() => { setCurrent(i) }}></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

Carrusel.propTypes = {
    slides: PropTypes.array,
    autoSlide: PropTypes.bool,
    slideDelay: PropTypes.number
}

export default Carrusel
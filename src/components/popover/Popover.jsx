import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types"

const Popover = ({children, content, trigger = "click"}) => {

    const [show, setShow] = useState(false)
    const wrapperRef = useRef(null)

    const handleMouseOver = () => {
        if (trigger === "hover") {
            setShow(true)
        }
    }

    const handleMouseLeft = () => {
        if (trigger === "hover") {
            setShow(false)
        }
    }

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setShow(false);
            }
        }

        if (show) {
            document.addEventListener("mousedown", handleClickOutside)
            return () => {
                document.removeEventListener("mousedown", handleClickOutside)
            }
        }
    }, [show, wrapperRef])
    
    return (
        <div ref={wrapperRef} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeft} className=" h-fit relative flex flex-col justify-end  mr-[2rem]">
            <div onClick={() => setShow(!show)}>
                {children}
            </div>
            <div hidden={!show} className="min-w-max w-fit h-fit absolute z-10 transition-all top-[110%] right-0">
                <div className="rounded bg-white p-3 shadow-md border border-gray-100">
                    {content}
                </div>
            </div>
        </div>
  )
}

Popover.propTypes = {
    children: PropTypes.element,
    content: PropTypes.element,
    trigger: PropTypes.string
}

export default Popover
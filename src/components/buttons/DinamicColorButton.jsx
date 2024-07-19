import PropTypes from "prop-types"

const DinamicColorButton = ({text, icon, handleClick, disabledButton = false, color}) => {

    return(
        <button 
            className={`rounded-md ${disabledButton ? "bg-gray-300 text-gray-500 border-2 border-gray-500" : `bg-white hover:text-white xs:text-xl font-semibold w-fit py-[0.5rem] px-[2rem] transition-all hover:shadow-md ${color === "blue" ? "text-blue-500 border-2 border-blue-500 hover:bg-blue-500" : color === "green" ? "text-green-500 border-2 border-green-500 hover:bg-green-500" : color === "yellow" ? "text-yellow-500 border-2 border-yellow-500 hover:bg-yellow-500" : color === "red_ligth" ? "text-red-500 border-2 border-red-500 hover:bg-red-500" : color === "red_full" && "text-white hover:text-red-500 border-2 border-red-500 bg-red-500 hover:bg-white" } text-[#f2840a] border-2 border-[#f2840a] hover:bg-[#f2840a]"} ` }`}
            onClick={handleClick}
            disabled={disabledButton}
        >
            <p className="flex justify-center">
                {text}
                {
                    icon && (
                        <span className="pl-[1rem] m-auto text-2xl">{icon}</span>
                    )
                }
            </p>
        </button>
    )
}

DinamicColorButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    handleClick: PropTypes.func,
    disabledButton: PropTypes.bool,
    color: PropTypes.oneOf("blue", "red_light", "red_full", "green", "yellow")
}

export default DinamicColorButton
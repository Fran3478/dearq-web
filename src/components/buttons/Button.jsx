import PropTypes from "prop-types"

const Button = ({text, icon, handleClick, disabledButton = false}) => {

    return(
        <button 
            className={`rounded-md ${disabledButton ? "bg-gray-300 text-gray-500 border-2 border-gray-500" : "bg-white text-[#f2840a] border-2 border-[#f2840a] hover:text-white hover:bg-[#f2840a]"} xs:text-xl font-semibold w-fit py-[0.5rem] px-[2rem] transition-all hover:shadow-md`}
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

Button.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    handleClick: PropTypes.func,
    disabledButton: PropTypes.bool
}

export default Button
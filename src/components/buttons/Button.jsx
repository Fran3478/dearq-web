import PropTypes from "prop-types"

const Button = ({text, icon}) => {

    return(
        <button className="rounded-md bg-white text-[#f2840a] border-2 border-[#f2840a] xs:text-xl font-semibold w-fit py-[0.5rem] px-[2rem] transition-all hover:text-white hover:bg-[#f2840a] hover:shadow-md">
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
    icon: PropTypes.element
}

export default Button
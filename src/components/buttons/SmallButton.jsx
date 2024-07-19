import PropTypes from "prop-types"

const SmallButton = ({text, icon, appearance, handleClick}) => {

    return(
        <button onClick={handleClick} className={`rounded-md  w-fit py-[0.3rem] px-[0.8rem] transition-all ${appearance === "light" ? "bg-white text-[#f2840a] border-2 border-[#f2840a] hover:text-white hover:bg-[#f2840a]" : "bg-[#f2840a] text-white border-2 border-[#f2840a] hover:bg-white hover:text-[#f2840a]"} hover:shadow-md`}>
            <p className="flex justify-center">
                <span className="hidden xs:block md:hidden ml:block" >{text}</span>
                {
                    icon && (
                        <span className="xs:pl-[1rem] md:p-0 ml:pl-[1rem] text-2xl">{icon}</span>
                    )
                }
            </p>
        </button>
    )
}

SmallButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    appearance: PropTypes.oneOf(["light", "dark"]),
    handleClick: PropTypes.func
}

export default SmallButton
import PropTypes from "prop-types"

const SmallButton = ({text, icon, appearance}) => {

    return(
        <button className={`rounded-md  w-fit py-[0.3rem] px-[0.8rem] transition-all ${appearance === "light" ? "bg-white text-[#f2840a] border-2 border-[#f2840a] hover:text-white hover:bg-[#f2840a]" : "bg-[#f2840a] text-white border-2 border-[#f2840a] hover:bg-white hover:text-[#f2840a]"} hover:shadow-md`}>
            <p className="flex justify-center">
                <span className="hidden md:block" >{text}</span>
                {
                    icon && (
                        <span className="md:pl-[1rem] text-2xl">{icon}</span>
                    )
                }
            </p>
        </button>
    )
}

SmallButton.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    appearance: PropTypes.oneOf(["ligth", "dark"])
}

export default SmallButton
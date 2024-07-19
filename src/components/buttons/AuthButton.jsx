import PropTypes from "prop-types"

const AuthButton = ({text, appearance = "dark", handleClick}) => {

    return(
        <button
            onClick={handleClick}
            className={`rounded-md  w-fit py-[0.3rem] px-[0.8rem] transition-all ${appearance === "light" ? "bg-white text-[#f2840a] border-2 border-[#f2840a] hover:text-white hover:bg-[#f2840a]" : "bg-[#f2840a] text-white border-2 border-[#f2840a] hover:bg-white hover:text-[#f2840a]"} hover:shadow-md`}
        >
            <p className="flex justify-center">
                <span>{text}</span>
            </p>
        </button>
    )
}

AuthButton.propTypes = {
    text: PropTypes.string,
    appearance: PropTypes.oneOf(["light", "dark"]),
    handleClick: PropTypes.func
}

export default AuthButton
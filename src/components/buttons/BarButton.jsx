import PropTypes from "prop-types"

const BarButton = ({text, handleClick}) => {

    return(
        <button
            className="mr-auto hover:text-gray-400"
            onClick={handleClick}
        >
            <span>{text}</span>
        </button>
    )
}

BarButton.propTypes = {
    text: PropTypes.string,
    handleClick: PropTypes.func
}

export default BarButton
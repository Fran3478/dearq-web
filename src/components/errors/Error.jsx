import PropTypes from "prop-types"

const Status = ({ text, type }) => {

    return (
        <div className={`w-fit flex flex-col rounded-md  md:rounded-full md:flex-row py-2 text-sm ${type === "warning" ? "text-orange-400" : type === "fail" && "text-red-800"}`} >
            <span>{text}</span>
        </div>
    )
}

Status.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(["warning", "fail"])
}

export default Status
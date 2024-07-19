import { AiOutlineUser } from "react-icons/ai"
import PropTypes from "prop-types"

const UserButton = ({handleClick}) => {

    return(
        <div className="hidden md:block ml-auto">
            <button onClick={handleClick} className="flex items-center rounded-full shadow-md border p-[0.4rem] active:shadow-inner"><span className="m-auto"><AiOutlineUser size={"1.8rem"} className="text-gray-500"  /></span></button>
        </div>
    )
}

UserButton.propTypes = {
    handleClick: PropTypes.func
}

export default UserButton
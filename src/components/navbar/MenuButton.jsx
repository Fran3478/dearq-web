import PropTypes from "prop-types"
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const MenuButton = ({ handleActiveMenu, activeMenu }) => {

    return (
        <div className="absolute self-center">
            {
                !activeMenu ? (
                    <button onClick={handleActiveMenu} >
                        <AiOutlineMenu className="text-2xl sm:text-3xl" />
                    </button>
                ) : (
                    <button onClick={handleActiveMenu}>
                        <AiOutlineClose className="text-2xl sm:text-3xl" />
                    </button>
                )
            }
        </div>
    )
}

MenuButton.propTypes = {
    handleActiveMenu: PropTypes.func,
    activeMenu: PropTypes.bool
}

export default MenuButton
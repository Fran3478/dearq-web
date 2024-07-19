import PropTypes from "prop-types"
import { useAuth } from "../../hooks/useAuth"
import LoginForm from "../login/LoginForm"

const LoginValidator = ({children}) => {

    const { user } = useAuth()

    return(
        <>
            {user && user.role === "admin" ? children : <LoginForm/>}
        </>
    )
}

LoginValidator.propTypes = {
    children: PropTypes.element
}

export default LoginValidator
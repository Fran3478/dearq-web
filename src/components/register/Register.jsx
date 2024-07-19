import { useState } from "react"
import RegisterModal from "./RegisterModal"
import EmailValidationPending from "../emailValidation/EmailValidationPending"
import PropTypes from "prop-types"


const Register = ({close, change}) => {

    const [registered, setRegistered] = useState({
        status: false,
        email: null
    })

    return(
        <>
            {!registered.status && <RegisterModal onRegister={(email) => setRegistered({status: true, email})} close={close} change={change}/>}
            {registered.status && <EmailValidationPending email={registered.email}/>}
        </>
    )
}

Register.propTypes = {
    close: PropTypes.func,
    change: PropTypes.func
}

export default Register
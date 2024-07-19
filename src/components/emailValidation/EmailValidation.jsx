import { useParams } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import EmailValidated from "../../pages/emailValidation/EmailValidated"
import EmailNotValidated from "../../pages/error/EmailNotValidated"

const EmailValidation = () => {

    const {token} = useParams()
    const {validateEmail} = useAuth()
    const isValidated = validateEmail(token)

    if(!isValidated) return <EmailNotValidated/>

    return(
        <EmailValidated/>
    )
}

export default EmailValidation
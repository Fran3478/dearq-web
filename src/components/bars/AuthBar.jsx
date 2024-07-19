import { useAuth } from "../../hooks/useAuth"
import AuthButton from "../buttons/AuthButton"
import UserButton from "../buttons/UserButton"
import Popover from "../popover/Popover"
import AdminPopover from "../popover/AdminPopover"
import UserPopover from "../popover/UserPopover"
import CommonPopover from "../popover/CommonPopover"
import { useNavigate } from "react-router-dom"

const COMPONENT_MAP = {
    user: UserPopover,
    admin: AdminPopover 
}

const AuthBar = () => {

    const navigate = useNavigate()
    const {isAuthenticated, isAdmin} = useAuth()
    if(!isAuthenticated()) return <AuthButton text={"Iniciar Sesión"} handleClick={() => navigate("/auth/login")}/>

    const userType = isAdmin() ? "admin" : "user"

    const Component = COMPONENT_MAP[userType]

    return(
        <>
            <Popover
                content={<><Component/><CommonPopover/></>}
            >
                <UserButton/>
            </Popover>
        </>
    )
}

export default AuthBar
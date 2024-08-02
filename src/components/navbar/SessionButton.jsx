import { useNavigate } from "react-router-dom"
import AdminPopover from "../popover/AdminPopover"
import UserPopover from "../popover/UserPopover"
import { useAuth } from "../../hooks/useAuth"
import AuthButton from "../buttons/AuthButton"
import Popover from "../popover/Popover"
import CommonPopover from "../popover/CommonPopover"
import UserButton from "../buttons/UserButton"

const COMPONENT_MAP = {
    user: UserPopover,
    admin: AdminPopover
}

const SessionButton = () => {

    const navigate = useNavigate()
    const {isAuthenticated, isAdmin} = useAuth()

    if(!isAuthenticated()) return <AuthButton text={"Iniciar Sesión"} handleClick={() => navigate("/auth/login")} />
    
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

export default SessionButton
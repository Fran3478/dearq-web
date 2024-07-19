import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import NotAllow from "../components/errors/NotAllow"

const AdminRoute = () => {

    const {isAdmin} = useAuth()

    if(!isAdmin()) {
        return <NotAllow/>
    }

    return(
        <>
            <Outlet/>
        </>
    )
}

export default AdminRoute
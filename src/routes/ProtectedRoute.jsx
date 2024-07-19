import { Outlet, useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"

const ProtectedRoute = () => {

    const {isAuthenticated} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuthenticated()) {
            return navigate("/auth/login", {replace: true})
        }
    }, [isAuthenticated, navigate])


    return(
        <>
            <Outlet/>
        </>
    )
}

export default ProtectedRoute
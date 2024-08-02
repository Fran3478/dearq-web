import { Outlet } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import NotAllow from "../components/errors/NotAllow"
import { PrivatePostsProvider } from "../context/privatePosts"
import { PrivatePostProvider } from "../context/privatePost"

const AdminRoute = () => {

    const {isAdmin} = useAuth()

    if(!isAdmin()) {
        return <NotAllow/>
    }

    return(
        <>
            <PrivatePostsProvider>
                <PrivatePostProvider>
                    <Outlet/>
                </PrivatePostProvider>
            </PrivatePostsProvider>
        </>
    )
}

export default AdminRoute
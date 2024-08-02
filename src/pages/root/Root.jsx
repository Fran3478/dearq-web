import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import { PublicPostsProvider } from "../../context/publicPosts"

const Root = () => {

    return(
        <div className="flex flex-col min-h-screen bg-gray-100">
            <Header/>
            <div className="flex-grow flex h-full">
                <PublicPostsProvider>
                    <Outlet/>
                </PublicPostsProvider>
            </div>
            <Footer/>
        </div>
    )
}

export default Root
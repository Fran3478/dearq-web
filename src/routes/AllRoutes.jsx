import { Suspense } from "react"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"
import axios from "axios"
import useToken from "../hooks/useToken.js"
import Home from "../pages/home/Home.jsx"
import About from "../pages/about/About"
import Service from "../pages/service/Service.jsx"
import Contact from "../pages/contact/Contact"
import Blog from "../pages/blog/Blog"
import NotFound from "../components/errors/NotFound"
import Auth from "../components/auth/Auth"
import LoginForm from "../components/login/LoginForm"
import ProtectedRoute from "./ProtectedRoute"
import Root from "../pages/root/Root.jsx"
import AdminRoute from "./AdminRoute.jsx"
import RegisterForm from "../components/register/RegisterForm.jsx"
import EmailValidationPending from "../components/emailValidation/EmailValidationPending.jsx"
import EmailValidation from "../components/emailValidation/EmailValidation.jsx"
import PostManageView from "../pages/posts/PostManageView.jsx"
import DefaultView from "../components/posts/postView/DefaultView.jsx"
import CreatePost from "../pages/posts/CreatePost.jsx"
import PostControl from "../components/posts/postView/PostControl.jsx"
import Spinner from "../components/spinner/Spinner.jsx"

const AllRoutes = () => {
    const {token} = useToken()

    axios.interceptors.request.use(
        config => {
            if(token && !config.skipAuth) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        },
        error => {
            return Promise.reject(error)
        }
    )

    return(
        <Suspense fallback={<Spinner/>}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Root/>}>
                        <Route index element={<Home/>} />
                        <Route path="home" element={<Home/>} />
                        <Route path="about" element={<About/>} />
                        <Route path="services" element={<Service/>} />
                        <Route path="contact" element={<Contact/>} />
                        <Route path="blog" element={<Blog/>}>
                            <Route path="post/:id" element />
                        </Route>
                        <Route path="auth" element={<Auth/>}>
                            <Route path="login" element={<LoginForm/>} />
                            <Route path="register" element={<RegisterForm/>} />
                            <Route path="email-val-notif" element={<EmailValidationPending/>} />
                            <Route path="email-validation/:token" element={<EmailValidation/>} />
                        </Route>
                        <Route element={<ProtectedRoute/>}>
                            <Route path="user" element={<Outlet/>} >
                                <Route path="config" element />
                            </Route>
                            <Route path="admin" element={<AdminRoute/>}>
                                <Route path="posts" element={<PostManageView/>}>
                                    <Route index element={<DefaultView/>}/>
                                    <Route path=":id" element={<PostControl/>} />
                                </Route>
                                <Route path="new-post" element={<CreatePost/>} />
                                <Route path="edit/:id" />
                            </Route>
                        </Route>
                        <Route path="*" element={<NotFound/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Suspense>
    )
}

export default AllRoutes
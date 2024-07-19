import { useContext } from "react"
import { AuthContext } from "../context/auth"
import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"

export const useAuth = () => {
    const {user, setUser} = useContext(AuthContext)
    const navigate = useNavigate()

    const login = async ({username, password}) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {username, password})
            const token = response.data.token
            const decoded = jwtDecode(token)
            const role = decoded._role
            const loggedUser = {username: response.data.user, role}
            localStorage.setItem('_token', token)
            localStorage.setItem("_user", JSON.stringify(loggedUser))
            setUser(loggedUser)
            return {login: true, user: loggedUser}
        } catch (err) {
            console.log(err)
            const error = err?.response?.data
            return {logout: false, error}
        }
    }

    const logout = () => {
        try {
            localStorage.removeItem("_token")
            localStorage.removeItem("_user")
            setUser(null)
            navigate("/home")
            return {logout: true}
        } catch (err) {
            return {logout: false, err}
        }
    }

    const register = async ({username, email, password}) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signup`, {username, email, password})
            console.log(response)
            return {register: true, user: {username: response.data.user.username, email: response.data.user.email}}
        } catch (err) {
            console.log(err)
            let errors 
            if(err?.response?.data?.errors) errors = err.response.data.errors
            else errors = [{ msg: "Ocurrió un error inesperado, intentalo de nuevo en unos minutos", path: "register" }]
            return {register: false, errors}
        }
    }

    const isAuthenticated = () => {
        return user && user.role && user.username
    }

    const isAdmin = () => {
        return user && (user.role === "admin")
    }

    const validateEmail = async (token) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/verify-email/${token}`)
            console.log(response)
            return {validate: true}
        } catch (err) {
            console.log(err)
            return {validate: false, error: err}
        }
    }

    const resendEmail = async (email) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/user/resend-email/${email}`)
            console.log(response)
            return {resend: true}
        } catch (err) {
            console.log(err)
            return {resend: false, error: err}
        }
    }

    return {user, login, logout, register, isAuthenticated, isAdmin, validateEmail, resendEmail}
}
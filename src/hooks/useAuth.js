import axios from "axios"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import useToken from "./useToken"
import useUser from "./useUser"

export const useAuth = () => {
    
    const navigate = useNavigate()
    const {saveToken, removeToken} = useToken()
    const {user, saveUser, removeUser} = useUser()

    const login = async ({username, password}) => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/signin`, {username, password})
            const token = response.data.token
            const decoded = jwtDecode(token)
            const role = decoded._role
            const loggedUser = {username: response.data.user, role}
            saveToken(token)
            saveUser(loggedUser)
            return {login: true, user: loggedUser}
        } catch (err) {
            console.log(err)
            const error = err?.response?.data
            return {logout: false, error}
        }
    }

    const logout = () => {
        try {
            removeToken()
            removeUser()
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
        console.log(user)
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
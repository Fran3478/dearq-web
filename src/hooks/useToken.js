import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"

const useToken = () => {
    const {token, setToken} = useContext(AuthContext)

    useEffect(() => {
        const storedToken = localStorage.getItem("_token")
        if(storedToken) {
            setToken(storedToken)
        }
    }, [setToken])

    const saveToken = (newToken) => {
        localStorage.setItem("_token", newToken)
        setToken(newToken)
    }

    const removeToken = () => {
        localStorage.removeItem("_token")
        setToken(null)
    }

    return { token, saveToken, removeToken }
}

export default useToken
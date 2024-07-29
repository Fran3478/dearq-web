import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"

const useUser = () => {
    const {user, setUser} = useContext(AuthContext)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("_user"))
        if(storedUser) setUser(storedUser)
    },[setUser])

    const saveUser = (newUser) => {
        localStorage.setItem("_user", JSON.stringify(newUser))
        setUser(newUser)
    }

    const removeUser = () => {
        localStorage.removeItem("_user")
        setUser(null)
    }

    return {user, saveUser, removeUser}
}

export default useUser
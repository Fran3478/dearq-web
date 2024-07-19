import { createContext, useState } from "react"
import PropTypes from "prop-types"

const checkUser = () => {
    const token = localStorage.getItem("_token")
    const user = JSON.parse(localStorage.getItem("_user"))
    return token && user ? user : null
}

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(checkUser)
    return(
        <AuthContext.Provider value={{user, setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
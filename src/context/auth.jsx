import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState(null)

    return(
        <AuthContext.Provider value={{user, setUser, token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired
}
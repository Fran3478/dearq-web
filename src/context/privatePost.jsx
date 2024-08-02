import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const PrivatePostContext = createContext()

export const PrivatePostProvider = ({ children }) => {
    const [post, setPost] = useState(null)

    return(
        <PrivatePostContext.Provider value={{post, setPost}}>
            {children}
        </PrivatePostContext.Provider>
    )
}

PrivatePostProvider.propTypes = {
    children: PropTypes.node.isRequired
}
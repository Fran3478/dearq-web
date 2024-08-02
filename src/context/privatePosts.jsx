import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const PrivatePostsContext = createContext()

export const PrivatePostsProvider = ({ children }) => {
    const [posts, setPosts] = useState(null)

    return(
        <PrivatePostsContext.Provider value={{posts, setPosts}}>
            {children}
        </PrivatePostsContext.Provider>
    )
}

PrivatePostsProvider.propTypes = {
    children: PropTypes.node.isRequired
}
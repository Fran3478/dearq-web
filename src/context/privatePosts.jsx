import { createContext, useState } from "react"
import PropTypes from "prop-types"

export const PrivatePostsContext = createContext()

export const PrivatePostsProvider = ({ children }) => {
    const [data, setData] = useState(null)

    return(
        <PrivatePostsContext.Provider value={{data, setData}}>
            {children}
        </PrivatePostsContext.Provider>
    )
}

PrivatePostsProvider.propTypes = {
    children: PropTypes.node.isRequired
}
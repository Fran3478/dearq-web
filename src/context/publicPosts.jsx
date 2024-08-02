import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const PublicPostsContext = createContext()

export const PublicPostsProvider = ({ children }) => {
    const [data, setData] = useState(null)

    return(
        <PublicPostsContext.Provider value={{data, setData}}>
            {children}
        </PublicPostsContext.Provider>
    )
}

PublicPostsProvider.propTypes = {
    children: PropTypes.node.isRequired
}
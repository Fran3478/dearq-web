import { createContext, useState } from "react";
import PropTypes from "prop-types"

export const PostFormContext = createContext()

export const PostFormProvider = ({children}) => {
    const [viewData, setViewData] = useState({
        title: "",
        img: "",
        imgUrl: "",
        img_title: "",
        description: ""
    })

    const [content, setContent] = useState("")

    return(
        <PostFormContext.Provider value={({viewData, setViewData, content, setContent})}>
            {children}
        </PostFormContext.Provider>
    )
}

PostFormProvider.propTypes = {
    children: PropTypes.node.isRequired
}
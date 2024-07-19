import { useState } from "react"
import PostBar from "../../bars/PostBar"
import PostDetail from "./PostDetail"

const PostControl = () => {

    const [published, setPublished] = useState(false)

    return(
        <div className="w-full">
            <PostBar published={published}/>
            <PostDetail setPublished={setPublished} />
        </div>
    )
}

export default PostControl
import parse from "html-react-parser"
import PropTypes from "prop-types"
import { useEffect, useState } from "react"

const PostDetail = ({post}) => {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(post) setLoading(false)
    },[post])

    return(
        <div className="w-full flex flex-col items-center mt-[2rem]">
            {
                loading ? 
                    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
                :
                    <div className="flex flex-col gap-[2rem] w-full">
                        <img src={post.postView.img} className="w-[50rem] m-auto"/>
                        <h1 className="font-bold text-4xl uppercase text-center">{post.postView.title}</h1>
                        <div className="mx-[6rem] mt-[5rem]">
                            {parse(post.postContent.content)}
                        </div>
                    </div>

            }
        </div>
    )
}

PostDetail.propTypes = {
    post: PropTypes.object
}

export default PostDetail
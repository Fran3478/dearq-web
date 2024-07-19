import { useParams } from "react-router-dom"
import useFetchPost from "../../../hooks/useFetchPost"
import parse from "html-react-parser"
import PropTypes from "prop-types"
import { useEffect } from "react"

const PostDetail = ({setPublished}) => {

    const {id} = useParams()

    const url = `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_ADMIN_POST_URL}/${id}`
    const {data, loading, error} = useFetchPost(url)

    useEffect(() => {
        if(!loading) setPublished(data.published)
    },[loading])

    if(error) console.log(error)

    return(
        <div className="w-full flex flex-col items-center mt-[2rem]">
            {
                loading ? 
                    <div className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-blue-600" />
                :
                    <div className="flex flex-col gap-[2rem] w-full">
                        <img src={data.postView.img} className="w-[50rem] m-auto"/>
                        <h1 className="font-bold text-4xl uppercase text-center">{data.postView.title}</h1>
                        <div className="mx-[6rem] mt-[5rem]">
                            {parse(data.postContent.content)}
                        </div>
                    </div>

            }
        </div>
    )
}

PostDetail.propTypes = {
    published: PropTypes.bool,
    setPublished: PropTypes.func
}

export default PostDetail
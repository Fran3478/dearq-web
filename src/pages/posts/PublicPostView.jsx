import { useParams } from "react-router-dom"
import PostDetail from "../../components/posts/postView/PostDetail"
import PostDetailSkeleton from"../../components/loading/PostDetailSkeleton"
import useFetchPost from "../../hooks/useFetchPost"

const PublicPostView = () => {

    const {id} = useParams()

    const {post, loading, error} = useFetchPost(id)

    if(loading) {
        return(
            <PostDetailSkeleton/>
        )
    }

    if(error) console.log(error)

    return(
        <div className="w-full">
            <PostDetail post={post} /> 
        </div>
    )
}

export default PublicPostView
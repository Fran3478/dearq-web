import { useEffect } from "react"
import PostBar from "../../bars/PostBar"
import PostDetail from "./PostDetail"
import usePrivatePost from "../../../hooks/usePrivatePost"
import Notif from "../../notif/Notif"
import { useParams } from "react-router-dom"

const PostControl = () => {
    const {id} = useParams()
    const {post, getPost} = usePrivatePost()
    useEffect(() => {
        getPost(id)
    },[id])

    return(
        <div className="w-full relative">
            <PostBar/>
            <PostDetail post={post} />
            {/* {
                notif && <Notif notif={notif} handleClose={() => setNotif(null)}/>
            } */}
        </div>
    )
}

export default PostControl
import { useEffect, useState } from "react"
import usePrivatePosts from "../../../hooks/usePrivatePosts"
import AdminPostItemSkeleton from "../../loading/AdminPostItemSkeleton"
import PostItem from "./PostItem"

const PostList = () => {

    const {data} = usePrivatePosts()

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if(data?.posts) setLoading(false)
            console.log(data)
    },[data])
    

    if(loading) {
        return (
            <AdminPostItemSkeleton/>
        )
    }
    
    return(
        <div className="flex flex-col h-full m-[1rem] gap-[1rem]">
            {data.posts.map(post => (
                <PostItem key={post.id} id={post.id} img={post.postView.img} title={post.postView.title} published={post.published} />
            ))}
        </div>
    )
}

export default PostList
import useFetchPosts from "../../../hooks/useFetchPosts"
import AdminPostItemSkeleton from "../../loading/AdminPostItemSkeleton"
import PostItem from "./PostItem"

const PostList = () => {
    
    const {data, loading, error} = useFetchPosts(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_ADMIN_ALL_POSTS_URL}`)

    if(loading) {
        return (
            <AdminPostItemSkeleton/>
        )
    }

    if(error) {
        return <div>Error: {error.message}</div>
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
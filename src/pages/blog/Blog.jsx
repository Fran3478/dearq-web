import { useEffect, useState } from "react"
import Post from "../../components/blog/Post"
import usePublicPosts from "../../hooks/usePublicPosts"

const Blog = () => {
    
    const {data, getPosts} = usePublicPosts()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getPosts()
    },[])

    useEffect(() => {
        if(data?.posts) setLoading(false)
    },[data])

    if(loading) return(<p>loading</p>
    )

    return(
        <div className="min-w-screen w-full h-full m-auto">
            {
                data.posts.length !== 0 ? (
                    data.posts.map((post, i) => (
                        <Post key={post.id} id={post.id} post={post.postView} odd={Math.floor((i+1)%2)} />
                    ))
                ) : 
                (
                    <p className="text-4xl text-center text-gray-400">Aún no se realizó ninguna publicación</p>
                )
            }


            
        </div>
    )
}

export default Blog
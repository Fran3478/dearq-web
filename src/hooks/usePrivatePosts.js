import { useContext, useState } from "react"
import { PrivatePostsContext } from "../context/privatePosts"
import axios from "axios"

const usePrivatePosts = () => {

    const {data, setData} = useContext(PrivatePostsContext)

    const [error, setError] = useState(null)

    const getPosts = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_ADMIN_ALL_POSTS_URL}`)
            setData({
                posts: response.data.rows,
                totalPosts: response.data.totalPosts,
                currentPage: response.data.currentPage,
                totalPages: response.data.totalPages
            })
        } catch (err) {
             console.log(err)
            setError(err)
        }
    }

    const updatePublishedPost = (id) => {
        const updateList = data.posts.map(post => 
            post.id === id ? {...post, published: !post.published} : post
        )
        setData({...data, posts: updateList})
    }

    return {data, getPosts, updatePublishedPost, error}
}

export default usePrivatePosts
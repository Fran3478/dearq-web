import axios from "axios"
import { useEffect, useState } from "react"

const useFetchPost = (id) => {
    
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/blog/get-post/${id}`)
                console.log(response)
                setPost(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [id])
    return {post, loading, error}
}

export default useFetchPost
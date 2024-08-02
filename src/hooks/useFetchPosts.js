import axios from "axios"
import { useEffect, useState } from "react"

const useFetchPosts = (url) => {
    const [data, setData] = useState({
        posts: [],
        totalPosts: 0,
        currentPage: 0,
        totalPages: 0
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true)
            try {
                const response = await axios.get(url)
                setData({
                    posts: response.data.rows,
                    totalPosts: response.data.totalPosts,
                    currentPage: response.data.currentPage,
                    totalPages: response.data.totalPages
                })
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPosts()
    }, [url])

    return{ data, loading, error }
}

export default useFetchPosts
import axios from "axios"
import { useEffect, useState } from "react"

const useFetchPost = (url) => {
    
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await axios.get(url)
                console.log(response)
                setData(response.data)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }
        fetchPost()
    }, [url])
    return {data, loading, error}
}

export default useFetchPost
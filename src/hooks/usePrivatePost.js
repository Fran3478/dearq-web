import axios from "axios"
import { useContext, useState } from "react"
import { PrivatePostContext } from "../context/privatePost"
import usePrivatePosts from "./usePrivatePosts"

const usePrivatePost = () => {

    const {post, setPost} = useContext(PrivatePostContext)
    const {updatePublishedPost} = usePrivatePosts()

    const [notif, setNotif] = useState(null)
    const [error, setError] = useState(null)

    const fetchGet = async (url) => {
        try {
            const response = await axios.get(url)
            return {status: response.status, data: response.data}
        } catch (err) {
            console.log(err)
            return {status: err.status, err: err.message}
        }
    }
   
    const fetchPost = async (url) => {
        try {
            const response = await axios.post(url)
            return {status: response.status, data: response.data}
        } catch (err) {
            console.log(err)
            return {status: err.status, err: err.message}
        }
    }

    const getPost = async (id) => {
        const postFound = await fetchGet(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_ADMIN_POST_URL}/${id}`)
        if(postFound.status === 200) {
            setPost(postFound.data)
        } else {
            setNotif({type: "err", title: "Error al obtener la publicación", info: postFound.err})
        }
    }


    const editPost = () => {

    }


    const publishPost = async (id) => {
            const publish = await fetchPost(`${import.meta.env.VITE_BASE_URL}/admin/blog/publish-post/${id}`)
            console.log(publish)
            if(publish.status === 200) {
                updatePublishedPost(id)
                setPost({...post, published: true})
                setNotif({type: "ok", info: publish.data.message})
            } else if(publish.status === 409) {
                setNotif({type: "warn", title: "No se pudo publicar", info: publish.err})
            } else {
                setNotif({type: "err", title: "Error al publicar", info: publish.err})
            }
    }

    const deletePost = async (id) => {
        try {
            const response = await axios.delete(import.meta.env.VITE_BASE_URL + `/blog/delete-post/${id}`)
            setNotif({type: "ok", info: response.data.message})
        } catch (err) {
            console.log(err)
            setNotif({type: "err", info: err})
        }
    }

    return { post, notif, setNotif, getPost, publishPost, editPost, deletePost }

}

export default usePrivatePost
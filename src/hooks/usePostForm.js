import { useContext, useState } from "react"
import { PostFormContext } from "../context/postForm"
import Resizer from 'react-image-file-resizer'
import axios from "axios"

export const usePostForm = () => {
    const {viewData, setViewData, content, setContent} = useContext(PostFormContext)

    const [error, setError] = useState({
        view: null,
        content: null
    })

    const updateViewImage = (image) => {
        try {
            Resizer.imageFileResizer(
                image, 500, 300, "WEBP", 90, 0,
                (blob) => {
                    setViewData({...viewData, img: blob, imgUrl:URL.createObjectURL(blob)})
                },
                "blob"
            )
        } catch (err) {
            console.log(err)
        }
    }

    const uploadViewImage = async () => {
        try {
            let formData = new FormData()
            const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLUDINARY_CLOUD}/upload`
            formData.append("file", viewData.img)
            formData.append("upload_preset", import.meta.env.VITE_CLUDINARY_PRESET)
            formData.append("api_key", import.meta.env.VITE_CLOUDINARY_API_KEY)
            const response = await axios.post(url, formData, {skipAuth: true})
            return response.data.url
        } catch (err) {
            console.log(err)
        }
    }

    const viewChange = ({field, value}) => {
        setViewData({
            ...viewData,
            [field]: value
        })
    }

    const handleSavePost = async (content) => {
        try {
            const viewImageUrl = await uploadViewImage()
            const postForm = {...viewData, img: viewImageUrl, content}
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL + import.meta.env.VITE_SAVE_POST_URL}`, postForm)
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    return {viewData, content, viewChange, handleSavePost, updateViewImage, error}
}
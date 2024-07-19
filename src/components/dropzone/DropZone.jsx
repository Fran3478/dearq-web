import { useDropzone } from "react-dropzone"
import { useCallback, useState } from "react"
import { usePostForm } from "../../hooks/usePostForm"

const DropZone = () => {
    // const [dataUrl, setDataUrl] = useState(null)
    // const [uploadedUrl, setUploadedUrl] = useState(null)
    const {viewData, updateViewImage} = usePostForm()

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            updateViewImage(file)
        })
    }, [updateViewImage])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    // const selectedFile = acceptedFiles[0]

    // const uploadImage = async () => {
    //     let formData = new FormData()

    //     const url = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLUDINARY_CLOUD}/upload`
    //     formData.append("file", selectedFile)
    //     formData.append("upload_preset", import.meta.env.VITE_CLUDINARY_PRESET)
    //     const response = await axios.post(url, formData)
    //     setUploadedUrl(response.data.url)
    // }

    return(
        <div className={`w-full relative  rounded-lg p-6 cursor-pointer ${isDragActive ? "border border-blue-400 shadow-lg" : "border border-gray-300 border-dashed shadow-sm"}`} id="dropzone" {...getRootProps()}>
            <input type="file" className="absolute inset-0 w-full h-full opacity-0 z-50" {...getInputProps()} />
                {
                    viewData.img ?
                        <div className="text-center">
                            <img src={URL.createObjectURL(viewData.img)} className="mt-4 mx-auto max-h-40" id="preview"/>
                            <p className="text-sm font-medium text-gray-900 mt-[1.5rem]">Si sueltas o seleccionas otra imagen, reemplazaras la actual</p>
                        </div>
                    :
                    <div className="text-center">
                        <p className="text-sm font-medium text-gray-900 mb-[1.5rem]">Arrastra y suelta una imagen aquí, o haz click para seleccionar una</p>
                        <img className="mx-auto h-12 w-12" src="https://www.svgrepo.com/show/357902/image-upload.svg" alt=""/>
                    </div>
                }

        </div>
    )
}

export default DropZone
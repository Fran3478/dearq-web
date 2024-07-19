import { usePostForm } from "../../../hooks/usePostForm"
import DropZone from "../../dropzone/DropZone"

const PostViewForm = () => {

    const {viewData, viewChange} = usePostForm()

    return(
        <div className="flex flex-col mx-[4rem] gap-[2rem] mt-[4rem] bg-white p-[2rem] rounded-md shadow-md">
            <h2 className="font-semibold text-xl">Vista Publicación</h2>
            <div className="flex gap-[1.5rem]">
                <div className="flex flex-col w-1/2 gap-[1rem] items-center">
                    <label htmlFor="title" className="sr-only">Título</label>
                    <input name="title" type="text" autoComplete="off" placeholder="Título" value={viewData.title} onChange={({target}) => viewChange({field: "title", value: target.value})}
                        className="rounded-md max-w-[40rem] w-full h-[2.5rem] border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1"
                    />

                    <label htmlFor="image-title" className="sr-only">Titulo para la imagen</label>
                    <input name="image-title" autoComplete="off" placeholder="Titulo para la imagen" value={viewData.img_title} onChange={({target}) => viewChange({field: "img_title", value: target.value})}
                        className="rounded-md max-w-[40rem] w-full h-[2.5rem] border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1"
                    />

                    <label htmlFor="description" className="sr-only">Descripción</label>
                    <textarea name="description" autoComplete="off" placeholder="Descripción" value={viewData.description} onChange={({target}) => viewChange({field: "description", value: target.value})}
                        className="rounded-md max-w-[40rem] w-full h-[6rem] border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-1"
                    />
                </div>
                <div className="flex flex-col w-1/2 items-center">
                    <DropZone/>
                </div>
            </div>
        </div>
    )
}

export default PostViewForm
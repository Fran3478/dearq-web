import { usePostForm } from "../../../hooks/usePostForm"
import Post from "../../blog/Post"

const PostPreview = () => {

    const {viewData} = usePostForm()

    return(
        <div className="flex flex-col mx-[4rem] gap-[2rem] mt-[2rem] bg-white p-[2rem] rounded-md shadow-md">
            <p className="font-semibold text-xl">Vista Previa</p>
            <div className="border rounded-md shadow-md">
                <Post post={viewData} preview={true} />
            </div>
        </div>
    )
}

export default PostPreview
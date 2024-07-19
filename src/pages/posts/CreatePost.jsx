import PostContentForm from "../../components/posts/postForm/PostContentForm"
import PostViewForm from "../../components/posts/postForm/PostViewForm"
import PostPreview from "../../components/posts/postView/PostPreview"
import { PostFormProvider } from "../../context/postForm"

const CreatePost = () => {

    return(
        <PostFormProvider>
            <div className="w-full flex flex-col m-[1rem]">
                <h2 className="text-2xl font-semibold text-center" >Nueva publicación</h2>
                <PostViewForm/>
                <PostPreview/>
                <div className="flex flex-col gap-[2rem] mx-[4rem] mt-[2rem] bg-white p-[2rem] rounded-md shadow-md">
                    <p className="font-semibold text-xl">Contenido Publicación</p>
                    <PostContentForm/>
                </div>
            </div>
        </PostFormProvider>
    )
}

export default CreatePost
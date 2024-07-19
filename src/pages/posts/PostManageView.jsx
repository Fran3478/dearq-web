import { Outlet } from "react-router-dom"
import PostList from "../../components/admin/postManagement/PostList"

const PostManageView = () => {

    return(
        <div className="flex flex-grow">
            <aside className="w-1/4 h-full overflow-y-auto bg-gray-200">
                <PostList/>
            </aside>
            <main className="w-3/4 h-full flex items-center justify-center bg-gray-100">
                <Outlet/>
            </main>
        </div>
    )
}

export default PostManageView
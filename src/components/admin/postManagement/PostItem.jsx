import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const PostItem = ({id, title, published, img}) => {

    const navigate = useNavigate()

    return(
        <div className="w-full shadow-md hover:shadow-inner hover:cursor-pointer flex flex-col bg-white rounded-md p-3" onClick={() => navigate(`/admin/posts/${id}`)}>
            <div className="w-full flex relative">
                <img src={img} className="min-h-[5rem] h-[5rem] min-w-[8rem]  object-cover w-[8rem] overflow-hidden aspect-video mr-[1.5rem]"/>
                <div className="flex flex-col w-full justify-center">
                    <p className="max-w-[15rem] font-semibold text-left truncate">{title}</p>
                </div>
                <div className="text-end text-xs absolute right-0" >{published ? <span className="p-1 border border-green-500 bg-green-100 text-green-600 font-semibold rounded-md">Publicado</span> : <span className="p-1 border border-red-500 bg-red-100 text-red-600 font-semibold rounded-md">No publicado</span>}</div>
            </div>
        </div>
    )
}

PostItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    img: PropTypes.string,
    published: PropTypes.bool
}

export default PostItem
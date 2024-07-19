import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

const PostItem = ({id, title, published}) => {

    const navigate = useNavigate()

    return(
        <button className="w-full shadow-md hover:shadow-inner flex items-center justify-between bg-white rounded-md p-3" onClick={() => navigate(`/admin/posts/${id}`)}>
            <p className="font-semibold">{title}</p>
            <p>{published ? <span className="p-1 border border-green-500 bg-green-100 text-green-600 font-semibold rounded-md">Publicado</span> : <span className="p-1 border border-red-500 bg-red-100 text-red-600 font-semibold rounded-md">No publicado</span>}</p>
        </button>
    )
}

PostItem.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    published: PropTypes.bool
}

export default PostItem
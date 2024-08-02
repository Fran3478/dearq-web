import PropTypes from "prop-types"
import DinamicColorButton from "../buttons/DinamicColorButton"
import usePrivatePost from "../../hooks/usePrivatePost"
import { useEffect, useState } from "react"
import ButtonSpinner from "../spinner/ButtonSpinner"

const PostBar = () => {

    const {post, publishPost} = usePrivatePost()
    const [loading, setLoading] = useState(true)

    const handlePublish = () => {
        publishPost(post.id)
    }

    useEffect(() => {
        if(post) setLoading(false)
    }, [post])

    return(
        <div className="h-[3rem] flex gap-[2rem] m-[1rem] justify-end">
            <DinamicColorButton text={"Editar"} color={"blue"}/>
            {
                loading ? 
                    <DinamicColorButton icon={<ButtonSpinner/>} disabledButton={true}/> :
                    <DinamicColorButton text={post.published ? "Despublicar" : "Publicar"} color={post.published ? "yellow" : "green"} handleClick={handlePublish}/>
            }
            <DinamicColorButton text={"Eliminar"} color={"red_full"}/>
        </div>
    )
}

PostBar.propTypes = {
    published: PropTypes.bool
}

export default PostBar
import PropTypes from "prop-types"
import DinamicColorButton from "../buttons/DinamicColorButton"

const PostBar = ({published}) => {

    return(
        <div className="h-[3rem] flex gap-[2rem] m-[1rem] justify-end">
            <DinamicColorButton text={"Editar"} color={"blue"}/>
            <DinamicColorButton text={published ? "Despublicar" : "Publicar"} color={published ? "yellow" : "green"}/>
            <DinamicColorButton text={"Eliminar"} color={"red_full"}/>
        </div>
    )
}

PostBar.propTypes = {
    published: PropTypes.bool
}

export default PostBar
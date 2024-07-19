import { useNavigate } from "react-router-dom"
import BarButton from "../buttons/BarButton"

const AdminPopover = () => {

    const navigate = useNavigate()

    return(
        <div className="flex flex-col gap-[0.3rem]">
            <BarButton text={"Nueva Publicación"} handleClick={() => navigate("/admin/new-post")} />
            <BarButton text={"Administrar Publicaciónes"} handleClick={() => navigate("/admin/posts")} />
        </div>
    )
}

export default AdminPopover
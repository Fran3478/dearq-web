import { useAuth } from "../../hooks/useAuth"
import BarButton from "../buttons/BarButton"


const CommonPopover = () => {

    const {logout} = useAuth()

    return(
        <div className="mt-[0.3rem] flex flex-col gap-[0.3rem]">
            <hr />
            <BarButton text={"Cerrar Sesión"} handleClick={() => logout()} />
        </div>
    )
}

export default CommonPopover
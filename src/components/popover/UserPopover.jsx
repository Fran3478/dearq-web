import BarButton from "../buttons/BarButton"

const UserPopover = () => {

    return(
        <div className="flex flex-col gap-[0.3rem]">
            <BarButton text={"Nueva Publicación"} />
            <BarButton text={"Administrar Publicaciónes"} />
        </div>
    )
}

export default UserPopover
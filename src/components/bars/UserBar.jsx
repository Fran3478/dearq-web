import { useAuth } from "../../hooks/useAuth"

const UserBar = () => {

    const { user } = useAuth()

    return(
        <div className="flex justify-end items-center gap-4">
                <p>Bienvenido:</p>
                <button className="px-[0.8rem] py-[0.6rem] rounded-md border border-gray-100 shadow-md hover:shadow-inner"><p className="flex gap-[0.3rem]">{user.username} </p></button>
            </div>
    )
}

export default UserBar
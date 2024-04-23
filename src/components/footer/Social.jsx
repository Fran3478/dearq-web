import { BsInstagram, BsFacebook } from "react-icons/bs";

const Social = () => {
    return (
        <div className="flex gap-[1rem] xs:flex-col xs:gap-[1.5rem] sm:gap-[1rem] xl:flex-row xl:gap-[2rem] w-full text-2xl">
            <a className="" href="https://www.instagram.com/andromeda.crea/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            <a className="" href="" target="_blank" rel="noreferrer" ><BsFacebook /></a>
        </div>
    )
}

export default Social
import { BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";

const Social = () => {
    return (
        <div className="flex w-full text-2xl">
            <a className="mx-[1rem]" href="https://www.instagram.com/andromeda.crea/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            <a className="mx-[1rem]" href="" target="_blank" rel="noreferrer" ><BsFacebook /></a>
            <a className="mx-[1rem]" href="" target="_blank" rel="noreferrer" ><BsTwitterX /></a>
            <a className="mx-[1rem]" href="" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        </div>
    )
}

export default Social
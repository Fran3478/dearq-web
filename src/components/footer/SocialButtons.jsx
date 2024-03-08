import { BsInstagram, BsFacebook, BsTwitterX, BsLinkedin } from "react-icons/bs";

const SocialButtons = () => {
    return (
        <div className="flex w-full text-2xl justify-evenly sm:justify-between sm:text-3xl">
            <a href="https://www.instagram.com/andromeda.crea/" target="_blank" rel="noreferrer"><BsInstagram /></a>
            <a href="" target="_blank" rel="noreferrer" ><BsFacebook /></a>
            <a href="" target="_blank" rel="noreferrer" ><BsTwitterX /></a>
            <a href="" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
        </div>
    )
}

export default SocialButtons
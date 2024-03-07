import { BsWhatsapp, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

const ContactButtons = () => {

    return (
        <div className="flex flex-col">
            <a href="mailto:andromedacreatuespacio@gmail.com" target="_blank" rel="noreferrer" className="flex items-center w-fit text-sm sm:text-base xl:text-lg">
                <span className="hidden sm:block text-base md:text-lg pr-3"><BsEnvelopeFill /></span>
                andromedacreatuespacio@gmail.com
            </a>
            <a href="https://wa.me/+543518115507" target="_blank" rel="noreferrer" className="flex items-center pt-[0.5rem] sm:pt-[1rem] w-fit text-sm sm:text-base xl:text-lg">
                <span className="hidden sm:block text-base md:text-lg pr-3"><BsWhatsapp /></span>
                +54 351 811-5507
            </a>
            <p className="flex items-center pt-[0.5rem] sm:pt-[1rem] text-sm sm:text-base xl:text-lg">
                <span className="hidden sm:block text-base md:text-lg pr-3"><BsGeoAltFill /></span>
                Córdoba, Argentina CP 5000
            </p>
        </div>
    )
}

export default ContactButtons
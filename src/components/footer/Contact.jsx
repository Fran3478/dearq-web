import { BsWhatsapp, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

const Contact = () => {

    return (
        <div className="flex flex-col text-center">
            <div className="flex">
                <div className="pr-3 text-lg my-auto"><BsEnvelopeFill /></div>
                <a href="mailto:infodearq@gmail.com" target="_blank" rel="noreferrer" className="w-fit">
                    infodearq@gmail.com
                </a>
            </div>
            <div className="flex pt-[0.5rem]">
                <div className="pr-3 text-lg my-auto"><BsWhatsapp /></div>
                <a href="https://wa.me/+543518115507" target="_blank" rel="noreferrer" className="w-fit">
                    +54 351 811-5507
                </a>
            </div>
            <div className="flex pt-[0.5rem]">
                <div className="pr-3 text-lg my-auto"><BsGeoAltFill /></div>
                <p className="w-fit">
                    Córdoba, Argentina CP 5000
                </p>
            </div>
        </div>
    )
}

export default Contact
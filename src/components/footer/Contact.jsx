import { BsWhatsapp, BsEnvelopeFill, BsGeoAltFill } from "react-icons/bs";

const Contact = () => {

    return (
        <div className="flex flex-col 2xl:flex-row text-center">
            <div className="flex">
                <div className="pr-3 text-lg my-auto"><BsEnvelopeFill /></div>
                <a href="mailto:infodearq@gmail.com" target="_blank" rel="noreferrer" className="w-fit">
                    infodearq@gmail.com
                </a>
            </div>
            <div className="flex pt-[0.5rem] 2xl:p-0 2xl:mx-[2rem]">
                <div className="pr-3 text-lg my-auto"><BsWhatsapp /></div>
                <a href="https://wa.me/+543518115507" target="_blank" rel="noreferrer" className="w-fit">
                    +54 351 811-5507
                </a>
            </div>
            <div className="flex pt-[0.5rem] 2xl:p-0">
                <div className="pr-3 text-lg my-auto"><BsGeoAltFill /></div>
                <p className="w-fit">
                    Córdoba, Argentina
                </p>
            </div>
        </div>
    )
}

export default Contact
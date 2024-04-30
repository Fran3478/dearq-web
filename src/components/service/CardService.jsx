import PropTypes from "prop-types"

const CardService = ({imgUrl, title, text, alt}) => {

    return(
        <div className="w-[17rem] h-[22rem] xxs:w-[20rem] xxs:h-[25rem] sm:w-[17rem] sm:h-[22rem] xl:w-[20rem] xl:h-[25rem] relative group cursor-default overflow-hidden">
            <div className="">
                <img src={imgUrl} alt={alt} className={`w-[17rem] h-[22rem] xxs:w-[20rem] xxs:h-[25rem] sm:w-[17rem] sm:h-[22rem] xl:w-[20rem] xl:h-[25rem] object-cover`}/>
            </div>
            <div className="w-[17rem] h-[17.5rem] xxs:w-[20rem] xxs:h-[20rem] sm:w-[17rem] sm:h-[17.5rem] xl:w-[20rem] xl:h-[20rem] absolute top-0 flex bg-white/80 translate-x-full group-hover:translate-x-0 transition transform duration-300 ease-out">
                <p className="m-auto mx-[1.5rem] text-center leading-tight tracking-tight" >{text}</p>
            </div>
            <div className="w-[16rem] h-[3.5rem] xxs:w-[19rem] xxs:h-[4rem] sm:w-[16rem] sm:h-[3.5rem] xl:w-[19rem] xl:h-[4rem] absolute bottom-0 m-[0.5rem] bg-white flex">
                <p className="w-fit m-auto text-center inset-y-0 px-[1rem]" >{title}</p>
            </div>
        </div>
    )
}

CardService.propTypes = {
    imgUrl: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    alt: PropTypes.string
}

export default CardService
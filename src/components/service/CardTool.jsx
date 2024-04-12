import PropTypes from "prop-types"

const CardService = ({imgUrl, title, text, alt}) => {

    return(
        <div className="">
            <div className="w-[15rem] h-[4rem] bg-white flex">
                    <p className="w-fit m-auto text-center inset-y-0 px-[1rem]" >{title}</p>
                </div>
            <div className="w-[15rem] h-[15rem] group cursor-default rounded-full overflow-hidden bg-black">
                <div className="">
                    <img src={imgUrl} alt={alt} className={`w-[15rem] h-[15rem] object-cover`}/>
                </div>
                {/* <div className="w-[20rem] h-[20rem] absolute top-0 flex bg-white/80 translate-x-full group-hover:translate-x-0 transition transform duration-300 ease-out">
                    <p className="m-auto mx-[1.5rem] text-center leading-tight tracking-tight" >{text}</p>
                </div> */}
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
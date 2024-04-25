import PropTypes from "prop-types"

const TitledImage = ({img, imgAlt, img_title, appearance}) => {

    return(
        <div className={`relative overflow-hidden m-auto ${appearance === "xs" ? "w-[15rem] h-[10rem]" : appearance === "sm" ? "w-[20rem] h-[13rem]" : appearance === "lg" ? "w-[31rem] h-[20rem]" : "w-[15rem] h-[10rem] xxs:w-[20rem] xxs:h-[13rem] sm:w-[31rem] sm:h-[20rem]"}`}>
            <div className={`absolute w-[150%] h-[100%] -left-5 bg-gradient-to-br from-[#f2840a] via-[#fed531] to-[#dfb15b] inset-y-1 skew-y-[7deg] origin-bottom-left ${appearance === "xs" ? "mt-[5rem]" : appearance === "sm" ? "mt-[7rem]" : appearance === "lg" ? "mt-[11.5rem]" : "mt-[5rem] xxs:mt-[7rem] sm:mt-[11.5rem]"}`}></div>
            <p className={`absolute bottom-0 text-white font-semibold h-[25%] ${appearance === "xs" ? "m-[0.7rem] w-[66%] text-base" : appearance === "sm" ? "m-[1rem] w-[62%] text-xl" : appearance === "lg" ? "m-[1rem] w-[60%] text-3xl" : " m-[0.7rem] xxs:m-[1rem] w-[66%] xxs:w-[62%] sm:w-[60%] text-base xxs:text-xl sm:text-3xl"}`}>{img_title}</p>
            <img className={`object-cover m-auto overflow-hidden ${appearance === "xs" ? "w-[15rem] h-[10rem]" : appearance === "sm" ? "w-[20rem] h-[13rem]" : appearance === "lg" ? "w-[31rem] h-[20rem]" : "w-[15rem] h-[10rem] xxs:w-[20rem] xxs:h-[13rem] sm:w-[31rem] sm:h-[20rem]"}`} src={img} alt={imgAlt} />
        </div>
    )
}

TitledImage.propTypes = {
    img: PropTypes.string,
    imgAlt: PropTypes.string,
    img_title: PropTypes.string,
    appearance: PropTypes.oneOf(["xs", "sm", "lg", ""])
}

export default TitledImage
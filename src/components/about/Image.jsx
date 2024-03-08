import PropTypes from "prop-types"

const Image = ({ img, alt, style = "rounded-square", imageStyle = "adapt" }) => {

    return (
        <div className={`w-[8rem] ${style === "round" ? "rounded-full overflow-hidden" : style === "rounded-square" ? "rounded-lg overflow-hidden" : null}`}>
            <img src={img} alt={alt} className={`h-[8rem] ${imageStyle === "full" ? "object-center" : imageStyle === "adapt" ? "object-cover" : null}`} />
        </div>
    )
}

Image.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    style: PropTypes.string,
    imageStyle: PropTypes.string
}

export default Image

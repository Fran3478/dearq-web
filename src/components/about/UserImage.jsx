import PropTypes from "prop-types"

const userImage = ({ img, alt, userName, userRole, style = "rounded-square", imageStyle = "adapt" }) => {

    return (
        <div className="">
            <div className={`w-[6rem] h-[6rem] m-auto ${style === "round" ? "rounded-full overflow-hidden" : style === "rounded-square" && "rounded-lg overflow-hidden"}`}>
                <img src={img} alt={alt} className={`w-[6rem] h-[6rem] ${imageStyle === "full" ? "object-center" : imageStyle === "adapt" && "object-cover"}`} />
            </div>
            <div className="text-center">
                <p className="text-nowrap" >{userName}</p>
                <p className="text-gray-600" >{userRole}</p>
            </div>
        </div>
    //     <div className="">
    //     <div className={`w-[8rem] h-[8rem] m-auto ${style === "round" ? "rounded-full overflow-hidden" : style === "rounded-square" && "rounded-lg overflow-hidden"}`}>
    //         <img src={img} alt={alt} className={`w-[8rem] h-[8rem] ${imageStyle === "full" ? "object-center" : imageStyle === "adapt" && "object-cover"}`} />
    //     </div>
    //     <div className="text-center">
    //         <p className="font-semibold text-nowrap" >{userName}</p>
    //         <p className="text-gray-600" >{userRole}</p>
    //     </div>
    // </div>
    )
}

userImage.propTypes = {
    img: PropTypes.string,
    alt: PropTypes.string,
    userName: PropTypes.string,
    userRole: PropTypes.string,
    style: PropTypes.string,
    imageStyle: PropTypes.string
}

export default userImage

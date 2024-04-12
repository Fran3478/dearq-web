import PropTypes from "prop-types"

const AboutSection = ({text, bgImg, bgSize="auto"}) => {

    return (
        <section className="ml:w-[90%] m-auto">
                <div className={`w-full bg-fixed bg-no-repeat bg-center bg-[#f6f4ef] ${bgSize === "contain" ? "bg-contain sm:bg-auto" : bgSize === "auto" && "bg-auto md:bg-contain"}`} style={{ backgroundImage: `url(${bgImg})` }}>
                    <div className="h-[7rem] xxs:h-[15rem] shadow-innerFull"></div>
                </div>
                <div className="m-auto flex bg-white/90">
                    <div className="p-[2rem] rounded-b-md">
                        <p className="tracking-tight leading-snug" >&quot;{text}&quot;</p>
                    </div>
                </div>
        </section>
    //     <section className="mb-[5rem]">
    //     <div className="w-[86rem] m-auto">
    //         <div className={`w-full bg-fixed bg-no-repeat bg-center bg-contain bg-[#f6f4ef]`} style={{ backgroundImage: `url(${bgImg})` }}>
    //             <div className="h-[20rem]"></div>
    //         </div>
    //     </div>
    //     <div className="w-[86rem] m-auto flex">
    //         <div className="shadow-md p-[2rem] rounded-b-md">
    //             <p className="tracking-tight leading-snug" >&quot;{text}&quot;</p>
    //         </div>
    //     </div>
    // </section>
    )
}

AboutSection.propTypes = {
    text: PropTypes.string,
    bgImg: PropTypes.string,
    bgSize: PropTypes.string
}

export default AboutSection
import PropTypes from "prop-types"
import Button from "../buttons/Button"
import ImageTitled from "./ImageTitled"
import { AiOutlineArrowRight } from "react-icons/ai";


const Post = ({post, odd}) => {

    return(
        <div className={`py-[1.5rem] md:py-[3rem] lg:py-[5rem] ${!odd && "bg-[#dfb15b] bg-opacity-15"}`}>
            <div className="flex">
                <div className="w-[4rem] py-0 flex items-center before:border-2 before:flex-1 before:border-t before:border-[#ff8211] before:me-6 "></div>
                <p className="text-sm xs:text-base sm:text-lg font-semibold uppercase text-[#ff8211]">{post.cat}</p>
            </div>
            <div className="w-[90%] xl:w-[75%] m-auto">
                <h1 className="max-w-[85%] w-fit m-auto my-[2rem] lg:my-[4rem] text-xl xs:text-2xl sm:text-3xl ml:text-4xl xl:text-5xl font-semibold uppercase">{post.title}</h1>
                <div className="flex flex-col lg-1:flex-row gap-[2.5rem] lg-1:gap-[4rem] 2xl:gap-0">
                    <div className="w-full xl:w-[85%] m-auto">
                        <ImageTitled img={post.img} imgAlt={post.imgAlt} img_title={post.img_title}/>
                    </div>
                    <div className="w-full xs:w-[85%] m-auto flex flex-col">
                        <p className="sm:text-lg md:text-xl" >{post.intro}</p>
                        <div className="m-auto md:ml-0 mt-[2rem] lg-1:mt-[3rem]">
                            <Button text={"Leer más"} icon={<AiOutlineArrowRight/>}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )    
}

Post.propTypes = {
    post: PropTypes.object,
    odd: PropTypes.number
}

export default Post
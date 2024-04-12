import PropTypes from "prop-types"
import Button from "../buttons/Button"
import { AiOutlineArrowRight } from "react-icons/ai";


const Post = ({post, odd}) => {
    console.log(post.img_title)

    return(
        <div className={`py-[5rem] ${!odd && "bg-[#dfb15b] bg-opacity-15"}`}>
            <div className=" w-[20%] py-3 flex items-center text-lg font-semibold text-[#ff8211] uppercase before:border-2 before:flex-1 before:border-t before:border-[#ff8211] before:me-6 ">{post.cat}</div>
            <div className="w-[75%] m-auto">
                <h1 className="max-w-[85%] w-fit m-auto my-[4rem] text-5xl font-semibold uppercase">{post.title}</h1>
                <div className="grid grid-cols-2">
                    <div className="w-[85%] m-auto">
                        <div className="relative w-[31rem] h-[20rem] overflow-hidden">
                            <div className="absolute w-[150%] h-[100%] -left-5 bg-gradient-to-br from-[#f2840a] via-[#fed531] to-[#dfb15b] inset-y-1 skew-y-[7deg] origin-bottom-left mt-[11.5rem]"></div>
                            <p className="absolute bottom-0 m-[1rem] text-white text-3xl font-semibold w-[60%] h-[25%]">{post.img_title}</p>
                            <img className="object-cover w-[31rem] h-[20rem] m-auto overflow-hidden" src={post.img} alt={post.imgAlt} />
                        </div>
                    </div>
                    <div className="w-[85%] m-auto flex flex-col">
                        <p className="text-xl" >{post.intro}</p>
                        <div className="mt-[3rem]">
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
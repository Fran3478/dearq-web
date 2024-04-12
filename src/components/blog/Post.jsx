import PropTypes from "prop-types"

const Post = ({post, odd}) => {

    return(
        <div className={`py-[5rem] ${!odd && "bg-[#dfb15b] bg-opacity-15"}`}>
            <div className=" w-[20%] py-3 flex items-center text-lg font-semibold text-[#ff8211] uppercase before:border-2 before:flex-1 before:border-t before:border-[#ff8211] before:me-6 ">{post.cat}</div>
            <div className="w-[75%] m-auto">
                <h1 className="max-w-[85%] w-fit m-auto my-[4rem] text-5xl font-semibold uppercase">{post.title}</h1>
                <div className="grid grid-cols-2">
                    <div className="w-[85%] m-auto">
                        <img className="object-cover w-[31rem] h-[20rem] m-auto" src={post.img} alt={post.img_alt} />
                    </div>
                    <div className="w-[85%] m-auto flex flex-col">
                        <p className="text-xl" >{post.intro}</p>
                        <button className="bg-[#ff8211] text-white text-xl px-[1.5rem] py-[0.5rem] rounded-md w-fit mr-auto mt-[3rem]" >Leer más</button>
                    </div>
                </div>

            </div>
        </div>
    )    
}

Post.propTypes = {
    post: PropTypes.string,
    odd: PropTypes.bool
}

export default Post
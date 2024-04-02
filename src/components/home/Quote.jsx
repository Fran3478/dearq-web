import PropTypes from "prop-types"

const Quote = ({ imgUrl, quote, name, alt, degree }) => {
    console.log(imgUrl)

    return (
        <div className="bg-slate-100 w-full ml:w-[45rem] ml:ml-auto p-[1rem] sm:p-0 ml:h-[6rem] ml:rounded-l-full select-none flex gap-[1rem]">
            <div className="min-w-[6rem] min-h-[6rem] rounded-md ml:rounded-full overflow-hidden hidden sm:block aspect-square">
                <img className="w-[6rem] h-[6rem] object-cover pointer-events-none" src={imgUrl} alt={alt} />
            </div>
            <div className="m-auto">
                <p className="italic">&quot;{quote}&quot;</p>
                <p className=" text-sm"><span className="font-semibold">{name}</span><br />{degree}</p>
            </div>
        </div>
    //     <div className="bg-slate-100 grid grid-cols-6 lg:grid-cols-12 w-full p-[1.5rem] lg:p-0 lg:rounded-l-full select-none overflow-hidden">
    //     <div className="float-left sm:float-none w-fit h-fit rounded-xl m-4 sm:m-0 sm:rounded-full overflow-hidden col-span-2 lg:col-span-4 2xl:col-span-3 hidden lg:block">
    //         <img className="w-[7rem] h-[7rem] object-cover pointer-events-none" src={imgUrl} alt={alt} />
    //     </div>
    //     <div className="col-span-6 lg:col-span-8 2xl:col-span-9 m-auto lg:pr-2">
    //         <p className="italic">&quot;{quote}&quot;</p>
    //         <p className="xl:pt-2 text-sm"><span className="font-semibold">{name}</span><br />{degree}</p>
    //     </div>
    // </div>
    )
}

Quote.propTypes = {
    imgUrl: PropTypes.string,
    quote: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string,
    degree: PropTypes.string
}

export default Quote
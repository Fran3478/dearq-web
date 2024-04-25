import PropTypes from "prop-types"

const Quote = ({ imgUrl, quote, name, alt, degree }) => {
    console.log(imgUrl)

    return (
        <div className="bg-slate-100 w-full ml:w-fit ml:ml-auto p-[1rem] sm:p-0 ml:h-[6rem] ml:rounded-l-full select-none flex gap-[1rem]">
            <div className="min-w-[6rem] min-h-[6rem] rounded-md ml:rounded-full overflow-hidden hidden sm:block aspect-square">
                <img className="w-[6rem] h-[6rem] object-cover pointer-events-none" src={imgUrl} alt={alt} />
            </div>
            <div className="m-auto sm:pr-[1rem]">
                <p className="italic">&quot;{quote}&quot;</p>
                <p className=" text-sm"><span className="font-semibold">{name}</span><br />{degree}</p>
            </div>
        </div>
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
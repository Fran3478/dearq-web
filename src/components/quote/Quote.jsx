import PropTypes from "prop-types"

const Quote = ({ imgUrl, quote, name, degree }) => {

    return (
        <div className="absolute right-0 bg-slate-300 sm:grid sm:grid-cols-4 md:w-2/3 xl:w-2/5 sm:rounded-l-full select-none">
            <div className="float-left sm:float-none w-fit h-fit rounded-xl m-4 sm:m-0 sm:rounded-full overflow-hidden">
                <img className="w-32 h-32 object-cover pointer-events-none" src={imgUrl} alt="" />
            </div>
            <div className="sm:col-span-3 m-auto sm:px-4">
                <p className="font-semibold italic">&quot;{quote}&quot;</p>
                <p className="pt-2 text-sm"><span className="font-semibold">{name}</span><br />{degree}</p>
            </div>
        </div>
    )
}

Quote.propTypes = {
    imgUrl: PropTypes.string,
    quote: PropTypes.string,
    name: PropTypes.string,
    degree: PropTypes.string
}

export default Quote
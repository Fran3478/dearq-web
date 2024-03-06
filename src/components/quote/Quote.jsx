import PropTypes from "prop-types"

const Quote = ({ imgUrl, quote, name, degree }) => {

    return (
        <div className="bg-slate-300 grid grid-cols-6 lg:grid-cols-12 w-full p-[1.5rem] lg:p-0 lg:rounded-l-full select-none mb-3 overflow-hidden">
            <div className="float-left sm:float-none w-fit h-fit rounded-xl m-4 sm:m-0 sm:rounded-full overflow-hidden col-span-2 lg:col-span-4 2xl:col-span-3 hidden lg:block">
                <img className="w-40 h-40 xl:w-44 xl:h-44 object-cover pointer-events-none" src={imgUrl} alt="" />
            </div>
            <div className="col-span-6 lg:col-span-8 2xl:col-span-9 m-auto lg:pr-2">
                <p className="font-semibold italic text-base md:text-lg xl:text-xl">&quot;{quote}&quot;</p>
                <p className="xl:pt-2 text-sm xl:text-base"><span className="font-semibold">{name}</span><br />{degree}</p>
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
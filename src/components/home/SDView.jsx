import { useState } from "react"
import PropTypes from "prop-types"


const SDView = ({columns}) => {

    const [active, setActive] = useState(columns[0])

    return(
        <div className="flex flex-col w-full">
            <div className="m-auto mb-[2rem]">
                <img className="w-[21rem] h-[12rem] xs:w-[28rem] xs:h-[16rem] sm:w-[38rem] sm:h-[22rem] md:w-[45rem] md:h-[25rem] object-cover m-auto" src={active.url} alt={active.alt} />
                <h3 className="w-fit m-auto text-center xs:text-lg xl:text-xl">{active.title}</h3>
            </div>
            <div className="flex gap-[1rem] m-auto px-[0.3rem]">
                {
                    columns.map(column => (
                        <div key={column.id} className={`w-fit h-fit overflow-hidden hover:cursor-pointer shadow-md rounded ${active.id === column.id ? "border-2 border-[#ff8211]" : "scale-[80%] blur-[0.8px]"}`} onClick={() => setActive(column)}>
                            <img className="w-[6rem] h-[5rem] object-cover" src={column.url} alt={column.alt} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

SDView.propTypes = {
    columns: PropTypes.array
}

export default SDView
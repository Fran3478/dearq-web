import PropTypes from "prop-types"

const ColumnView = ({columns}) => {

    return(
        <div className="w-full flex flex-row gap-[1rem] m-auto justify-center">
            {
                columns.map((column) => (
                    <div key={column.id} className="w-[8rem] h-[24rem] xl:w-[10rem] xl:h-[30rem] overflow-hidden transition-all duration-500 ease-out hover:w-[35rem] xl:hover:w-[45rem] group">
                        <div className="w-[35rem] h-[20rem] xl:w-[45rem] xl:h-[26rem]">
                            <img src={column.url} alt={column.alt} className="xl:w-[45rem] xl:h-[26rem] object-contain -translate-x-[35%] group-hover:translate-x-0 transition-all duration-500 ease-out"/>
                        </div>
                        <h3 className="w-fit m-auto text-2xl text-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:duration-200 ease-out group-hover:delay-300" >{column.title}</h3>
                    </div>
                ))
            }
        </div>
    )
}

ColumnView.propTypes = {
    columns: PropTypes.array
}

export default ColumnView
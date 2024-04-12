import PropTypes from "prop-types"

const ColumnView = ({columns}) => {

    return(
        <div className="w-full flex gap-[2rem] m-auto justify-center">
            {
                columns.map((column) => (
                    <div key={column.id} className="w-[10rem] h-[30rem] overflow-hidden transition-all duration-500 ease-out hover:w-[60rem] group">
                        <div className="w-[40rem]">
                            <div className="bg-fixed bg-no-repeat bg-center bg-contain w-[60rem] h-[25rem]" style={{ backgroundImage: `url(${column.url})` }}></div>
                        </div>
                        <h3 className="w-fit m-auto text-2xl opacity-0 group-hover:opacity-100 transition-opacity group-hover:duration-200 ease-out group-hover:delay-300" >{column.title}</h3>
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
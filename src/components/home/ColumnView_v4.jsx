import PropTypes from "prop-types"

const ColumnView = ({columns}) => {

    return(
        <div className="w-full flex flex-col gap-[2rem] place-content-center">
            {
                columns.map((column) => (
                    <div key={column.id} className="w-[90%] h-[10rem] overflow-hidden transition-all duration-500 ease-out hover:h-[25rem] group m-auto">
                        <div className="w-full">
                            <div className="bg-fixed bg-no-repeat bg-center bg-contain w-full h-[25rem]" style={{ backgroundImage: `url(${column.url})` }}></div>
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
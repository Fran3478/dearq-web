import PropTypes from "prop-types"
import CardService from "./CardService"
import CardTool from "./CardTool"

const Container = ({items, type}) => {

    return(
        <div className={`grid ${type ==="service" ? "grid-cols-3 gap-[5rem]" : type === "tool" && "grid-cols-4 gap-[4rem]" } w-fit m-auto my-[3rem]`}>
            {
                type === "service" ?
                    items.map((item) => (
                        <CardService key={item.id} title={item.title} imgUrl={item.imgUrl} alt={item.alt} text={item.text}/>
                    ))
                : type === "tool" && 
                    items.map((item) => (
                        <CardTool key={item.id} title={item.title} imgUrl={item.imgUrl} alt={item.alt} text={item.text} />
                    ))
            }
            
        </div>
    )
}

Container.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    type: PropTypes.string
}

export default Container
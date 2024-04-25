import PropTypes from "prop-types"
import CardService from "./CardService"
import CardTool from "./CardTool"

const Container = ({items, type}) => {

    return(
        <div className={`grid ${type ==="service" ? "grid-cols-1 sm:grid-cols-2 lg-1:grid-cols-3 3xl:grid-cols-4 4xl:grid-cols-5 5xl:grid-cols-6 gap-[2rem] md:gap-[4rem] lg-1:gap-[2.5rem] xl:gap-[5rem]" : type === "tool" && "grid-cols-1 sm:grid-cols-2 lg-1:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5 4xl:grid-cols-7 5xl:grid-cols-8 gap-[2rem] xl:gap-[4rem]" } w-fit m-auto my-[3rem]`}>
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
    type: PropTypes.oneOf(["service", "tool"])
}

export default Container
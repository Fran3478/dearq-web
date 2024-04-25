import Form from "./Form"


const Contact = () => {

    return(
        <div className="min-w-screen w-full h-full m-auto">
            <div className="3xl:w-[90rem] my-[3rem] mx-[1rem] xxs:mx-[2rem] sm:mx-[5rem] 3xl:mx-[auto] flex rounded-lg overflow-hidden bg-gradient-to-br from-[#f2840a] via-[#fed531] to-[#dfb15b]">
                <div className="w-[90%] xl:w-[60%] m-auto">
                    <h1 className="text-white text-2xl md:text-3xl xl:text-4xl font-bold w-fit mx-auto my-[1rem] sm:my-[1.5rem] xl:my-[2rem]">Contáctanos</h1>
                    <p className="text-white text-sm xs:text-base md:text-lg lg-1:text-xl lg-1:font-semibold xl:w-[80%] m-auto mb-[1rem] xs:mb-[1.5rem] xl:mb-[2rem]" >No esperes más, organicemos una reunión para concretar los detalles de tu próximo gran proyecto!</p>
                    <Form/>
                </div>
                <img className="object-cover w-0 xl:w-[40%]" src="https://aprende.com/wp-content/uploads/2022/09/todo-sobre-el-primer-contacto-con-el-cliente.jpg" alt="" />
            </div>
        </div>
    )
}

export default Contact
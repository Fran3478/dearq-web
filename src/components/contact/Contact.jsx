import Form from "./Form"


const Contact = () => {

    return(
        <div className="min-w-screen w-full h-full m-auto">
            <div className="w-[80%] m-auto my-[3rem] flex rounded-lg overflow-hidden bg-gradient-to-br from-[#f2840a] via-[#fed531] to-[#dfb15b]">
                <div className="w-[60%] m-auto">
                    <h1 className="text-white text-4xl font-bold w-fit mx-auto my-[2rem]">Contáctanos</h1>
                    <p className="text-white text-xl font-semibold w-[80%] m-auto mb-[2rem]" >No esperes más, organicemos una reunión para concretar los detalles de tu próximo gran proyecto!</p>
                    <Form/>
                </div>
                <img className="object-cover w-[40%]" src="https://aprende.com/wp-content/uploads/2022/09/todo-sobre-el-primer-contacto-con-el-cliente.jpg" alt="" />
            </div>
        </div>
    )
}

export default Contact
import UserImage from "./UserImage"
import user from "../../assets/user.png"
import AboutSection from "./AboutSection"
import data from "../../assets/data/data.json"

const About = () => {
    return (
        <div className="min-w-screen w-full">
            <div className="font-tt-commons-pro-expanded-bold">
                <section>
                    <div className="flex flex-col md:flex-row m-auto my-[1.5rem] md:gap-[2.5rem] md:w-[90%] lg:w-[80%]">
                        <div className="">
                            <UserImage img={user} alt={"Arq-Alejandra"} userName={"Alejandra Elizabeth Gomez"} userRole={"Fundadora"} style={"round"}/>
                        </div>
                        <div className="px-[2rem] mt-[1rem] md:m-auto">
                            <p className="">Hola! Me llamo Alejandra, y te quiero dar una cálida bienvenida a DEArq y, también, si me lo permitís me encantaría compartir un poco sobre mi y lo que me llevo hacia el diseño emocional y la arquitectura consciente:</p>
                        </div>
                    </div>
                </section>
                {
                    data.about.map((item) => (
                        <AboutSection key={item.id} text={item.text} bgImg={item.bg_img} bgSize={item.bg_size} />

                    ))
                }
            </div>
        </div >
    //     <div className="">
    //     <div className="font-tt-commons-pro-expanded-bold">
    //         <div className="w-[60rem] m-auto my-[2rem] p-[1.5rem] bg-[#dfb15b72] rounded-lg shadow-md">
    //             <h2 className="text-2xl md:text-4xl font-semibold underline underline-offset-4 decoration-[#f2840a] decoration-4 w-fit m-auto pb-[1rem]">¿Qué es <span className="italic">DEArq</span>?</h2>
    //             <p className=" mx-[2rem] tracking-tight leading-tight">DEArq es mucho más que un estudio de arquitectura, es un espacio donde convergen la pasión por el diseño y el profundo deseo de ayudar a las personas a través de la transformación de sus entornos físicos. Utilizando los principios de la neuroarquitectura, <span className="font-bold">nos especializamos en crear espacios auténticos y significativos que promueven la sanación, el equilibrio emocional y la sensación de bienestar</span>.</p>
    //         </div>
    //         <section>
    //             <div className="flex w-[60rem] m-auto my-[4rem]">
    //                 <div className="mr-[1.5rem]">
    //                     <UserImage img={user} alt={"Arq-Alejandra"} userName={"Alejandra Elizabeth Gomez"} userRole={"Fundadora"} style={"round"}/>
    //                 </div>
    //                 <div className="m-[2rem]">
    //                     <p className="text-xl">Hola! Me llamo Alejandra, y te quiero dar una cálida bienvenida a DEArq y, también, si me lo permitís me encantaría compartir un poco sobre mi y lo que me llevo hacia el diseño emocional y la arquitectura consciente:</p>
    //                 </div>
    //             </div>
    //         </section>
    //         {
    //             data.about.map((item) => (
    //                 <AboutSection key={item.id} text={item.text} bgImg={item.bg_img} />

    //             ))
    //         }
    //     </div>
    // </div >
    )
}

export default About
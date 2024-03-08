import Image from "./Image"
import user from "../../assets/user.png"
import arq from "../../assets/arq.png"
import coloredGirl from "../../assets/colored-girl.png"
import dearq from "../../assets/dearq.png"
import baseLogo from "../../assets/base-logo.png"
import diseñoInterior from "../../assets/diseno-interiores.png"

const About = () => {

    return (
        <div className="">
            <div className="font-tt-commons-pro-expanded-bold">
                <div className="w-[80%] m-auto my-[2rem] p-[1.5rem] bg-[#dfb15b72] rounded-lg shadow-md">
                    <h2 className="text-2xl md:text-4xl font-semibold underline underline-offset-4 decoration-[#f2840a] decoration-4 w-fit m-auto pb-[1rem]">¿Qué es <span className="italic">DEArq</span>?</h2>
                    <p className="text-base ">DEArq es mucho más que un estudio de arquitectura, es un espacio donde convergen la pasión por el diseño y el profundo deseo de ayudar a las personas a través de la transformación de sus entornos físicos. Utilizando los principios de la neuroarquitectura, <span className="font-bold">nos especializamos en crear espacios auténticos y significativos que promueven la sanación, el equilibrio emocional y la sensación de bienestar</span>.</p>
                </div>
                <div>

                    <section>
                        <div className="flex m-[4rem]">
                            <div className="w-fit mr-[1.5rem]">
                                <Image img={user} alt={"Arq-Alejandra"} />
                                <div className="text-center">
                                    <p className="font-semibold text-nowrap" >Alejandra...</p>
                                    <p className="text-gray-600" >Fundadora</p>
                                </div>
                            </div>


                            <div className="m-[2rem]">
                                <p className="text-xl w-3/5">Hola! Me llamo Alejandra, y te quiero dar una cálida bienvenida a DEArq y, también, si me lo permitís me encantaría compartir un poco sobre mi y lo que me llevo hacia el diseño emocional y la arquitectura consciente:</p>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-fixed bg-center bg-no-repeat	bg-contain" style={{ backgroundImage: `url(${arq})` }}>
                                <div className="h-[15rem]"></div>
                            </div>
                            <div className="min-h-[20rem] flex">
                                <div className="w-3/5 m-auto shadow-md p-[1.5rem] rounded-md">
                                    <p className="text-lg" >&quot;Durante muchos años, me dediqué apasionadamente a la arquitectura convencional y años posteriores emprendí en un rubro ajeno a mi formación, pero del cual también aprendí mucho. Sin embargo, un acontecimiento personal inesperado en mi vida me llevó a transitar un arduo proceso de cambios y me encontré enfrentando una situación que me dejó por momentos perdida. Pero, con el amor y el apoyo de mis seres queridos, así como con un esfuerzo incansable por superar esta difícil etapa, descubrí una nueva pasión: la neuroarquitectura&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-fixed bg-center bg-no-repeat	bg-contain " style={{ backgroundImage: `url(${coloredGirl})` }}>
                                <div className="h-[15rem]"></div>
                            </div>
                            <div className="min-h-[20rem] flex">
                                <div className="w-3/5 m-auto shadow-md p-[1.5rem] rounded-md">
                                    <p className="text-lg" >&quot;Fue a través de la neuroarquitectura que comencé a entender el profundo impacto que nuestros entornos físicos tienen en nuestras emociones y bienestar. Empecé a aplicar estos principios en mi propia vida, buscando recuperar mi identidad y encontrar un nuevo equilibrio emocional. Y así, poco a poco, comencé a ver los resultados transformadores&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-fixed bg-center bg-no-repeat" style={{ backgroundImage: `url(${baseLogo})` }}>
                                <div className="h-[15rem]"></div>
                            </div>
                            <div className="min-h-[20rem] flex">
                                <div className="w-3/5 m-auto shadow-md p-[1.5rem] rounded-md">
                                    <p className="text-lg" >&quot;Decidí dedicarme a ayudar a otras personas que estén atravesando situaciones emocionales difíciles, traumáticas o simplemente estén en busca de un cambio. Mi objetivo es ofrecer una cuidadosa escucha, comprensión y diseño de espacios auténticos y significativos que fomenten la sanación y el bienestar emocional&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-fixed bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${diseñoInterior})` }}>
                                <div className="h-[15rem]"></div>
                            </div>
                            <div className="min-h-[20rem] flex">
                                <div className="w-3/5 m-auto shadow-md p-[1.5rem] rounded-md">
                                    <p className="text-lg" >&quot;Pero mi viaje no terminó ahí. También redescubrí una pasión olvidada por la pintura, el arte es donde encuentro una profunda felicidad y plenitud. Por eso, he decidido incorporar al proyecto el diseño de cuadros y elementos decorativos que transmitan emociones y sensaciones a quienes los contemplen&quot;</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="bg-fixed bg-center bg-no-repeat " style={{ backgroundImage: `url(${dearq})` }}>
                                <div className="h-[15rem]"></div>
                            </div>
                            <div className="min-h-[20rem] flex">
                                <div className="w-3/5 m-auto shadow-md p-[1.5rem] rounded-md">
                                    <p className="text-lg" >&quot;Creo firmemente en la importancia de crear espacios que generen experiencias emocionales y se conviertan en refugios de bienestar y confort. Estoy emocionada de poder acompañarte en este proceso de transformación y ayudarte a crear un ambiente que refleje tu historia y te haga sentir en casa&quot;</p>
                                </div>
                            </div>
                        </div>

                        {/* <p>Si estás buscando una experiencia única y emocional en tus espacios, ¡no dudes en contactarme! Estoy aquí para ayudarte a crear un hogar que te haga sentir en paz y conectado con tu entorno.</p>
                        <p>¡Gracias por visitar mi página web y por permitirme ser parte de tu viaje hacia una vida más plena y satisfactoria!</p> */}
                    </section>
                </div>
            </div>
        </div >
    )
}

export default About
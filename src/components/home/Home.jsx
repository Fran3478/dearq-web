import Quote from "../quote/Quote"
import Carrusel from "../carrusel/Carrusel"

const Home = () => {
    const slides = [
        {
            id: "architecture",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/e_improve:indoor:100/dearq-img/fubiukyj0xetbnnvjlso.jpg",
            title1: "Diseño ",
            span: "emocional",
            title2: " arquitectónico"
        },
        {
            id: "design",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1708701350/dearq-img/itaxj9km8kyfnvp9h1kd.jpg",
            title1: "Espacios ",
            span: "conscientemente",
            title2: " diseñados"
        }
    ]

    const quoteInfo = {
        quote: "¿Sabías que los espacios fisicos en los que vivimos tienen un impacto significativo en el bienestar?",
        name: "Oshin Vartanian",
        degree: "Psicologo e Investigador de neurociencia cognitiva y neuroestetica",
        imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1708617358/dearq-img/be8jqziafgfisglx1hte.png"
    }

    return (
        <div className="">
            <h1 className="text-3xl md:text-5xl font-tt-commons-pro-expanded-bold font-bold text-center py-14 mx-8">Transformando Espacios, Sanando Emociones</h1>
            <div className="max-w-3xl m-auto aspect-[768/602]">
                <Carrusel autoSlide={true}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full relative">
                            <img src={slide.url} alt="" className="w-full" />
                            <p className="text-center text-xl sm:text-3xl font-semibold italic py-[1.5rem] static">{slide.title1} <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f2840a] relative inline-block"><span className="relative text-white">{slide.span}</span></span> {slide.title2}</p>
                        </div>
                    ))}
                </Carrusel>
            </div>
            <div className="font-tt-commons-pro-expanded-bold ">
                <div className="w-full">
                    <h2 className="text-xl md:text-3xl font-semibold my-[1.5rem] md:my-[3rem] w-fit m-auto px-[2rem] md:px-[3rem] text-center">¡Convierte tu Hogar en un Refugio de Bienestar!</h2>
                    <p className="text-base sm:text-lg px-[1.5rem] md:px-[3rem] mb-[2rem] hyphens-auto">En DEArq, estamos aquí para ayudarte a crear un ambiente que te haga sentir en casa y te permita conectar emocionalmente con tu entorno. ¡No dudes en contactarnos para comenzar tu viaje hacia la transformación de tus espacios! ¡Descubre el Poder Transformador del Diseño Emocional!</p>

                </div>
                <div className="w-full lg:float-right lg:w-3/5 xl:max-w-[50%]">
                    <Quote
                        imgUrl={quoteInfo.imgUrl}
                        quote={quoteInfo.quote}
                        name={quoteInfo.name}
                        degree={quoteInfo.degree}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
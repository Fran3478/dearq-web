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
        },
        {
            id: "architecture2",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/e_improve:indoor:100/dearq-img/fubiukyj0xetbnnvjlso.jpg",
            title1: "Diseño ",
            span: "emocional",
            title2: " arquitectónico"
        },
    ]

    const quoteInfo = {
        quote: "¿Sabías que los espacios fisicos en los que vivimos tienen un impacto significativo en el bienestar?",
        name: "Oshin Vartanian",
        degree: "Psicologo e Investigador de neurociencia cognitiva y neuroestetica",
        imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1708617358/dearq-img/be8jqziafgfisglx1hte.png"
    }

    return (
        <div className="max-w-screen">
            <h1 className="text-3xl md:text-5xl font-tt-commons-pro-expanded-bold font-bold w-fit m-auto py-14">Transformando Espacios, Sanando Emociones</h1>
            <Carrusel slides={slides} autoSlide={true} />

            <div className="font-tt-commons-pro-expanded-bold relative pb-[2rem]">
                <div className="w-full">
                    <h2 className="text-xl md:text-3xl font-semibold my-[1.5rem] md:my-[3rem] w-fit m-auto px-[2rem] md:px-[3rem] text-center">¡Convierte tu Hogar en un Refugio de Bienestar!</h2>
                    <p className="text-base sm:text-lg px-[1.5rem] md:px-[3rem] mb-[2rem] hyphens-auto">En DEArq, estamos aquí para ayudarte a crear un ambiente que te haga sentir en casa y te permita conectar emocionalmente con tu entorno. ¡No dudes en contactarnos para comenzar tu viaje hacia la transformación de tus espacios! ¡Descubre el Poder Transformador del Diseño Emocional!</p>

                </div>
                <div className="ml-auto lg:w-3/5 xl:max-w-[50%]">
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
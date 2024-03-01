import Quote from "../quote/Quote"
import Carrusel from "../carrusel/Carrusel"

const Home = () => {
    const slides = [
        {
            id: "architecture",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/e_improve:indoor:100/dearq-img/fubiukyj0xetbnnvjlso.jpg",
            title: "Diseño &quot;emocional&quot; arquitectónico"
        },
        {
            id: "design",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1708701350/dearq-img/itaxj9km8kyfnvp9h1kd.jpg",
            title: "Espacios &quot;conscientemente&quot; diseñados"
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
            <div className="max-w-3xl m-auto">
                <Carrusel autoSlide={true}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full">
                            <img src={slide.url} alt="" className="w-full" />
                        </div>
                    ))}
                </Carrusel>
            </div>

            <div className="py-14">
                <Quote
                    imgUrl={quoteInfo.imgUrl}
                    quote={quoteInfo.quote}
                    name={quoteInfo.name}
                    degree={quoteInfo.degree}
                />
            </div>


        </div>
    )
}

export default Home
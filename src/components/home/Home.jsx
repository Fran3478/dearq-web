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
            <div className="max-w-3xl m-auto">
                <Carrusel autoSlide={true}>
                    {slides.map((slide) => (
                        <div key={slide.id} className="min-w-full relative">
                            <img src={slide.url} alt="" className="w-full" />
                            <p className="text-center text-xl sm:text-3xl font-semibold italic py-[1.5rem] static">{slide.title1} <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-[#f2840a] relative inline-block"><span className="relative text-white">{slide.span}</span></span> {slide.title2}</p>
                        </div>
                    ))}
                </Carrusel>
            </div>
            <div className="flex flex-col font-tt-commons-pro-expanded-bold">
                <div className="w-full lg:pl-[8rem] xl:pl-[12rem]">
                    <h2 className=" order-2 lg:order-1 text-center text-2xl md:text-4xl font-semibold my-[5rem] underline underline-offset-4 decoration-[#f2840a] decoration-4 w-fit m-auto">¿Qué es <span className="italic">DEArq</span>?</h2>
                    <div className="order-1 lg:order-2 w-full lg:float-right lg:w-3/5 xl:max-w-[50%]">
                        <Quote
                            imgUrl={quoteInfo.imgUrl}
                            quote={quoteInfo.quote}
                            name={quoteInfo.name}
                            degree={quoteInfo.degree}
                        />
                    </div>
                    <p className="text-base md:text-2xl px-[1.5rem] md:px-[3rem] lg:pr-[8rem] xl:pr-[12rem]">DEArq es mucho más que un estudio de arquitectura. Es un espacio donde convergen la pasión por el diseño y
                        el profundo deseo de ayudar a las personas a través de la transformación de sus entornos físicos. Utilizando
                        los principios de la neuroarquitectura, <span className="font-bold">nos especializamos en crear espacios auténticos y significativos que
                            promueven la sanación, el equilibrio emocional y la sensación de bienestar</span>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home
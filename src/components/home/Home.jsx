import ColumnView from "./ColumnView"
import ColumnView_v2 from "./ColumnView_v2"
import ColumnView_v15 from "./ColumnView_v15"
import ColumnView_v25 from "./ColumnView_v25"
import ColumnView_v3 from "./ColumnView_v3"
import ColumnView_v4 from "./ColumnView_v4"
import Quote from "./Quote"

// import Carrusel from "../carrusel/Carrusel"

const Home = () => {
    const slides = [
        {
            id: "1",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1711567499/dearq-img/home/twj2aqun2ymhnlmihux5.webp",
            title: "Espacios conscientemente diseñados"
        },
        {
            id: "2",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1711556588/dearq-img/home/ffmy3z7wr8wul7cyq5rx.webp",
            title: "¡Convierte tu Hogar en un Refugio de Bienestar!"
        },
        {
            id: "3",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1711567499/dearq-img/home/likgwes1gczitinh5zah.webp",
            title: "¡Descubre el poder transformador del diseño emocional!"
        },
        {
            id: "4",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1711556588/dearq-img/home/wj1grscjsmwctqckbyk3.webp",
            title: "Conecta emocionalmente con tu entorno"
        }
    ]

    const quoteInfo = {
        quote: "¿Sabías que los espacios fisicos en los que vivimos tienen un impacto significativo en el bienestar?",
        name: "Oshin Vartanian",
        alt: "Oshin-Vartanian",
        degree: "Psicologo e Investigador de neurociencia cognitiva y neuroestetica",
        imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1711467872/dearq-img/vttujl7z99ba2unodmvx.webp"
    }

    return (
        <div className="min-w-screen w-full">
            {/* <Carrusel slides={slides} autoSlide={true} /> */}
            <div className="mt-[4rem]">
                <ColumnView columns={slides}/>
            </div>
            <div className="mt-[4rem]">
                <ColumnView_v2 columns={slides}/>
            </div>
            <div className="mt-[4rem]">
                <ColumnView_v15 columns={slides}/>
            </div>
            <div className="mt-[4rem]">
                <ColumnView_v25 columns={slides}/>
            </div>
            <div className="mt-[4rem]">
                <ColumnView_v3 columns={slides}/>
            </div>
            <div className="mt-[4rem]">
                <ColumnView_v4 columns={slides}/>
            </div>
            <h1 className="text-3xl md:text-5xl font-tt-commons-pro-expanded-bold font-bold w-fit m-auto my-[2rem]">Diseño emocional arquitectónico</h1>

            <div className="font-tt-commons-pro-expanded-bold relative pb-[2rem]">
                <div className="w-full">
                    <div className="py-[1.5rem] md:w-[85%] lg:w-[85%] m-auto rounded-md">
                        <h2 className="text-xl underline underline-offset-4 decoration-[#f2840a] decoration-2 w-fit m-auto pb-[1rem]">¿Qué es <span className="font-semibold">DEArq</span>?</h2>
                        <p className="tracking-tight leading-tight">DEArq es mucho más que un estudio de arquitectura, es un espacio donde convergen la pasión por el diseño y el profundo deseo de ayudar a las personas a través de la transformación de sus entornos físicos. Utilizando los principios de la neuroarquitectura, <span className="font-semibold">nos especializamos en crear espacios auténticos y significativos que promueven la sanación, el equilibrio emocional y la sensación de bienestar</span>.</p>
                        <p className="tracking-tight leading-tight">Estamos aquí para ayudarte a crear un ambiente que te haga sentir en casa y te permita conectar emocionalmente con tu entorno. ¡No dudes en contactarnos para comenzar tu viaje hacia la transformación de tus espacios!</p>
                    </div>
                </div>
                <div className="ml-auto mt-[1.5rem] lg:w-3/5 xl:max-w-[50%]">
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
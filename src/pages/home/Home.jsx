import ColumnView from "../../components/home/ColumnView"
import Quote from "../../components/home/Quote"
import SDView from "../../components/home/SDView"

const Home = () => {
    const slides = [
        {
            id: "1",
            url: "https://res.cloudinary.com/dacbde3so/image/upload/v1711567499/dearq-img/home/twj2aqun2ymhnlmihux5.webp",
            alt: "",
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
            <h1 className="text-3xl md:text-5xl font-tt-commons-pro-expanded-bold font-bold w-fit m-auto my-[2rem] text-center">Diseño emocional arquitectónico</h1>
            <div className="mt-[4rem]">
                <div className="hidden lg:block">
                    <ColumnView columns={slides}/>
                </div>
                <div className="lg:hidden">
                    <SDView columns={slides} />
                </div>
            </div>
            

            <div className="font-tt-commons-pro-expanded-bold relative pb-[2rem]">
                <div className="w-full px-[1rem]">
                    <div className="py-[1.5rem] md:w-[85%] lg:w-[85%] m-auto rounded-md">
                        <h2 className="text-4xl w-fit m-auto pb-[1rem]">¿Qué es <span className="font-semibold">DEArq</span>?</h2>
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
import Card from "./CardService"
import Container from "./Container"


const Service = () => {
    const serviceData = [
        {
            id: 1,
            title: "Diseño de Interiores Consciente",
            text: "Sumérgete en un espacio donde el diseño y la conciencia se encuentran. Nuestro enfoque en el diseño de interiores consciente no solo busca embellecer tus espacios, sino también nutrir tu conexión con ellos. Desde la selección de materiales sostenibles hasta la creación de ambientes que fomenten la armonía, cada detalle se elige con cuidado para enriquecer tu vida cotidiana.",
            imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1711745965/dearq-img/services/oitajgzdz5j9opzqyeak.webp",
            alt: "diseño_interiores"
        },
        {
            id: 2,
            title: "Creación de Espacios de Sanación y Bienestar",
            text: "Transforma tu entorno en un santuario para el cuerpo, la mente y el espíritu. Nos especializamos en la creación de espacios que promueven la sanación y el bienestar. Desde la incorporación de elementos naturales hasta la optimización del flujo de energía, cada aspecto se diseña para nutrir tu ser en todos los niveles.",
            imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1711754675/dearq-img/services/lm3nb2tacuzynql1pkcb.webp",
            alt: "creacion_espacios"
        },
        {
            id: 3,
            title: "Diseño de Pinturas y Cuadros Emocionales",
            text: "Da vida a tus emociones a través del arte personalizado. Nuestro servicio de diseño de pinturas y cuadros emocionales te ofrece la oportunidad de expresarte de manera única en tu espacio. Ya sea que busques una pieza que refleje tranquilidad, alegría o introspección, trabajaremos contigo para crear una obra que resuene con tu corazón.",
            imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1711756309/dearq-img/services/nxgsziofdsvvvioqwylb.webp",
            alt: "diseño_emocional"
        },
        {
            id: 4,
            title: "Diseño de Elementos Decorativos Complementarios",
            text: "Dale el toque final perfecto a tu espacio con nuestros elementos decorativos complementarios. Desde piezas esculturales hasta textiles exquisitos, cada detalle se elige con el propósito de realzar la belleza y la cohesión de tu entorno. Nuestro enfoque en el diseño personalizado garantiza que cada elemento se adapte perfectamente a tu estilo y visión.",
            imgUrl: "https://res.cloudinary.com/dacbde3so/image/upload/v1711754310/dearq-img/services/vdtfqqpcqmz9cwcnseot.webp",
            alt: "diseño_complementario"
        },
        {
            id: 5,
            title: "Trabajo en Obra",
            text: "Confía en nuestro equipo para llevar a cabo tu visión desde los planos hasta la realidad. Nuestro servicio de trabajo en obra se caracteriza por la excelencia en la ejecución y la atención meticulosa a los detalles. Desde la coordinación de los diversos aspectos del proyecto hasta el cumplimiento de los plazos, estamos comprometidos a hacer realidad tus sueños de diseño.",
            imgUrl: "",
            alt: "trabajo_obra"
        },
        {
            id: 6,
            title: "Realización Completa hasta su Concreción Final",
            text: "Deja todo en nuestras manos y observa cómo tu visión cobra vida. Nuestro servicio de realización completa garantiza que cada etapa de tu proyecto, desde la conceptualización hasta la implementación final, se maneje con cuidado y profesionalismo. Nos encargamos de cada detalle para que puedas disfrutar de un resultado impecable que refleje tu estilo y personalidad.",
            imgUrl: "",
            alt: "trabajo_completo"
        }
    ]

    const toolData = [
        {
            id: "1",
            title: "Temperatura",
            text: "",
            imgUrl: "",
            alt: "temperatura"
        },
        {
            id: "2",
            title: "Flexibilidad de los espacios",
            text: "",
            imgUrl: "",
            alt: "flexibilidad"
        },
        {
            id: "3",
            title: "Materialidad",
            text: "",
            imgUrl: "",
            alt: "materialidad"
        },
        {
            id: "4",
            title: "Acústica",
            text: "",
            imgUrl: "",
            alt: "acustica"
        },
        {
            id: "5",
            title: "Biofilia",
            text: "",
            imgUrl: "",
            alt: "biofilia"
        },
        {
            id: "6",
            title: "Colores",
            text: "",
            imgUrl: "",
            alt: "colores"
        },
        {
            id: "7",
            title: "Iluminación",
            text: "",
            imgUrl: "",
            alt: "iluminacion"
        },
        {
            id: "8",
            title: "Olores",
            text: "",
            imgUrl: "",
            alt: "olores"
        }
    ]
    return (
        <div className="">
            <p className="w-fit ml-[7rem] mt-[2rem]">En DEArq nos encanta que te sientas comodo y conectado con tu hogar, por lo que te ofrecemos un servicio integral de diseño que abarca:</p>
            <Container items={serviceData} type={"service"}/>
            {/* <div className="grid grid-cols-3 gap-[5rem] w-fit m-auto my-[3rem]">
                {
                    serviceData.map((item) => (
                        <Card key={item.id} title={item.title} imgUrl={item.imgUrl} alt={item.alt} text={item.text} />
                    ))
                }
            </div> */}
            <p className="w-fit ml-[7rem] mt-[2rem]">Para ofrecerte nuestros increíbles servicios utilizamos variadas herramientas de diseño para brindarte la mejor experiencia posible adaptando a tus necesidades:</p>
            <Container items={toolData} type={"tool"}/>
            {/* <div className="grid grid-cols-4 gap-[4rem] w-fit m-auto my-[3rem]">
                {
                    toolData.map((item) => (
                        <Card key={item.id} title={item.title} imgUrl={item.imgUrl} alt={item.alt} text={item.text} />
                    ))
                }
            </div> */}
        </div>
    )
}

export default Service 
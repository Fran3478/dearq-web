import Post from "./Post"

const Blog = () => {
    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            cat: "Categoria",
            img: "https://adrianxaviermx.wordpress.com/wp-content/uploads/2017/09/pabellon-el-eco-2011-foto.jpg",
            img_alt: "titulo-alternativo-img",
            img_title: "Lorem ipsum dolor sit amet consectetur",
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi recusandae quae numquam voluptates itaque tempora, in soluta iusto et dolores assumenda consequatur expedita atque natus animi voluptatum reiciendis accusantium?"
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            cat: "Categoria 2",
            img: "https://3.bp.blogspot.com/-7OxCvwEOq0k/T_zta0uIz-I/AAAAAAAAAC0/DrTRfGbW3oE/s1600/blog-del-dise%25C3%25B1o-producto-colombia.jpg",
            img_alt: "titulo-alternativo-img",
            img_title: "Titulo para mostrar en la imagen",
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi recusandae quae numquam voluptates itaque tempora, in soluta iusto et dolores assumenda consequatur expedita atque natus animi voluptatum reiciendis accusantium?"
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            cat: "Categoria 3",
            img: "https://www.connectionsbyfinsa.com/wp-content/uploads/2019/05/ConnectionsbyFinsa-Dise%C3%B1o-Emocional-nurture.jpg",
            img_alt: "titulo-alternativo-img",
            img_title: "Titulo para mostrar en la imagen",
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi recusandae quae numquam voluptates itaque tempora, in soluta iusto et dolores assumenda consequatur expedita atque natus animi voluptatum reiciendis accusantium?"
        },
        {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            cat: "Categoria 4",
            img: "https://adictec.com/wp-content/uploads/2017/03/Dise%C3%B1o-Emocional-Para-Incrementar-La-Participaci%C3%B3n-Del-Usuario.jpg",
            img_alt: "titulo-alternativo-img",
            img_title: "Titulo para mostrar en la imagen",
            intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente modi recusandae quae numquam voluptates itaque tempora, in soluta iusto et dolores assumenda consequatur expedita atque natus animi voluptatum reiciendis accusantium?"
        }
    ]

    return(
        <div className="min-w-screen w-full h-full m-auto">
            {
                posts.length !== 0 ? (
                    posts.map((p, i) => (
                        <Post key={p.id} post={p} odd={Math.floor((i+1)%2)} />
                    ))
                ) : 
                (
                    <p className="text-4xl text-center text-gray-400">Aún no se realizó ninguna publicación</p>
                )
            }


            
        </div>
    )
}

export default Blog
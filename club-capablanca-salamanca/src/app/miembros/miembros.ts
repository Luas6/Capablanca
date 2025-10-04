import { Miembro } from "./miembro.model"

export const MIEMBROS: Miembro[]=[
    {
        nombre: "Luis Martín",
        rating: 1990,
        descripcion: "Nuestro integrante más inquieto, le va mejor en el ajedrez que en los estudios",
        fideLink: "https://ratings.fide.com/profile/94711372",
        rutaFoto: "/assets/img/miembros/luis.webp"
    },{
        nombre: "Miguel Galán",
        rating: 1750,
        descripcion: "",
        fideLink: "https://ratings.fide.com/profile/2299798",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Fernando Flores",
        rating: 1725,
        descripcion: "Fernando trabaja haciendo desaparecer cartas y se entretiene haciendo desaparecer alfiles",
        fideLink: "https://ratings.fide.com/profile/94700028",
        rutaFoto: "/assets/img/miembros/avatar-default.webp",
         opcional: {
            link: "https://www.fernandofloresmagia.es/",
            nombrelink: "Fernando Flores Magia"
          }
    },
    {
        nombre: "Óscar Bravo",
        rating: 1700,
        descripcion: "",
        fideLink: "https://ratings.fide.com/profile/94705127",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Emilio Sánchez",
        rating: 1650,
        descripcion: "¡Alto, policía! Su alfil queda confiscado",
        fideLink: "https://ratings.fide.com/profile/24509400",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Saúl Matías",
        rating: 1650,
        descripcion: "Saúl combina sus conocimientos informáticos con su pasión por los deportes y el ajedrez",
        fideLink: "https://ratings.fide.com/profile/94746320",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Javier Óscar Sierra",
        rating: 1650,
        descripcion: "",
        fideLink: "https://ratings.fide.com/profile/24509388",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Álvaro Sánchez",
        rating: 1600,
        descripcion: "Profesor, ha enseñado a jugar al ajedrez a innumerables personas, actualmente sigue dando clases en la escuela y en las 64 casillas",
        fideLink: "https://ratings.fide.com/profile/2236451",
        rutaFoto: "/assets/img/miembros/alvaro-sanchez.webp"
    },
    {
        nombre: "Marcos Terrero",
        rating: 1520,
        descripcion: "",
        fideLink: "https://ratings.fide.com/profile/523007591",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
    {
        nombre: "Miguel Gosálvez",
        rating: 1500,
        descripcion: "Grafista y diseñador, fundador de Tranqui Comix, destaca por su creatividad tanto fuera como dentro del tablero",
        fideLink: "https://ratings.fide.com/profile/94705062",
        rutaFoto: "/assets/img/miembros/miguel-gosalvez.webp",
        opcional: {
            link: "https://www.mgmoso.com/",
            nombrelink: "MGMOSO"
          }
    },
    {
        nombre: "Jose Ramón Martín",
        rating: 1600,
        descripcion: "Nuestro miembro más emblemático y querido, cariñoso y solidario con los que lo rodean",
        fideLink: "https://ratings.fide.com/profile/24512079",
        rutaFoto: "/assets/img/miembros/avatar-default.webp"
    },
];
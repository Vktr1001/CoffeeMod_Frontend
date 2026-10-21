// Importa las imágenes desde la carpeta img/devs
import almaImg from '../img/devs/Alma.png'
import isaacImg from '../img/devs/Isaac.png';
import luisAngelImg from '../img/devs/LuisAngel.png';
import anaImg from '../img/devs/Ana.png';
import cesarImg from '../img/devs/Cesar.png';
import danielaImg from '../img/devs/Daniela.png';
import israelImg from '../img/devs/Israel.png';
import victorImg from '../img/devs/Victor.png';
import sergioImg from '../img/devs/Sergio.png';

// Datos de los miembros del equipo
const equipo = [
  {
    nombre: "Jocelin Bernal",
    rol: "PRODUCT OWNER // DISEÑO UX/IU",
    descripcion: "Definí qué se construía y en qué orden. Diseñé la experiencia de usuario y el prototipo de la interfaz.",
    deDondeVengo: "Vengo del Diseño Gráfico y la Producción Audiovisual. Me formé en Psicología Social y di el salto a la tecnología: primero la Ciberseguridad, hoy el Desarrollo Web. ",
    aDondeVoy: "Cada etapa me volvió multidisciplinaria y me enseñó a mirar al usuario desde distintas perspectivas; hoy lo traduzco en interfaces claras y diseños funcionales que comunican correctamente.",
    foto: almaImg
  },
  {
    nombre: "Isaac Razo Soto",
    rol: "DESARROLLADOR // SCRUM",
    descripcion: "Armé el backlog del proyecto en Jira y el flujo de ramas y pull requests en GitHub, y ayudé a ordenar la guía de diseño y los wireframes V2.",
    deDondeVengo: "Vengo del diseño y la animación digital, y de trabajar en soporte técnico y reclutamiento bilingüe. Hoy estoy en el bootcamp Java Full Stack de Generation. ",
    aDondeVoy: "Voy por mi primer trabajo como desarrollador, en un equipo donde siga aprendiendo y use la IA como herramienta.",
    foto: isaacImg
  },
  {
    nombre: "Viktor San Roman",
    rol: "BACKEND ENGINEER // CORE & INFRAESTRUCTURA",
    descripcion: "Especialista en desarrollo backend con Java y Spring Boot. Encargado de la arquitectura, bases de datos relacionales y la lógica de negocio detrás de 1001 Labs. Optimiza código con la misma precisión milimétrica con la que calcula sus ratios de extracción en V60 y calibra sus shots de espresso.",
    deDondeVengo: "Evolucioné de la Biotecnología hacia la Ingeniería de Software (Tecmilenio y Generation). ",
    aDondeVoy: "Busco escalar 1001 Labs consolidándome como un desarrollador backend enfocado en arquitecturas robustas y de alto rendimiento.",
    foto: victorImg
  },
  {
    nombre: "Daniela Magaña Arana",
    rol: "DEV · CONTACTO",
    descripcion: "Propuso la paleta Filter Ruby, armó el plan de pruebas y diseña la página de contacto.",
    deDondeVengo: "engo de la fisioterapia, donde desarrollé pensamiento analítico, empatía y resolución de problemas. Me formé como Desarrollador Java Full Stack en Generation México, donde exploro herramientas de IA. ",
    aDondeVoy: "Busco mi primer rol en desarrollo web para integrarme a un equipo donde siga aprendiendo y aportando valor.",
    foto: danielaImg
  },
  {
    nombre: "Ana Cristina Pérez López",
    rol: "DEV · INICIO",
    descripcion: "Configuró el proyecto en Jira y diseña la página de inicio de la tienda.",
    deDondeVengo: "Ingeniera en sistemas Computacionales. Su camino el la tecnología ha estado enfocado en desarrollo frontend y el deseño de interfaces. ",
    aDondeVoy: "Trabaja de forma independiente haciendo sitios web para negocios pequeños y actualmente se forma como desarrolladora dentro de 1001 Labs.",
    foto: anaImg
  },
  {
    nombre: "Cesar Joseph Luna Chiu",
    rol: "SOFTWARE ENGINEER · ACERCA DE NOSOTROS",
    descripcion: "De las leyes al software, mi camino ha sido una reinvención impulsada por la curiosidad y el aprendizaje continuo.",
    deDondeVengo: "Lo que comenzó con el estudio del Derecho evolucionó hacia una pasión por la tecnología y el desarrollo de soluciones digitales. ",
    aDondeVoy: "Actualmente, participo en todas las etapas del ciclo de vida del software, aplicando metodologías ágiles y buenas prácticas de ingeniería para crear aplicaciones seguras, escalables y preparadas para afrontar los retos del futuro.",
    foto: cesarImg
  },
  {
    nombre: "Israel Zárate Torres",
    rol: "DEV · CARRITO",
    descripcion: "Participa en la implementación de lógica de negocio. Se encarga del desarrollo de aplicaciones backend utilizando Java y Spring Boot. ",
    deDondeVengo: "Soy programador Java, con enfoque en el desarrollo backend. ",
    aDondeVoy: "Quiero seguir fortaleciendo mis habilidades y convertirme en un desarrollador backend especializado en Java.",
    foto: israelImg
  },
  {
    nombre: "Luis Angel Calvillo Velazquez",
    rol: "JAVA FULL STACK & CYBERSECURITY ENG",
    descripcion: "Desarrollo el frontend con HTML, CSS y JavaScript asi com el backend en Java Spring Boot, diseña la base de datos MySQL",
    deDondeVengo: "Vengo de la gestión  de redes informaticas. ",
    aDondeVoy: "Voy hacía la creación de aplicaciones full stack robustas y mejoras prácticas de ciberseguridad.",
    foto: luisAngelImg
  },
  {
    nombre: "Sergio Estrada Vázquez",
    rol: "DEV · LOGIN Y REGISTRO",
    descripcion: "Diseña el acceso de usuarios: inicio de sesión y registro.",
    deDondeVengo: "Soy un desarrollador con una formación por parte de Generation México (CH73). ",
    aDondeVoy: "Mi objetivo es ayudar y cuidar a mi equipo, así como la construcción de un código limpio y que cumpla con lo que establece los proyectos cualesquiera.",
    foto: sergioImg
  }
  // Puedes agregar aquí los demás integrantes siguiendo el mismo formato
];

export function crearTarjetasEquipo() {
  const tarjetasHTML = equipo.map(miembro => `
    <div class="col-12 col-md-6 col-lg-4 mb-4">
      <div class="card card-equipo h-100">
        <div class="card-img-wrapper">
          <img src="${miembro.foto}" class="card-img-top" alt="${miembro.nombre}">
        </div>
        <div class="card-body d-flex flex-column">
          <span class="card-rol">${miembro.rol}</span>
          <h3 class="card-nombre">${miembro.nombre}</h3>
          <p class="card-desc">${miembro.descripcion}</p>
          <div class="card-trayectoria mt-auto">
            <span class="subtitulo-trayectoria">DE DÓNDE VENGO / A DÓNDE VOY</span>
            <p class="texto-trayectoria">${miembro.deDondeVengo} ${miembro.aDondeVoy}</p>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  return `
    <section class="seccion-equipo my-4">
      <div class="header-seccion mb-4">
        <span class="subtitulo-seccion">02 / EL EQUIPO</span>
        <h2 class="titulo-seccion">QUIÉN HACE COFFEEMOD</h2>
        <p class="desc-seccion">Nueve personas del bootcamp Java Full Stack de Generation México. Cada quien aporta una pieza del proyecto.</p>
      </div>
      <div class="row">
        ${tarjetasHTML}
      </div>
    </section>
  `;
}
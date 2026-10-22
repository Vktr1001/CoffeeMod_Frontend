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

const teamMembers = [
  {
    counter: "01 / 09",
    name: "Jocelin Bernal",
    role: "PRODUCT OWNER // DISEÑO UX/IU",
    summary: "Definí qué se construía y en qué orden. Diseñé la experiencia de usuario y el prototipo de la interfaz.",
    bio: "Vengo del Diseño Gráfico y la Producción Audiovisual. Me formé en Psicología Social y di el salto a la tecnología: primero la Ciberseguridad, hoy el Desarrollo Web. Cada etapa me volvió multidisciplinaria y me enseñó a mirar al usuario desde distintas perspectivas; hoy lo traduzco en interfaces claras y diseños funcionales que comunican correctamente.",
    img: almaImg
  },
  {
    counter: "02 / 09",
    name: "Isaac Razo Soto",
    role: "DESARROLLADOR // SCRUM",
    summary: "Armé el backlog del proyecto en Jira y el flujo de ramas y pull requests en GitHub, y ayudé a ordenar la guía de diseño y los wireframes V2.",
    bio: "Vengo del diseño y la animación digital, y de trabajar en soporte técnico y reclutamiento bilingüe. Hoy estoy en el bootcamp Java Full Stack de Generation. Voy por mi primer trabajo como desarrollador, en un equipo donde siga aprendiendo y use la IA como herramienta.",
    img: isaacImg
  },
  {
    counter: "03 / 09",
    name: "Viktor San Roman",
    role: "BACKEND ENGINEER // CORE & INFRAESTRUCTURA",
    summary: "Especialista en desarrollo backend con Java y Spring Boot. Encargado de la arquitectura, bases de datos relacionales y la lógica de negocio detrás de 1001 Labs. Optimiza código con la misma precisión milimétrica con la que calcula sus ratios de extracción en V60 y calibra sus shots de espresso.",
    bio: "Evolucioné de la Biotecnología hacia la Ingeniería de Software (Tecmilenio y Generation). Busco escalar 1001 Labs consolidándome como un desarrollador backend enfocado en arquitecturas robustas y de alto rendimiento.",
    img: victorImg
  },
  {
    counter: "04 / 09",
    name: "Daniela Magaña Arana",
    role: "DEV · CONTACTO",
    summary: "Propuso la paleta Filter Ruby, armó el plan de pruebas y diseña la página de contacto.",
    bio: "Vengo de la fisioterapia, donde desarrollé pensamiento analítico, empatía y resolución de problemas. Me formé como Desarrollador Java Full Stack en Generation México, donde exploro herramientas de IA. Busco mi primer rol en desarrollo web para integrarme a un equipo donde siga aprendiendo y aportando valor.",
    img: danielaImg
  },
  {
    counter: "05 / 09",
    name: "Ana Cristina Pérez López",
    role: "DEV · INICIO",
    summary: "Configuró el proyecto en Jira y diseña la página de inicio de la tienda.",
    bio: "Ingeniera en sistemas Computacionales. Su camino el la tecnología ha estado enfocado en desarrollo frontend y el deseño de interfaces. Trabaja de forma independiente haciendo sitios web para negocios pequeños y actualmente se forma como desarrolladora dentro de 1001 Labs.",
    img: anaImg
  },
  {
    counter: "06 / 09",
    name: "Cesar Joseph Luna Chiu",
    role: "SOFTWARE ENGINEER · ACERCA DE NOSOTROS",
    summary: "De las leyes al software, mi camino ha sido una reinvención impulsada por la curiosidad y el aprendizaje continuo.",
    bio: "Lo que comenzó con el estudio del Derecho evolucionó hacia una pasión por la tecnología y el desarrollo de soluciones digitales. Actualmente, participo en todas las etapas del ciclo de vida del software, aplicando metodologías ágiles y buenas prácticas de ingeniería para crear aplicaciones seguras, escalables y preparadas para afrontar los retos del futuro.",
    img: cesarImg
  },
  {
    counter: "07 / 09",
    name: "Israel Zárate Torres",
    role: "DEV · CARRITO",
    summary: "Participa en la implementación de lógica de negocio. Se encarga del desarrollo de aplicaciones backend utilizando Java y Spring Boot. ",
    bio: "Soy programador Java, con enfoque en el desarrollo backend. Quiero seguir fortaleciendo mis habilidades y convertirme en un desarrollador backend especializado en Java.",
    img: israelImg
  },
  {
    counter: "08 / 09",
    name: "Luis Angel Calvillo Velazquez",
    role: "JAVA FULL STACK & CYBERSECURITY ENG",
    summary: "Desarrollo el frontend con HTML, CSS y JavaScript asi com el backend en Java Spring Boot, diseña la base de datos MySQL",
    bio: "Vengo de la gestión  de redes informaticas. Voy hacía la creación de aplicaciones full stack robustas y mejoras prácticas de ciberseguridad.",
    img: luisAngelImg
  },
  {
    counter: "09 / 09",
    name: "Sergio Estrada Vázquez",
    role: "DEV · LOGIN Y REGISTRO",
    summary: "Diseña el acceso de usuarios: inicio de sesión y registro.",
    bio: "Soy un desarrollador con una formación por parte de Generation México (CH73). Mi objetivo es ayudar y cuidar a mi equipo, así como la construcción de un código limpio y que cumpla con lo que establece los proyectos cualesquiera.",
    img: sergioImg
  }
  // Puedes agregar aquí los demás integrantes siguiendo el mismo formato
];


/*v2*/

let currentIndex = 7; // Empezando en tu posición o la que prefieras

function updateMemberView(index) {
    const member = teamMembers[index];
    const imgElement = document.getElementById("active-member-img");
    const infoContainer = document.getElementById("member-info");

    // Aplicar animación de salida
    imgElement.classList.add("fade-out");
    infoContainer.classList.add("fade-out");

    setTimeout(() => {
        document.getElementById("member-counter").innerText = member.counter;
        document.getElementById("member-role").innerText = member.role;
        document.getElementById("member-name").innerText = member.name;
        document.getElementById("member-summary").innerText = member.summary;
        document.getElementById("member-bio").innerText = member.bio;
        imgElement.src = member.img;

        // Quitar animación de salida (entra con fade in)
        imgElement.classList.remove("fade-out");
        infoContainer.classList.remove("fade-out");
    }, 300);

    // Actualizar clases activas en las miniaturas
    document.querySelectorAll(".member-thumb").forEach((thumb, idx) => {
        if (idx === index) {
            thumb.classList.add("active-thumb");
            thumb.querySelector("small").classList.add("text-white", "fw-bold");
            thumb.querySelector("small").classList.remove("text-muted");
            thumb.querySelector("img").style.borderColor = "#A42C12";
        } else {
            thumb.classList.remove("active-thumb");
            thumb.querySelector("small").classList.remove("text-white", "fw-bold");
            thumb.querySelector("small").classList.add("text-muted");
            thumb.querySelector("img").style.borderColor = "transparent";
        }
    });
}

// Event Listeners para las miniaturas
document.querySelectorAll(".member-thumb").forEach((thumb) => {
    thumb.addEventListener("click", () => {
        currentIndex = parseInt(thumb.getAttribute("data-index"));
        updateMemberView(currentIndex);
    });
});

// Event Listeners para las flechas
document.getElementById("next-member").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % teamMembers.length;
    updateMemberView(currentIndex);
});

document.getElementById("prev-member").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
    updateMemberView(currentIndex);
});
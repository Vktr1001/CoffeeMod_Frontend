// script de la pagina acerca de nosotros (no es componente, solo se usa aqui)
import '../css/about-us.css';

import jocelinImg from '../../img/devs/jocelinportafolio.jpg';
import isaacImg from '../../img/devs/isaacportafolio.jpeg';
import victorImg from '../../img/devs/victorportafolio.jpg';
import daniImg from '../../img/devs/daniportafolio.jpg';
import anaImg from '../../img/devs/anitaportafolio.jpg';
import cesarImg from '../../img/devs/cesarportafolio.jpg';
import israImg from '../../img/devs/israportafolio.jpeg';
import luisImg from '../../img/devs/luisportafolio.jpg';
import serchImg from '../../img/devs/serchportafolio.jpeg';

// datos del equipo (salen de las tarjetas del figma)
const equipo = [
  {
    nombre: 'Jocelin Bernal',
    rol: 'PRODUCT OWNER // DISEÑO UX/UI',
    resumen: 'Definí qué se construía y en qué orden. Diseñé la experiencia de usuario y el prototipo de la interfaz.',
    bio: 'Vengo del Diseño Gráfico y la Producción Audiovisual. Me formé en Psicología Social y di el salto a la tecnología: primero la Ciberseguridad, hoy el Desarrollo Web. Cada etapa me volvió multidisciplinaria y me enseñó a mirar al usuario desde distintas perspectivas.',
    img: jocelinImg,
    github: 'https://github.com/jocelinbernal',
    linkedin: 'https://www.linkedin.com/in/jocelin-bernal'
  },
  {
    nombre: 'Isaac Razo Soto',
    rol: 'DESARROLLADOR // SCRUM',
    resumen: 'Armé el backlog del proyecto en Jira y el flujo de ramas y pull requests en GitHub, y ayudé a ordenar la guía de diseño y los wireframes V2.',
    bio: 'Vengo del diseño y la animación digital, y de trabajar en soporte técnico y reclutamiento bilingüe. Hoy estoy en el bootcamp Java Full Stack de Generation. Voy por mi primer trabajo como desarrollador, en un equipo donde siga aprendiendo y use la IA como herramienta.',
    img: isaacImg,
    github: 'https://github.com/ChanisBlu',
    linkedin: 'https://www.linkedin.com/in/isaac-razo-soto/'
  },
  {
    nombre: 'Viktor San Roman',
    rol: 'BACKEND ENGINEER // CORE & INFRAESTRUCTURA',
    resumen: 'Desarrollo backend con Java y Spring Boot. Me encargo de la arquitectura, las bases de datos y la lógica de negocio de 1001 Labs.',
    bio: 'Evolucioné de la Biotecnología hacia la Ingeniería de Software (Tecmilenio y Generation). Busco consolidarme como desarrollador backend enfocado en arquitecturas robustas y de alto rendimiento.',
    img: victorImg,
    github: 'https://github.com/Vktr1001',
    linkedin: 'https://www.linkedin.com/in/viktor-src'
  },
  {
    nombre: 'Daniela Magaña Arana',
    rol: 'DESARROLLADORA // CONTACTO',
    resumen: 'Propuse la paleta Filter Ruby, armé el plan de pruebas y diseñé la página de contacto.',
    bio: 'Vengo de la fisioterapia, donde desarrollé pensamiento analítico, empatía y resolución de problemas. Me formé como Desarrolladora Java Full Stack en Generation México y busco mi primer rol en desarrollo web para seguir aprendiendo y aportando valor.',
    img: daniImg,
    github: 'https://github.com/danielamag98',
    linkedin: 'https://www.linkedin.com/in/daniela-magana9808/'
  },
  {
    nombre: 'Ana Cristina Pérez López',
    rol: 'DESARROLLADORA // INICIO',
    resumen: 'Configuré el proyecto en Jira y diseñé la página de inicio de la tienda.',
    bio: 'Ingeniera en Sistemas Computacionales. Mi camino en la tecnología ha estado enfocado en el desarrollo frontend y el diseño de interfaces. Hago sitios web para negocios pequeños y hoy me formo como desarrolladora en 1001 Labs.',
    img: anaImg,
    github: 'https://github.com/Aperlop2',
    linkedin: 'https://www.linkedin.com/in/ana-cristina-perez-lopez'
  },
  {
    nombre: 'Cesar Joseph Luna Chiu',
    rol: 'SOFTWARE ENGINEER // ACERCA DE NOSOTROS',
    resumen: 'De las leyes al software, mi camino ha sido una reinvención impulsada por la curiosidad y el aprendizaje continuo.',
    bio: 'Lo que comenzó con el estudio del Derecho evolucionó hacia una pasión por la tecnología. Participo en todas las etapas del ciclo de vida del software, aplicando metodologías ágiles y buenas prácticas para crear aplicaciones seguras y escalables.',
    img: cesarImg,
    github: 'https://github.com/Cesaru19',
    linkedin: 'https://www.linkedin.com/in/cesar-chiu'
  },
  {
    nombre: 'Israel Zárate Torres',
    rol: 'DESARROLLADOR // CARRITO',
    resumen: 'Participo en la lógica de negocio y en el desarrollo backend con Java y Spring Boot.',
    bio: 'Soy programador Java con enfoque en backend. Quiero seguir fortaleciendo mis habilidades y convertirme en un desarrollador backend especializado en Java.',
    img: israImg,
    github: 'https://github.com/IsraelZarate99',
    linkedin: 'https://www.linkedin.com/in/israel-z%C3%A1rate-torres-336140375/'
  },
  {
    nombre: 'Luis Ángel Calvillo Velázquez',
    rol: 'JAVA FULL STACK // CIBERSEGURIDAD',
    resumen: 'Desarrollo el frontend con HTML, CSS y JavaScript y el backend en Java Spring Boot, y diseño la base de datos MySQL.',
    bio: 'Vengo de la gestión de redes informáticas. Voy hacia la creación de aplicaciones full stack robustas con buenas prácticas de ciberseguridad.',
    img: luisImg,
    github: 'https://github.com/AngelVelaz369',
    linkedin: 'https://www.linkedin.com/in/luis-angel-velazquez'
  },
  {
    nombre: 'Sergio Estrada Vázquez',
    rol: 'DESARROLLADOR // LOGIN Y REGISTRO',
    resumen: 'Diseñé el acceso de usuarios: inicio de sesión y registro.',
    bio: 'Me formé como desarrollador en Generation México (CH73). Mi objetivo es apoyar y cuidar a mi equipo, y construir código limpio que cumpla con lo que pide cada proyecto.',
    img: serchImg,
    github: 'https://github.com/RedMoon73uwu',
    linkedin: 'https://www.linkedin.com/in/sergio-estrada-v%C3%A1zquez-redmoon73uwu'
  }
];

// pone un 0 adelante: 1 -> 01
function dosDigitos(num) {
  return num < 10 ? '0' + num : '' + num;
}

// iconos de github y linkedin (solo si la persona tiene link)
function crearRedes(p) {
  let redes = '';
  if (p.github) {
    redes += `<a href="${p.github}" target="_blank" rel="noopener" class="about-red fs-3" aria-label="GitHub de ${p.nombre}"><i class="bi bi-github"></i></a>`;
  }
  if (p.linkedin) {
    redes += `<a href="${p.linkedin}" target="_blank" rel="noopener" class="about-red fs-3" aria-label="LinkedIn de ${p.nombre}"><i class="bi bi-linkedin"></i></a>`;
  }
  return redes;
}

let slides = '';
let miniaturas = '';

for (let i = 0; i < equipo.length; i++) {
  const p = equipo[i];
  const activo = i === 0 ? 'active' : '';

  // una slide por persona
  slides += `
    <div class="carousel-item ${activo}">
      <div class="row align-items-center g-4 g-lg-5">
        <div class="col-12 col-lg-5">
          <div class="ratio ratio-1x1 bg-black overflow-hidden">
            <div>
              <span class="about-fondo position-absolute top-0 start-0 p-3 display-1 fw-bold lh-1">1001<br>LABS</span>
              <img src="${p.img}" alt="Foto de ${p.nombre}" class="position-absolute bottom-0 end-0 w-75 h-75 object-fit-cover">
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-7 about-info">
          <p class="about-mono mb-1">${dosDigitos(i + 1)} / ${dosDigitos(equipo.length)}</p>
          <p class="about-mono about-rol mb-2">${p.rol}</p>
          <h3 class="about-titulos display-5 fw-bold mb-3">${p.nombre}</h3>
          <p class="fs-5">${p.resumen}</p>
          <p class="about-mono mb-1">DE DÓNDE VENGO / A DÓNDE VOY</p>
          <p class="text-secondary">${p.bio}</p>
          <div class="d-flex gap-3">${crearRedes(p)}</div>
        </div>
      </div>
    </div>`;

  // la miniatura cambia de slide (bootstrap le pone la clase active sola)
  miniaturas += `
    <button type="button" class="${activo}" data-bs-target="#carruselEquipo" data-bs-slide-to="${i}" aria-label="Ver a ${p.nombre}">
      <img src="${p.img}" alt="" class="w-100 object-fit-cover">
      <span class="d-block mt-1">${p.nombre.split(' ')[0].toUpperCase()}</span>
    </button>`;
}

document.querySelector('#slides-equipo').innerHTML = slides;
document.querySelector('#miniaturas-equipo').innerHTML = miniaturas;

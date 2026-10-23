import '../assets/css/acercadeNosotros.css';

const equipo = [
    {nombre: 'jocelin Bernal', rol: 'Diseño UX/UI', foto: '/images/equipo/jos.png', 
    dato: 'Vengo del Diseño Gráfico y la Producción Audiovisual, seguido de una formación inicial en Psicología Social y una transición hacia la tecnología que empezó por la Ciberseguridad y sigue hacia al Desarrollo Web. Cada etapa me hico multidisciplinar y me enseñó a mirar al usuario desde distintas perspectivas y hoy lo traduzco en interfaces claras.'},
    {nombre: 'Isaac Razo Soto', rol: 'Desarrollador', foto: '/images/equipo/isaac.png', 
    dato: 'Vengo del diseño y la animación digital, y de trabajar en soporte técnico y reclutamiento bilingüe. Hoy estoy en el bootcamp Java Full Stack de Generation y voy por mi primer trabajo como desarrollador, en un equipo donde siga aprendiendo y use la IA como herramienta.'},
    {nombre: 'Viktor  San Roman', rol: 'Desarrollador Backend', foto: '/images/equipo/vik.png', 
    dato: 'Evolucioné de la Biotecnología hacia la Ingeniería de Software (Tecmilenio y Generation). Busco escalar 1001 Labs consolidándome como un desarrollador backend enfocado en arquitecturas robustas y de alto rendimiento.'},
    {nombre: 'Daniela Magaña Arana', rol: 'Desarrolladora', foto: '/images/equipo/dani.png', 
    dato: 'Vengo de la fisioterapia, donde desarrollé pensamiento analítico, empatía y resolución de problemas. Me formé como Desarrollador Java Full Stack en Generation México, donde exploro herramientas de IA. Busco mi primer rol en desarrollo web para integrarme a un equipo donde siga aprendiendo y aportando valor.'},
    {nombre: 'Ana Cristina Pérez López', rol: 'Ingeniera de software', foto: '/images/equipo/ana.png', 
    dato: 'Ingeniera en sistemas Computacionales. Su camino el la tecnología ha estado enfocado en desarrollo frontend y el deseño de interfaces. Trabaja de forma independiente haciendo sitios web para negocios pequeños y actualmente se forma como desarrolladora dentro de 1001 Labs.'},
    {nombre: 'Cesar Joseph Luna Chiu', rol: 'Ingeniero de Software', foto: '/images/equipo/cesar.png', 
    dato: 'De las leyes al software, mi camino ha sido una reinvención impulsada por la curiosidad y el aprendizaje continuo. Lo que comenzó con el estudio del Derecho evolucionó hacia una pasión por la tecnología y el desarrollo de soluciones digitales. Actualmente, participo en todas las etapas del ciclo de vida del software, aplicando metodologías ágiles y buenas prácticas de ingeniería para crear aplicaciones seguras, escalables y preparadas para afrontar los retos del futuro.'},
    {nombre: 'Israel Zárate Torres', rol: 'Desarrollador de software', foto: '/images/equipo/luis.png', 
    dato: 'Soy programador Java, con enfoque en el desarrollo backend. Quiero seguir fortaleciendo mis habilidades y convertirme en un desarrollador backend especializado en Java.'},
    {nombre: 'Luis Angel Calvillo Velazquez', rol: 'Desarrollador FullStack', foto: '/images/equipo/isra.png', 
    dato: 'Desarrolla el frontend con HTML, CSS y JavaScript asi com el backend en Java Spring Boot, diseña la base de datos MySQL'},
    {nombre: 'Sergio Estrada Vázquez', rol: 'Desarrollador', foto: '/images/equipo/serch.png', 
    dato: 'Soy un desarrollador con una formación por parte de Generation México (CH73). Mi objetivo es ayudar y cuidar a mi equipo, así como la construcción de un código limpio y que cumpla con lo que establece los proyectos cualesquiera.'},
];

// Función que genera una tarjeta individual
function crearTarjetaIntegrante(persona) {
    return `
    <div class="col-md-6 col-lg-4">
        <div class="card h-100 border-0">
            <img src="${persona.foto}" class="card-img-top" alt="${persona.nombre}" style="height: 300px; object-fit: cover;">
            <div class="card-body px-0">
                <p class="text-danger small fw-bold text-uppercase mb-2">${persona.rol}</p>
                <h4 class="card-title fw-bold mb-3">${persona.nombre}</h4>
                <p class="card-text mb-3">${persona.dato}</p>
                <div class="mt-auto">
                    <a href="#" class="text-decoration-none small fw-bold me-3">DE DÓNDE VENGO</a>
                    <span class="text-muted">/</span>
                    <a href="#" class="text-decoration-none small fw-bold ms-3">A DÓNDE VOY</a>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Función principal que exporta toda la página
export function crearPaginaNosotros() {
    
    // 2. CORREGIDO: Usar 'let' en lugar de 'const' para poder sumar (+=)
    let tarjetasHTML = '';

    // Generar las 9 tarjetas recorriendo el array
    for (const persona of equipo) {
        tarjetasHTML += crearTarjetaIntegrante(persona);
    }

    // 3. CORREGIDO: Retornar el HTML completo e INYECTAR la variable 'tarjetasHTML' 
    // en lugar de intentar usar '${persona.foto}' que aquí no existe.
    return `
    <section class="py-5">
        <div class="container">
            
            <!-- Sección 01: Por qué existimos -->
            <div class="row mb-5 align-items-center">
            <div class="col-12 col-md-4 mb-3 mb-md-0">
                <p class="text-danger small fw-bold text-uppercase mb-2">01 // POR QUÉ EXISTIMOS</p>
                <h2 class="h3 fw-bold">Café con precisión.</h2>
            </div>
            <div class="col-12 col-md-7 offset-md-1">
                <p class="lead mb-3">
                    Hacer buen café en casa no depende del grano más caro, depende del equipo correcto y de saber usarlo. 
                    En CoffeeMod elegimos molinos, básculas y hervidores que sí cumplen lo que prometen.
                </p>
                <p class="text-muted small">
                    Somos 1001 Labs, un equipo de 9 personas del bootcamp Java Full Stack de Generation México. 
                </p>
            </div>
        </div>

        <!-- Sección 02: El equipo -->
        <div class="row mb-4">
            <div class="col-12">
                <p class="text-danger small fw-bold text-uppercase mb-2">02 // EL EQUIPO</p>
                <h2 class="display-5 fw-bold mb-3">QUIÉN HACE COFFEEMOD</h2>
                <p class="lead" style="max-width: 700px;">
                    Nueve personas del bootcamp Java Full Stack de Generation México (cohorte 73). 
                </p>
            </div>
        </div>
        <!-- Grid de tarjetas: AQUÍ SE INYECTA EL RESULTADO DEL CICLO -->
        <div class="row g-4" id="contenedor-equipo">
            ${tarjetasHTML}
        </div>

        </div>
    </section>
    `;
}

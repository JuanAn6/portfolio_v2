export default {
    languageLabel: "Idioma",
    themeLabel: "Cambiar tema",
    menuLabel: "Abrir menú",
    workingOnThis: "Disponible dentro de poco!",
    // Language names are always written in their own language, never
    // translated: the switcher has to be readable by someone who cannot read
    // the locale they are currently on.
    languageOptions: {
        es: "Español",
        en: "English",
        ca: "Català"
    },
    // Section labels: they sit above a drawn rule and are numbered ("01 · …"),
    // the "blueprint sheet" grammar of the Industry system.
    kickers: {
        profile: "Perfil",
        contact: "Contacto",
        catalog: "Catálogo",
        notes: "Notas",
        detail: "Detalle",
    },
    nav: {
        home: "Inicio",
        projects: "Proyectos",
        about_me: "Sobre mí",
        portfolio: "Portafolio",
        my_name: "Juan Antonio",
        legal: "Aviso legal",
        sitemap: "Mapa del sitio",
    },
    footer: {
        rights: "Todos los derechos reservados.",
        navLabel: "Enlaces legales",
    },
    legal: {
        title: "Aviso legal",
        intro: "En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE), se facilitan a continuación los datos identificativos del titular de este sitio web.",
        identification: {
            kicker: "Titular",
            name: "Nombre",
            nif: "NIF",
            location: "Ubicación",
            email: "Correo electrónico",
            site: "Sitio web",
        },
        termsKicker: "Condiciones",
        lastUpdatedLabel: "Última actualización",
        lastUpdated: "26 de agosto de 2026",
        sections: [
            {
                title: "Objeto",
                body: "Este aviso legal regula el uso del sitio web indicado más arriba, del que es titular la persona identificada en el apartado anterior. El sitio tiene carácter exclusivamente informativo: presenta la trayectoria profesional y los proyectos personales de su titular. No se comercializan productos ni servicios a través de él, ni se realizan transacciones económicas de ningún tipo.",
            },
            {
                title: "Condiciones de uso",
                body: "El acceso al sitio es gratuito y no requiere registro previo. La navegación por él atribuye la condición de usuario e implica la aceptación de este aviso legal. El usuario se compromete a hacer un uso conforme a la ley, a la buena fe y al orden público, y a abstenerse de cualquier conducta que pueda dañar, sobrecargar, inutilizar o impedir el normal funcionamiento del sitio.",
            },
            {
                title: "Propiedad intelectual e industrial",
                body: "Los textos, imágenes, código fuente, diseño y demás contenidos del sitio son titularidad de su autor o de terceros que han autorizado su uso, y están protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su reproducción, distribución, comunicación pública o transformación sin autorización expresa, salvo la cita puntual con indicación de la fuente y enlace al original. El código de los proyectos publicados en repositorios públicos se rige por la licencia que indique cada repositorio.",
            },
            {
                title: "Enlaces a sitios de terceros",
                body: "El sitio contiene enlaces a páginas de terceros, como redes profesionales o repositorios de código. Esos enlaces se ofrecen únicamente como referencia: el titular no controla sus contenidos ni sus políticas de privacidad, por lo que no asume responsabilidad alguna sobre ellos.",
            },
            {
                title: "Exclusión de responsabilidad",
                body: "La información se ofrece tal cual, con fines divulgativos, y puede quedar desactualizada. El titular no responde de los daños que pudieran derivarse de su uso, ni de las interrupciones, errores técnicos o indisponibilidades del servicio, sin perjuicio de que pondrá los medios razonables para evitarlos.",
            },
            {
                title: "Datos personales y cookies",
                body: "Este sitio no dispone de formularios de contacto y no recoge datos personales de quienes lo visitan. Únicamente se facilita una dirección de correo electrónico: si escribes a ella, tus datos se tratarán con la única finalidad de responderte y no se cederán a terceros. El sitio tampoco utiliza cookies de análisis, de perfilado ni publicitarias; solo emplea el almacenamiento local del navegador para recordar el idioma y el tema elegidos, algo estrictamente necesario para prestar el servicio que el propio usuario solicita y que, conforme al artículo 22.2 de la LSSICE, no requiere consentimiento previo.",
            },
            {
                title: "Legislación aplicable y jurisdicción",
                body: "Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del acceso o uso del sitio, las partes se someten a los juzgados y tribunales del domicilio del titular, salvo que la normativa aplicable disponga otro fuero de forma imperativa.",
            },
        ],
    },
    sitemap: {
        title: "Mapa del sitio",
        introduction: "Todas las páginas de este sitio, en el idioma seleccionado.",
        kickerPages: "Páginas",
        kickerProjects: "Proyectos",
        kickerLegal: "Legal",
        kickerLanguages: "Idiomas",
        languagesIntro: "El sitio completo está disponible también en estos idiomas.",
    },
    home: {
        title: "Hola, soy Juan Antonio García Jiménez",
        subtitle: "Desarrollador de aplicaciones web y multiplataforma",
        introduce_my_self: "Cuento con más de tres años de experiencia en el desarrollo de aplicaciones web, trabajando desde la lógica del backend y la base de datos hasta la construcción de interfaces claras y funcionales.",
        introduce_my_characteristics: "Me caracterizo por mantener una actitud proactiva, curiosa y exigente con mi propio trabajo. Siempre busco aprender más, mejorar mis habilidades y aportar valor real en cada proyecto.",
        introduce_my_objectives: "Mi objetivo es seguir creciendo profesionalmente mientras contribuyo en equipos y productos que tengan impacto.",
    },
    // Currículum: la fuente es el CV en PDF. Cada apartado lleva su propio
    // kicker porque solo se usa en esta página.
    about: {
        title: "Sobre mí",
        intro: "Desarrollador de aplicaciones web y multiplataforma. Trabajo a diario con el ciclo completo de una aplicación de gestión: modelo de datos, lógica de servidor, interfaz y despliegue. Me muevo con la misma soltura hablando con quien va a usar la herramienta que dejándola funcionando en producción.",
        experience: {
            kicker: "Experiencia",
            items: [
                {
                    role: "Desarrollador de aplicaciones a medida",
                    company: "Databis",
                    period: "2022 — Actualidad",
                    tasks: [
                        "Desarrollo de aplicaciones web y móviles para la gestión interna de empresas, con generación y envío automático de informes.",
                        "Gestión y diseño de bases de datos.",
                        "Despliegue de aplicaciones en entornos de desarrollo y en producción.",
                        "Atención a consultas de clientes y usuarios, e interpretación e implementación de nuevas funcionalidades.",
                    ],
                },
            ],
        },
        education: {
            kicker: "Formación",
            items: [
                {
                    title: "Desarrollo de Aplicaciones Multiplataforma (DAM)",
                    level: "Grado Superior",
                    period: "2024 — 2025",
                    stack: "Java, Python, Hibernate, Odoo, C, C#, MongoDB, SQL Server…",
                },
                {
                    title: "Desarrollo de Aplicaciones Web (DAW)",
                    level: "Grado Superior",
                    period: "2022 — 2024",
                    stack: "Laravel, Vue, React, Node, MySQL, Apache2, Nginx…",
                },
            ],
        },
        skills: {
            kicker: "Tecnologías",
            groups: [
                { label: "Backend", items: ["Laravel", "Node", "Java", "C#", "C", "Python", "Hibernate"] },
                { label: "Frontend", items: ["Vue", "React", "Astro", "Tailwind"] },
                { label: "Datos", items: ["MySQL", "SQL Server", "MongoDB", "Diseño de bases de datos"] },
                { label: "Sistemas", items: ["Apache2", "Nginx", "Despliegue en producción", "Odoo"] },
            ],
        },
        languages: {
            kicker: "Idiomas",
            items: ["Español", "Catalán", "Inglés"],
        },
        strengths: {
            kicker: "Aptitudes",
            items: [
                "Persona proactiva: aprendo rápido y tengo capacidad de adaptación.",
                "Me gusta hablar con los clientes, entender qué necesitan y en qué puedo ayudarles.",
                "Me gusta trabajar en equipo.",
                "Responsable, organizado y puntual.",
            ],
        },
        extra: {
            kicker: "Información",
            items: [
                "Carnet de conducir",
                "Coche propio",
                "Disponibilidad para viajar",
            ],
        },
    },
    projects: {
        title: "Proyectos",
        show_details:"Ver detalles",
        introduction: "Esto es una pequeña colección de proyectos que he hecho durante los años de estudio y durante mi tiempo libre.",
        developing: "Desarrollando"
    }
};
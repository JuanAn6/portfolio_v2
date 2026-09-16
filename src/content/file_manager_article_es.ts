import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/**
 * Artículo del proyecto "Gestor de archivos". Los bloques `image` llevan
 * `pending: true` hasta que exista la captura: el marcador dice desde dónde
 * hacerla y en qué ruta de `public/` dejarla.
 */
const fileManager: ProjectArticles = {
    tabs: {
        info: "Información",
        technical: "Detalle técnico",
    },
    info: {
        title: "Gestor de archivos",
        meta_title: "Gestor de archivos — Juan Antonio",
        meta_description:
            "Un gestor de archivos para un servidor propio: subir, organizar y buscar documentos desde el navegador, sin nube de terceros.",
        intro: "Un gestor de archivos pensado para un servidor de casa —una Raspberry Pi o un ordenador viejo—: subir, organizar y consultar documentos desde una página web, sin que salgan de la máquina de uno.",
        blocks: [
            { type: "title", text: "Para qué sirve", id: "para-que-sirve" },
            {
                type: "paragraph",
                text: "Las nubes comerciales son cómodas hasta que lo que hay que guardar son escrituras, contratos o historiales médicos. Este gestor hace lo mismo que ellas —carpetas, subidas, búsqueda— pero sobre un disco que está en tu casa y al que solo llega quien tú dejas entrar.",
            },
            {
                type: "paragraph",
                text: "Cada persona tiene su propio espacio y no ve el de nadie más. Un administrador da de alta a quien corresponda y vigila cuánto ocupa cada uno; el resto entra, sube y organiza.",
            },
            {
                type: "quote",
                text: "Lo mismo que una nube comercial, pero sobre un disco que está en tu casa y bajo tus reglas.",
                icon: icons.lock,
            },

            { type: "title", text: "Carpetas y ficheros", id: "carpetas" },
            {
                type: "subtitle",
                text: "La carpeta abierta vive en la dirección",
                id: "navegacion",
            },
            {
                type: "paragraph",
                text: "Navegar por las carpetas cambia la dirección de la página, así que el botón de atrás del navegador funciona, una carpeta se puede guardar en marcadores y un enlace lleva a quien lo abre exactamente donde estabas. Las migas de pan de arriba no son decorativas: además de volver, aceptan que les sueltes ficheros encima.",
            },
            {
                type: "paragraph",
                text: "Sobre la lista se puede seleccionar varios elementos y actuar sobre todos a la vez desde la barra superior, o abrir el menú de una fila concreta para actuar solo sobre ella. Renombrar, mover, borrar y descargar son las mismas acciones en los dos sitios.",
            },
            {
                type: "image",
                src: "projects/file_manager/list.png",
                alt: "Listado de una carpeta con varios elementos seleccionados",
                caption: "La lista con una selección activa y la barra de acciones.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Subir arrastrando", id: "subidas" },
            {
                type: "paragraph",
                text: "Se puede soltar un fichero desde el escritorio en cualquier punto de la ventana y acaba en la carpeta que esté abierta. Arrastrar un elemento que ya está dentro de la aplicación, en cambio, lo mueve de carpeta. Son dos gestos parecidos que nunca se confunden: la aplicación sabe cuál es cuál antes incluso de que sueltes.",
            },
            {
                type: "image",
                src: "projects/file_manager/upload.png",
                alt: "Zona de subida resaltada mientras se arrastra un fichero desde el escritorio",
                caption: "Arrastrar desde el escritorio: la ventana entera es zona de subida.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },
            {
                type: "quote",
                text: "Arrastrar desde fuera sube; arrastrar desde dentro mueve. El mismo gesto, dos significados, y ninguna ambigüedad.",
                icon: icons.spreadsheet,
            },

            { type: "title", text: "Encontrar lo que hay", id: "buscar" },
            {
                type: "paragraph",
                text: "Además del árbol de carpetas hay secciones por tipo —documentos, imágenes, vídeos, audios, pdf— que reúnen todo lo de esa clase esté donde esté, y una búsqueda por nombre. La pantalla de almacenamiento resume cuánto ocupa cada usuario, que es la pregunta que acaba haciéndose todo el mundo cuando el disco es finito.",
            },
            {
                type: "image",
                src: "projects/file_manager/categories.png",
                alt: "Sección de categorías y resumen de almacenamiento",
                caption: "Las categorías por tipo y el resumen de espacio.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Estado", id: "estado" },
            {
                type: "paragraph",
                text: "En desarrollo. Falta previsualizar un fichero sin descargarlo, descargar una carpeta entera como zip y trocear las subidas grandes. El detalle de cómo está hecho está en la pestaña de al lado.",
            },
        ],
    },
    technical: {
        title: "Gestor de archivos",
        meta_title: "Gestor de archivos · Detalle técnico — Juan Antonio",
        meta_description:
            "Cómo está hecho el gestor de archivos: SPA en React 19 y API Laravel 12 con JWT, propiedad comprobada en la consulta, descargas autenticadas y dos arrastres distintos.",
        intro: "Dos piezas: una SPA en React 19 con Vite y una API en Laravel 12 con JWT. Los ficheros viven en el disco, bajo una carpeta por usuario; la base de datos solo guarda los metadatos.",
        blocks: [
            { type: "title", text: "El reparto", id: "arquitectura" },
            {
                type: "paragraph",
                text: "El cliente no sabe nada del sistema de ficheros: pide y recibe JSON, y para bajar un contenido pide un flujo. El servidor no sabe nada de la interfaz: valida, comprueba de quién es cada cosa y responde. Entre los dos hay una única instancia de cliente HTTP con un interceptor que pone el testimonio en cada llamada.",
            },
            {
                type: "code",
                language: "text",
                caption: "Reparto de responsabilidades",
                code: `web_file_manager/   React 19 + Vite 7, React Router 7, Axios (sin TypeScript)
api_file_manager/   Laravel 12 (PHP 8.2), JWT, MySQL

Blobs   en disco, bajo users/{user_id}/ (files.path guarda solo el nombre)
Metadatos  tablas directory y files`,
            },

            { type: "title", text: "La propiedad se comprueba en la consulta", id: "propiedad" },
            {
                type: "paragraph",
                text: "Ninguna consulta busca un elemento y después mira de quién es: el dueño forma parte de la propia búsqueda. La diferencia importa. Si el identificador es de otra persona el resultado es «no existe», y no hay un instante intermedio en el que la fila ajena esté cargada en memoria a la espera de una comprobación que alguien pueda olvidarse de escribir.",
            },
            {
                type: "code",
                language: "php",
                caption: "El patrón, en todos los controladores",
                code: `// La propiedad es parte de la busqueda, no una comprobacion posterior.
$file = File::where('user_id', $request->user()->id)
    ->findOrFail($id);

// Mover una carpeta dentro de si misma se rechaza en el servidor,
// aunque el cliente ya lo impida: el cliente es una comodidad, no una defensa.`,
            },
            {
                type: "quote",
                text: "El identificador de otro devuelve 404, no 403: quien prueba a mano no averigua siquiera si esa fila existe.",
                icon: icons.lock,
            },

            { type: "title", text: "Descargar con un testimonio", id: "descargas" },
            {
                type: "paragraph",
                text: "La descarga fue el sitio donde más se notó que la sesión va en una cabecera. Un enlace normal no puede ponerla, así que el navegador llegaría sin credencial. La solución es pedir el cuerpo con el cliente HTTP de siempre y guardarlo desde el propio JavaScript; el efecto secundario es que un error también llega como blob y hay que volver a sacarle el JSON de dentro.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/download.js",
                code: `const res = await api.get(\`/download_file/\${id}\`, { responseType: 'blob' })

const url = URL.createObjectURL(res.data)
const a = Object.assign(document.createElement('a'), { href: url, download: name })
a.click()
URL.revokeObjectURL(url)   // siempre, o la pestaña se queda con el fichero dentro`,
            },

            { type: "title", text: "Dos arrastres que no se mezclan", id: "arrastre" },
            {
                type: "paragraph",
                text: "Mover elementos dentro de la aplicación y subir ficheros del sistema son dos arrastres distintos que comparten mecánica. Mientras el puntero está por encima, el navegador solo deja ver los tipos que se arrastran, nunca el contenido: la decisión de aceptar o rechazar se toma con el tipo, y el contenido real espera en una referencia.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/drag.js",
                code: `// Interno: mover entre carpetas.
'application/x-file-manager-items'

// Externo: subir a la carpeta abierta.
'Files'

// dragenter y dragleave saltan por cada elemento que se cruza, asi que la
// capa que cubre la ventana lleva un contador de profundidad en vez de un
// booleano: con un booleano parpadea.`,
            },

            { type: "title", text: "Borrar una carpeta", id: "borrado" },
            {
                type: "paragraph",
                text: "Una carpeta apunta a su madre, así que borrar de arriba abajo choca con la propia clave ajena. El borrado recorre el árbol en anchura y va eliminando de la hoja hacia la raíz, todo dentro de una transacción. Los ficheros del disco se borran después de confirmar: si la transacción se cae, lo que queda es la base de datos intacta y no un árbol de ficheros a medio desaparecer.",
            },
            {
                type: "quote",
                text: "Primero la base de datos, y solo después el disco: se puede reintentar borrar un fichero huérfano, pero no recuperar el que se borró antes de tiempo.",
                icon: icons.database,
            },

            { type: "title", text: "Estilo y calidad", id: "calidad" },
            {
                type: "paragraph",
                text: "El estilo es un sistema de diseño propio, con una sola hoja de estilos y todo escrito con variables: ni un color, ni una tipografía, ni una medida a mano. Hubo trece ficheros de CSS por componente y se borraron todos, porque dos de ellos eran idénticos y una misma clase significaba cosas distintas en dos sitios.",
            },
            {
                type: "code",
                language: "bash",
                caption: "Lo que tiene que pasar limpio antes de dar algo por hecho",
                code: `npm run lint --prefix web_file_manager    # sin errores y sin avisos
npm run build --prefix web_file_manager

php artisan serve
php artisan migrate`,
            },
            {
                type: "paragraph",
                text: "La accesibilidad es parte del listón y no un añadido: etiquetas atadas a su campo, nombre accesible en los botones que solo tienen icono, los errores anunciados, los diálogos cerrables con Escape y con clic fuera, y las animaciones apagadas para quien pide menos movimiento.",
            },
        ],
    },
};

export default fileManager;

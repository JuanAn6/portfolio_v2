import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/**
 * Artículo del proyecto "Charts 3d". Las imágenes ya existen en el repositorio
 * de la librería (`docs/images/`): `captureUrl` apunta al fichero de origen y
 * `src` a la ruta de `public/` donde hay que copiarlo.
 */
const charts3d: ProjectArticles = {
    tabs: {
        info: "Información",
        technical: "Detalle técnico",
    },
    info: {
        title: "Charts 3d",
        meta_title: "Charts 3d — Juan Antonio",
        meta_description:
            "Una librería de gráficos construidos con geometría 3D real: barras sólidas, porciones extruidas y texto que se puede rodear.",
        intro: "Una librería para dibujar gráficos con geometría tridimensional de verdad: barras sólidas, porciones extruidas, líneas como tubos y texto que se puede rodear. Se ilumina, proyecta sombra y se gira con el ratón.",
        blocks: [
            { type: "title", text: "Qué es", id: "que-es" },
            {
                type: "paragraph",
                text: "Casi todos los gráficos «3D» que se ven por ahí son un dibujo plano con perspectiva pintada encima. Aquí no: cada barra, cada porción y cada letra son un cuerpo dentro de una escena, con su luz y su sombra. Si giras la cámara, lo que hay detrás sigue estando detrás.",
            },
            {
                type: "paragraph",
                text: "La configuración tiene la forma que ya conoce cualquiera que haya usado Chart.js —tipo, datos, opciones—, así que pasar un gráfico de dos dimensiones a este no obliga a aprender un vocabulario nuevo.",
            },
            {
                type: "quote",
                text: "Nada está pintado en perspectiva: todo lo que se ve es un cuerpo dentro de la escena.",
                icon: icons.cube,
            },

            { type: "title", text: "Cuatro tipos", id: "tipos" },
            {
                type: "paragraph",
                text: "Barras, líneas, tarta y rosco, todos sobre el mismo motor. Las barras admiten tres disposiciones: cada serie en su propia fila de profundidad, las series una al lado de otra dentro de cada categoría, o apiladas. La primera es la que aprovecha de verdad la tercera dimensión, porque nada se tapa.",
            },
            {
                type: "image",
                src: "projects/charts_3d/bar.png",
                alt: "Gráfico de barras en tres dimensiones con dos series",
                caption: "Barras: categorías a lo ancho, valores a lo alto y series hacia el fondo.",
                captureUrl: "C:/projects/chart3d/docs/images/bar.png",
                pending: true,
            },
            {
                type: "paragraph",
                text: "En las líneas, cada serie es un tubo que pasa por sus puntos, con una esfera en cada valor. Un hueco en los datos rompe la línea en lugar de salvarlo con un puente, que es lo honesto: un dato que falta se tiene que notar.",
            },
            {
                type: "image",
                src: "projects/charts_3d/line.png",
                alt: "Gráfico de líneas en tres dimensiones",
                caption: "Líneas: un tubo por serie y una esfera por valor.",
                captureUrl: "C:/projects/chart3d/docs/images/line.png",
                pending: true,
            },

            { type: "title", text: "Se puede tocar", id: "interaccion" },
            {
                type: "paragraph",
                text: "Al pasar por encima de un valor aparece un cartel flotante que siempre se dibuja por delante de todo lo demás, y al pulsar una entrada de la leyenda esa serie se va con una animación y queda tachada. Al aparecer, las barras crecen desde el suelo y las líneas se dibujan solas.",
            },
            {
                type: "paragraph",
                text: "El escenario también se elige: una losa neutra que solo recoge las sombras, o una habitación de oficina con su suelo, sus paredes, una mesa y un ordenador. Es decoración y nunca lee los datos.",
            },
            {
                type: "image",
                src: "projects/charts_3d/office.png",
                alt: "Un gráfico dentro del entorno de oficina",
                caption: "El entorno «office»: el gráfico puesto en una habitación.",
                captureUrl: "C:/projects/chart3d/docs/images/office.png",
                pending: true,
            },
            {
                type: "quote",
                text: "Varios gráficos independientes por página, sin estado global, y un método para desmontarlos que devuelve toda la memoria.",
                icon: icons.chart,
            },

            { type: "title", text: "Límites", id: "limites" },
            {
                type: "paragraph",
                text: "Necesita WebGL y no hay alternativa en dos dimensiones. En las disposiciones por profundidad una serie alta puede tapar a otra más baja que tenga detrás, así que conviene ordenarlas de mayor a menor o cambiar de disposición. La tarta y el rosco dibujan solo la primera serie, la misma regla que sigue Chart.js.",
            },
        ],
    },
    technical: {
        title: "Charts 3d",
        meta_title: "Charts 3d · Detalle técnico — Juan Antonio",
        meta_description:
            "Cómo está hecha Charts 3d: TypeScript sobre three.js, una configuración con forma de Chart.js, tipos de gráfico registrables y desmontaje completo.",
        intro: "TypeScript sobre three.js. Una fachada pequeña por fuera —tipo, datos, opciones— y por dentro una escena, un registro de tipos de gráfico y un puñado de piezas que cada tipo reutiliza.",
        blocks: [
            { type: "title", text: "La configuración", id: "configuracion" },
            {
                type: "paragraph",
                text: "La forma de la configuración es deliberadamente la de Chart.js: quien viene de allí ya sabe escribirla. Por dentro, las opciones se resuelven en tres capas —las de la librería, las del tipo de gráfico y las que escribe quien la usa—, de modo que solo hay que declarar aquello que se quiere distinto.",
            },
            {
                type: "code",
                language: "js",
                caption: "Un gráfico completo",
                code: `const chart = new Chart3D(document.getElementById('chart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{ label: 'Sales', data: [120, 90, 160], backgroundColor: 0x3498db }],
    },
    options: {
        title: { display: true, text: 'Quarterly report' },
        scales: { y: { beginAtZero: true, title: 'EUR (k)' } },
        elements: { bar: { grouping: 'series-depth' } },
    },
});`,
            },

            { type: "title", text: "El texto también es geometría", id: "texto" },
            {
                type: "paragraph",
                text: "Títulos, leyendas, marcas de los ejes y etiquetas de valor son cuerpos extruidos, no imágenes pegadas mirando a la cámara. Por eso reciben la luz igual que las barras y quedan ocultos por lo que tienen delante. El precio es que hacen falta los contornos de las letras, que vienen de un fichero de tipografía.",
            },
            {
                type: "paragraph",
                text: "Como ese fichero se descarga, construir un gráfico es asíncrono: el constructor vuelve enseguida y la escena aparece cuando la tipografía llega. Quien necesite esperar tiene una promesa a la que agarrarse.",
            },
            {
                type: "code",
                language: "js",
                caption: "Esperar al primer fotograma",
                code: `const chart = new Chart3D(el, config);
await chart.ready;   // tipografia cargada y primera escena construida

// La tipografia se sirve desde public/ y su URL es una opcion, para poder
// montar la aplicacion bajo un subcamino o usar otra fuente.
options: { font: { url: '/fonts/helvetiker_regular.typeface.json' } }`,
            },
            {
                type: "quote",
                text: "Las versiones recientes de three ya no traen tipografías de ejemplo, así que el fichero vive en el repositorio en lugar de darse por supuesto.",
                icon: icons.cube,
            },

            { type: "title", text: "Las piezas", id: "piezas" },
            {
                type: "paragraph",
                text: "La fachada solo lleva el ciclo de vida. Debajo, la escena y su bucle de dibujado son una pieza; las escalas, la caja de dibujo, el trazado de rayos para saber qué hay bajo el puntero y el cartel flotante son otras. Un tipo de gráfico es una clase que extiende un controlador base y se apunta en un registro con su nombre.",
            },
            {
                type: "code",
                language: "text",
                caption: "src/",
                code: `core/
  Chart3D.ts          fachada de ciclo de vida
  SceneRenderer.ts    escena, camara, luces, controles y bucle
  ChartController.ts  clase base de la que hereda cada tipo
  ChartRegistry.ts    nombre del tipo -> clase
  Interaction.ts      trazado de rayos, hover y clic
  Tooltip3D.ts        el cartel flotante
  Layout.ts           la caja de dibujo
  scales/             LinearScale, CategoryScale, SeriesScale
text/                 carga y cache de tipografias, mallas de texto
components/           Axes3D, Legend3D, Title3D
environments/         registro, entorno neutro y oficina
charts/               bar/, line/, pie/`,
            },
            {
                type: "paragraph",
                text: "Un tipo nuevo no toca el motor: se escribe una clase que sepa construir sus cuerpos a partir de los datos y se registra con un nombre. Lo mismo vale para los escenarios.",
            },

            { type: "title", text: "Tamaño y desmontaje", id: "ciclo-de-vida" },
            {
                type: "paragraph",
                text: "El contenedor manda: el lienzo lo rellena y un observador de tamaño mantiene el ritmo cuando cambia. Un contenedor sin alto o sin ancho —cosa fácil dentro de una rejilla o un flex— deja el lienzo en su tamaño por defecto, y es el primer sitio donde mirar cuando un gráfico sale minúsculo.",
            },
            {
                type: "paragraph",
                text: "Desmontar libera cada geometría, cada material y cada textura. En una biblioteca de gráficos eso no es un detalle: un panel que crea y destruye gráficos al cambiar de pestaña se come la memoria de la tarjeta en unos minutos si nadie las devuelve.",
            },
            {
                type: "code",
                language: "bash",
                caption: "Scripts",
                code: `npm run dev         # servidor de desarrollo con recarga
npm run build       # comprueba tipos y construye dist/
npm run typecheck   # tsc --noEmit
npm run preview     # sirve la version construida`,
            },
            {
                type: "quote",
                text: "Todas las medidas de las opciones están en unidades del mundo, no en píxeles: se cambia la caja de dibujo y los tamaños la siguen.",
                icon: icons.chart,
            },
        ],
    },
};

export default charts3d;

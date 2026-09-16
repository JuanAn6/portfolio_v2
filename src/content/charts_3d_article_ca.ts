import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** Versió catalana de l'article "Charts 3d". Reflecteix `charts_3d_article_es.ts`. */
const charts3d: ProjectArticles = {
    tabs: {
        info: "Informació",
        technical: "Detall tècnic",
    },
    info: {
        title: "Charts 3d",
        meta_title: "Charts 3d — Juan Antonio",
        meta_description:
            "Una llibreria de gràfics construïts amb geometria 3D real: barres sòlides, porcions extrudides i text que es pot voltar.",
        intro: "Una llibreria per dibuixar gràfics amb geometria tridimensional de debò: barres sòlides, porcions extrudides, línies com a tubs i text que es pot voltar. S'il·lumina, projecta ombra i es gira amb el ratolí.",
        blocks: [
            { type: "title", text: "Què és", id: "que-es" },
            {
                type: "paragraph",
                text: "Gairebé tots els gràfics «3D» que es veuen per aquí són un dibuix pla amb perspectiva pintada a sobre. Aquí no: cada barra, cada porció i cada lletra són un cos dins d'una escena, amb la seva llum i la seva ombra. Si gires la càmera, allò que hi havia al darrere continua al darrere.",
            },
            {
                type: "paragraph",
                text: "La configuració té la forma que ja coneix qualsevol que hagi fet servir Chart.js —tipus, dades, opcions—, així que passar un gràfic de dues dimensions a aquest no obliga a aprendre un vocabulari nou.",
            },
            {
                type: "quote",
                text: "Res no està pintat en perspectiva: tot el que es veu és un cos dins de l'escena.",
                icon: icons.cube,
            },

            { type: "title", text: "Quatre tipus", id: "tipus" },
            {
                type: "paragraph",
                text: "Barres, línies, formatget i rosco, tots sobre el mateix motor. Les barres admeten tres disposicions: cada sèrie a la seva pròpia fila de profunditat, les sèries l'una al costat de l'altra dins de cada categoria, o apilades. La primera és la que aprofita de debò la tercera dimensió, perquè res no es tapa.",
            },
            {
                type: "image",
                src: "projects/charts_3d/bar.png",
                alt: "Gràfic de barres en tres dimensions amb dues sèries",
                caption: "Barres: categories a l'ample, valors a l'alt i sèries cap al fons.",
                captureUrl: "C:/projects/chart3d/docs/images/bar.png",
                pending: true,
            },
            {
                type: "paragraph",
                text: "A les línies, cada sèrie és un tub que passa pels seus punts, amb una esfera a cada valor. Un buit a les dades trenca la línia en comptes de salvar-lo amb un pont, que és el que és honest: una dada que falta s'ha de notar.",
            },
            {
                type: "image",
                src: "projects/charts_3d/line.png",
                alt: "Gràfic de línies en tres dimensions",
                caption: "Línies: un tub per sèrie i una esfera per valor.",
                captureUrl: "C:/projects/chart3d/docs/images/line.png",
                pending: true,
            },

            { type: "title", text: "Es pot tocar", id: "interaccio" },
            {
                type: "paragraph",
                text: "En passar per sobre d'un valor apareix un cartell flotant que sempre es dibuixa per davant de tota la resta, i en prémer una entrada de la llegenda aquella sèrie se'n va amb una animació i queda ratllada. En aparèixer, les barres creixen des del terra i les línies es dibuixen soles.",
            },
            {
                type: "paragraph",
                text: "L'escenari també es tria: una llosa neutra que només recull les ombres, o una habitació d'oficina amb el seu terra, les seves parets, una taula i un ordinador. És decoració i mai no llegeix les dades.",
            },
            {
                type: "image",
                src: "projects/charts_3d/office.png",
                alt: "Un gràfic dins de l'entorn d'oficina",
                caption: "L'entorn «office»: el gràfic posat dins d'una habitació.",
                captureUrl: "C:/projects/chart3d/docs/images/office.png",
                pending: true,
            },
            {
                type: "quote",
                text: "Diversos gràfics independents per pàgina, sense estat global, i un mètode per desmuntar-los que retorna tota la memòria.",
                icon: icons.chart,
            },

            { type: "title", text: "Límits", id: "limits" },
            {
                type: "paragraph",
                text: "Necessita WebGL i no hi ha alternativa en dues dimensions. A les disposicions per profunditat una sèrie alta pot tapar-ne una altra de més baixa que tingui al darrere, així que convé ordenar-les de més gran a més petita o canviar de disposició. El formatget i el rosco dibuixen només la primera sèrie, la mateixa regla que segueix Chart.js.",
            },
        ],
    },
    technical: {
        title: "Charts 3d",
        meta_title: "Charts 3d · Detall tècnic — Juan Antonio",
        meta_description:
            "Com està feta Charts 3d: TypeScript sobre three.js, una configuració amb forma de Chart.js, tipus de gràfic registrables i desmuntatge complet.",
        intro: "TypeScript sobre three.js. Una façana petita per fora —tipus, dades, opcions— i per dins una escena, un registre de tipus de gràfic i un grapat de peces que cada tipus reutilitza.",
        blocks: [
            { type: "title", text: "La configuració", id: "configuracio" },
            {
                type: "paragraph",
                text: "La forma de la configuració és deliberadament la de Chart.js: qui ve d'allà ja la sap escriure. Per dins, les opcions es resolen en tres capes —les de la llibreria, les del tipus de gràfic i les que escriu qui la fa servir—, de manera que només cal declarar allò que es vol diferent.",
            },
            {
                type: "code",
                language: "js",
                caption: "Un gràfic complet",
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

            { type: "title", text: "El text també és geometria", id: "text" },
            {
                type: "paragraph",
                text: "Títols, llegendes, marques dels eixos i etiquetes de valor són cossos extrudits, no imatges enganxades mirant la càmera. Per això reben la llum igual que les barres i queden amagats per allò que tenen al davant. El preu és que calen els contorns de les lletres, que vénen d'un fitxer de tipografia.",
            },
            {
                type: "paragraph",
                text: "Com que aquell fitxer es descarrega, construir un gràfic és asíncron: el constructor torna de seguida i l'escena apareix quan la tipografia arriba. Qui necessiti esperar té una promesa a la qual agafar-se.",
            },
            {
                type: "code",
                language: "js",
                caption: "Esperar el primer fotograma",
                code: `const chart = new Chart3D(el, config);
await chart.ready;   // tipografia carregada i primera escena construida

// La tipografia es serveix des de public/ i la seva URL es una opcio, per
// poder muntar l'aplicacio sota un subcami o fer servir una altra font.
options: { font: { url: '/fonts/helvetiker_regular.typeface.json' } }`,
            },
            {
                type: "quote",
                text: "Les versions recents de three ja no porten tipografies d'exemple, així que el fitxer viu al repositori en comptes de donar-se per suposat.",
                icon: icons.cube,
            },

            { type: "title", text: "Les peces", id: "peces" },
            {
                type: "paragraph",
                text: "La façana només porta el cicle de vida. A sota, l'escena i el seu bucle de dibuix són una peça; les escales, la caixa de dibuix, el traçat de raigs per saber què hi ha sota el punter i el cartell flotant en són d'altres. Un tipus de gràfic és una classe que estén un controlador base i s'apunta en un registre amb el seu nom.",
            },
            {
                type: "code",
                language: "text",
                caption: "src/",
                code: `core/
  Chart3D.ts          facana de cicle de vida
  SceneRenderer.ts    escena, camera, llums, controls i bucle
  ChartController.ts  classe base de la qual hereta cada tipus
  ChartRegistry.ts    nom del tipus -> classe
  Interaction.ts      tracat de raigs, hover i clic
  Tooltip3D.ts        el cartell flotant
  Layout.ts           la caixa de dibuix
  scales/             LinearScale, CategoryScale, SeriesScale
text/                 carrega i cache de tipografies, malles de text
components/           Axes3D, Legend3D, Title3D
environments/         registre, entorn neutre i oficina
charts/               bar/, line/, pie/`,
            },
            {
                type: "paragraph",
                text: "Un tipus nou no toca el motor: s'escriu una classe que sàpiga construir els seus cossos a partir de les dades i es registra amb un nom. El mateix val per als escenaris.",
            },

            { type: "title", text: "Mida i desmuntatge", id: "cicle-de-vida" },
            {
                type: "paragraph",
                text: "El contenidor mana: el llenç l'omple i un observador de mida manté el ritme quan canvia. Un contenidor sense alçada o sense amplada —cosa fàcil dins d'una graella o un flex— deixa el llenç a la seva mida per defecte, i és el primer lloc on mirar quan un gràfic surt minúscul.",
            },
            {
                type: "paragraph",
                text: "Desmuntar allibera cada geometria, cada material i cada textura. En una llibreria de gràfics això no és un detall: un tauler que crea i destrueix gràfics en canviar de pestanya es menja la memòria de la targeta en pocs minuts si ningú no la retorna.",
            },
            {
                type: "code",
                language: "bash",
                caption: "Scripts",
                code: `npm run dev         # servidor de desenvolupament amb recarrega
npm run build       # comprova tipus i construeix dist/
npm run typecheck   # tsc --noEmit
npm run preview     # serveix la versio construida`,
            },
            {
                type: "quote",
                text: "Totes les mides de les opcions són en unitats del món, no en píxels: es canvia la caixa de dibuix i les mides la segueixen.",
                icon: icons.chart,
            },
        ],
    },
};

export default charts3d;

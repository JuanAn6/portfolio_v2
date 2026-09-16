import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** Versió catalana de l'article "Gestor d'arxius". Reflecteix `file_manager_article_es.ts`. */
const fileManager: ProjectArticles = {
    tabs: {
        info: "Informació",
        technical: "Detall tècnic",
    },
    info: {
        title: "Gestor d'arxius",
        meta_title: "Gestor d'arxius — Juan Antonio",
        meta_description:
            "Un gestor d'arxius per a un servidor propi: pujar, organitzar i cercar documents des del navegador, sense núvol de tercers.",
        intro: "Un gestor d'arxius pensat per a un servidor de casa —una Raspberry Pi o un ordinador vell—: pujar, organitzar i consultar documents des d'una pàgina web, sense que surtin de la teva pròpia màquina.",
        blocks: [
            { type: "title", text: "Per a què serveix", id: "per-a-que-serveix" },
            {
                type: "paragraph",
                text: "Els núvols comercials són còmodes fins al moment en què allò que cal guardar són escriptures, contractes o historials mèdics. Aquest gestor fa el mateix que ells —carpetes, pujades, cerca— però sobre un disc que és a casa teva i al qual només arriba qui tu deixes entrar.",
            },
            {
                type: "paragraph",
                text: "Cada persona té el seu propi espai i no veu el de ningú més. Un administrador dóna d'alta qui correspongui i vigila quant ocupa cadascú; la resta entra, puja i organitza.",
            },
            {
                type: "quote",
                text: "El mateix que un núvol comercial, però sobre un disc que és a casa teva i sota les teves regles.",
                icon: icons.lock,
            },

            { type: "title", text: "Carpetes i fitxers", id: "carpetes" },
            {
                type: "subtitle",
                text: "La carpeta oberta viu a l'adreça",
                id: "navegacio",
            },
            {
                type: "paragraph",
                text: "Navegar per les carpetes canvia l'adreça de la pàgina, així que el botó d'enrere del navegador funciona, una carpeta es pot desar a les adreces d'interès i un enllaç porta qui l'obre exactament on eres. Les molles de pa de dalt no són decoratives: a més de tornar enrere, accepten que els deixis anar fitxers a sobre.",
            },
            {
                type: "paragraph",
                text: "Sobre la llista es poden seleccionar diversos elements i actuar sobre tots alhora des de la barra superior, o obrir el menú d'una fila concreta per actuar només sobre aquella. Reanomenar, moure, esborrar i descarregar són les mateixes accions als dos llocs.",
            },
            {
                type: "image",
                src: "projects/file_manager/list.png",
                alt: "Llistat d'una carpeta amb diversos elements seleccionats",
                caption: "La llista amb una selecció activa i la barra d'accions.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Pujar arrossegant", id: "pujades" },
            {
                type: "paragraph",
                text: "Es pot deixar anar un fitxer des de l'escriptori a qualsevol punt de la finestra i acaba a la carpeta que estigui oberta. Arrossegar un element que ja és dins de l'aplicació, en canvi, el mou de carpeta. Són dos gestos semblants que mai no es confonen: l'aplicació sap quin és quin fins i tot abans que el deixis anar.",
            },
            {
                type: "image",
                src: "projects/file_manager/upload.png",
                alt: "Zona de pujada ressaltada mentre s'arrossega un fitxer des de l'escriptori",
                caption: "Arrossegar des de l'escriptori: tota la finestra és zona de pujada.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },
            {
                type: "quote",
                text: "Arrossegar des de fora puja; arrossegar des de dins mou. El mateix gest, dos significats, i cap ambigüitat.",
                icon: icons.upload,
            },

            { type: "title", text: "Trobar el que hi ha", id: "cercar" },
            {
                type: "paragraph",
                text: "A més de l'arbre de carpetes hi ha seccions per tipus —documents, imatges, vídeos, àudios, pdf— que apleguen tot allò d'aquella mena sigui on sigui, i una cerca per nom. La pantalla d'emmagatzematge resumeix quant ocupa cada usuari, que és la pregunta que tothom acaba fent-se quan el disc és finit.",
            },
            {
                type: "image",
                src: "projects/file_manager/categories.png",
                alt: "Secció de categories i resum d'emmagatzematge",
                caption: "Les categories per tipus i el resum d'espai.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Estat", id: "estat" },
            {
                type: "paragraph",
                text: "En desenvolupament. Falta previsualitzar un fitxer sense descarregar-lo, descarregar una carpeta sencera com a zip i trossejar les pujades grans. El detall de com està fet és a la pestanya del costat.",
            },
        ],
    },
    technical: {
        title: "Gestor d'arxius",
        meta_title: "Gestor d'arxius · Detall tècnic — Juan Antonio",
        meta_description:
            "Com està fet el gestor d'arxius: SPA en React 19 i API Laravel 12 amb JWT, propietat comprovada a la consulta, descàrregues autenticades i dos arrossegaments distints.",
        intro: "Dues peces: una SPA en React 19 amb Vite i una API en Laravel 12 amb JWT. Els fitxers viuen al disc, sota una carpeta per usuari; la base de dades només guarda les metadades.",
        blocks: [
            { type: "title", text: "El repartiment", id: "arquitectura" },
            {
                type: "paragraph",
                text: "El client no sap res del sistema de fitxers: demana i rep JSON, i per baixar un contingut demana un flux. El servidor no sap res de la interfície: valida, comprova de qui és cada cosa i respon. Entre tots dos hi ha una única instància de client HTTP amb un interceptor que posa el testimoni a cada crida.",
            },
            {
                type: "code",
                language: "text",
                caption: "Repartiment de responsabilitats",
                code: `web_file_manager/   React 19 + Vite 7, React Router 7, Axios (sense TypeScript)
api_file_manager/   Laravel 12 (PHP 8.2), JWT, MySQL

Blobs      al disc, sota users/{user_id}/ (files.path guarda nomes el nom)
Metadades  taules directory i files`,
            },

            { type: "title", text: "La propietat es comprova a la consulta", id: "propietat" },
            {
                type: "paragraph",
                text: "Cap consulta busca un element i després mira de qui és: el propietari forma part de la mateixa cerca. La diferència importa. Si l'identificador és d'una altra persona el resultat és «no existeix», i no hi ha cap instant intermedi en què la fila aliena estigui carregada a la memòria esperant una comprovació que algú es pugui oblidar d'escriure.",
            },
            {
                type: "code",
                language: "php",
                caption: "El patró, a tots els controladors",
                code: `// La propietat es part de la cerca, no una comprovacio posterior.
$file = File::where('user_id', $request->user()->id)
    ->findOrFail($id);

// Moure una carpeta dins d'ella mateixa es rebutja al servidor, encara que
// el client ja ho impedeixi: el client es una comoditat, no una defensa.`,
            },
            {
                type: "quote",
                text: "L'identificador d'un altre torna 404, no 403: qui prova a mà no arriba a saber ni tan sols si aquella fila existeix.",
                icon: icons.lock,
            },

            { type: "title", text: "Descarregar amb un testimoni", id: "descarregues" },
            {
                type: "paragraph",
                text: "La descàrrega és on més es va notar que la sessió va en una capçalera. Un enllaç normal no la pot posar, així que el navegador hi arribaria sense credencial. La solució és demanar el cos amb el client HTTP de sempre i desar-lo des del mateix JavaScript; l'efecte secundari és que un error també arriba com a blob i cal tornar-ne a treure el JSON de dins.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/download.js",
                code: `const res = await api.get(\`/download_file/\${id}\`, { responseType: 'blob' })

const url = URL.createObjectURL(res.data)
const a = Object.assign(document.createElement('a'), { href: url, download: name })
a.click()
URL.revokeObjectURL(url)   // sempre, o la pestanya es queda el fitxer a dins`,
            },

            { type: "title", text: "Dos arrossegaments que no es barregen", id: "arrossegament" },
            {
                type: "paragraph",
                text: "Moure elements dins de l'aplicació i pujar fitxers del sistema són dos arrossegaments distints que comparteixen mecànica. Mentre el punter és a sobre, el navegador només deixa veure els tipus que s'arrosseguen, mai el contingut: la decisió d'acceptar o rebutjar es pren amb el tipus, i el contingut real espera en una referència.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/drag.js",
                code: `// Intern: moure entre carpetes.
'application/x-file-manager-items'

// Extern: pujar a la carpeta oberta.
'Files'

// dragenter i dragleave salten per cada element que es creua, aixi que la
// capa que cobreix la finestra porta un comptador de profunditat en comptes
// d'un booleà: amb un booleà parpelleja.`,
            },

            { type: "title", text: "Esborrar una carpeta", id: "esborrat" },
            {
                type: "paragraph",
                text: "Una carpeta apunta a la seva mare, així que esborrar de dalt a baix xoca amb la mateixa clau forana. L'esborrat recorre l'arbre en amplada i va eliminant de la fulla cap a l'arrel, tot dins d'una transacció. Els fitxers del disc s'esborren després de confirmar: si la transacció cau, el que queda és la base de dades intacta i no un arbre de fitxers a mig desaparèixer.",
            },
            {
                type: "quote",
                text: "Primer la base de dades i només després el disc: es pot reintentar esborrar un fitxer orfe, però no recuperar el que es va esborrar abans d'hora.",
                icon: icons.database,
            },

            { type: "title", text: "Estil i qualitat", id: "qualitat" },
            {
                type: "paragraph",
                text: "L'estil és un sistema de disseny propi, amb un sol full d'estils i tot escrit amb variables: ni un color, ni una tipografia, ni una mesura a mà. Hi va haver tretze fitxers de CSS per component i es van esborrar tots, perquè dos eren idèntics i una mateixa classe volia dir coses diferents en dos llocs.",
            },
            {
                type: "code",
                language: "bash",
                caption: "El que ha de passar net abans de donar res per fet",
                code: `npm run lint --prefix web_file_manager    # sense errors i sense avisos
npm run build --prefix web_file_manager

php artisan serve
php artisan migrate`,
            },
            {
                type: "paragraph",
                text: "L'accessibilitat és part del llistó i no un afegit: etiquetes lligades al seu camp, nom accessible als botons que només tenen icona, els errors anunciats, els diàlegs que es tanquen amb Escape i amb un clic a fora, i les animacions apagades per a qui demana menys moviment.",
            },
        ],
    },
};

export default fileManager;

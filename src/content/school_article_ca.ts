import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** Versió catalana de l'article "Gestió escolar". Reflecteix `school_es.ts`. */
const school: ProjectArticles = {
    tabs: {
        info: "Informació",
        technical: "Detall tècnic",
    },
    info: {
        title: "Gestió escolar",
        meta_title: "Gestió escolar — Juan Antonio",
        meta_description:
            "Aplicació de gestió per a un centre escolar: menjador, secretaria, acadèmic i famílies, en una sola eina.",
        intro: "Una aplicació de gestió per a un centre escolar. Reuneix en una sola eina allò que avui es reparteix entre fulls de càlcul, llistats impresos i missatges solts: les reserves del menjador, l'alta de persones, els cursos i les famílies.",
        blocks: [
            { type: "title", text: "Per a què serveix", id: "per-a-que-serveix" },
            {
                type: "paragraph",
                text: "El dia a dia d'una secretaria escolar se sosté sobre dades que canvien constantment: qui menja avui, qui s'ha donat de baixa, quin alumne pertany a quina classe i qui el pot recollir. L'aplicació posa tot això en un mateix lloc i deixa que cada persona vegi només la part que li pertoca.",
            },
            {
                type: "paragraph",
                text: "Cada centre treballa dins del seu propi espai. Una família entra i veu els seus fills; una persona de cuina veu el recompte del dia; secretaria gestiona altes, llistats i reserves. Ningú ha de demanar permís per fer la seva feina, i ningú veu allò que no li toca.",
            },
            {
                type: "quote",
                text: "Un únic lloc per al menjador, la secretaria i les famílies, en comptes de tres fulls de càlcul que mai quadren.",
                icon: icons.quote,
            },

            { type: "title", text: "El menjador", id: "menjador" },
            {
                type: "subtitle",
                text: "Reservar un dia o tot el curs",
                id: "reservar",
            },
            {
                type: "paragraph",
                text: "La reserva es fa sobre un calendari que només ofereix els dies que realment es poden reservar: els festius del centre, els dies sense menú i els que ja han passat el termini no hi apareixen. Així no cal explicar per què una reserva s'ha rebutjat: simplement no es pot demanar.",
            },
            {
                type: "paragraph",
                text: "A més del dia solt, una família pot deixar la reserva feta per a tot el curs: es trien els dies de la setmana i el menú de cadascun, i l'aplicació crea totes les dates de cop, saltant festius i dies tancats. En acabar resumeix quins dies s'han creat i quins s'han saltat, i per què.",
            },
            {
                type: "image",
                src: "projects/school/calendar.png",
                alt: "Calendari de reserva de menjador amb els dies disponibles",
                caption: "El calendari de reserves: els dies no reservables ni tan sols s'ofereixen.",
                captureUrl: "http://localhost:5173/cafeteria/reservations/new",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Menús, setmanes i avisos",
                id: "menus",
            },
            {
                type: "paragraph",
                text: "Els menús es munten per setmanes i es repeteixen en rotacions, de manera que la planificació d'un trimestre es fa una vegada i no cada dilluns. Cuina consulta el recompte del dia i secretaria els pagaments pendents.",
            },
            {
                type: "quote",
                text: "La tarda abans de cada àpat surt un avís per correu amb el val i el seu codi QR: a la porta del menjador s'escaneja i queda registrat qui ha menjat.",
                icon: icons.qrcode,
            },

            { type: "title", text: "Secretaria i persones", id: "secretaria" },
            {
                type: "subtitle",
                text: "Llistats que es poden filtrar",
                id: "llistats",
            },
            {
                type: "paragraph",
                text: "Alumnat, professorat, famílies i personal apareixen en llistats paginats i filtrables per rol, amb la fitxa completa al darrere: dades de contacte, document d'identitat, curs i classe. És la pantalla on es passa més temps, així que és la que demana menys clics.",
            },
            {
                type: "image",
                src: "projects/school/lists.png",
                alt: "Llistat d'usuaris filtrat per rol",
                caption: "El llistat de persones, amb el filtre per rol aplicat.",
                captureUrl: "http://localhost:5173/management/users",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Importar el curs des d'un full de càlcul",
                id: "importar",
            },
            {
                type: "paragraph",
                text: "Començar un curs a mà són centenars d'altes. L'aplicació llegeix el fitxer que el centre ja té, un Excel o un CSV, ensenya les primeres files tal com les ha entès i proposa a quin camp correspon cada columna. El que proposa es pot canviar columna a columna abans de confirmar.",
            },
            {
                type: "image",
                src: "projects/school/import.png",
                alt: "Vista d'importació amb la correspondència entre columnes i camps",
                caption: "La importació: a l'esquerra el fitxer, a la dreta el camp on va cada columna.",
                captureUrl: "http://localhost:5173/management/users/import",
                pending: true,
            },
            {
                type: "quote",
                text: "En acabar diu quantes altes s'esperaven, quantes s'han creat i en quines files exactes del fitxer ha fallat alguna cosa, en comptes d'un avís genèric que obliga a revisar-ho tot.",
                icon: icons.spreadsheet,
            },

            { type: "title", text: "Famílies i accessos", id: "accessos" },
            {
                type: "paragraph",
                text: "Un pare o una mare busca el seu fill pel document d'identitat i presenta una sol·licitud; ningú queda vinculat fins que el centre l'aprova. La cerca respon únicament si hi ha coincidència o no: mai no retorna el nom d'un menor a qui encara no n'és tutor.",
            },
            {
                type: "paragraph",
                text: "S'entra amb correu i contrasenya o amb el compte de Google. Qui es registra pel seu compte passa abans per un petit assistent on indica el seu paper i el seu centre, de manera que cap compte a mig configurar arriba a l'interior de l'aplicació. Els comptes que crea el mateix centre ja venen amb rol i centre i entren directament.",
            },
            {
                type: "quote",
                text: "Tota l'aplicació és en castellà, català i anglès, i cada persona rep els correus en el seu propi idioma.",
                icon: icons.users,
            },

            { type: "title", text: "Estat", id: "estat" },
            {
                type: "paragraph",
                text: "En desenvolupament. El menjador, la gestió de persones, la part acadèmica i l'accés estan en marxa; les pantalles de tutors i menors existeixen a l'API i estan pendents d'interfície. El detall tècnic es publicarà a la pestanya del costat.",
            },
        ],
    },
    technical: {
        title: "Gestió escolar",
        meta_title: "Gestió escolar · Detall tècnic — Juan Antonio",
        meta_description:
            "Com està feta l'aplicació de gestió escolar: API JSON en Laravel amb JWT i multi-centre, SPA en React Router 7, importació de fulls de càlcul i correus programats.",
        intro: "Dos repositoris: una API JSON en Laravel i una SPA en React Router que la consumeix. No hi ha plantilles de servidor ni sessions; tot el que es veu al navegador surt d'una crida a /api amb un testimoni.",
        blocks: [
            { type: "title", text: "Dues peces i un contracte", id: "arquitectura" },
            {
                type: "paragraph",
                text: "El backend és Laravel 13 sobre PHP 8.3 i MySQL, i només respon JSON. El frontend és React Router 7 amb TypeScript, Tailwind 4 i shadcn/ui. Entre tots dos no hi ha més acord que l'API: la resposta d'un recurs arriba embolcallada en «data», i un llistat arriba tal com el pagina Laravel.",
            },
            {
                type: "paragraph",
                text: "El codi del servidor s'agrupa per domini i no per tipus: cada mòdul es porta els seus controladors, els seus models i els seus serveis. El controlador valida i respon; tot allò que té regles al darrere viu en un servei.",
            },
            {
                type: "code",
                language: "text",
                caption: "school_backend/app",
                code: `Academics    periodes -> cursos -> classes -> assignatures -> matricules
Cafeteria    menus, setmanes, rotacions, reserves, pagaments, vals QR
Guardians    vincle tutor -> menor
Management   administracio d'usuaris
Schools      centres (inquilins) i dies de tancament
Support      Locales, DocumentId i la resta d'ajudes compartides`,
            },
            {
                type: "quote",
                text: "Agrupar per domini i no per tipus: per entendre el menjador s'obre una carpeta, no cinc.",
                icon: icons.building,
            },

            { type: "title", text: "Un centre, un inquilí", id: "multicentre" },
            {
                type: "paragraph",
                text: "Totes les taules de domini porten el centre al qual pertanyen. Quin centre és no es decideix al client: ho resol el servidor a partir de qui fa la crida. Només un administrador pot apuntar a un altre centre, i ho fa amb una capçalera; qualsevol altre rol queda fixat al seu enviï el que enviï.",
            },
            {
                type: "code",
                language: "php",
                caption: "app/Schools/Support/ResolvesCurrentSchool.php",
                code: `protected function currentSchoolId(Request $request): ?int
{
    $user = Auth::user();

    if ($user->hasRole(Role::ADMINISTRATOR)) {
        $requested = $request->header('X-School-Id') ?? $request->query('school_id');

        return $requested !== null ? (int) $requested : $user->school_id;
    }

    // La resta queden fixats al seu centre, enviin el que enviin.
    return $user->school_id;
}`,
            },
            {
                type: "quote",
                text: "L'inquilí no és un paràmetre més de la petició: és una conseqüència de qui la signa.",
                icon: icons.lock,
            },

            { type: "title", text: "Qui entra i com", id: "autenticacio" },
            {
                type: "paragraph",
                text: "L'autenticació és JWT, sense sessions. Hi ha tres portes que emeten el mateix testimoni: correu i contrasenya, el consentiment de Google i el botó de Google del mateix navegador. Com que l'API no guarda estat, l'«state» del flux de Google viu a la memòria cau mentre dura el viatge d'anada i tornada.",
            },
            {
                type: "paragraph",
                text: "Un compte registrat pel seu compte arrenca amb un rol de marcador i sense centre. Un middleware respon 403 amb un codi propi a tota la resta fins que acaba l'assistent, així que la SPA sap sense ambigüitat que ha de portar aquella persona a l'assistent i no a la pantalla d'entrada.",
            },
            {
                type: "quote",
                text: "Demanar una contrasenya nova per a una adreça que no existeix respon igual que per a una que sí: una resposta diferent convertiria el formulari en una llista de qui té compte.",
                icon: icons.lock,
            },

            { type: "title", text: "Tot passa per un client", id: "client" },
            {
                type: "paragraph",
                text: "Al frontend només un mòdul parla amb l'API. Allà s'hi posa el testimoni i la capçalera del centre, i allà s'interpreten els dos errors que no són de la pantalla sinó de la sessió: un 401 neteja i porta a la portada, i un 403 amb el codi de l'assistent porta a l'assistent. Cap pantalla repeteix aquesta lògica.",
            },
            {
                type: "code",
                language: "ts",
                caption: "app/lib/api.ts",
                code: `const token = getToken()
if (token) headers["Authorization"] = \`Bearer \${token}\`

const schoolId = getActiveSchoolId()
if (schoolId) headers["X-School-Id"] = schoolId

if (res.status === 401) {
  clearAuth()
  window.location.replace("/welcome")
}

// El compte existeix, pero encara no ha triat rol i centre.
if (res.status === 403 && body?.code === "onboarding_required") {
  window.location.replace("/onboarding")
}`,
            },
            {
                type: "paragraph",
                text: "Les rutes es declaren una a una en un fitxer, sense enrutament per sistema de fitxers: allò que no hi és escrit no existeix. Els errors de validació es llegeixen del cos del 422 i es pinten camp a camp; la resta de fallades es resumeixen en una sola línia a dalt del formulari.",
            },

            { type: "title", text: "Reservar en lot", id: "reserves" },
            {
                type: "paragraph",
                text: "La reserva recurrent no és una reserva repetida en un bucle del navegador: el client envia quin menú vol cada dia de la setmana i el servidor decideix quines dates en surten, saltant festius, dies tancats i els que ja han passat el termini. La resposta diu què s'ha creat i què s'ha saltat, amb el motiu.",
            },
            {
                type: "code",
                language: "json",
                caption: "POST /api/cafeteria/reservations/bulk",
                code: `{
  "user_id": 42,
  "from": "2026-09-14",
  "to": "2026-12-19",
  "days": [
    { "day_of_week": 1, "kind": "menu" },
    { "day_of_week": 3, "kind": "menu" },
    { "day_of_week": 5, "kind": "picnic" }
  ]
}`,
            },
            {
                type: "quote",
                text: "Una reserva de tot el curs genera un únic correu amb totes les dates, no vuitanta: el missatge rep un lot, i una reserva solta és un lot d'un.",
                icon: icons.mail,
            },

            { type: "title", text: "Importar sense sorpreses", id: "importacio" },
            {
                type: "paragraph",
                text: "La importació té dos passos a posta. El primer analitza el fitxer i retorna les columnes, les primeres files tal com s'han llegit i quantes files de dades hi ha; el segon rep ja la correspondència confirmada entre columna i camp. Entremig hi ha la persona, que és qui sap si aquella columna era el telèfon del tutor o el de l'alumne.",
            },
            {
                type: "paragraph",
                text: "La proposta inicial es calcula normalitzant el títol de cada columna —sense accents, sense signes, en minúscules— contra el nom de cada camp, perquè el cas habitual és un fitxer exportat des de la mateixa aplicació. En acabar, el resultat inclou les files exactes que han fallat.",
            },
            {
                type: "code",
                language: "ts",
                caption: "app/routes/management/users.data.ts",
                code: `const normalise = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")

// Resultat d'una importacio, tal com el llegeix la pantalla.
export type ImportResult = {
  expected: number
  created: number
  failed: number
  /** Files del full que no s'han pogut crear (la capcalera es la 1). */
  failed_rows: number[]
}`,
            },

            { type: "title", text: "Correus que no es repeteixen", id: "correus" },
            {
                type: "paragraph",
                text: "L'avís de la tarda anterior és una ordre programada. El que el fa idempotent és una marca de temps a la mateixa reserva: una segona execució la mateixa nit no escriu a ningú. La marca s'hi posa fins i tot quan no hi havia bústia on escriure, perquè una família sense correu no es reintenti cada nit.",
            },
            {
                type: "code",
                language: "php",
                caption: "app/Cafeteria/Console/SendReservationRemindersCommand.php",
                code: `->unless($force, fn ($q) => $q->whereNull('cafeteria_reservations.reminder_sent_at'))

// ...

$sent = $mailer->reminder($reservation);

// Es segella encara que no s'hagi escrit a ningu: un comensal sense
// bustia no te cap avis a esperar, i reintentar-ho nomes ompliria el log.
$reservation->forceFill(['reminder_sent_at' => now()])->save();`,
            },
            {
                type: "quote",
                text: "El QR viatja incrustat com a adjunt i no com a URI de dades: Gmail i Outlook descarten les segones, i un val que no es veu no és un val.",
                icon: icons.qrcode,
            },
            {
                type: "paragraph",
                text: "A qui s'escriu ho decideix el comensal, no qui va fer la reserva: al mateix comensal si té correu, i als seus tutors. Una secretària que reserva per a un alumne no rep el correu d'aquella família. Una fallada d'enviament es registra i s'empassa: una reserva que ja està feta no es desfà perquè el correu estigui caigut.",
            },

            { type: "title", text: "Dades que no es tornen", id: "privacitat" },
            {
                type: "paragraph",
                text: "La cerca d'un menor pel document és el lloc on més fàcil seria filtrar dades, així que respon amb un estat i res més. El document es normalitza abans de comparar —en majúscules i sense signes—, de manera que dues formes d'escriure el mateix DNI són la mateixa persona.",
            },
            {
                type: "code",
                language: "php",
                caption: "app/Guardians/Services/GuardianService.php",
                code: `/** @return array{found: bool, status: string} */
public function search(User $guardian, string $rawDocument, int $schoolId): array
{
    $document = DocumentId::normalize($rawDocument);
    $student = $document ? $this->studentByDocument($document, $schoolId) : null;

    if (! $student) {
        return ['found' => false, 'status' => 'not_found'];
    }

    // Un estat i res mes: mai un nom, un id ni una data.
    return ['found' => true, 'status' => $pending ? 'request_pending' : 'claimable'];
}`,
            },
            {
                type: "quote",
                text: "Res queda vinculat i cap alumne es crea fins que el centre aprova la sol·licitud.",
                icon: icons.users,
            },

            { type: "title", text: "Proves i format", id: "qualitat" },
            {
                type: "paragraph",
                text: "Les proves del backend són de funcionalitat: criden l'API amb un testimoni real sobre una base sqlite en memòria, així que el que es prova és la ruta sencera, middlewares inclosos. Cada comportament nou entra amb la seva prova, i el formatador passa només pels fitxers tocats perquè el diff segueixi sent llegible.",
            },
            {
                type: "code",
                language: "bash",
                caption: "El que s'executa abans de donar res per fet",
                code: `composer dev        # API, cues, logs i vite alhora
php artisan test    # la suite completa, sqlite en memoria
./vendor/bin/pint   # format, nomes els fitxers tocats

npm run dev         # la SPA a :5173
npm run typecheck   # react-router typegen && tsc`,
            },
            {
                type: "paragraph",
                text: "Els tres idiomes es mantenen alhora als dos costats: una cadena nova entra als tres fitxers de traducció o no entra. Al navegador l'idioma i el tema s'apliquen en un efecte i mai durant el render, perquè el servidor i el primer pintat del client coincideixin.",
            },
        ],
    },
};

export default school;

import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** Versió catalana de l'article "Gestor de biblioteca". Reflecteix `library_manager_article_es.ts`. */
const libraryManager: ProjectArticles = {
    tabs: {
        info: "Informació",
        technical: "Detall tècnic",
    },
    info: {
        title: "Gestor de biblioteca",
        meta_title: "Gestor de biblioteca — Juan Antonio",
        meta_description:
            "Una aplicació per portar una biblioteca petita: catàleg de llibres, socis i préstecs amb les seves devolucions.",
        intro: "Una aplicació per portar una biblioteca petita —la d'un centre, una associació o un barri—: el catàleg, qui és soci i quin llibre té cadascú a casa.",
        blocks: [
            { type: "title", text: "Per a què serveix", id: "per-a-que-serveix" },
            {
                type: "paragraph",
                text: "Una biblioteca petita es porta durant anys amb una llibreta o un full de càlcul, fins que algú pregunta si queda cap exemplar d'un títol i cal anar a mirar-ho al prestatge. L'aplicació respon això sense aixecar-se: quants exemplars hi ha, quants estan prestats i qui els té.",
            },
            {
                type: "paragraph",
                text: "Són tres coses encadenades: un catàleg amb els seus autors, categories i editorials; un registre de socis; i els préstecs, que uneixen un llibre amb un soci i una data de devolució.",
            },
            {
                type: "quote",
                text: "La pregunta que més es fa a un taulell és «en queda cap?», i és la que pitjor respon un full de càlcul.",
                icon: icons.book,
            },

            { type: "title", text: "El catàleg", id: "cataleg" },
            {
                type: "paragraph",
                text: "Cada llibre té la seva fitxa amb autor, categoria, editorial i el nombre d'exemplars, i des del llistat s'hi arriba amb un clic. Autors, categories i editorials són llistes pròpies amb el seu propi manteniment, perquè un mateix autor no acabi escrit de quatre maneres diferents.",
            },
            {
                type: "image",
                src: "projects/library_manager/catalog.png",
                alt: "Llistat del catàleg de llibres",
                caption: "El catàleg, amb els exemplars disponibles de cada títol.",
                captureUrl: "http://localhost:4200/books",
                pending: true,
            },

            { type: "title", text: "Prestar i retornar", id: "prestecs" },
            {
                type: "paragraph",
                text: "Prestar un llibre descompta un exemplar disponible i retornar-lo el reposa; si no en queda cap, el préstec no arriba a crear-se. La data de devolució es proposa a dues setmanes vista i es pot canviar, i un préstec retornat guarda el dia en què va tornar, de manera que l'historial queda complet en comptes de desaparèixer.",
            },
            {
                type: "paragraph",
                text: "Aquestes regles ja viuen al servidor i són les que decidiran què es pot fer des del taulell; la pantalla que les faci servir és el següent que toca, i fins llavors el préstec es maneja contra l'API.",
            },
            {
                type: "image",
                src: "projects/library_manager/book_detail.png",
                alt: "Fitxa d'un llibre amb els seus exemplars disponibles",
                caption: "La fitxa d'un llibre: d'aquí sortirà el préstec quan la pantalla hi sigui.",
                captureUrl: "http://localhost:4200/books/1",
                pending: true,
            },
            {
                type: "quote",
                text: "Un exemplar no pot estar prestat dues vegades: el recompte i el préstec s'escriuen junts o no se n'escriu cap dels dos.",
                icon: icons.database,
            },

            { type: "title", text: "Qui pot fer què", id: "rols" },
            {
                type: "paragraph",
                text: "Hi ha tres papers. Qui consulta veu el catàleg i les seves pròpies dades; qui atén el taulell dóna d'alta llibres, socis i préstecs; i l'administració gestiona a més els comptes i els seus permisos. El menú lateral només ensenya el que aquella persona pot obrir, i allò que no li pertoca tampoc no li ho permetria el servidor.",
            },
            {
                type: "image",
                src: "projects/library_manager/users.png",
                alt: "Pantalla de gestió d'usuaris i els seus rols",
                caption: "La gestió de comptes, visible només per a l'administració.",
                captureUrl: "http://localhost:4200/users",
                pending: true,
            },

            { type: "title", text: "Estat", id: "estat" },
            {
                type: "paragraph",
                text: "En desenvolupament. El catàleg, els socis i els permisos estan en marxa, i les regles dels préstecs estan fetes al servidor a l'espera de la seva pantalla; falten també els avisos de venciment i les reserves d'un exemplar que encara és fora. A la pestanya del costat hi ha com funciona per dins.",
            },
        ],
    },
    technical: {
        title: "Gestor de biblioteca",
        meta_title: "Gestor de biblioteca · Detall tècnic — Juan Antonio",
        meta_description:
            "Com està fet el gestor de biblioteca: API REST en Spring Boot amb JPA, sessió en una galeta HttpOnly, permisos per ruta i un frontend Angular amb guardes.",
        intro: "Una API REST en Spring Boot amb JPA i un frontend en Angular. La sessió no viu a l'emmagatzematge del navegador sinó en una galeta que el JavaScript de la pàgina no pot llegir.",
        blocks: [
            { type: "title", text: "El model", id: "model" },
            {
                type: "paragraph",
                text: "Les entitats són les del domini i poca cosa més: llibre, autor, categoria, editorial, soci i préstec. Cadascuna té el seu repositori i el seu controlador sota la mateixa arrel, així que afegir una secció és afegir aquestes tres peces i una entrada al menú.",
            },
            {
                type: "code",
                language: "text",
                caption: "backend/src/main/java/com/library/manager",
                code: `model/        Book, Author, Category, Publisher, Member, Loan, LoanStatus, User, Role
repository/   un repositori JPA per entitat
controller/   Auth, Book, Author, Category, Publisher, Member, Loan, User, Role
security/     JwtCookieService, CookieBearerTokenResolver, AppUserDetailsService
config/       SecurityConfig i el sembrador de dades`,
            },

            { type: "title", text: "Una sessió que ningú no llegeix", id: "sessio" },
            {
                type: "paragraph",
                text: "El testimoni viatja en una galeta marcada com a HttpOnly en comptes de guardar-se a l'emmagatzematge del navegador. La diferència és concreta: si algun dia s'hi cola un script, no hi ha res que pugui llegir, perquè el JavaScript de la mateixa aplicació tampoc no pot. A més va marcada perquè el navegador no l'enviï en peticions que comencin en un altre lloc.",
            },
            {
                type: "paragraph",
                text: "Spring espera el testimoni en una capçalera, així que l'únic que es canvia és el pas que el busca: un resolutor propi el treu de la galeta i la resta de la cadena segueix igual. El servidor no guarda sessió.",
            },
            {
                type: "quote",
                text: "La galeta és la credencial, i és HttpOnly precisament perquè el codi de la pàgina no la pugui tocar.",
                icon: icons.lock,
            },

            { type: "title", text: "Permisos per ruta", id: "permisos" },
            {
                type: "paragraph",
                text: "Els permisos es declaren una sola vegada, a la configuració de seguretat, i no repartits pels controladors. Llegir exigeix ser-hi a dins; escriure exigeix taulell o administració; els comptes i els rols són només d'administració. El que el menú del frontend ensenya o amaga és comoditat: la regla de debò és aquí.",
            },
            {
                type: "code",
                language: "java",
                caption: "config/SecurityConfig.java",
                code: `.csrf(csrf -> csrf.disable())
.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
.authorizeHttpRequests(auth -> auth
    .requestMatchers("/api/auth/register", "/api/auth/login").permitAll()
    .requestMatchers("/api/users/**", "/api/roles/**").hasRole(Role.Names.ADMIN)
    .requestMatchers(HttpMethod.GET, "/api/**").authenticated()
    .requestMatchers("/api/**").hasAnyRole(Role.Names.ADMIN, Role.Names.MANAGER))`,
            },

            { type: "title", text: "El préstec és una transacció", id: "prestec" },
            {
                type: "paragraph",
                text: "Crear un préstec no és inserir una fila: és inserir-la i descomptar un exemplar, i totes dues coses passen dins de la mateixa transacció. Si no queden còpies es respon un conflicte i no es toca res. Retornar fa el camí invers, i retornar dues vegades també és un conflicte en comptes d'un exemplar que apareix del no-res.",
            },
            {
                type: "code",
                language: "java",
                caption: "controller/LoanController.java",
                code: `if (book.getAvailableCopies() <= 0) {
    throw new ResponseStatusException(HttpStatus.CONFLICT, "No copies available for this book");
}

loan.setDueDate(loanDetails.getDueDate() != null
        ? loanDetails.getDueDate()
        : LocalDate.now().plusWeeks(2));
loan.setStatus(LoanStatus.ACTIVE);

book.setAvailableCopies(book.getAvailableCopies() - 1);
bookRepository.save(book);`,
            },

            { type: "title", text: "El frontend", id: "frontend" },
            {
                type: "paragraph",
                text: "Les rutes es declaren a mà i l'ordre importa: la de crear va abans que la que porta un identificador, perquè si no la segona s'empassa la paraula «new» i se'n va a buscar un llibre que es diu així. Tot allò que necessita sessió penja d'un mateix pare amb la seva guarda, de manera que la comprovació passa abans que els components existeixin i un visitant anònim no arriba a disparar ni una crida.",
            },
            {
                type: "code",
                language: "ts",
                caption: "app/auth/auth.interceptor.ts",
                code: `// La galeta nomes viatja entre origens si la peticio ho demana.
const request = isOurApi ? req.clone({ withCredentials: true }) : req

// Un 401 fora dels propis endpoints de sessio es un testimoni caducat:
// es neteja i es torna al login recordant on s'anava.
if (error.status === 401 && isOurApi && !isAuthEndpoint) {
  auth.clearSession()
  router.navigate(['/login'], { queryParams: { redirectTo: router.url } })
}`,
            },
            {
                type: "quote",
                text: "La guarda va al pare, no a cada fill: es comprova un cop, abans de crear res, i cap pantalla no se'n pot oblidar.",
                icon: icons.users,
            },
        ],
    },
};

export default libraryManager;

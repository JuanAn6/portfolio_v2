import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/**
 * Artículo del proyecto "Gestor de biblioteca". Los bloques `image` llevan
 * `pending: true`: el marcador dice desde qué pantalla hacer la captura y en
 * qué ruta de `public/` dejarla.
 */
const libraryManager: ProjectArticles = {
    tabs: {
        info: "Información",
        technical: "Detalle técnico",
    },
    info: {
        title: "Gestor de biblioteca",
        meta_title: "Gestor de biblioteca — Juan Antonio",
        meta_description:
            "Una aplicación para llevar una biblioteca pequeña: catálogo de libros, socios y préstamos con sus devoluciones.",
        intro: "Una aplicación para llevar una biblioteca pequeña —la de un centro, una asociación o un barrio—: el catálogo, quién es socio y qué libro tiene cada uno en casa.",
        blocks: [
            { type: "title", text: "Para qué sirve", id: "para-que-sirve" },
            {
                type: "paragraph",
                text: "Una biblioteca pequeña se lleva durante años con una libreta o una hoja de cálculo, hasta que alguien pregunta si queda algún ejemplar de un título y hay que ir al estante a mirarlo. La aplicación responde eso sin levantarse: cuántos ejemplares hay, cuántos están prestados y quién los tiene.",
            },
            {
                type: "paragraph",
                text: "Son tres cosas encadenadas: un catálogo con sus autores, categorías y editoriales; un registro de socios; y los préstamos, que unen un libro con un socio y una fecha de devolución.",
            },
            {
                type: "quote",
                text: "La pregunta que más se hace en un mostrador es «¿queda alguno?», y es la que peor responde una hoja de cálculo.",
                icon: icons.book,
            },

            { type: "title", text: "El catálogo", id: "catalogo" },
            {
                type: "paragraph",
                text: "Cada libro tiene su ficha con autor, categoría, editorial y el número de ejemplares, y desde el listado se llega a ella de un clic. Autores, categorías y editoriales son listas propias con su propio mantenimiento, para que un mismo autor no acabe escrito de cuatro maneras distintas.",
            },
            {
                type: "image",
                src: "projects/library_manager/catalog.png",
                alt: "Listado del catálogo de libros",
                caption: "El catálogo, con los ejemplares disponibles de cada título.",
                captureUrl: "http://localhost:4200/books",
                pending: true,
            },

            { type: "title", text: "Prestar y devolver", id: "prestamos" },
            {
                type: "paragraph",
                text: "Prestar un libro descuenta un ejemplar disponible y devolverlo lo repone; si no queda ninguno, el préstamo no llega a crearse. La fecha de devolución se propone a dos semanas vista y se puede cambiar, y un préstamo devuelto guarda el día en que volvió, de modo que el historial queda completo en lugar de desaparecer.",
            },
            {
                type: "paragraph",
                text: "Esas reglas ya viven en el servidor y son las que decidirán lo que puede hacerse desde el mostrador; la pantalla que las use es lo siguiente que toca, y hasta entonces el préstamo se maneja contra la API.",
            },
            {
                type: "image",
                src: "projects/library_manager/book_detail.png",
                alt: "Ficha de un libro con sus ejemplares disponibles",
                caption: "La ficha de un libro: de aquí saldrá el préstamo cuando la pantalla esté.",
                captureUrl: "http://localhost:4200/books/1",
                pending: true,
            },
            {
                type: "quote",
                text: "Un ejemplar no puede estar prestado dos veces: el recuento y el préstamo se escriben juntos o no se escribe ninguno de los dos.",
                icon: icons.database,
            },

            { type: "title", text: "Quién puede hacer qué", id: "roles" },
            {
                type: "paragraph",
                text: "Hay tres papeles. Quien consulta ve el catálogo y sus propios datos; quien atiende el mostrador da de alta libros, socios y préstamos; y la administración gestiona además las cuentas y sus permisos. El menú lateral solo enseña lo que esa persona puede abrir, y lo que no le corresponde tampoco se lo permitiría el servidor.",
            },
            {
                type: "image",
                src: "projects/library_manager/users.png",
                alt: "Pantalla de gestión de usuarios y sus roles",
                caption: "La gestión de cuentas, visible solo para la administración.",
                captureUrl: "http://localhost:4200/users",
                pending: true,
            },

            { type: "title", text: "Estado", id: "estado" },
            {
                type: "paragraph",
                text: "En desarrollo. El catálogo, los socios y los permisos están en marcha, y las reglas de los préstamos están hechas en el servidor a la espera de su pantalla; faltan también los avisos de vencimiento y las reservas de un ejemplar que todavía está fuera. En la pestaña de al lado está cómo funciona por dentro.",
            },
        ],
    },
    technical: {
        title: "Gestor de biblioteca",
        meta_title: "Gestor de biblioteca · Detalle técnico — Juan Antonio",
        meta_description:
            "Cómo está hecho el gestor de biblioteca: API REST en Spring Boot con JPA, sesión en una cookie HttpOnly, permisos por ruta y un frontend Angular con guardas.",
        intro: "Una API REST en Spring Boot con JPA y un frontend en Angular. La sesión no vive en el almacenamiento del navegador sino en una cookie que el JavaScript de la página no puede leer.",
        blocks: [
            { type: "title", text: "El modelo", id: "modelo" },
            {
                type: "paragraph",
                text: "Las entidades son las del dominio y poco más: libro, autor, categoría, editorial, socio y préstamo. Cada una tiene su repositorio y su controlador bajo la misma raíz, así que añadir una sección es añadir esas tres piezas y una entrada en el menú.",
            },
            {
                type: "code",
                language: "text",
                caption: "backend/src/main/java/com/library/manager",
                code: `model/        Book, Author, Category, Publisher, Member, Loan, LoanStatus, User, Role
repository/   un repositorio JPA por entidad
controller/   Auth, Book, Author, Category, Publisher, Member, Loan, User, Role
security/     JwtCookieService, CookieBearerTokenResolver, AppUserDetailsService
config/       SecurityConfig y el sembrador de datos`,
            },

            { type: "title", text: "La sesión, en una cookie que nadie lee", id: "sesion" },
            {
                type: "paragraph",
                text: "El testimonio viaja en una cookie marcada como HttpOnly en lugar de guardarse en el almacenamiento del navegador. La diferencia es concreta: si algún día se cuela un script en la página, no hay nada que pueda leer, porque el JavaScript de la propia aplicación tampoco puede. Va además marcada para que el navegador no la envíe en peticiones que empiecen en otro sitio.",
            },
            {
                type: "paragraph",
                text: "Spring espera el testimonio en una cabecera, así que lo único que se cambia es el paso que lo busca: un resolutor propio lo saca de la cookie y el resto de la cadena sigue igual. El servidor no guarda sesión.",
            },
            {
                type: "quote",
                text: "La cookie es la credencial, y es HttpOnly precisamente para que el código de la página no pueda tocarla.",
                icon: icons.lock,
            },

            { type: "title", text: "Permisos por ruta", id: "permisos" },
            {
                type: "paragraph",
                text: "Los permisos se declaran una sola vez, en la configuración de seguridad, y no repartidos por los controladores. Leer exige estar dentro; escribir exige mostrador o administración; las cuentas y los roles son solo de administración. Lo que el menú del frontend enseña o esconde es comodidad: la regla de verdad está aquí.",
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

            { type: "title", text: "El préstamo es una transacción", id: "prestamo" },
            {
                type: "paragraph",
                text: "Crear un préstamo no es insertar una fila: es insertarla y descontar un ejemplar, y las dos cosas ocurren dentro de la misma transacción. Si no quedan copias se responde un conflicto y no se toca nada. Devolver hace el camino inverso, y devolver dos veces también es un conflicto en lugar de un ejemplar que aparece de la nada.",
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
                text: "Las rutas se declaran a mano y el orden importa: la de crear va antes que la que lleva un identificador, porque si no la segunda se traga la palabra «new» y se va a buscar un libro que se llama así. Todo lo que necesita sesión cuelga de un mismo padre con su guarda, de modo que la comprobación ocurre antes de que los componentes existan y un visitante anónimo no llega a disparar ni una llamada.",
            },
            {
                type: "code",
                language: "ts",
                caption: "app/auth/auth.interceptor.ts",
                code: `// La cookie solo viaja entre origenes si la peticion lo pide.
const request = isOurApi ? req.clone({ withCredentials: true }) : req

// Un 401 fuera de los propios endpoints de sesion es un testimonio caducado:
// se limpia y se vuelve al login recordando adonde se iba.
if (error.status === 401 && isOurApi && !isAuthEndpoint) {
  auth.clearSession()
  router.navigate(['/login'], { queryParams: { redirectTo: router.url } })
}`,
            },
            {
                type: "quote",
                text: "La guarda va en el padre, no en cada hijo: se comprueba una vez, antes de crear nada, y ninguna pantalla puede olvidarse de ponerla.",
                icon: icons.users,
            },
        ],
    },
};

export default libraryManager;

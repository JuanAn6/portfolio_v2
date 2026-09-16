import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/**
 * Artículo del proyecto "Gestión escolar". Es solo datos: los bloques de este
 * array son lo que `ArticleRenderer.astro` dibuja, en orden.
 *
 * Las capturas todavía no existen. Cada bloque `image` lleva `pending: true`,
 * la URL de la pantalla desde la que hay que hacerla (`captureUrl`) y la ruta
 * donde hay que guardarla (`src`, dentro de `public/`). Al dejar el fichero en
 * su sitio, basta con borrar la línea `pending` para que se vea la imagen.
 */
const school: ProjectArticles = {
    tabs: {
        info: "Información",
        technical: "Detalle técnico",
    },
    info: {
        title: "Gestión escolar",
        meta_title: "Gestión escolar — Juan Antonio",
        meta_description:
            "Aplicación de gestión para un centro escolar: comedor, secretaría, académico y familias, en una sola herramienta.",
        intro: "Una aplicación de gestión para un centro escolar. Reúne en una sola herramienta lo que hoy se reparte entre hojas de cálculo, listados impresos y mensajes sueltos: las reservas del comedor, el alta de personas, los cursos y las familias.",
        blocks: [
            { type: "title", text: "Para qué sirve", id: "para-que-sirve" },
            {
                type: "paragraph",
                text: "El día a día de una secretaría escolar se sostiene sobre datos que cambian constantemente: quién come hoy, quién se ha dado de baja, qué alumno pertenece a qué clase y quién puede recogerlo. La aplicación pone todo eso en un mismo sitio y deja que cada persona vea únicamente la parte que le corresponde.",
            },
            {
                type: "paragraph",
                text: "Cada centro trabaja dentro de su propio espacio. Una familia entra y ve a sus hijos; una persona de cocina ve el recuento del día; secretaría gestiona altas, listados y reservas. Nadie tiene que pedir permiso para hacer su trabajo, y nadie ve lo que no le toca.",
            },
            {
                type: "quote",
                text: "Un único sitio para el comedor, la secretaría y las familias, en lugar de tres hojas de cálculo que nunca cuadran.",
                icon: icons.quote,
            },

            { type: "title", text: "El comedor", id: "comedor" },
            {
                type: "subtitle",
                text: "Reservar un día o todo el curso",
                id: "reservar",
            },
            {
                type: "paragraph",
                text: "La reserva se hace sobre un calendario que solo ofrece los días que realmente se pueden reservar: los festivos del centro, los días sin menú y los que ya han pasado del plazo no aparecen. Así no hay que explicar por qué una reserva ha sido rechazada: sencillamente no se puede pedir.",
            },
            {
                type: "paragraph",
                text: "Además del día suelto, una familia puede dejar la reserva hecha para todo el curso: se eligen los días de la semana y el menú de cada uno, y la aplicación crea todas las fechas de una vez, saltando festivos y días cerrados. Al terminar se resume qué días se han creado y cuáles se han saltado, y por qué.",
            },
            {
                type: "image",
                src: "projects/school/calendar.png",
                alt: "Calendario de reserva de comedor con los días disponibles",
                caption: "El calendario de reservas: los días no reservables ni siquiera se ofrecen.",
                captureUrl: "http://localhost:5173/cafeteria/reservations/new",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Menús, semanas y avisos",
                id: "menus",
            },
            {
                type: "paragraph",
                text: "Los menús se montan por semanas y se repiten en rotaciones, de modo que la planificación de un trimestre se hace una vez y no cada lunes. Cocina consulta el recuento del día y secretaría los pagos pendientes.",
            },
            {
                type: "quote",
                text: "La tarde anterior a cada comida sale un aviso por correo con el vale y su código QR: en la puerta del comedor se escanea y queda registrado quién ha comido.",
                icon: icons.qrcode,
            },

            { type: "title", text: "Secretaría y personas", id: "secretaria" },
            {
                type: "subtitle",
                text: "Listados que se pueden filtrar",
                id: "listados",
            },
            {
                type: "paragraph",
                text: "Alumnado, profesorado, familias y personal aparecen en listados paginados y filtrables por rol, con su ficha completa detrás: datos de contacto, documento de identidad, curso y clase. Es la pantalla en la que más tiempo se pasa, así que es la que menos clics pide.",
            },
            {
                type: "image",
                src: "projects/school/lists.png",
                alt: "Listado de usuarios filtrado por rol",
                caption: "El listado de personas, con el filtro por rol aplicado.",
                captureUrl: "http://localhost:5173/management/users",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Importar el curso desde una hoja de cálculo",
                id: "importar",
            },
            {
                type: "paragraph",
                text: "Empezar un curso a mano son cientos de altas. La aplicación lee el fichero que el centro ya tiene, un Excel o un CSV, enseña las primeras filas tal y como las ha entendido y propone a qué campo corresponde cada columna. Lo propuesto se puede cambiar columna a columna antes de confirmar.",
            },
            {
                type: "image",
                src: "projects/school/import.png",
                alt: "Vista de importación con la correspondencia entre columnas y campos",
                caption: "La importación: a la izquierda el fichero, a la derecha el campo al que va cada columna.",
                captureUrl: "http://localhost:5173/management/users/import",
                pending: true,
            },
            {
                type: "quote",
                text: "Al terminar se dice cuántas altas se esperaban, cuántas se han creado y en qué filas exactas del fichero ha fallado algo, en lugar de un aviso genérico que obliga a revisarlo entero.",
                icon: icons.spreadsheet,
            },

            { type: "title", text: "Familias y accesos", id: "accesos" },
            {
                type: "paragraph",
                text: "Un padre o una madre busca a su hijo por el documento de identidad y presenta una solicitud; nadie queda vinculado hasta que el centro la aprueba. La búsqueda responde únicamente si hay coincidencia o no: nunca devuelve el nombre de un menor a quien todavía no es su tutor.",
            },
            {
                type: "paragraph",
                text: "Se entra con correo y contraseña o con la cuenta de Google. Quien se registra por su cuenta pasa antes por un pequeño asistente donde indica su papel y su centro, de modo que ninguna cuenta a medio configurar llega al interior de la aplicación. Las cuentas que crea el propio centro ya vienen con rol y centro y entran directamente.",
            },
            {
                type: "quote",
                text: "Toda la aplicación está en castellano, catalán e inglés, y cada persona recibe los correos en su propio idioma.",
                icon: icons.users,
            },

            { type: "title", text: "Estado", id: "estado" },
            {
                type: "paragraph",
                text: "En desarrollo. El comedor, la gestión de personas, la parte académica y el acceso están en marcha; las pantallas de tutores y menores existen en la API y están pendientes de interfaz. El detalle técnico se publicará en la pestaña de al lado.",
            },
        ],
    },
    technical: {
        title: "Gestión escolar",
        meta_title: "Gestión escolar · Detalle técnico — Juan Antonio",
        meta_description:
            "Cómo está hecha la aplicación de gestión escolar: API JSON en Laravel con JWT y multi-centro, SPA en React Router 7, importación de hojas de cálculo y correos programados.",
        intro: "Dos repositorios: una API JSON en Laravel y una SPA en React Router que la consume. No hay plantillas de servidor ni sesiones; todo lo que se ve en el navegador sale de una llamada a /api con un token.",
        blocks: [
            { type: "title", text: "Dos piezas y un contrato", id: "arquitectura" },
            {
                type: "paragraph",
                text: "El backend es Laravel 13 sobre PHP 8.3 y MySQL, y responde únicamente JSON. El frontend es React Router 7 con TypeScript, Tailwind 4 y shadcn/ui. Entre los dos no hay más acuerdo que la API: una respuesta de un recurso llega envuelta en «data», y un listado llega tal cual lo pagina Laravel.",
            },
            {
                type: "paragraph",
                text: "El código del servidor se agrupa por dominio y no por tipo: cada módulo se lleva sus controladores, sus modelos y sus servicios. El controlador valida y responde; todo lo que tiene reglas detrás vive en un servicio.",
            },
            {
                type: "code",
                language: "text",
                caption: "school_backend/app",
                code: `Academics    periodos -> cursos -> clases -> asignaturas -> matriculas
Cafeteria    menus, semanas, rotaciones, reservas, pagos, vales QR
Guardians    vinculo tutor -> menor
Management   administracion de usuarios
Schools      centros (inquilinos) y dias de cierre
Support      Locales, DocumentId y demas ayudas compartidas`,
            },
            {
                type: "quote",
                text: "Agrupar por dominio y no por tipo: para entender el comedor se abre una carpeta, no cinco.",
                icon: icons.building,
            },

            { type: "title", text: "Un centro, un inquilino", id: "multicentro" },
            {
                type: "paragraph",
                text: "Todas las tablas de dominio llevan el centro al que pertenecen. Qué centro es no se decide en el cliente: lo resuelve el servidor a partir de quién hace la llamada. Solo un administrador puede apuntar a otro centro, y lo hace con una cabecera; cualquier otro rol queda fijado al suyo envíe lo que envíe.",
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

    // Los demas quedan fijados a su centro, manden lo que manden.
    return $user->school_id;
}`,
            },
            {
                type: "quote",
                text: "El inquilino no es un parámetro más de la petición: es una consecuencia de quién la firma.",
                icon: icons.lock,
            },

            { type: "title", text: "Quién entra y cómo", id: "autenticacion" },
            {
                type: "paragraph",
                text: "La autenticación es JWT, sin sesiones. Hay tres puertas que emiten el mismo token: correo y contraseña, el consentimiento de Google y el botón de Google del propio navegador. Como la API no guarda estado, el «state» del flujo de Google vive en la caché mientras dura el viaje de ida y vuelta.",
            },
            {
                type: "paragraph",
                text: "Una cuenta registrada por su cuenta arranca con un rol de marcador y sin centro. Un middleware responde 403 con un código propio a todo lo demás hasta que termina el asistente, así que la SPA sabe sin ambigüedad que tiene que llevar a esa persona al asistente y no a la pantalla de entrada.",
            },
            {
                type: "quote",
                text: "Pedir una contraseña nueva para una dirección que no existe responde igual que para una que sí: una respuesta distinta convertiría el formulario en una lista de quién tiene cuenta.",
                icon: icons.lock,
            },

            { type: "title", text: "Todo pasa por un cliente", id: "cliente" },
            {
                type: "paragraph",
                text: "En el frontend solo un módulo habla con la API. Ahí se pone el token y la cabecera del centro, y ahí se interpretan los dos errores que no son de la pantalla sino de la sesión: un 401 limpia y manda a la portada, y un 403 con el código del asistente manda al asistente. Ninguna pantalla repite esa lógica.",
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

// La cuenta existe, pero todavia no ha elegido rol y centro.
if (res.status === 403 && body?.code === "onboarding_required") {
  window.location.replace("/onboarding")
}`,
            },
            {
                type: "paragraph",
                text: "Las rutas se declaran una a una en un fichero, sin enrutado por sistema de ficheros: lo que no está escrito ahí no existe. Los errores de validación se leen del cuerpo del 422 y se pintan campo a campo; los demás fallos se resumen en una sola línea arriba del formulario.",
            },

            { type: "title", text: "Reservar en lote", id: "reservas" },
            {
                type: "paragraph",
                text: "La reserva recurrente no es una reserva repetida en un bucle del navegador: el cliente manda qué menú quiere cada día de la semana y el servidor decide qué fechas salen de ahí, saltando festivos, días cerrados y los que ya han pasado del plazo. La respuesta dice qué se creó y qué se saltó, con el motivo.",
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
                text: "Una reserva de todo el curso genera un único correo con todas las fechas, no ochenta correos: el mensaje recibe un lote, y una reserva suelta es un lote de uno.",
                icon: icons.mail,
            },

            { type: "title", text: "Importar sin sorpresas", id: "importacion" },
            {
                type: "paragraph",
                text: "La importación tiene dos pasos a propósito. El primero analiza el fichero y devuelve las columnas, las primeras filas tal y como se han leído y cuántas filas de datos hay; el segundo recibe ya la correspondencia confirmada entre columna y campo. Entre uno y otro está la persona, que es quien sabe si esa columna era el teléfono del tutor o el del alumno.",
            },
            {
                type: "paragraph",
                text: "La propuesta inicial se calcula normalizando el título de cada columna —sin acentos, sin signos, en minúsculas— contra el nombre de cada campo, porque el caso habitual es un fichero exportado desde la propia aplicación. Al terminar, el resultado incluye las filas exactas que han fallado.",
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

// Resultado de una importacion, tal y como lo lee la pantalla.
export type ImportResult = {
  expected: number
  created: number
  failed: number
  /** Filas de la hoja que no se han podido crear (la cabecera es la 1). */
  failed_rows: number[]
}`,
            },

            { type: "title", text: "Correos que no se repiten", id: "correos" },
            {
                type: "paragraph",
                text: "El aviso de la tarde anterior es un comando programado. Lo que lo hace idempotente es una marca de tiempo en la propia reserva: una segunda ejecución la misma noche no escribe a nadie. La marca se pone incluso cuando no había buzón al que escribir, para que una familia sin correo no se reintente cada noche.",
            },
            {
                type: "code",
                language: "php",
                caption: "app/Cafeteria/Console/SendReservationRemindersCommand.php",
                code: `->unless($force, fn ($q) => $q->whereNull('cafeteria_reservations.reminder_sent_at'))

// ...

$sent = $mailer->reminder($reservation);

// Se sella aunque no se haya escrito a nadie: un comensal sin buzon no
// tiene ningun aviso que esperar, y reintentarlo solo llenaria el log.
$reservation->forceFill(['reminder_sent_at' => now()])->save();`,
            },
            {
                type: "quote",
                text: "El QR viaja incrustado como adjunto y no como URI de datos: Gmail y Outlook descartan las segundas, y un vale que no se ve no es un vale.",
                icon: icons.qrcode,
            },
            {
                type: "paragraph",
                text: "A quién se escribe lo decide el comensal, no quien hizo la reserva: al propio comensal si tiene correo, y a sus tutores. Una secretaria que reserva para un alumno no recibe el correo de esa familia. Un fallo de envío se registra y se traga: una reserva que ya está hecha no se deshace porque el correo esté caído.",
            },

            { type: "title", text: "Datos que no se devuelven", id: "privacidad" },
            {
                type: "paragraph",
                text: "La búsqueda de un menor por documento es el sitio donde más fácil sería filtrar datos, así que responde con un estado y nada más. El documento se normaliza antes de comparar —en mayúsculas y sin signos—, de modo que dos formas de escribir el mismo DNI son la misma persona.",
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

    // Un estado y nada mas: nunca un nombre, un id ni una fecha.
    return ['found' => true, 'status' => $pending ? 'request_pending' : 'claimable'];
}`,
            },
            {
                type: "quote",
                text: "Nada queda vinculado y ningún alumno se crea hasta que el centro aprueba la solicitud.",
                icon: icons.users,
            },

            { type: "title", text: "Pruebas y formato", id: "calidad" },
            {
                type: "paragraph",
                text: "Las pruebas del backend son de funcionalidad: llaman a la API con un token real sobre una base sqlite en memoria, así que lo que se prueba es la ruta entera, middlewares incluidos. Cada comportamiento nuevo entra con su prueba, y el formateador pasa solo por los ficheros tocados para que el diff siga siendo legible.",
            },
            {
                type: "code",
                language: "bash",
                caption: "Lo que se ejecuta antes de dar algo por hecho",
                code: `composer dev        # API, colas, logs y vite a la vez
php artisan test    # la suite completa, sqlite en memoria
./vendor/bin/pint   # formato, solo los ficheros tocados

npm run dev         # la SPA en :5173
npm run typecheck   # react-router typegen && tsc`,
            },
            {
                type: "paragraph",
                text: "Los tres idiomas se mantienen a la vez en los dos lados: una cadena nueva entra en los tres ficheros de traducción o no entra. En el navegador el idioma y el tema se aplican en un efecto y nunca durante el render, para que el servidor y el primer pintado del cliente coincidan.",
            },
        ],
    },
};

export default school;

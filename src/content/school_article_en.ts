import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** English version of the "School management" article. Mirrors `school_es.ts`. */
const school: ProjectArticles = {
    tabs: {
        info: "Overview",
        technical: "Technical detail",
    },
    info: {
        title: "School management",
        meta_title: "School management — Juan Antonio",
        meta_description:
            "A management application for a school: cafeteria, front office, academics and families in a single tool.",
        intro: "A management application for a school. It gathers into one tool what today is spread across spreadsheets, printed lists and loose messages: cafeteria bookings, enrolling people, courses and families.",
        blocks: [
            { type: "title", text: "What it is for", id: "what-it-is-for" },
            {
                type: "paragraph",
                text: "A school front office runs on data that changes every day: who eats today, who cancelled, which pupil belongs to which class and who is allowed to pick them up. The application keeps all of it in one place and lets each person see only the part that is theirs.",
            },
            {
                type: "paragraph",
                text: "Every school works inside its own space. A family signs in and sees their children; the kitchen sees the count for the day; the office manages enrolments, lists and bookings. Nobody has to ask for permission to do their job, and nobody sees what is not theirs.",
            },
            {
                type: "quote",
                text: "One place for the cafeteria, the office and the families, instead of three spreadsheets that never agree.",
                icon: icons.quote,
            },

            { type: "title", text: "The cafeteria", id: "cafeteria" },
            {
                type: "subtitle",
                text: "Book one day, or the whole year",
                id: "booking",
            },
            {
                type: "paragraph",
                text: "A booking is made on a calendar that only offers the days that can actually be booked: school holidays, days with no menu and days past the cut-off are simply not there. There is no need to explain why a booking was refused: it cannot be asked for in the first place.",
            },
            {
                type: "paragraph",
                text: "Beyond the single day, a family can book the whole year at once: pick the weekdays and the menu for each, and the application creates every date in one go, skipping holidays and closed days. It then reports which days were created, which were skipped, and why.",
            },
            {
                type: "image",
                src: "projects/school/calendar.png",
                alt: "Cafeteria booking calendar showing the available days",
                caption: "The booking calendar: days that cannot be booked are never offered.",
                captureUrl: "http://localhost:5173/cafeteria/reservations/new",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Menus, weeks and reminders",
                id: "menus",
            },
            {
                type: "paragraph",
                text: "Menus are built as weeks and repeated as rotations, so a term is planned once rather than every Monday. The kitchen reads the count for the day and the office the outstanding payments.",
            },
            {
                type: "quote",
                text: "The evening before each meal a reminder goes out by email with the voucher and its QR code: it is scanned at the cafeteria door, and who ate is on the record.",
                icon: icons.qrcode,
            },

            { type: "title", text: "Office and people", id: "office" },
            {
                type: "subtitle",
                text: "Lists you can filter",
                id: "lists",
            },
            {
                type: "paragraph",
                text: "Pupils, teachers, families and staff appear in paginated lists filtered by role, with the full record behind each one: contact details, identity document, course and class. It is the screen people spend the most time on, so it is the one that asks for the fewest clicks.",
            },
            {
                type: "image",
                src: "projects/school/lists.png",
                alt: "User list filtered by role",
                caption: "The people list, with the role filter applied.",
                captureUrl: "http://localhost:5173/management/users",
                pending: true,
            },
            {
                type: "subtitle",
                text: "Importing the year from a spreadsheet",
                id: "import",
            },
            {
                type: "paragraph",
                text: "Starting a school year by hand is hundreds of records. The application reads the file the school already has, an Excel or a CSV, shows the first rows exactly as it understood them and proposes which field each column belongs to. Every proposal can be changed, column by column, before confirming.",
            },
            {
                type: "image",
                src: "projects/school/import.png",
                alt: "Import screen mapping spreadsheet columns onto fields",
                caption: "The import: the file on the left, the field each column goes into on the right.",
                captureUrl: "http://localhost:5173/management/users/import",
                pending: true,
            },
            {
                type: "quote",
                text: "When it finishes it says how many records were expected, how many were created, and exactly which rows of the file failed, rather than a generic warning that forces a full review.",
                icon: icons.spreadsheet,
            },

            { type: "title", text: "Families and access", id: "access" },
            {
                type: "paragraph",
                text: "A parent looks their child up by identity document and files a request; nobody is linked until the school approves it. The search only answers whether there is a match: it never hands a child's name to someone who is not yet their guardian.",
            },
            {
                type: "paragraph",
                text: "Signing in works with an email and password or with a Google account. Anyone who registers on their own first goes through a short wizard stating their role and their school, so a half-configured account never reaches the inside of the application. Accounts created by the school already have a role and a school and go straight in.",
            },
            {
                type: "quote",
                text: "The whole application is in Spanish, Catalan and English, and everyone receives their email in their own language.",
                icon: icons.users,
            },

            { type: "title", text: "Status", id: "status" },
            {
                type: "paragraph",
                text: "In development. The cafeteria, people management, the academic side and sign-in are all running; the guardian and child screens exist in the API and are waiting for their interface. The technical detail will be published on the tab next to this one.",
            },
        ],
    },
    technical: {
        title: "School management",
        meta_title: "School management · Technical detail — Juan Antonio",
        meta_description:
            "How the school management application is built: a Laravel JSON API with JWT and multi-tenancy, a React Router 7 SPA, spreadsheet imports and scheduled email.",
        intro: "Two repositories: a JSON API in Laravel and a React Router SPA that consumes it. There are no server templates and no sessions; everything on screen comes from a call to /api carrying a token.",
        blocks: [
            { type: "title", text: "Two pieces and a contract", id: "architecture" },
            {
                type: "paragraph",
                text: "The backend is Laravel 13 on PHP 8.3 and MySQL, and it answers JSON only. The frontend is React Router 7 with TypeScript, Tailwind 4 and shadcn/ui. The only agreement between them is the API: a single resource comes wrapped in \"data\", and a list comes exactly as Laravel paginates it.",
            },
            {
                type: "paragraph",
                text: "Server code is grouped by domain rather than by type: each module carries its own controllers, models and services. A controller validates and answers; anything with rules behind it lives in a service.",
            },
            {
                type: "code",
                language: "text",
                caption: "school_backend/app",
                code: `Academics    periods -> courses -> classes -> subjects -> enrollments
Cafeteria    menus, weeks, rotations, reservations, payments, QR vouchers
Guardians    guardian -> child linking
Management   user administration
Schools      schools (tenants) and closed days
Support      Locales, DocumentId and the other shared helpers`,
            },
            {
                type: "quote",
                text: "Grouped by domain, not by type: understanding the cafeteria means opening one folder, not five.",
                icon: icons.building,
            },

            { type: "title", text: "One school, one tenant", id: "tenancy" },
            {
                type: "paragraph",
                text: "Every domain table carries the school it belongs to. Which school that is never comes from the client: the server works it out from whoever is calling. Only an administrator can target another school, and only through a header; every other role is pinned to their own whatever they send.",
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

    // Everyone else is pinned to their own school, whatever they send.
    return $user->school_id;
}`,
            },
            {
                type: "quote",
                text: "The tenant is not one more parameter of the request: it is a consequence of who signed it.",
                icon: icons.lock,
            },

            { type: "title", text: "Who gets in, and how", id: "auth" },
            {
                type: "paragraph",
                text: "Authentication is JWT, with no sessions. Three doors issue the same token: email and password, the Google consent screen, and the browser's own Google button. Because the API keeps no state, the Google flow's state lives in the cache for as long as the round trip takes.",
            },
            {
                type: "paragraph",
                text: "A self-registered account starts with a placeholder role and no school. A middleware answers 403 with a code of its own to everything else until the wizard is finished, so the SPA knows unambiguously to send that person to the wizard rather than to the sign-in screen.",
            },
            {
                type: "quote",
                text: "Asking for a new password for an address that does not exist answers exactly like one that does: a different answer would turn the form into a list of who has an account.",
                icon: icons.lock,
            },

            { type: "title", text: "Everything goes through one client", id: "client" },
            {
                type: "paragraph",
                text: "On the frontend a single module talks to the API. That is where the token and the school header are attached, and where the two errors that belong to the session rather than to the screen are read: a 401 clears and goes to the landing page, and a 403 carrying the wizard's code goes to the wizard. No screen repeats that logic.",
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

// The account exists but has not picked a role and a school yet.
if (res.status === 403 && body?.code === "onboarding_required") {
  window.location.replace("/onboarding")
}`,
            },
            {
                type: "paragraph",
                text: "Routes are declared one by one in a single file, with no file-system routing: what is not written there does not exist. Validation errors are read from the body of the 422 and shown field by field; every other failure gets one line at the top of the form.",
            },

            { type: "title", text: "Booking in bulk", id: "bookings" },
            {
                type: "paragraph",
                text: "A recurring booking is not a single booking repeated in a browser loop: the client sends which menu it wants on each weekday and the server decides which dates come out of that, skipping holidays, closed days and anything past the cut-off. The answer says what was created and what was skipped, with the reason.",
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
                text: "A whole-year booking produces one email listing every date, not eighty: the message takes a batch, and a single booking is a batch of one.",
                icon: icons.mail,
            },

            { type: "title", text: "Importing without surprises", id: "import" },
            {
                type: "paragraph",
                text: "The import is two steps on purpose. The first analyses the file and returns its columns, the first rows exactly as they were read and how many data rows there are; the second receives the confirmed mapping of column to field. In between stands the person, who is the one who knows whether that column was the guardian's phone or the pupil's.",
            },
            {
                type: "paragraph",
                text: "The initial proposal is worked out by normalising each column title — no accents, no punctuation, lower case — against each field name, because the common case is a file exported from this same application. When it finishes, the result names the exact rows that failed.",
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

// What an import did, once it finished.
export type ImportResult = {
  expected: number
  created: number
  failed: number
  /** Spreadsheet row numbers that could not be created (the header is row 1). */
  failed_rows: number[]
}`,
            },

            { type: "title", text: "Email that does not repeat itself", id: "email" },
            {
                type: "paragraph",
                text: "The evening reminder is a scheduled command. What makes it idempotent is a timestamp on the reservation itself: a second run the same night writes to nobody. It is stamped even when there was no mailbox to write to, so a family without email is not retried every night.",
            },
            {
                type: "code",
                language: "php",
                caption: "app/Cafeteria/Console/SendReservationRemindersCommand.php",
                code: `->unless($force, fn ($q) => $q->whereNull('cafeteria_reservations.reminder_sent_at'))

// ...

$sent = $mailer->reminder($reservation);

// Stamped even when nobody could be written to: a diner with no mailbox
// has no reminder to wait for, and retrying would only fill the log.
$reservation->forceFill(['reminder_sent_at' => now()])->save();`,
            },
            {
                type: "quote",
                text: "The QR travels embedded as an attachment rather than as a data URI: Gmail and Outlook drop the latter, and a voucher nobody can see is not a voucher.",
                icon: icons.qrcode,
            },
            {
                type: "paragraph",
                text: "Who gets written to is decided by the diner, not by whoever booked: the diner themselves when they have an email, plus their guardians. A secretary booking for a pupil never receives that family's mail. A sending failure is logged and swallowed: a booking that went through is not undone by a mail outage.",
            },

            { type: "title", text: "Data that is not handed back", id: "privacy" },
            {
                type: "paragraph",
                text: "Looking a child up by identity document is where leaking data would be easiest, so it answers with a status and nothing else. The document is normalised before it is compared — upper case, no punctuation — so two ways of writing the same id are the same person.",
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

    // A status and nothing more: never a name, an id or a date.
    return ['found' => true, 'status' => $pending ? 'request_pending' : 'claimable'];
}`,
            },
            {
                type: "quote",
                text: "Nothing is linked and no pupil is created until the school approves the claim.",
                icon: icons.users,
            },

            { type: "title", text: "Tests and formatting", id: "quality" },
            {
                type: "paragraph",
                text: "The backend tests are feature tests: they call the API with a real token against an in-memory sqlite database, so what is tested is the whole route, middleware included. New behaviour arrives with its test, and the formatter runs only over the files touched, so the diff stays readable.",
            },
            {
                type: "code",
                language: "bash",
                caption: "What runs before anything is called done",
                code: `composer dev        # API, queues, logs and vite at once
php artisan test    # the whole suite, sqlite in memory
./vendor/bin/pint   # formatting, only the files touched

npm run dev         # the SPA on :5173
npm run typecheck   # react-router typegen && tsc`,
            },
            {
                type: "paragraph",
                text: "The three languages are kept up on both sides at once: a new string goes into all three translation files or it does not go in. In the browser the language and the theme are applied in an effect and never during render, so the server and the client's first paint agree.",
            },
        ],
    },
};

export default school;

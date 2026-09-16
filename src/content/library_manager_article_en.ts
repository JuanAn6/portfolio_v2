import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** English version of the "Library manager" article. Mirrors `library_manager_article_es.ts`. */
const libraryManager: ProjectArticles = {
    tabs: {
        info: "Overview",
        technical: "Technical detail",
    },
    info: {
        title: "Library manager",
        meta_title: "Library manager — Juan Antonio",
        meta_description:
            "An application for running a small library: a book catalogue, members, and loans with their returns.",
        intro: "An application for running a small library — a school's, an association's, a neighbourhood's: the catalogue, who the members are, and which book each of them has at home.",
        blocks: [
            { type: "title", text: "What it is for", id: "what-it-is-for" },
            {
                type: "paragraph",
                text: "A small library runs for years on a notebook or a spreadsheet, right until somebody asks whether any copy of a title is left and it takes a walk to the shelf to find out. The application answers that without standing up: how many copies exist, how many are out, and who has them.",
            },
            {
                type: "paragraph",
                text: "It is three things chained together: a catalogue with its authors, categories and publishers; a register of members; and the loans, which tie a book to a member and a due date.",
            },
            {
                type: "quote",
                text: "The question asked most often at a desk is \"is there one left?\", and it is the one a spreadsheet answers worst.",
                icon: icons.book,
            },

            { type: "title", text: "The catalogue", id: "catalogue" },
            {
                type: "paragraph",
                text: "Every book has its record with author, category, publisher and the number of copies, one click away from the list. Authors, categories and publishers are lists of their own with their own upkeep, so the same author does not end up spelled four different ways.",
            },
            {
                type: "image",
                src: "projects/library_manager/catalog.png",
                alt: "Book catalogue listing",
                caption: "The catalogue, with the copies available for each title.",
                captureUrl: "http://localhost:4200/books",
                pending: true,
            },

            { type: "title", text: "Lending and returning", id: "loans" },
            {
                type: "paragraph",
                text: "Lending a book takes one available copy away and returning it puts it back; if none is left, the loan is never created. The due date is proposed two weeks out and can be changed, and a returned loan keeps the day it came back, so the history stays complete instead of disappearing.",
            },
            {
                type: "paragraph",
                text: "Those rules already live on the server and are what will decide what the desk can do; the screen that uses them is what comes next, and until then a loan is handled against the API.",
            },
            {
                type: "image",
                src: "projects/library_manager/book_detail.png",
                alt: "A book's record with its available copies",
                caption: "A book's record: the loan will start here once the screen exists.",
                captureUrl: "http://localhost:4200/books/1",
                pending: true,
            },
            {
                type: "quote",
                text: "A copy cannot be out twice: the count and the loan are written together, or neither of them is.",
                icon: icons.database,
            },

            { type: "title", text: "Who can do what", id: "roles" },
            {
                type: "paragraph",
                text: "There are three parts to play. A reader sees the catalogue and their own details; whoever staffs the desk creates books, members and loans; administration also manages accounts and their permissions. The side menu only shows what that person can open, and what is not theirs the server would not allow either.",
            },
            {
                type: "image",
                src: "projects/library_manager/users.png",
                alt: "User management screen with roles",
                caption: "Account management, visible only to administration.",
                captureUrl: "http://localhost:4200/users",
                pending: true,
            },

            { type: "title", text: "Status", id: "status" },
            {
                type: "paragraph",
                text: "In development. The catalogue, the members and the permissions are running, and the loan rules are done on the server waiting for their screen; due-date reminders and holds on a copy still out are missing too. How it works inside is on the tab next to this one.",
            },
        ],
    },
    technical: {
        title: "Library manager",
        meta_title: "Library manager · Technical detail — Juan Antonio",
        meta_description:
            "How the library manager is built: a Spring Boot REST API with JPA, the session in an HttpOnly cookie, per-route permissions and an Angular frontend with guards.",
        intro: "A Spring Boot REST API with JPA and an Angular frontend. The session does not live in browser storage but in a cookie the page's own JavaScript cannot read.",
        blocks: [
            { type: "title", text: "The model", id: "model" },
            {
                type: "paragraph",
                text: "The entities are the domain's and little else: book, author, category, publisher, member and loan. Each has its repository and its controller under the same root, so adding a section is adding those three pieces plus an entry in the menu.",
            },
            {
                type: "code",
                language: "text",
                caption: "backend/src/main/java/com/library/manager",
                code: `model/        Book, Author, Category, Publisher, Member, Loan, LoanStatus, User, Role
repository/   one JPA repository per entity
controller/   Auth, Book, Author, Category, Publisher, Member, Loan, User, Role
security/     JwtCookieService, CookieBearerTokenResolver, AppUserDetailsService
config/       SecurityConfig and the data seeder`,
            },

            { type: "title", text: "A session nobody can read", id: "session" },
            {
                type: "paragraph",
                text: "The token travels in a cookie marked HttpOnly rather than sitting in browser storage. The difference is concrete: if a script ever slips into the page there is nothing for it to read, because the application's own JavaScript cannot read it either. It is also marked so the browser refuses to send it on requests that started somewhere else.",
            },
            {
                type: "paragraph",
                text: "Spring expects the token in a header, so the only thing changed is the step that looks for it: a resolver of our own pulls it out of the cookie and the rest of the chain is untouched. The server keeps no session.",
            },
            {
                type: "quote",
                text: "The cookie is the credential, and it is HttpOnly precisely so the page's code cannot touch it.",
                icon: icons.lock,
            },

            { type: "title", text: "Permissions per route", id: "permissions" },
            {
                type: "paragraph",
                text: "Permissions are declared once, in the security configuration, rather than scattered across controllers. Reading requires being in; writing requires the desk or administration; accounts and roles are administration only. What the frontend menu shows or hides is a convenience: the real rule lives here.",
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

            { type: "title", text: "A loan is a transaction", id: "loan" },
            {
                type: "paragraph",
                text: "Creating a loan is not inserting a row: it is inserting it and taking a copy away, and both happen inside the same transaction. With no copies left it answers a conflict and touches nothing. Returning walks the same path backwards, and returning twice is a conflict too rather than a copy appearing out of nowhere.",
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

            { type: "title", text: "The frontend", id: "frontend" },
            {
                type: "paragraph",
                text: "Routes are declared by hand and their order matters: the create route goes before the one carrying an id, or the second would swallow the word \"new\" and go looking for a book by that name. Everything needing a session hangs off one parent with its guard, so the check happens before the components exist and an anonymous visitor never fires a single call.",
            },
            {
                type: "code",
                language: "ts",
                caption: "app/auth/auth.interceptor.ts",
                code: `// The cookie only travels cross-origin if the request asks for it.
const request = isOurApi ? req.clone({ withCredentials: true }) : req

// A 401 outside the session endpoints themselves is an expired token:
// clear it and go back to the login, remembering where we were headed.
if (error.status === 401 && isOurApi && !isAuthEndpoint) {
  auth.clearSession()
  router.navigate(['/login'], { queryParams: { redirectTo: router.url } })
}`,
            },
            {
                type: "quote",
                text: "The guard sits on the parent, not on each child: checked once, before anything is created, and no screen can forget to add it.",
                icon: icons.users,
            },
        ],
    },
};

export default libraryManager;

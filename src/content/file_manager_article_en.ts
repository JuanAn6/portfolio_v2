import type { ProjectArticles } from "../types/article.type";
import icons from "./article_icons";

/** English version of the "File manager" article. Mirrors `file_manager_article_es.ts`. */
const fileManager: ProjectArticles = {
    tabs: {
        info: "Overview",
        technical: "Technical detail",
    },
    info: {
        title: "File manager",
        meta_title: "File manager — Juan Antonio",
        meta_description:
            "A file manager for a server of your own: upload, organise and search documents from the browser, with no third-party cloud.",
        intro: "A file manager meant for a home server — a Raspberry Pi or an old desktop: upload, organise and browse documents from a web page, without them ever leaving your own machine.",
        blocks: [
            { type: "title", text: "What it is for", id: "what-it-is-for" },
            {
                type: "paragraph",
                text: "Commercial clouds are convenient right up to the moment what has to be kept is a deed, a contract or a medical record. This manager does what they do — folders, uploads, search — but over a disk that sits in your house and that only the people you let in can reach.",
            },
            {
                type: "paragraph",
                text: "Everyone gets their own space and sees nobody else's. An administrator creates the accounts that belong there and watches how much each one takes up; everybody else signs in, uploads and organises.",
            },
            {
                type: "quote",
                text: "What a commercial cloud does, over a disk that is in your house and under your rules.",
                icon: icons.lock,
            },

            { type: "title", text: "Folders and files", id: "folders" },
            {
                type: "subtitle",
                text: "The open folder lives in the address",
                id: "navigation",
            },
            {
                type: "paragraph",
                text: "Moving through folders changes the page address, so the browser's back button works, a folder can be bookmarked, and a link takes whoever opens it exactly where you were. The breadcrumbs at the top are not decoration either: besides going back, they accept files dropped onto them.",
            },
            {
                type: "paragraph",
                text: "In the list you can select several items and act on all of them from the toolbar, or open one row's own menu and act on that one alone. Rename, move, delete and download are the same actions in both places.",
            },
            {
                type: "image",
                src: "projects/file_manager/list.png",
                alt: "Folder listing with several items selected",
                caption: "The list with a live selection and the action bar.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Uploading by dragging", id: "uploads" },
            {
                type: "paragraph",
                text: "A file dropped from the desktop anywhere on the window lands in whichever folder is open. Dragging something that is already inside the application, on the other hand, moves it to another folder. Two similar gestures that are never confused: the application knows which is which before you even let go.",
            },
            {
                type: "image",
                src: "projects/file_manager/upload.png",
                alt: "Upload area highlighted while a file is dragged in from the desktop",
                caption: "Dragging in from the desktop: the whole window is a drop zone.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },
            {
                type: "quote",
                text: "Dragging from outside uploads; dragging from inside moves. One gesture, two meanings, and no ambiguity.",
                icon: icons.upload,
            },

            { type: "title", text: "Finding what is there", id: "search" },
            {
                type: "paragraph",
                text: "Beyond the folder tree there are sections by kind — documents, images, video, audio, pdf — gathering everything of that class wherever it lives, plus a search by name. The storage screen sums up how much each user takes, which is the question everybody ends up asking once the disk is finite.",
            },
            {
                type: "image",
                src: "projects/file_manager/categories.png",
                alt: "Category section and storage summary",
                caption: "The categories by kind and the space summary.",
                captureUrl: "http://localhost:5173/",
                pending: true,
            },

            { type: "title", text: "Status", id: "status" },
            {
                type: "paragraph",
                text: "In development. Previewing a file without downloading it, downloading a whole folder as a zip and chunking large uploads are still missing. How it is built is on the tab next to this one.",
            },
        ],
    },
    technical: {
        title: "File manager",
        meta_title: "File manager · Technical detail — Juan Antonio",
        meta_description:
            "How the file manager is built: a React 19 SPA and a Laravel 12 JWT API, ownership enforced in the query, authenticated downloads and two separate drags.",
        intro: "Two pieces: a React 19 SPA on Vite and a Laravel 12 API with JWT. Files live on disk, under one folder per user; the database only keeps the metadata.",
        blocks: [
            { type: "title", text: "The split", id: "architecture" },
            {
                type: "paragraph",
                text: "The client knows nothing about the filesystem: it asks for and receives JSON, and to get a file's content it asks for a stream. The server knows nothing about the interface: it validates, checks who owns what, and answers. Between them sits a single HTTP client instance whose interceptor attaches the token to every call.",
            },
            {
                type: "code",
                language: "text",
                caption: "Who does what",
                code: `web_file_manager/   React 19 + Vite 7, React Router 7, Axios (no TypeScript)
api_file_manager/   Laravel 12 (PHP 8.2), JWT, MySQL

Blobs      on disk, under users/{user_id}/ (files.path keeps only the basename)
Metadata   the directory and files tables`,
            },

            { type: "title", text: "Ownership is enforced in the query", id: "ownership" },
            {
                type: "paragraph",
                text: "No query looks an item up and then checks whose it is: the owner is part of the lookup itself. The difference matters. Somebody else's id returns \"does not exist\", and there is no in-between moment where another person's row sits loaded in memory waiting for a check that somebody could forget to write.",
            },
            {
                type: "code",
                language: "php",
                caption: "The pattern, in every controller",
                code: `// Ownership is part of the lookup, not a check that follows it.
$file = File::where('user_id', $request->user()->id)
    ->findOrFail($id);

// Moving a folder into its own subtree is refused on the server too,
// even though the client already prevents it: the client is a convenience,
// not a defence.`,
            },
            {
                type: "quote",
                text: "Somebody else's id gets a 404, not a 403: probing by hand does not even reveal whether that row exists.",
                icon: icons.lock,
            },

            { type: "title", text: "Downloading with a token", id: "downloads" },
            {
                type: "paragraph",
                text: "The download is where it showed most that the session travels in a header. A plain link cannot set one, so the browser would arrive with no credential. The answer is to ask for the body through the usual HTTP client and save it from JavaScript itself; the side effect is that an error arrives as a blob too, and the JSON has to be read back out of it.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/download.js",
                code: `const res = await api.get(\`/download_file/\${id}\`, { responseType: 'blob' })

const url = URL.createObjectURL(res.data)
const a = Object.assign(document.createElement('a'), { href: url, download: name })
a.click()
URL.revokeObjectURL(url)   // always, or the tab keeps the whole file in memory`,
            },

            { type: "title", text: "Two drags that never mix", id: "drag" },
            {
                type: "paragraph",
                text: "Moving items inside the application and uploading files from the system are two different drags sharing the same mechanics. While the pointer is over the page the browser exposes only the types being dragged, never the payload: accept or reject is decided from the type, and the real payload waits in a ref.",
            },
            {
                type: "code",
                language: "js",
                caption: "utils/drag.js",
                code: `// Internal: move between folders.
'application/x-file-manager-items'

// External: upload into the open folder.
'Files'

// dragenter and dragleave fire for every element crossed, so the layer
// covering the viewport keeps a depth counter rather than a boolean:
// with a boolean it flickers.`,
            },

            { type: "title", text: "Deleting a folder", id: "deletion" },
            {
                type: "paragraph",
                text: "A folder points at its parent, so deleting top-down runs straight into the foreign key. The delete walks the tree breadth-first and removes leaf to root, all inside a transaction. The files on disk go after the commit: if the transaction falls over, what is left is an intact database rather than a half-vanished tree.",
            },
            {
                type: "quote",
                text: "The database first, the disk only afterwards: deleting an orphaned file can be retried, recovering one deleted too early cannot.",
                icon: icons.database,
            },

            { type: "title", text: "Style and quality", id: "quality" },
            {
                type: "paragraph",
                text: "Styling is a design system of its own, with a single stylesheet and everything written as variables: not one colour, typeface or measurement by hand. There were thirteen per-component CSS files and all of them were deleted, because two were identical and one class name meant different things in two places.",
            },
            {
                type: "code",
                language: "bash",
                caption: "What has to pass clean before anything is called done",
                code: `npm run lint --prefix web_file_manager    # no errors and no warnings
npm run build --prefix web_file_manager

php artisan serve
php artisan migrate`,
            },
            {
                type: "paragraph",
                text: "Accessibility is part of the bar rather than an afterthought: labels tied to their field, an accessible name on every icon-only button, errors announced, dialogs that close on Escape and on a click outside, and animation turned off for anyone who asks for less motion.",
            },
        ],
    },
};

export default fileManager;

/**
 * The data a project article is written in.
 *
 * A project page is not hand-built any more: it is an `Article` object — plain
 * strings in a TypeScript file, one file per locale — that
 * `ArticleRenderer.astro` turns into the page. Adding a section means adding a
 * block to the array, never touching the .astro file.
 */

/** A numbered section heading: the kicker + rule + title of the Industry sheet. */
export interface TitleBlock {
    type: "title";
    text: string;
    /** Anchor id, so the section can be linked to. Defaults to a slug of `text`. */
    id?: string;
}

/** A heading inside a section. Consecutive text blocks share one framed box. */
export interface SubtitleBlock {
    type: "subtitle";
    text: string;
    id?: string;
}

export interface ParagraphBlock {
    type: "paragraph";
    text: string;
}

/**
 * The one line worth remembering from a section. Stands alone, framed, with an
 * optional icon to its left.
 */
export interface QuoteBlock {
    type: "quote";
    text: string;
    /** Who or what it is attributed to. Optional. */
    author?: string;
    /**
     * The *inside* of a Tabler icon — the `<path>` elements only, copied from
     * tabler.io/icons. The renderer supplies the `<svg>` wrapper, so every icon
     * comes out at the house stroke-width of 1.5. See `content/article_icons.ts`
     * for the ones already pasted in.
     */
    icon?: string;
}

/**
 * A screenshot. The file lives in `public/projects/<project>/`, so a missing one
 * is a 404 and never a build error.
 *
 * While the capture has not been taken, leave `pending: true`: the renderer
 * draws a placeholder in its place spelling out where the screenshot comes from
 * (`captureUrl`) and where the file has to be saved (`src`). Take the shot, drop
 * it in that path, delete the `pending` line.
 */
export interface ImageBlock {
    type: "image";
    /** Path under `public/`, without the base: `projects/school/calendar.png`. */
    src: string;
    alt: string;
    /** Caption printed under the frame. */
    caption?: string;
    /** The screen of the running app this screenshot is taken from. */
    captureUrl?: string;
    /** No file yet: draw the placeholder instead of a broken image. */
    pending?: boolean;
}

/** A code listing. Not highlighted — a plain monospaced block inside the frame. */
export interface CodeBlock {
    type: "code";
    code: string;
    /** Shown as the label of the block: `php`, `ts`, `bash`… */
    language?: string;
    /** File or command the listing comes from, printed above it. */
    caption?: string;
}

export type ArticleBlock =
    | TitleBlock
    | SubtitleBlock
    | ParagraphBlock
    | QuoteBlock
    | ImageBlock
    | CodeBlock;

export interface Article {
    /** Printed by `ProjectHeader`, next to the two tabs. */
    title: string;
    /** `<title>` and meta description of the page. */
    meta_title?: string;
    meta_description?: string;
    /** The lead paragraph, above the first section. */
    intro?: string;
    blocks: ArticleBlock[];
}

/**
 * The two tabs of a project. `technical` is optional: a project whose technical
 * write-up is not ready yet sets `show_technical: false` on its card and simply
 * leaves this out.
 */
export interface ProjectArticles {
    info: Article;
    technical?: Article;
    /** Tab labels, per locale. Falls back to English in `ProjectHeader`. */
    tabs?: {
        info: string;
        technical: string;
    };
}

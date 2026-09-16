import type { Language } from "../types/language.type";
import type { ProjectArticles } from "../types/article.type";

import es from "./school_article_es";
import en from "./school_article_en";
import ca from "./school_article_ca";

/**
 * The articles of the "School management" project, one per locale — the same
 * hand-kept convention as `projects_<lang>.ts`. The pages under
 * `src/pages/[lang]/projects/school/` read this map and render whatever it
 * holds; adding a locale means adding a file and an entry here.
 */
const schoolArticles: Record<Language, ProjectArticles> = { es, en, ca };

export default schoolArticles;

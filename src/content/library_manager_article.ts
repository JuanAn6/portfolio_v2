import type { Language } from "../types/language.type";
import type { ProjectArticles } from "../types/article.type";

import es from "./library_manager_article_es";
import en from "./library_manager_article_en";
import ca from "./library_manager_article_ca";

/** The articles of the "Library manager" project, one per locale. */
const libraryManagerArticles: Record<Language, ProjectArticles> = { es, en, ca };

export default libraryManagerArticles;

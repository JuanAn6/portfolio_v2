import type { Language } from "../types/language.type";
import type { ProjectArticles } from "../types/article.type";

import es from "./file_manager_article_es";
import en from "./file_manager_article_en";
import ca from "./file_manager_article_ca";

/** The articles of the "File manager" project, one per locale. */
const fileManagerArticles: Record<Language, ProjectArticles> = { es, en, ca };

export default fileManagerArticles;

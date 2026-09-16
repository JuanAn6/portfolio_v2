import type { Language } from "../types/language.type";
import type { ProjectArticles } from "../types/article.type";

import es from "./charts_3d_article_es";
import en from "./charts_3d_article_en";
import ca from "./charts_3d_article_ca";

/** The articles of the "Charts 3d" project, one per locale. */
const charts3dArticles: Record<Language, ProjectArticles> = { es, en, ca };

export default charts3dArticles;

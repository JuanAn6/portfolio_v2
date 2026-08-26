import type { Language } from "../types/language.type";
import es from "./es";
import en from "./en";
import ca from "./ca";

/** Shape every locale must satisfy; `es` is the source of truth. */
export type Dictionary = typeof es;

const dictionaries: Record<Language, Dictionary> = { es, en, ca };

export const languages = Object.keys(dictionaries) as Language[];

export function getTranslations(lang: Language): Dictionary {
    return dictionaries[lang];
}

/** Shared by every page under src/pages/[lang]/. */
export function getStaticPaths() {
    return languages.map((lang) => ({ params: { lang } }));
}

/**
 * Identification data required by article 10 of Spanish Law 34/2002 (LSSICE).
 * Locale-independent, so it lives outside src/i18n/ and is rendered as a table
 * by src/pages/[lang]/legal.astro with the labels coming from the dictionary.
 */
export const legalOwner = {
    name: "Juan Antonio García Jiménez",
    // Empty rows are dropped from the identification table. The NIF is only
    // required by article 10 once the site advertises professional services;
    // fill it in if the portfolio ever starts soliciting clients.
    nif: "",
    location: "Piera, Barcelona, España",
    email: "juanangarciaji@gmail.com",
    site: "juanangarcia.net",
} as const;

/** Year the site was first published; used for the copyright range. */
export const copyrightSince = 2025;

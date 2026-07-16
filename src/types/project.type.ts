export interface Project {
    title: string;
    description: string;
    img: string;
    /** Path under `<lang>/projects/`, e.g. `example_project/info`. */
    link: string;
}

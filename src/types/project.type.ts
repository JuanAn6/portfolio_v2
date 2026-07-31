export interface Project {
    title: string;
    description: string;
    img: string;
    /** Path under `<lang>/projects/`, e.g. `example_project/info`. */
    stack: Array<String>;
    link: string;
    show_link: Boolean;
    git_hub_link: string;
    git_hub_link_show : Boolean;
    working: Boolean,
}

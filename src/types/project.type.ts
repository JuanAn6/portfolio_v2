export interface Project {
    title: string;
    description: string;
    img: string;
    /** Path under `<lang>/projects/`, e.g. `example_project/info`. */
    stack: Array<String>;
    link: string;
    show_link: Boolean;
    /**
     * Whether the project page shows its "technical" tab. A project whose
     * technical write-up is not written yet leaves this `false` and only the
     * information tab is drawn — the page for the other tab simply does not
     * exist, so the tab must not be offered.
     */
    show_technical: Boolean;
    git_hub_link: string;
    git_hub_link_show : Boolean;
    working: Boolean,
}

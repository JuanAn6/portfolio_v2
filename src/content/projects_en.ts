import type { Project } from "../types/project.type";

const projects: Project[] = [
    {
        title: 'File manager',
        description: 'A complete file manager, it can be installed on a private server to keep sensitive documents centralized and private.',
        img: 'https://picsum.photos/400/300?greyscale&random=1',
        link: 'file_manager/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/file_manager',
        git_hub_link_show: true,
        stack: ['Laravel', 'React'],
        working: true,
    },
    {
        title: 'Library manager',
        description: 'A small application to manage book loans, the books inside the library and a user portal to request or return books.',
        img: 'https://picsum.photos/400/300?greyscale&random=2',
        link: 'library_manager/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/library_manager',
        git_hub_link_show: true,
        stack: ['Java', 'Angular'],
        working: true,
    },
];

export default projects;

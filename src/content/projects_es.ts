import type { Project } from "../types/project.type";

const projects: Project[] = [
    {
        title: 'Gestor de archivos',
        description: 'Gestor de archivos integral, se puede instalar en un servidor privado para mantener documentos sesibles centralizados y privados.',
        img: 'https://picsum.photos/400/300?greyscale&random=1',
        link: 'file_manager/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/file_manager',
        git_hub_link_show: true,
        stack: ['Laravel', 'React'],
        working: true,
    },
    {
        title: 'Gestor de biblioteca',
        description: 'Una pequeña aplicación para poder gestionar los prestamos de libros, los libros dentro de la biblioteca y portal de usuario para solicitar o devolver los libros.',
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

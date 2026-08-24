import type { Project } from "../types/project.type";

import file_manager from '../assets/imgs/file_manager.png';
import library_manager from '../assets/imgs/library_manager.png';

const projects: Project[] = [
    {
        title: 'Gestor de archivos',
        description: 'Gestor de archivos integral, se puede instalar en un servidor privado para mantener documentos sesibles centralizados y privados.',
        img: file_manager.src,
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
        img: library_manager.src,
        link: 'library_manager/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/library_manager',
        git_hub_link_show: true,
        stack: ['Java', 'Angular'],
        working: true,
    },
];

export default projects;

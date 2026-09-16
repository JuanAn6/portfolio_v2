import type { Project } from "../types/project.type";

import file_manager from '../assets/imgs/file_manager.png';
import library_manager from '../assets/imgs/library_manager.png';
import charts3dimg from '../assets/imgs/chart3dimg.png';

// Portada de "Gestión escolar". Mientras no haya captura apunta al marcador
// provisional; cuando exista `public/projects/school/calendar.png`, cambia esta
// línea a esa ruta. Vive en `public/` y no en `src/assets/` para que un fichero
// que falta sea un 404 y no un error de compilación.
const school_cover = `${import.meta.env.BASE_URL}projects/school/placeholder.svg`;

const projects: Project[] = [
    {
        title: 'Gestión escolar',
        description: 'Aplicación de gestión para un centro escolar: reservas de comedor sobre calendario, altas e importación de personas desde hoja de cálculo, cursos y vínculo entre familias y alumnado.',
        img: school_cover,
        link: 'school/info',
        show_link: true,
        show_technical: true,
        git_hub_link: '',
        git_hub_link_show: false,
        stack: ['Laravel', 'React', 'MySQL'],
        working: true,
    },
    {
        title: 'Gestor de archivos',
        description: 'Gestor de archivos integral, se puede instalar en un servidor privado para mantener documentos sesibles centralizados y privados.',
        img: file_manager.src,
        link: 'file_manager/info',
        show_link: true,
        show_technical: true,
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
        show_link: true,
        show_technical: true,
        git_hub_link: 'https://github.com/JuanAn6/library_manager',
        git_hub_link_show: true,
        stack: ['Java', 'Angular'],
        working: true,
    },
    {
        title: 'Charts 3d',
        description: 'Una pequeña librería para crear gráficos 3D interactivos que se pueden rotar y ver desde cualquier ángulo.',
        img: charts3dimg.src,
        link: 'charts-3d/info',
        show_link: true,
        show_technical: true,
        git_hub_link: 'https://github.com/JuanAn6/charts3d',
        git_hub_link_show: true,
        stack: ['TypeScript'],
        working: true,
    },
];

export default projects;

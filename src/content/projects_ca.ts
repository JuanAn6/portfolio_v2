import type { Project } from "../types/project.type";

import file_manager from '../assets/imgs/file_manager.png';
import library_manager from '../assets/imgs/library_manager.png';
import charts3dimg from '../assets/imgs/chart3dimg.png';

const projects: Project[] = [
    {
        title: 'Gestor d\'arxius',
        description: 'Gestor d\'arxius integral, es pot instal·lar en un servidor privat per mantenir documents sensibles centralitzats i privats.',
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
        description: 'Una petita aplicació per gestionar els préstecs de llibres, els llibres dins de la biblioteca i un portal d\'usuari per sol·licitar o retornar els llibres.',
        img: library_manager.src,
        link: 'library_manager/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/library_manager',
        git_hub_link_show: true,
        stack: ['Java', 'Angular'],
        working: true,
    },
    {
        title: 'Charts 3d',
        description: 'Una petita llibreria per crear gràfics 3D interactius que es poden girar i veure des de qualsevol angle.',
        img: charts3dimg.src,
        link: 'charts-3d/info',
        show_link: false,
        git_hub_link: 'https://github.com/JuanAn6/charts3d',
        git_hub_link_show: true,
        stack: ['TypeScript'],
        working: true,
    },
];

export default projects;

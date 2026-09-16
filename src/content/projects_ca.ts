import type { Project } from "../types/project.type";

import file_manager from '../assets/imgs/file_manager.png';
import library_manager from '../assets/imgs/library_manager.png';
import charts3dimg from '../assets/imgs/chart3dimg.png';

// Portada de "Gestió escolar". Mentre no hi hagi captura apunta al marcador
// provisional; quan existeixi `public/projects/school/calendar.png`, canvia
// aquesta línia a aquesta ruta. Viu a `public/` i no a `src/assets/` perquè un
// fitxer que falta sigui un 404 i no un error de compilació.
const school_cover = `${import.meta.env.BASE_URL}projects/school/placeholder.svg`;

const projects: Project[] = [
    {
        title: 'Gestió escolar',
        description: 'Aplicació de gestió per a un centre escolar: reserves de menjador sobre calendari, altes i importació de persones des d\'un full de càlcul, cursos i vincle entre famílies i alumnat.',
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
        title: 'Gestor d\'arxius',
        description: 'Gestor d\'arxius integral, es pot instal·lar en un servidor privat per mantenir documents sensibles centralitzats i privats.',
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
        description: 'Una petita aplicació per gestionar els préstecs de llibres, els llibres dins de la biblioteca i un portal d\'usuari per sol·licitar o retornar els llibres.',
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
        description: 'Una petita llibreria per crear gràfics 3D interactius que es poden girar i veure des de qualsevol angle.',
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

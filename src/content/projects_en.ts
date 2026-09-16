import type { Project } from "../types/project.type";

import file_manager from '../assets/imgs/file_manager.png';
import library_manager from '../assets/imgs/library_manager.png';
import charts3dimg from '../assets/imgs/chart3dimg.png';

// Cover of "School management". While there is no screenshot it points at the
// placeholder; once `public/projects/school/calendar.png` exists, change this
// line to that path. It lives in `public/`, not in `src/assets/`, so a missing
// file is a 404 and never a build error.
const school_cover = `${import.meta.env.BASE_URL}projects/school/placeholder.svg`;

const projects: Project[] = [
    {
        title: 'School management',
        description: 'A management application for a school: cafeteria bookings on a calendar, enrolling and importing people from a spreadsheet, courses, and the link between families and pupils.',
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
        title: 'File manager',
        description: 'A complete file manager, it can be installed on a private server to keep sensitive documents centralized and private.',
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
        title: 'Library manager',
        description: 'A small application to manage book loans, the books inside the library and a user portal to request or return books.',
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
        description: 'A small library for creating interactive 3D charts that can be rotated and viewed from any angle.',
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

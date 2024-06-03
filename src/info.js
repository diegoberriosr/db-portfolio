import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

import bellrImage from './assets/bellr.jpg';
import vestnikImage from './assets/vestnik.jpg';
import pandalangImage from './assets/pandalang.jpg';

const BELLR = {
    type : 'Full-stack',
    title : 'Bellr',
    description : {
      english : 'A full-stack Twitter clone.',
      spanish : 'Un clon full-stack de Twitter.',
      german : 'Ein Twitter clone.'
    },
    image:bellrImage,
    technologies : [
      {
        title : 'Python',
        icon : "https://devicon-website.vercel.app/api/python/original.svg"
      },
      {
        title : 'Django',
        icon : "https://devicon-website.vercel.app/api/django/plain.svg"
      },
      {
        title : 'React',
        icon : "https://devicon-website.vercel.app/api/react/original.svg"
      },
      {
        title : 'Tailwind',
        icon : "https://devicon-website.vercel.app/api/tailwindcss/plain.svg"
      },
      {
        title : 'AWS',
        icon : "https://devicon-website.vercel.app/api/amazonwebservices/original.svg"
      }      
    ],
    liveDemo : 'https://bellr-alpha.vercel.app/home',
    githubRepo : 'https://github.com/diegoberriosr/Bellr'
};

const VESTNIK = {
    type : 'Full-stack',
    title : 'Vestnik',
    description : {
      english : 'A real time messaging app.',
      spanish : 'App de chat en tiempo real.',
      german : 'Real-time Nachrichten App.'
    },
    image:vestnikImage,
    technologies : [
      {
        title : 'Python',
        icon : "https://devicon-website.vercel.app/api/python/original.svg"
      },
      {
        title : 'Django',
        icon : "https://devicon-website.vercel.app/api/django/plain.svg"
      },
      {
        title : 'React',
        icon : "https://devicon-website.vercel.app/api/react/original.svg"
      },
      {
        title : 'Tailwind',
        icon : "https://devicon-website.vercel.app/api/tailwindcss/plain.svg"
      },
      {
        title : 'AWS',
        icon : "https://devicon-website.vercel.app/api/amazonwebservices/original.svg"
      }
    ],
    liveDemo : 'https://vestnik-phi.vercel.app/login',
    githubRepo : 'https://github.com/diegoberriosr/Vestnik'
};

const PANDALANG = {
    type : 'Full-stack',
    title : 'Pandalang',
    description : {
      english : "A Duolingo-like language learning app.",
      spanish : 'App de aprendizaje de idiomas (estilo Duolingo).',
      german : 'Anwendung zum Sprachlernen (wie Duolingo).'
    },
    image:pandalangImage,
    technologies : [
      {
        title : 'Python',
        icon : "https://devicon-website.vercel.app/api/python/original.svg"
      },
      {
        title : 'Django',
        icon : "https://devicon-website.vercel.app/api/django/plain.svg"
      },
      {
        title : 'Typescript',
        icon : "https://devicon-website.vercel.app/api/typescript/original.svg"
      },
      {
        title : 'React',
        icon : "https://devicon-website.vercel.app/api/react/original.svg"
      },
      {
        title : 'Tailwind',
        icon : "https://devicon-website.vercel.app/api/tailwindcss/plain.svg"
      },
    ],
    liveDemo : null,
    githubRepo : 'https://github.com/diegoberriosr/Pandalang',
    unfinished: true,
};


export const SKILLS = [
    {
      title: 'Javascript',
      color: 'bg-yellow-500 border-yellow-700',
      icon: <IoLogoJavascript/>,
      type : 'Front-end'
    },
    {
      title: 'Typescript',
      color : 'bg-blue-500 border-blue-700',
      icon: <SiTypescript/>,
      type :'Front-end'
    },
    {
      title: 'HTML',
      color : 'bg-orange-500 border-orange-700',
      icon: <FaHtml5/>,
      type : 'Front-end',
    },
    {
        title: 'CSS',
        color : 'bg-blue-500 border-blue-700',
        icon: <FaCss3Alt/>,
        type : 'Front-end'
    },
    {
      title: 'Tailwind',
      color : 'bg-sky-500 border-blue-700',
      icon: <SiTailwindcss/>,
      type : 'Front-end'
  },
    {
        title: 'React',
        color : 'bg-sky-300 border-indigo-500',
        icon: <FaReact/>,
        type : 'Front-end',
      },
      {
        title: 'Python',
        color : 'bg-yellow-600 border-yellow-800',
        icon: <FaPython/>,
        type : 'Back-end'
      },
      {
        title: 'Django',
        color : 'bg-green-700 border-green-900',
        icon: <SiDjango/>,
        type : 'Back-end'
      }
]
export const PROJECTS = [PANDALANG, BELLR, VESTNIK]
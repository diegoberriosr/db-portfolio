import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const BELLR = {
    type : 'Full-stack',
    title : 'Bellr',
    description : {
      english : 'A full-stack Twitter clone.',
      spanish : 'Un clon full-stack de Twitter.',
      german : 'Ein Twitter clone'
    },
    image:'https://www.labnol.org/images/2023/110136.png',
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
    image:'https://www.labnol.org/images/2023/110136.png',
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

const BELLR_MOBILE = {
    type : 'Mobile',
    title : 'Bellr Mobile',
    description : {
      english : "Bellr's mobile version app.",
      spanish : 'La versión mobile de Bellr.',
      german : 'Bellrs mobile app.'
    },
    image:'https://www.labnol.org/images/2023/110136.png',
    technologies : [
      {
        title : 'Dart',
        icon : "https://devicon-website.vercel.app/api/dart/original.svg"
      },
      {
        title : 'Flutter',
        icon : "https://devicon-website.vercel.app/api/flutter/original.svg"
      }
    ],
    liveDemo : null,
    githubRepo : 'https://github.com/diegoberriosr/Bellr-Mobile'
};


export const SKILLS = [
    {
      title: 'Javascript',
      color: 'bg-yellow-500 border-yellow-700',
      icon: <IoLogoJavascript/>,
      type : 'Front-end'
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
      },
      {
        title: 'Dart',
        color : 'bg-teal-500 border-teal-700',
        icon: <SiDart/>,
        type :'Mobile'
      },
      {
        title: 'Flutter',
        color : 'bg-sky-500 border-sky-700',
        icon: <SiFlutter/>,
        type : 'Mobile'
      },
]
export const PROJECTS = [BELLR, VESTNIK, BELLR_MOBILE]
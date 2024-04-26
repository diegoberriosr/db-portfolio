import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { SiDart } from "react-icons/si";
import { SiFlutter } from "react-icons/si";

const BELLR = {
    type : 'FULL STACK',
    title : 'Bellr',
    description : 'A twitter clone.',
    image:'https://www.labnol.org/images/2023/110136.png',
    technologies : [],
    liveDemo : 'sl;sdl;s',
    githubRepo : ''
};

const VESTNIK = {
    type : 'FULL STACK',
    title : 'Vestnik',
    description : 'A real time messaging app.',
    image:'https://www.labnol.org/images/2023/110136.png',
    technologies : [],
    liveDemo : 'sl;sdl;s',
    githubRepo : ''
};

const BELLR_MOBILE = {
    type : 'MOBILE',
    title : 'Bellr Mobile',
    description : 'A twitter clone.',
    image:'https://www.labnol.org/images/2023/110136.png',
    technologies : [],
    liveDemo : 'sl;sdl;s',
    githubRepo : ''
};


export const SKILLS = [
    {
      title: 'Javascript',
      color: 'bg-yellow-500 border-yellow-700',
      icon: <IoLogoJavascript/>
    },
    {
      title: 'HTML',
      color : 'bg-orange-500 border-orange-700',
      icon: <FaHtml5/>
    },
    {
        title: 'CSS',
        color : 'bg-blue-500 border-blue-700',
        icon: <FaCss3Alt/>
    },
    {
        title: 'React',
        color : 'bg-sky-300 border-indigo-500',
        icon: <FaReact/>
      },
      {
        title: 'Python',
        color : 'bg-yellow-600 border-yellow-800',
        icon: <FaPython/>
      },
      {
        title: 'Django',
        color : 'bg-green-700 border-green-900',
        icon: <SiDjango/>
      },
      {
        title: 'Dart',
        color : 'bg-teal-500 border-teal-700',
        icon: <SiDart/>
      },
      {
        title: 'Flutter',
        color : 'bg-sky-500 border-sky-700',
        icon: <SiFlutter/>
      },
]
export const PROJECTS = [BELLR, VESTNIK, BELLR_MOBILE]
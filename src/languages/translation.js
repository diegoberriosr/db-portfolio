import SpanishFlag from './flags/spanish.png';
import EnglishFlag from './flags/english.png';
import GermanFlag from './flags/german.png';


export const TRANSLATIONS = {
    spanish : {
        flag : SpanishFlag,
        header : {
            title : 'Hola, soy Diego',
            subtitle : 'Soy desarrollador web'
        },
        body : {
            projects : 'Proyectos',
            skills : 'Habilidades',
        },
        contact : 'Contáctame'
    },
    english : {
        flag : EnglishFlag,
        header : {
            title : "Hi, I'm Diego",
            subtitle : "I'm a web developer"
        },
        body : {
            projects : 'Projects',
            skills : 'Skills',
        },
        contact : 'Contact me'
    },
    german : {
        flag : GermanFlag,
        header : {
            title : 'Hallo, ich bin Diego',
            subtitle : 'Ich bin Web Entwickler'
        },
        body : {
            projects : 'Projekte',
            skills : 'Fähigkeiten',
        },
        contact : 'Kotaktieren Sie mir'
    }
}
import SpanishFlag from './flags/spanish.png';
import EnglishFlag from './flags/english.png';
import GermanFlag from './flags/german.png';


export const TRANSLATIONS = {
    spanish : {
        flag : SpanishFlag,
        header : {
            title : 'Hola, soy Diego',
            subtitle : 'Soy desarrollador web',
            cv : 'CV'
        },
        body : {
            projects : {
                title: 'Proyectos',
                live : 'Visitar'
            },
            skills : 'Habilidades',
        },
        contact : 'Contáctame'
    },
    english : {
        flag : EnglishFlag,
        header : {
            title : "Hi, I'm Diego",
            subtitle : "I'm a web developer",
            cv : 'Resume'
        },
        body : {
            projects : {
                title: 'Projects',
                live : 'Live demo'
            },
            skills : 'Skills',
        },
        contact : 'Contact me'
    },
    german : {
        flag : GermanFlag,
        header : {
            title : 'Hallo, ich bin Diego',
            subtitle : 'Ich bin Web Entwickler',
            cv : 'Lebenslauf'
        },
        body : {
            projects : {
                title: 'Projekte',
                live : 'Besuchen'
            },
            skills : 'Fähigkeiten',
        },
        contact : 'Kotaktieren Sie mich'
    }
}
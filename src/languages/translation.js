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
                subtitle : 'Algunos de mis proyectos más recientes',
                all : 'Todos',
                live : 'Visitar'
            },
            skills : {
                title : 'Habilidades',
                all : 'Todas'
            }
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
                subtitle: 'Some of my most recent projects',
                all : 'All',
                live : 'Live demo'
            },
            skills : {
                title : 'Skills',
                all : 'All'
            }
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
                subtitle : 'Mancher meiner neulichsten Projekte',
                all : 'Alle',
                live : 'Besuchen'
            },
            skills : {
                title : 'Fähigkeiten',
                all : 'Alle'
            }
        },
        contact : 'Kotaktieren Sie mich'
    }
}
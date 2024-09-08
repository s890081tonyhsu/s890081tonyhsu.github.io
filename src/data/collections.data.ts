import type { CollectionData } from '../types/collection';

const collections: Record<string, CollectionData> = {
  'nekowiztw-cardfinder': {
    title: 'NekowizTW cardFinder',
    subtitle: 'Accepted by Players in Quiz RPG: The World of Mystic Wiz',
    image: {
      ...(await import('../assets/images/collection/nekowiztw-cardfinder.png')),
      blurhash: 'UJRC[74n4n9F~qbcRjRkogkDWra$_3WXW=WY',
    },
    article: await import('../assets/markdown/nekowiztw-cardfinder.md'),
    projectLink: 'https://github.com/NekowizTW/cardFinder',
    demoLink: 'https://nekowiztw.github.io/cardFinder/#/',
    tags: ['React', 'Redux', 'Sass', 'Vite', 'MUI'],
  },
  'nekowiztw-fairymaker': {
    title: 'NekowizTW fairyMaker',
    subtitle: 'Custom Editor on Canvas',
    image: {
      ...(await import('../assets/images/collection/nekowiztw-fairymaker.png')),
      blurhash: 'UNRp5w4o4:8_~WWDNLaeIAofx^WB~qWBM{WV',
    },
    article: await import('../assets/markdown/nekowiztw-fairymaker.md'),
    projectLink: 'https://github.com/s890081tonyhsu/fairyMaker',
    demoLink: 'https://s890081tonyhsu.github.io/fairyMaker/',
    tags: ['HTML', 'CSS', 'JavaScript', 'i18n'],
  },
  'unity-rhythm-game': {
    title: 'Unity Rhythm Game',
    subtitle: 'A Project with Most Stars on My Github',
    image: {
      ...(await import('../assets/images/collection/unity-rhythm-game.jpeg')),
      blurhash: 'U88p}xt7x[oz~qofR%t6_3WAWAjb_3R*WBs;',
    },
    article: await import('../assets/markdown/unity-rhythm-game.md'),
    projectLink: 'https://github.com/s890081tonyhsu/unity-rhythm-game',
    tags: ['Unity', 'C#'],
  },
  'fju-graduation-project': {
    title: 'Flux Based SCADA System in Factory',
    subtitle: 'FJU Graduation Project',
    image: {
      ...(await import(
        '../assets/images/collection/fju-graduation-project.png'
      )),
      blurhash: 'USSY{p%M%M-;~qofM{ayRjayj[j[~qofRjj[',
    },
    article: await import('../assets/markdown/fju-graduation-project.md'),
    tags: ['NodeJS', 'Flux', 'Websocket'],
  },
  'fju-database-project': {
    title: 'Pocket Judge',
    subtitle: 'FJU Database Project',
    image: {
      ...(await import('../assets/images/collection/fju-database-project.png')),
      blurhash: 'UGR:HF_3WB-;~qoffQj[%Mj[ofof~qofj[of',
    },
    article: await import('../assets/markdown/fju-database-project.md'),
    tags: ['Ruby on Rails', 'MySQL', 'Docker'],
  },
  'fju-book-navigation-in-library': {
    title: 'Book Navigation in Library',
    subtitle: 'FJU Web Design Final Project',
    image: {
      ...(await import(
        '../assets/images/collection/fju-book-navigation-in-library.jpg'
      )),
      blurhash: 'UFRy?B%h=w~WPDWXWCof0MWBR*a}PDWXjZoe',
    },
    article: await import(
      '../assets/markdown/fju-book-navigation-in-library.md'
    ),
    tags: ['HTML', 'AJAX', 'Javascript', 'AmazeUI'],
  },
  'interactive-webpage-of-i-ching-divination': {
    title: 'Interactive Webpage of I Ching Divination',
    subtitle: 'FJU I Ching Final Homework',
    image: {
      ...(await import(
        '../assets/images/collection/interactive-webpage-of-i-ching-divination.png'
      )),
      blurhash: 'U34LB.of00NG~Wof0KRjo}fkVsayEfay-BoL',
    },
    article: await import(
      '../assets/markdown/interactive-webpage-of-i-ching-divination.md'
    ),
    tags: ['HTML', 'JavaScript', 'Canvas'],
  },
};

export default collections;

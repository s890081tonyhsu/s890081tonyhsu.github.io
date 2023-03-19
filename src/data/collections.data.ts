export interface CollectionData {
  image: string,
  title: string,
  subtitle: string,
  article?: string,
  tags: string[],
  projectLink?: string,
  demoLink?: string
}

const collections: Record<string, CollectionData> = {
  'nekowiztw-cardfinder': {
    title: 'NekowizTW cardFinder',
    subtitle: 'Accepted by Players in Quiz RPG: The World of Mystic Wiz',
    image: require('@/assets/images/collection/nekowiztw-cardfinder.png'),
    article: require('@/assets/markdown/nekowiztw-cardfinder.md'),
    projectLink: 'https://github.com/NekowizTW/cardFinder',
    demoLink: 'https://nekowiztw.github.io/cardFinder/#/',
    tags: ['React', 'Redux', 'Lodash', 'Sass', 'Webpack']
  },
  'nekowiztw-fairymaker': {
    title: 'NekowizTW fairyMaker',
    subtitle: 'Custom Editor on Canvas',
    image: require('@/assets/images/collection/nekowiztw-fairymaker.png'),
    article: require('@/assets/markdown/nekowiztw-fairymaker.md'),
    projectLink: 'https://github.com/s890081tonyhsu/fairyMaker',
    demoLink: 'https://s890081tonyhsu.github.io/fairyMaker/',
    tags: ['HTML', 'CSS', 'JavaScript', 'i18n']
  },
  'unity-rhythm-game': {
    title: 'Unity Rhythm Game',
    subtitle: 'A Project with Most Stars on My Github',
    image: require('@/assets/images/collection/unity-rhythm-game.jpeg'),
    article: require('@/assets/markdown/unity-rhythm-game.md'),
    projectLink: 'https://github.com/s890081tonyhsu/unity-rhythm-game',
    tags: ['Unity', 'C#']
  },
  'fju-graduation-project': {
    title: 'Flux Based SCADA System in Factory',
    subtitle: 'FJU Graduation Project',
    image: require('@/assets/images/collection/fju-graduation-project.png'),
    article: require('@/assets/markdown/fju-graduation-project.md'),
    tags: ['NodeJS', 'Flux', 'Websocket']
  },
  'fju-database-project': {
    title: 'Pocket Judge',
    subtitle: 'FJU Database Project',
    image: require('@/assets/images/collection/fju-database-project.png'),
    article: require('@/assets/markdown/fju-database-project.md'),
    tags: ['Ruby on Rails', 'MySQL', 'Docker']
  },
  'fju-book-navigation-in-library': {
    title: 'Book Navigation in Library',
    subtitle: 'FJU Web Design Final Project',
    image: require('@/assets/images/collection/fju-book-navigation-in-library.jpg'),
    article: require('@/assets/markdown/fju-book-navigation-in-library.md'),
    tags: ['HTML', 'AJAX', 'Javascript', 'AmazeUI']
  },
  'interactive-webpage-of-i-ching-divination': {
    title: 'Interactive Webpage of I Ching Divination',
    subtitle: 'FJU I Ching Final Homework',
    image: require('@/assets/images/collection/interactive-webpage-of-i-ching-divination.png'),
    article: require('@/assets/markdown/interactive-webpage-of-i-ching-divination.md'),
    tags: ['HTML', 'JavaScript', 'Canvas']
  }
}

export default collections

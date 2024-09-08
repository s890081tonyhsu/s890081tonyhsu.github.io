import { SimpleItem, DateRangeItem, GroupItem } from '../types/item';

const contacts: SimpleItem[] = [
  {
    name: 'email',
    text: 'otomesound.retry\n@gmail.com',
    link: 'mailto:otomesound.retry@gmail.com',
  },
  {
    name: 'facebook',
    text: 'davistonyhsu',
    link: 'https://fb.me/davistonyhsu',
  },
  { name: 'LINE', text: 'davistonyhsu' },
  { name: 'telegram', text: 'otomesound' },
];

const profiles: SimpleItem[] = [
  {
    name: 'website',
    text: 's890081tonyhsu.github.io',
    link: 'https://s890081tonyhsu.github.io',
  },
  {
    name: 'linkedin',
    text: 'Hsu, Meng Chien',
    link: 'https://www.linkedin.com/in/otomesound',
  },
  {
    name: 'github',
    text: 's890081tonyhsu',
    link: 'https://github.com/s890081tonyhsu',
  },
  {
    name: 'wiki',
    text: 'NanaIro no Sora',
    link: 'http://nairosora.lionfree.net',
  },
];

const works: DateRangeItem[] = [
  {
    name: 'Rayark Inc.',
    suffix: 'Frontend Developer',
    time: { from: '2023-05', to: 'now' },
    text: 'Game Admin Development and Internal Frontend Project.',
  },
  {
    name: 'NCHU Office of International Affairs',
    suffix: 'Servitor',
    time: { from: '2013-09', to: '2014-01' },
    text: 'Technical Support and Website Management.',
  },
];

const volunteers: DateRangeItem[] = [
  {
    name: '花蓮環保回收聯盟宣傳App, TW',
    suffix: 'Game Developer',
    time: { from: '2019-09', to: '2019-12' },
    text: 'Creating stage, Game Testing and Promotional Video Editing',
  },
  {
    name: 'Paper: Efficient Fault-Tolerant Routing in IoT Wireless Sensor Networks Based on Bipartite-Flow Graph Modeling',
    suffix: 'Research Helper',
    time: { from: '2018-03', to: '2019-01' },
    text: 'Write Experiment Code and Collect Experiment Result.',
  },
  {
    name: 'Ayana Discord BOT',
    suffix: 'Translator',
    time: { from: '2017-10', to: 'now' },
    text: "Translate commands' description of the BOT.",
  },
  {
    name: 'Nekowiz, Fandom Wiki, TW',
    suffix: 'Wiki Manager',
    time: { from: '2016-01', to: 'now' },
    text: 'Update wiki data, Research and Manage wiki inner-tools, Developing third-party tools for wiki.',
  },
  {
    name: 'G0V Community, TW',
    suffix: 'Developer',
    time: { from: '2014-11', to: '2016-12' },
    text: 'Update UI for 2 projects (council-voter-guide, itaigi).',
  },
  {
    name: 'NCHU IT Club, TW',
    suffix: 'Tutor and Helper',
    time: { from: '2013-09', to: '2015-06' },
    text: 'Helping courses (HTML, CSS).',
  },
  {
    name: 'NCHU Student Council, TW',
    suffix: 'Developer',
    time: { from: '2012-09', to: '2014-06' },
    text: 'Help Developing Official Website and Design UI of Activity Website.',
  },
];

const educations: DateRangeItem[] = [
  {
    name: 'National Taiwan University of Science and Technology',
    suffix: 'Master Student',
    text: 'Study in Computer Science and Information Engineering, received Master Degree.',
    time: { from: '2019-09', to: '2022-08' },
  },
  {
    name: 'Fu Jen Catholic University',
    suffix: 'Bachelor Student',
    text: 'Study in Computer Science and Information Engineering, received Bachelor Degree.',
    time: { from: '2015-09', to: '2019-08' },
  },
  {
    name: 'National Chung Hsing University',
    suffix: 'Bachelor Student',
    text: 'Study in Electronic Engineering, quit at senior.',
    time: { from: '2012-09', to: '2015-01' },
  },
  {
    name: 'Taipei Private Tsai Hsing School',
    suffix: 'Senior High School Student',
    text: 'Study in Mathematical Gifted Class',
    time: { from: '2009-09', to: '2012-08' },
  },
  {
    name: 'Taipei Private Tsai Hsing School',
    suffix: 'Junior High School Student',
    text: 'Study in Normal Class',
    time: { from: '2006-09', to: '2009-08' },
  },
];

const skills: GroupItem<GroupItem<string>>[] = [
  {
    name: 'Front End',
    items: [
      {
        name: 'JavaScript/TypeScript',
        items: ['Framework(React)'],
      },
      {
        name: 'CSS',
        items: ['Preprocessor(Sass)', 'Framework(MUI)', 'TailwindCSS'],
      },
      { name: 'Packing Tool', items: ['Webpack', 'Vite'] },
      { name: 'HTML' },
    ],
  },
  {
    name: 'DevOps',
    items: [
      {
        name: 'Virtual Machine',
        items: ['Docker'],
      },
      { name: 'Version Control', joinable: true, items: ['Git'] },
      {
        name: 'Shell Scripts',
        items: ['Linux(bash, zsh)', 'Windows(cmd, powershell)'],
      },
    ],
  },
  {
    name: 'Programming',
    items: [
      {
        name: 'Console',
        joinable: true,
        items: ['C/C++', 'Rust'],
      },
    ],
  },
];

const pastSkills: GroupItem<GroupItem<string>>[] = [
  {
    name: 'Front End',
    items: [
      {
        name: 'JavaScript',
        items: ['Framework(React, Vue)', 'Library(jQuery, Lodash)'],
      },
      {
        name: 'CSS',
        items: ['Framework(Purecss, Bootstrap, Semantic UI, Carbon, Fluent)'],
      },
      { name: 'HTML' },
    ],
  },
  {
    name: 'Back End',
    items: [
      { name: 'NodeJS', joinable: true, items: ['Express', 'Koa'] },
      { name: 'PHP', joinable: true, items: ['Laravel'] },
      { name: 'Ruby', joinable: true, items: ['Rails'] },
      { name: 'DBMS', joinable: true, items: ['MySQL', 'MongoDB'] },
      { name: '.Net', joinable: true, items: ['ASP.NET'] },
    ],
  },
  {
    name: 'DevOps',
    items: [
      {
        name: 'Virtual Machine',
        items: ['Vagrant', 'VMWare', 'VirtualBox'],
      },
      {
        name: 'Server Configuration',
        joinable: true,
        items: ['Nginx', 'Apache'],
      },
      { name: 'DBMS', joinable: true, items: ['MySQL', 'MongoDB'] },
      {
        name: 'Operating System',
        items: [
          'Windows Based(Windows, Windows Server)',
          'Debian Based(Ubuntu, Debian)',
          'Red Hat Based(CentOS, Fedora)',
          'Archlinux',
        ],
      },
    ],
  },
  {
    name: 'Programming',
    items: [
      {
        name: 'Console',
        joinable: true,
        items: ['Python 3', 'Ruby', 'C#'],
      },
      {
        name: 'Graphical UI',
        items: ['C#(WPF, Unity)', 'C++(Qt)', 'JavaScript(Electron)'],
      },
      { name: 'Automated Test', joinable: true, items: ['Selenium'] },
      {
        name: 'Hardware',
        items: ['C(Andes, Arduino, Xilinx)', 'Verilog(Xilinx)'],
      },
      { name: 'Math', joinable: true, items: ['Matlab', 'Lingo'] },
    ],
  },
];

const languages: SimpleItem[] = [
  { name: 'Traditional Chinese', text: 'native' },
  { name: 'English', text: 'middle' },
  { name: 'Japanese', text: 'still learning' },
  { name: 'Korean', text: 'still learning' },
];

export default {
  contacts,
  profiles,
  works,
  volunteers,
  educations,
  skills,
  pastSkills,
  languages,
};

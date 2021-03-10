export default {
  nav: {
    logo: 'N',
    links: [
      { text: 'Projects', to: 'myprojects' },
      { text: 'About', to: 'myabout' },
      { text: 'Contact', to: 'mycontact'},
    ],
  },
  header: {
    img: process.env.PUBLIC_URL + '/assets/prof-a.jpg',
    bg: process.env.PUBLIC_URL + '/assets/sand.jpg',
    text: ['Hi!', "I am Nahshal El Nazier.", ''],
    typical: [
      'A Frontend Dev.',
      2000,
      'A Feng Main.',
      2000,
      'Welcome to my Portfolio.',
      2000,
    ],
    btnText: 'Discover More',
  },
  projects: {
    list: [
    {
      title: 'Moxie.ae',
      link: 'https://moxie.ae',
      type: 'website',
      desc: 'Homepage for Moxie Garments Manufacturer LLC.',
      tags: 'JQuery, Pug.js, SCSS'
    },
    {
      title: 'AGUHUB',
      link: 'https://aguhub.ml',
      type: 'website',
      desc: 'My Graduation project, a content sharing PWA.',
      tags: 'React.js, Firebase'
    },
    {
      title: 'CLS Uniforms',
      link: 'https://shop.clseifert.ae',
      type: 'website',
      desc: 'Online platform for students to buy school uniforms. For C.L Seifert.',
      tags: 'Vue Storefront, Magento 2'
    },
    {
      title: 'My Portfolio',
      link: 'https://github.com/NahshalElN',
      type: 'website',
      desc: 'The Repository for this portfolio, on github.',
      tags: 'React.js, Tailwindcss'
    }
    ]
  },
  stack: {
    title: 'Stack',
    tech: [
      {
        img: process.env.PUBLIC_URL + '/logo512.png',
        alt: 'react',
        title: 'React.js',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/node.png',
        alt: 'node',
        title: 'Node.js',
      },
      {
        img: process.env.PUBLIC_URL + '/assets/vue.png',
        alt: 'node',
        title: 'Vue.js',
      },
    ],
    Frontend: ['HTML/CSS', 'JavaScript', 'SASS & SCSS', 'JQuery', 'Pug.js', 'Tailwindcss', 'Material-ui', 'Bootstrap'],
    Backend: ['Magento 2', 'Firebase', 'MySQL'],
    Misc: ['Nginx', 'Ubuntu', 'Version Control - Git', 'C', 'Java'],
    desc: `My name is Nahshal, it's nice to meet you. I'm a 24 year old programmer from Sudan. I really like coding, I've been doing it for a long while now with many different languages, always learning. I live in Dubai, completed my bachelors (BSc. Computer Science and Engineering) here. I've also been working here for a year and a half as a frontend developer before graduating in 2020.`,
  },
  contact: {
    img: process.env.PUBLIC_URL + '/assets/w4.jpg',
  },
};

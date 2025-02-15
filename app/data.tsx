import { ReactNode } from 'react'
import {
  DiAngularSimple,
  DiReact,
  DiHtml5,
  DiJsBadge,
  DiCss3,
  DiDotnet,
  DiMsqlServer,
  DiPostgresql,
  DiMysql,
  DiNodejsSmall,
  DiGit,
  DiAws,
  DiJava,
  DiMongodb,
  DiPhotoshop,
  DiSass,
  DiRuby,
  DiPhp,
  DiWordpress,
} from 'react-icons/di'
import { FaFigma } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  description: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const SKILLS: {
  name: string
  level: 0 | 1 | 2 | 3
  usage: -1 | -2 | -3 | 3 | 2 | 1
  icon: ReactNode
  color: string
  alternateColor: string //not being used
  invertColors: boolean //not being used - need to rethink this part of the card design
  placesUsed: string[]
}[] = [
  {
    name: 'JavaScript',
    level: 2,
    usage: 3,
    icon: <DiJsBadge />,
    color: '#F4E11E',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Workiva',
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'React',
    level: 2,
    usage: 3,
    icon: <DiReact />,
    color: '#61dbfb',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva'],
  },
  {
    name: 'Angular',
    level: 2,
    usage: -3,
    icon: <DiAngularSimple />,
    color: '#DD0031',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'HTML',
    level: 2,
    usage: 3,
    icon: <DiHtml5 />,
    color: '#E44D26',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Workiva',
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'CSS',
    level: 2,
    usage: 3,
    icon: <DiCss3 />,
    color: '#2062AF',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Workiva',
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'TypeScript',
    level: 2,
    usage: 3,
    icon: <SiTypescript />,
    color: '#3178C6',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'C#',
    level: 2,
    usage: -3,
    icon: <DiDotnet />,
    color: '#512CD4',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'NodeJS',
    level: 1,
    usage: 3,
    icon: <DiNodejsSmall />,
    color: '#417E38',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'MS SQL',
    level: 2,
    usage: -3,
    icon: <DiMsqlServer />,
    color: '#B40000',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'Postgresql',
    level: 2,
    usage: 2,
    icon: <DiPostgresql />,
    color: '#336791',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva', 'Terralever'],
  },
  {
    name: 'MySQL',
    level: 2,
    usage: -1,
    icon: <DiMysql />,
    color: '#015E88',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva', 'Terralever'],
  },
  {
    name: 'Git',
    level: 2,
    usage: 3,
    icon: <DiGit />,
    color: '#F05033',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Workiva',
      'Renwell',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'React Native',
    level: 0,
    usage: 2,
    icon: <DiReact />,
    color: '#61dbfb',
    alternateColor: '',
    invertColors: false,
    placesUsed: [],
  },
  {
    name: 'AWS',
    level: 2,
    usage: 2,
    icon: <DiAws />,
    color: '#F69528',
    alternateColor: '',
    invertColors: false,
    placesUsed: [
      'Workiva',
      'Vizzda',
      'Catapult Systems',
      'Shotzoom Software',
      'Terralever',
    ],
  },
  {
    name: 'Java',
    level: 2,
    usage: 1,
    icon: <DiJava />,
    color: '#0E6FB6',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva', 'Terralever'],
  },
  {
    name: 'MongoDB',
    level: 1,
    usage: 2,
    icon: <DiMongodb />,
    color: '#46A639',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Terralever'],
  },
  {
    name: 'Figma',
    level: 2,
    usage: 3,
    icon: <FaFigma />,
    color: '#FF7262',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva'],
  },
  {
    name: 'Photoshop',
    level: 1,
    usage: 3,
    icon: <DiPhotoshop />,
    color: '#31A8FF',
    alternateColor: '',
    invertColors: false,
    placesUsed: ['Workiva'],
  },
]

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Workiva',
    title: 'Director of Engineering',
    start: 'May 2023',
    end: 'October 2024',
    description:
      '<p class="mt-4">Led the Automation & Connectivity pillar, an engineering organization of 35+, spanning 5 distinct product teams. Consistently cited for running one of the "healthiest" organizations in Engineering. Partnered expertly with my counterparts, and pillar leads, from Product, UX, and PMO to create and maintain roadmaps for all products under my direction.</p><p class="mt-4">Managed two Senior Engineering Managers, two Engineering Managers, and two high-level individual contributors.</p><p class="mt-4">Implemented practices through architecture, observability, and partnership with Support Engineering to significantly reduce the support burden my teams faced.</p><p class="mt-4">Worked across pillar, tier, and solution area lines to ensure adherence to engineering goals and platform standards. Collaborated regularly with Product and UX on product strategy.',
    id: 'work1',
  },
  {
    company: 'Workiva',
    title: 'Senior Engineering Manager',
    start: 'September 2018',
    end: 'May 2023',
    description:
      '<p class="mt-4">Launched two new products (Processes and Integrated Automations), while serving as a core member of the research team charged with making the recommendation to acquire OneCloud to further our work in the automation field.</p><p class="mt-4">Helped form the Automation & Connectivity pillar of the Products tier within Workiva R&D, consisting of the Processes, Tasks, Integrated Automations, and Chains (formerly OneCloud) product teams. Led the way by being the first engineering leader to move one of our legacy products out of GCP and into AWS.</p><p class="mt-4">Managed three Engineering Managers along with the Tasks product team. Oversaw the transition to operating nearly fully remote in 2020, allowing us to expand our recruiting base.</p><p class="mt-4">Partnered with the Talent Acquisition team to form the Hiring Ambassador Program, cutting time to offer from 30+ days to under 7 days during our peak hiring periods. Consistently cited as an excellent hiring manager while growing the teams under my direction.',
    id: 'work2',
  },
  {
    company: 'Workiva',
    title: 'Product Development Manager',
    start: 'September 2017',
    end: 'September 2018',
    description:
      '<p class="mt-4">Launched the Workflow initiative, combining two teams into one to build the early prototypes and iterations of what would later become the automation product line.</p><p class="mt-4">Returned my teams to more traditional agile practices, resulting in immediate improvements in velocity and outcomes. Worked with the Delivery Management organization to promote wider adoption of those practices.</p>',
    id: 'work3',
  },
  {
    company: 'Renwell',
    title: 'Senior VP of Professional Services',
    start: 'April 2016',
    end: 'September 2017',
    description:
      '<p class="mt-4">Led the entire professional services team, comprised of 20+ engineers and project managers, on custom Salesforce application implementation projects for several large customers. Responsible for project success and profitability.</p>',
    id: 'work4',
  },
  {
    company: 'Vizzda',
    title: 'Partner and CTO',
    start: 'January 2014',
    end: 'April 2016',
    description:
      '<p class="mt-4">As the technical partner in the commercial real estate software venture, I took our software from prototype to production, expanding the data available to customers as well as the markets we served.</p>',
    id: 'work5',
  },
  {
    company: 'Catapult Systems',
    title: 'Managing Consultant',
    start: 'February 2013',
    end: 'January 2014',
    description:
      '<p class="mt-4">Led the Custom Application Development Practice for the newly opened Phoenix office. Worked exclusively on a portfolio tracking system for Colony American Homes, designing and building both a web portal and a mobile application on the Microsoft stack in Azure.</p>',
    id: 'work6',
  },
  {
    company: 'Shotzoom Software',
    title: 'Senior Technical Product Manager',
    start: 'September 2012',
    end: 'February 2013',
    description:
      '<p class="mt-4">Worked with former colleagues on a short term project to revamp the web architecture for the company prior to their acquisition by the PGA Tour Experience.</p>',
    id: 'work7',
  },
  {
    company: 'Terralever',
    title: 'Senior VP of Interactive',
    start: 'January 2010',
    end: 'September 2012',
    description:
      '<p class="mt-4">Led the Interactive Division, comprised of User Experience, Creative, and Engineering professionals. Delivered digital and social media projects for several global brands, including:</p><ul class="mt-4 list-disc list-inside"><li>Red Bull: Red Bull Racing, Red Bull Racing USA, Red Bull Flugtag, Red Bull X-Fighters, Red Bull Stratos, and dozens of other sites, microsites, and mobile applications.</li><li>Microsoft: Casual games built in Silverlight and prototype Windows Phone interactive development</li><li>DC Shoes: New CMS implementation (EZ Publish) and site build</li><li>Indy Car: New CMS implementation (Sitecore) and site build</li><li>Drivetime: Custom CMS implementation (.NET) and site build</li><li>Zappos: Custom Facebook application</li><li>Goodyear: Custom Facebook application</li><li>Children’s Miracle Network Hospitals: First place in worldwide competition sponsored by Adobe and SoDA (Society of Digital Agencies) to build new site using the new HTML5 tools from Adobe.</li></ul>',
    id: 'work8',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Altruism in Software',
    description:
      'How to ensure everyone succeeds in a software project: a case study.',
    link: '/blog/altruism-in-software',
    uid: 'blog-1',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/randalls',
  },
  // {
  //   label: 'Blue Sky',
  //   link: 'https://bsky.app/profile/randallshimkus.bsky.social',
  // },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/randallshimkus/',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/randallshimkus/',
  },
]

export const EMAIL = 'contact@randallshimkus.com'

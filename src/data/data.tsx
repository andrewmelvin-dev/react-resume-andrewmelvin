import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BookOpenIcon,
  FlagIcon,
  MapPinIcon,
  SparklesIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import lifecheckPortfolioImage from '../images/portfolio/lifecheck-settings-1.png';
import monsterlandmekaPortfolioImage1 from '../images/portfolio/monsterlandmeka-1.png';
import monsterlandmekaPortfolioImage2 from '../images/portfolio/monsterlandmeka-2.png';
import monsterlandmekaPortfolioImage3 from '../images/portfolio/monsterlandmeka-3.png';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Andrew Melvin',
  description: "Andrew Melvin react resume",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills'
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Andrew Melvin`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack Software Engineer</strong> based in Sydney, NSW, Australia.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/Andrew Melvin - Resume - Dec 2024.docx',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  description: `I am a seasoned full-stack software engineer with over 20 years of industry experience. My focus is on delivering high-quality solutions right from the start, with a strong expertise in root-cause analysis and creative problem-solving.`,
  aboutItems: [
    {label: 'Location', text: 'Sydney, NSW, Australia', Icon: MapPinIcon},
    {label: 'Nationality', text: 'Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'AI, machine learning, devops, automation', Icon: BookOpenIcon},
    {label: 'Study', text: 'University of Technology, Sydney', Icon: AcademicCapIcon},
    {label: 'Hobbies', text: 'Reading, bodybuilding, video game development', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    skills: [
      {
        name: 'JavaScript'
      },
      {
        name: 'TypeScript'
      },
      {
        name: 'React'
      },
      {
        name: 'HTML5'
      },
      {
        name: 'CSS3/LESS'
      },
      {
        name: 'jQuery'
      },
    ],
  },
  {
    name: 'Backend',
    skills: [
      {
        name: 'Node.js'
      },
      {
        name: 'AWS'
      },
      {
        name: 'C#'
      },
      {
        name: 'Python'
      },
      {
        name: 'PHP'
      },
      {
        name: 'RESTful APIs'
      },
    ],
  },
  {
    name: 'CI/CD Pipelines',
    skills: [
      {
        name: 'Git'
      },
      {
        name: 'Jenkins'
      },
      {
        name: 'Grunt'
      },
      {
        name: 'Groovy'
      },
      {
        name: 'QUnit'
      },
      {
        name: 'Jira Integration'
      },
    ],
  },
  {
    name: 'Databases',
    skills: [
      {
        name: 'SQL Server'
      },
      {
        name: 'MySQL'
      },
      {
        name: 'Dynamo DB'
      },
    ],
  },
  {
    name: 'IDEs',
    skills: [
      {
        name: 'Visual Studio'
      },
      {
        name: 'WebStorm'
      },
      {
        name: 'Unity'
      },
    ],
  },
  {
    name: 'Other',
    skills: [
      {
        name: 'Embedded Systems'
      },
      {
        name: 'GIMP (UI assets)'
      },
      {
        name: 'Cubase (music)'
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Lifecheck',
    description: 'An application running on AWS that provides friends and family with automated notifications when recent activity has not been detected.',
    url: 'https://github.com/andrewmelvin-dev/lifecheck-aws',
    image: lifecheckPortfolioImage,
  },
  {
    title: 'Monsterland Meka',
    description: 'A demo of a platform/adventure video game made in the Unity game engine.',
    url: 'https://monsterlandmeka.com',
    image: monsterlandmekaPortfolioImage1,
  },
  {
    title: 'Monsterland Meka',
    description: 'A demo of a platform/adventure video game made in the Unity game engine.',
    url: 'https://monsterlandmeka.com',
    image: monsterlandmekaPortfolioImage2,
  },
  {
    title: 'Monsterland Meka',
    description: 'A demo of a platform/adventure video game made in the Unity game engine.',
    url: 'https://monsterlandmeka.com',
    image: monsterlandmekaPortfolioImage3,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    location: 'University of Technology, Sydney',
    title: 'Bachelor of Science in Computing Science',
  },
];

export const certifications: TimelineItem[] = [
  {
    title: 'AWS Certified Developer – Associate',
    content: (
      <span>
        Validation number: <a className="underline" href="https://cp.certmetrics.com/amazon/en/public/verify/credential/e6a81f428c55447590a6feb46460a94e" target="_blank">e6a81f428c55447590a6feb46460a94e</a>
      </span>
    ),
  },
  {
    title: ' AWS Certified Cloud Practitioner',
    content: (
      <p>
        Validation number: <a className="underline" href="https://cp.certmetrics.com/amazon/en/public/verify/credential/e4e571bc398a4cbcba63e561f41fb355" target="_blank">e4e571bc398a4cbcba63e561f41fb355</a>
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'October 2015 - March 2024',
    location: 'Vantiva (formerly CommScope / Arris / Pace Australia)',
    title: 'Staff Software Engineer',
  },
  {
    date: 'March 2013 - September 2015',
    location: 'Nagra Media Australia (formerly OpenTV Australia)',
    title: 'Senior Software Engineer',
  },
  {
    date: 'December 2010 - February 2013',
    location: 'Self Employed',
    title: 'Personal Trainer + Freelance Web Developer',
  },
  {
    date: 'August 2007 - November 2009',
    location: 'Barclays Global Investors',
    title: 'Associate',
  },
  {
    date: 'January 2004 - August 2007',
    location: 'Macquarie Bank',
    title: 'ISD Professional',
  },
  {
    date: 'January 1998 - December 2002',
    location: 'Solution 6',
    title: 'Software Developer',
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch',
  items: [
    {
      type: ContactType.Email,
      text: 'andrew@andrewmelvin.dev',
      href: 'mailto:andrew@andrewmelvin.dev',
    },
    {
      type: ContactType.Location,
      text: 'Sydney, NSW, Australia',
      href: 'https://www.google.com.au/maps/place/Sydney+NSW/@-33.8695675,151.2063328,15.5z',
    },
    {
      type: ContactType.Github,
      text: 'andrewmelvin-dev',
      href: 'https://github.com/andrewmelvin-dev',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/andrewmelvin-dev'},
];

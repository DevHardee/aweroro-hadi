export interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  liveLink?: string;
  gitHubLink?: string;
  type: 'individual' | 'team';
  contribution?: string | string[];
}

export const projects: Project[] = [
  {
    title: "Weather App",
    description: "A real-time weather forecast app using OpenWeather API and Auth0 for authentication",
    image: "/assets/Weather-app-signed-out.png",
    techStack: ["Nextjs", "Javascript", "Tailwind CSS", "Auth0"],
    liveLink: 'https://weather-app-rho-ivory-95.vercel.app/',
    gitHubLink: 'https://github.com/Aweroro/weather-app',
    type: 'individual'
  },
  {
    title: "Book Tracker",
    description: "A reading tracker app to manage books across different categories. It uses Firebase for authentication and database",
    image: '/assets/book-reading-app-signed-in.png',
    techStack: ["Nextjs", "Typescript", "Tailwind CSS", "Firebase"],
    liveLink: 'https://book-reading-tracker-f73c2.web.app/',
    gitHubLink: 'https://github.com/Aweroro/book-reading-tracker',
    type: 'individual'
  },
  // {
  //   title: "Form Validation Application",
  //   description: "A basic form application that validates and authenticate inputs and submission of a form page using formik and yup.",
  //   image: '/assets/form-page-app.png',
  //   techStack: ["Typescript", "Tailwind CSS", "Formik", "Yup"],
  //   gitHubLink: 'https://github.com/Aweroro/form-validation-app',
  //   type: 'individual'
  // },
  {
    title: "PrepAI - AI Powered Learning Platform",
    description: "An AI-powered learning platform that helps students prepare for their JAMB and WAEC exams.",
    image: '/assets/prep-ai-image.png',
    techStack: ["React", "Typescript", "Node.js", "Tailwind CSS", "Framer Motion"],
    liveLink: 'https://prepai.education/',
    type: 'team',
    contribution: [
      'I was responsible for the frontend development of the entire application, included all the dashboards for all users (Students, Parent, School Admin and Super Admin).',
      'Ensured the user interface provided the best user experience for students',
      'Collaborated with the backend and AI team to ensure seamless integration of features such as the AI tutor',
    ]
  },
  {
    title: "Enumerator Application Platform",
    description: "A platform for the National Survey Program for users to make applications for enumerator and state coordinator roles",
    image: '/assets/enumerator-image.png',
    techStack: ["React", "Typescript", "Node.js", "Tailwind CSS", "Framer Motion"],
    liveLink: 'https://enumerator.publicaai.com/',
    type: 'team',
    contribution: [
      'I was responsible for the frontend development of the entire application, including the user interface and user experience.',
      'I also created an admin dashboard so the client can track and monitor the application process with live data.'
    ]
  },
  {
    title: "Digimall",
    description: "An online shopping mall for users to buy and sell products.",
    image: '/assets/digimall-image.png',
    techStack: ["Nextjs", "Typescript", "Tailwind CSS"],
    liveLink: 'https://www.digimall.ng/',
    type: 'team',
    contribution: [
      'I was responsible for implementing many of the key UI components including sidebar, navbar, cart system, wishlist component, and user profile pages',
      'Integrated multiple API services, optimizing data handling and improving performance. '
    ]
  },
  {
    title: "Vazzel - AI Powered Fashion Platform",
    description: "An online shopping mall for users to buy and sell products.",
    image: '/assets/vazzel-image.png',
    techStack: ["Nextjs", "Typescript", "Tailwind CSS"],
    liveLink: 'https://vazzel.com/',
    type: 'team',
    contribution: [
      'Converted Figma designs into a fully responsive and mobile-friendly modern UI.',
      'Assisted in building components for customer and vendor dashboards, integrating dynamic data and enhancing user interaction. '
    ]
  },
  {
    title: "Propifix - Real Estate and Professionals Finding Platform",
    description: "A platform for finding real estate properties to buy, sell, or rent. Also provides services for finding professional artisans, caretakers, house agents and landlords.",
    image: '/assets/propifix-image.png',
    techStack: ["NextJs", "Typescript", "Tailwind CSS", "OpenStreetAPI"],
    liveLink: 'https://propifix-clone.vercel.app/',
    type: 'team',
    contribution: [
      'Implemented and transformed the design from figma into an interactive and responsive application.',
      'I also implemented an admin dashboard filled with charts and graphs to track and monitor the user interactions on the platform.',
      "Integrated OpenStreetAPI to provide real-time location data for properties and professionals.", "Implemented a messaging system for customers to communicate with house agents, artisans etc."
    ]
  },
]
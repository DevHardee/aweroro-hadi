export interface Experience {
    role: string;
    company: string;
    period: string;
    description: string[];
    skills: string[];
}

export const experiences: Experience[] = [
    {
        role: "Frontend Developer",
        company: "Publicaai",
        period: "November 2025 - Present",
        description: [
            "Led the frontend development for PrepAI, an AI-powered learning platform, ensuring a seamless user experience for students and educators.",
            "Improved and maintained already existing projects",
            "Built visually appealing user interfaces for projects such as Enumerator and dashboards for admin users",
            "Provided guidance and mentorship  to interns and junior developers"
        ],
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui", "Websockets"]
    },
    {
        role: "Frontend Developer",
        company: "Propifix",
        period: "April 2025 - November 2025",
        description: [
            "Transformed high-fidelity Figma designs into an interactive and responsive real estate platform.",
            "Integrated OpenStreetAPI for real-time location tracking and property mapping features.",
            "Implemented a real-time messaging system allowing seamless communication between property agents and clients.",
        ],
        skills: ["Next.js", "Javascript", "OpenStreetAPI", "Tailwind CSS"]
    },
    {
        role: "Frontend Intern",
        company: "Tanta Innovatives",
        period: "June 2024 - January 2025",
        description: [
            "Translated Figma designs into a modern, pixel-perfect UI, optimizing performance across different screen sizes for a notary signing application",
            "Contributed to building a customer and vendor dashboard, integrating dynamic data and enhancing user interaction for an AI powered fashion web application",
            "Designed and implemented key UI components, including sidebar, navbar, cart system, wishlist component, and user profile pages, improving navigation and the shopping experience for an online shopping mall web application"
        ],
        skills: ["React", "Tailwind CSS", "Typescript"]
    },
    {
        role: "Frontend Intern",
        company: "BlueChip Technologies",
        period: "March 2022 - June 2023",
        description: [
            "Gained hands-on experience in React.js, Next.js, and Tailwind CSS, laying the foundation for my current skill set",
            "Assisted in building and refining frontend components, improving application speed and user experience.",
            "Worked as part of a team to debug and optimize legacy code for a major mobile communications operator, resolving critical UI issues and enhancing performance"
        ],
        skills: ["React", "Tailwind CSS", "Javascript"]
    },
    {
        role: "Mobile Development Mentor (Flutter)",
        company: "Google Developer Student Club (GDSC)",
        period: "November 2021 - January 2022",
        description: [
            "Trained and guided my fellow students on building mobile applications using flutter",
        ],
        skills: ["Flutter", "Dart"]
    },
];
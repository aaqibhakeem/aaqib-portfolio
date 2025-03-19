import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Aaqib Hakeem",
  initials: "AH",
  url: "https://aaqibhakeem.vercel.app",
  location: "Electronic City, Bangalore, Karnataka",
  locationLink: "https://www.google.com/maps/place/ElectronicCity,Bangalore",
  description:
    "Computer Science student with a passion for coding and problem-solving. Experienced in Full-Stack Development.",
  summary:
    "Hi there, I'm Aaqib, a dedicated CS student with a passion for coding, and problem-solving. I thrive on challenges, continuously pushing my limits to grow. I enjoy collaborating with others, adapting to new challenges, and learning new stuff. As an avid tech reader, I stay up-to-date with the latest trends and emerging technologies. I hope to leverage my skills and creativity to drive meaningful innovation and make a lasting impact in the tech world.",
  avatarUrl: "/images/me.jpg",
  skills: [
    "NextJS",
    "ReactJS",
    "NodeJS",
    "ExpressJS",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "C",
    "C++",
    "Java",
    "Docker",
    "Vercel",
    "Render",
    "AWS EC2",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "aqibhkeemclg@gmail.com",
    tel: "+91 8123685938",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aaqibhakeem",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/aaqibhakeem",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aqibhkeemclg@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
      Resume: {
        name: "Resume",
        url: "Resume/Aaqib_Resume_v1.pdf",
        icon: Icons.resume,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "MCSRDC, HAL",
      href: "https://hal-india.co.in",
      badges: [],
      location: "Bangalore, Karnataka",
      title: "Software Engineering Intern",
      logoUrl: "/images/hal.png",
      start: "2023",
      end: "2025",
      description:
        "Developed a system for managing airport, flight, and route data with advanced route optimization, real-time flight tracking, an interactive visualization interface, and secure MySQL database integration.",
    },
    {
      company: "Kannada Koota PESU",
      badges: [],
      href: "https://pes.edu",
      location: "Bangalore, Karnataka",
      title: "IT Head",
      logoUrl: "/images/kannada_koota.jpg",
      start: "Aug 2023",
      end: "Present",
      description:
        "Managed digital infrastructure and web presence for student organization. Provided technical support for club events and implemented IT solutions. Mentored junior team members on technical skills and operations.",
    },
  ],
  education: [
    {
      school: "PES University",
      href: "https://pes.edu",
      degree: "Bachelor of Technology, Computer Science (GPA: 8.3)",
      logoUrl: "/images/pesu.jpg",
      start: "2022",
      end: "2026",
    },
  ],
  projects: [
    {
      title: "Twilight",
      href: "https://github.com/aaqibhakeem/Twilight",
      active: true,
      description:
        "Developed a full-stack MERN application offering personalized music streaming with custom playlist creation, genre exploration, and an immersive player. Implemented user authentication with MongoDB Atlas for data storage and Firebase for media file management.",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Firebase",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aaqibhakeem/Twilight",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/twilight.png",
    },
    {
      title: "Project Argus",
      href: "https://github.com/aaqibhakeem/Project_Argus",
      active: true,
      description:
        "Engineered a comprehensive distributed logging system for microservices that features log collection, a Kibana analytics dashboard for data visualization, and an integrated alerting and monitoring system. The architecture efficiently manages log data flow across distributed services, enabling real-time monitoring and proactive system maintenance.",
      technologies: [
        "Elasticsearch",
        "Kibana",
        "Docker",
        "Logstash",
        "Node.js",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/aaqibhakeem/Project_Argus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/argus.png",
    },
    {
      title: "Noodl",
      href: "https://noodl-bowl.vercel.app/",
      active: true,
      description:
        "Developed an interactive Next.js quiz application with a culinary theme featuring a unique code-sharing system, real-time leaderboards, user authentication, and responsive design with dark mode support. Implemented admin capabilities and engaging animations while ensuring mobile compatibility.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://noodl-bowl.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aaqibhakeem/Noodl",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/noodl.png",
    },
    {
      title: "Kannada Koota Website",
      href: "https://kannada-koota-ecc.vercel.app/",
      active: true,
      description:
        "Developed and launched the official Kannada Koota PESU website, providing a digital platform to showcase events and activities, enhancing community engagement.",
      technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"],
      links: [
        {
          type: "Website",
          href: "https://kannada-koota-ecc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/aaqibhakeem/kannada_koota",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/images/kk_website.png",
    },
  ],
} as const;

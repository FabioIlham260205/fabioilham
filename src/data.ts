export interface Skill {
  name: string;
  category: string;
  percentage: number;
  iconName: string;
  color: string; // Tailwind class color for accent
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl?: string;
  FigmaUrl?: string;
}

export interface Education {
  period: string;
  degree: string;
  institution: string;
  description?: string;
}

export const educationData: Education[] = [
  {
    period: "2023 - Sekarang",
    degree: "S1 Sistem Informasi",
    institution: "Universitas Merdeka Malang"
  },
  {
    period: "2020 - 2023",
    degree: "SMAN 2 PROBOLINGGO",
    institution: "IPS"
  }
];

export const skillsData: Skill[] = [
  {
    name: "HTML5",
    category: "Frontend",
    percentage: 95,
    iconName: "HtmlIcon",
    color: "from-orange-500 to-amber-600"
  },
  {
    name: "CSS3",
    category: "Frontend",
    percentage: 90,
    iconName: "CssIcon",
    color: "from-blue-500 to-indigo-600"
  },
  {
    name: "JavaScript",
    category: "Frontend/Backend",
    percentage: 85,
    iconName: "JsIcon",
    color: "from-yellow-400 to-amber-500"
  },
  {
    name: "PHP",
    category: "Backend",
    percentage: 82,
    iconName: "PhpIcon",
    color: "from-violet-500 to-purple-600"
  },
  {
    name: "MySQL",
    category: "Database",
    percentage: 80,
    iconName: "DatabaseIcon",
    color: "from-sky-500 to-cyan-600"
  },
  {
    name: "Laravel",
    category: "Framework",
    percentage: 85,
    iconName: "LaravelIcon",
    color: "from-red-500 to-rose-600"
  },
  {
    name: "UI/UX Design",
    category: "Design",
    percentage: 88,
    iconName: "UiUxIcon",
    color: "from-pink-500 to-rose-500"
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    percentage: 85,
    iconName: "GitIcon",
    color: "from-neutral-700 to-neutral-900"
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Allinol",
    description: "Prototype platform jual minyak jelantah berbasis Web3 & AI, membuat dari business plan dan hingga desain UI/UX dari Figma.",
    tech: ["Figma", "UI/UX Design"],
    image: "/allinol.jpeg",
    liveUrl: "https://www.figma.com/proto/sevtbxGP1TLYHr4bzsRb4r/Allinol?page-id=121%3A62&node-id=685-5305&p=f&viewport=-409%2C990%2C0.13&t=GK6IKZ1P26Owh18A-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=685%3A5330&show-proto-sidebar=1",
    FigmaUrl: "https://www.figma.com/design/sevtbxGP1TLYHr4bzsRb4r/Allinol?node-id=121-62&t=hA0Jil7ZVd1Kc9bc-1"
  }
];

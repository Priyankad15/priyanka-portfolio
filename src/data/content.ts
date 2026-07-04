// ─────────────────────────────────────────────────────────────
// Central content file. Edit copy and data here — components
// read from this file so the site stays easy to maintain.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Priyanka",
  initials: "P",
  title: "B.Tech Information Technology Student",
  subtitle: "Full-Stack Developer · AI Enthusiast · Data Analytics Learner",
  email: "priyankachopora@gmail.com",
  phone: "+91 6374544393",
  location: "Chennai, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/priyankad15",
  github: "https://github.com/Priyankad15",
  githubUsername: "Priyankad15",
  leetcodeUsername: "Priyankad15",
  leetcodeUrl: "https://leetcode.com/Priyankad15",
  resumeUrl: "/Priyanka_D_Resume.pdf",
  availability: "Open to Internships & New-Grad Roles",
};

export const heroIntro =
  "I build full-stack products end to end — from interfaces that feel considered, to APIs that hold up under real use, to the AI and data layers that make software feel smart. Currently sharpening that craft as an IT undergrad, one shipped project at a time.";

export const aboutText = [
  "I'm an Information Technology undergraduate who treats every course project like a product someone will actually use — clean data models, considered UI, and code I'm not embarrassed to open six months later.",
  "Most of my recent work sits at the intersection of full-stack engineering and applied AI: recommendation systems, skill-gap analysis tools, and interfaces backed by real databases instead of mock JSON. I learn fastest by shipping, breaking things, and shipping again.",
  "Outside coursework, I'm building toward strong placement outcomes — closing gaps in state management, cloud deployment, and BI tooling so the systems I design hold up in production, not just in a demo.",
];

export const aboutStats = [
  { label: "Projects Shipped", value: 3, suffix: "+" },
  { label: "LeetCode Problems Solved", value: 100, suffix: "+" },
  { label: "Internships Completed", value: 2, suffix: "" },
];

// ── Skills ──────────────────────────────────────────────────
export type Skill = { name: string; icon: string; level: number };
export type SkillGroup = { label: string; emoji: string; skills: Skill[] };

export const skillGroups: SkillGroup[] = [
  {
    label: "Programming Languages",
    emoji: "💻",
    skills: [
      { name: "Java", icon: "java", level: 82 },
      { name: "Python", icon: "python", level: 88 },
      { name: "JavaScript", icon: "javascript", level: 85 },
    ],
  },
  {
    label: "Frontend",
    emoji: "🎨",
    skills: [
      { name: "React.js", icon: "react", level: 87 },
      { name: "Next.js", icon: "nextjs", level: 74 },
      { name: "HTML5", icon: "html5", level: 92 },
      { name: "CSS3", icon: "css3", level: 88 },
      { name: "Tailwind CSS", icon: "tailwind", level: 90 },
      { name: "Bootstrap", icon: "bootstrap", level: 78 },
    ],
  },
  {
    label: "Backend",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", icon: "nodejs", level: 75 },
      { name: "Express.js", icon: "express", level: 72 },
      { name: "FastAPI", icon: "fastapi", level: 70 },
      { name: "REST APIs", icon: "api", level: 85 },
      { name: "JWT Authentication", icon: "jwt", level: 76 },
      { name: "Google OAuth", icon: "googleoauth", level: 74 },
    ],
  },
  {
    label: "Databases",
    emoji: "🗄️",
    skills: [
      { name: "MongoDB", icon: "mongodb", level: 73 },
      { name: "MySQL", icon: "mysql", level: 75 },
      { name: "PostgreSQL", icon: "postgresql", level: 78 },
      { name: "Supabase", icon: "supabase", level: 80 },
    ],
  },
  {
    label: "Cloud & DevOps",
    emoji: "☁️",
    skills: [
      { name: "AWS", icon: "aws", level: 76 },
      { name: "Google Cloud Platform", icon: "gcp", level: 65 },
      { name: "Docker", icon: "docker", level: 68 },
      { name: "Git", icon: "git", level: 86 },
      { name: "GitHub", icon: "github", level: 88 },
    ],
  },
  {
    label: "Tools",
    emoji: "🛠️",
    skills: [
      { name: "VS Code", icon: "vscode", level: 92 },
      { name: "Postman", icon: "postman", level: 82 },
      { name: "Vite", icon: "vite", level: 84 },
      { name: "npm", icon: "npm", level: 86 },
    ],
  },
  {
    label: "Core Computer Science",
    emoji: "📚",
    skills: [
      { name: "Data Structures & Algorithms", icon: "dsa", level: 75 },
      { name: "Object-Oriented Programming", icon: "oop", level: 82 },
      { name: "DBMS", icon: "dbms", level: 78 },
      { name: "Operating Systems", icon: "os", level: 72 },
      { name: "Computer Networks", icon: "networks", level: 70 },
    ],
  },
];

// ── Internships ─────────────────────────────────────────────
export type Internship = {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  contributions: string[];
  tech: string[];
};

export const internships: Internship[] = [
  {
    role: "Data Analyst Intern",
    company: "Top Tech Developers",
    duration: "Jan 2026 — Feb 2026",
    location: "Chennai, Tamil Nadu",
    description:
      "Analyzed, cleaned, and visualized business data to generate actionable insights and improve reporting efficiency using Python, SQL, Excel, and Power BI.",
    contributions: [
      "Automated data preparation workflows using Python, SQL, and Excel, reducing manual effort by 40%",
      "Improved report accuracy by 30% through data validation, cleansing, and transformation techniques",
      "Developed interactive dashboards in Power BI to uncover business insights and support data-driven decision-making",
      "Performed exploratory data analysis (EDA) to identify trends, patterns, and key performance metrics",
      "Collaborated within Agile sprint cycles to deliver analytical reports and support business requirements",
    ],
    tech: [
      "Python",
      "SQL",
      "Power BI",
      "Excel",
      "Pandas",
      "NumPy",
    ],
  }, // ✅ This comma was missing

  {
    role: "Cloud Computing Intern",
    company: "AlgoAlpha Tech Solution",
    duration: "June 2025 — July 2025",
    location: "Chennai, Tamil Nadu",
    description:
      "Worked with AWS cloud services to deploy, monitor, and optimize cloud infrastructure while improving system performance, scalability, and resource utilization.",
    contributions: [
      "Configured and maintained virtualized cloud environments, enhancing scalability and resource utilization",
      "Monitored and analyzed AWS performance metrics to identify bottlenecks and support incident resolution",
      "Optimized cloud resource allocation, improving operational efficiency by 20%",
      "Implemented cloud deployment best practices to strengthen system scalability, reliability, and availability",
      "Collaborated with the engineering team to troubleshoot infrastructure issues and maintain cloud services",
    ],
    tech: [
      "AWS",
      "EC2",
      "S3",
      "IAM",
      "CloudWatch",
      "Virtualization",
    ],
  },
];
// ── Projects ────────────────────────────────────────────────
export type Project = {
  title: string;
  tagline: string;
  description: string;
  summary?: string;
  features: string[];
  tech: string[];
  liveUrl: string;
  githubUrl: string;
  accent: "mint" | "violet" | "amber";
  mockup: "map" | "dashboard" | "social";
  status: "live" | "in-progress";
  allowEmbed: boolean;
  featured?: boolean;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Nearby Recommendation System",
    tagline: "Location Intelligence · AI-Powered",
    description:
      "Designed and developed a personalized recommendation platform that intelligently suggests nearby places based on user preferences, mood, and real-time location — built end-to-end from scratch.",
    features: [
      "Personalized recommendations tailored to user preferences",
      "Mood-based suggestions (work, food, chill, explore)",
      "Real-time location-based filtering via Geolocation API",
      "Interactive, responsive search experience",
    ],
    tech: ["React.js", "TypeScript", "Tailwind CSS", "AI API", "Geolocation API"],
    liveUrl: "https://nearby-ai.example.com",
    githubUrl: "https://github.com/Priyankad15",
    accent: "mint",
    mockup: "map",
    status: "live",
    allowEmbed: false,
    featured: true,
  },
  {
    title: "Data-Driven Career Recommendation & Skill Gap Analysis",
    tagline: "Machine Learning · Career Intelligence",
    description:
      "A smart platform that analyzes user skills, recommends career paths, and identifies skill gaps — with daily quizzes and interview prep to close them.",
    features: [
      "Skill assessment and ML-driven career path matching",
      "Skill gap analysis with personalized improvement guidance",
      "Daily quizzes and mock interview preparation",
      "Supabase-backed user data with row-level security",
    ],
    tech: [
      "React.js",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Shadcn/UI",
      "Supabase",
      "PostgreSQL",
      "Machine Learning",
      "Data Analytics",
    ],
    image:"/project/Data-Driven Career Recommendation & Skill Gap Analysis.jpeg",
    liveUrl: "https://skill-bridge-bn53.onrender.com/",
    githubUrl: "https://github.com/Priyankad15/Data-Driven-Approach-to-Career-Recommendation-and-Skill-Gap-Analysis",
    accent: "violet",
    mockup: "dashboard",
    status: "live",
    allowEmbed: false,
  },
  {
    title: "ViralIQ AI",
    tagline: "AI Content & Social Analytics",
    description:
      "An AI-powered social media analytics and content optimization platform designed to help users improve engagement, generate content ideas, and optimize social performance.",
    summary:
      "Integrates Groq AI (Llama 3-70B) for content generation, with JWT + Google OAuth, MongoDB, and Docker for production-grade scalability.",
    features: [
      "AI chat assistant for content strategy guidance",
      "AI caption generator and hashtag suggestions",
      "Content optimization and social media analytics dashboard",
      "Secure auth via JWT and Google OAuth 2.0",
    ],
    tech: [
      "React.js",
      "FastAPI",
      "MongoDB",
      "Groq AI",
      "Llama 3-70B",
      "JWT Authentication",
      "Google OAuth 2.0",
      "Docker",
      "Tailwind CSS",
    ],
    liveUrl: "https://viraliq-ai.example.com",
    githubUrl: "https://github.com/Priyankad15",
    accent: "amber",
    mockup: "social",
    status: "live",
    allowEmbed: false,
  },
];

// ── Education ───────────────────────────────────────────────
export const education = [
  {
    degree: "B.Tech, Information Technology",
    institution:
      "Vel Tech Multi Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    duration: "2023 — 2027",
    score: "CGPA: 8.08",
    location: "Avadi,Chennai, Tamil Nadu",
  },
];

// ── Achievements ────────────────────────────────────────────
export const achievements = [
  {
    title: "Technical Quiz Participation",
    description: "Competed in departmental technical quizzes covering CS fundamentals and current tech trends.",
    icon: "quiz",
  },
  {
    title: "Coding Competitions",
    description: "Participated in collegiate coding contests focused on DSA and problem-solving under time constraints.",
    icon: "code",
  },
  {
    title: "Hackathons",
    description: "Built and pitched working prototypes in team hackathons, from ideation to live demo.",
    icon: "hackathon",
  },
  {
    title: "AI Workshops",
    description: "Attended hands-on workshops on machine learning fundamentals and applied AI techniques.",
    icon: "ai",
  },
  {
    title: "Cloud Computing Workshops",
    description: "Trained on AWS cloud services, deployment pipelines, and infrastructure fundamentals.",
    icon: "cloud",
  },
  {
    title: "Full-Stack Development Learning",
    description: "Self-driven, continuous learning across the modern full-stack JavaScript/TypeScript ecosystem.",
    icon: "stack",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Coding", href: "#coding" },
  { label: "Internships", href: "#internships" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

// ── Competitive Programming & Problem Solving ─────────────────
export const codingStats = [
  { label: "LeetCode Problems Solved", value: 100, suffix: "+" },
  { label: "DSA Topics Practiced", value: 11, suffix: "" },
  { label: "Day Coding Streak", value: 30, suffix: "+" },
  { label: "Problem Solving Progress", value: 55, suffix: "%" },
];

export type DsaTopic = { name: string; status: "completed" | "learning" };

export const dsaRoadmap: DsaTopic[] = [
  { name: "Arrays", status: "completed" },
  { name: "Strings", status: "completed" },
  { name: "Linked Lists", status: "completed" },
  { name: "Stacks", status: "completed" },
  { name: "Queues", status: "completed" },
  { name: "Recursion", status: "completed" },
  { name: "Binary Search", status: "completed" },
  { name: "Hashing", status: "completed" },
  { name: "Trees", status: "learning" },
  { name: "Graphs", status: "learning" },
  { name: "Dynamic Programming", status: "learning" },
];

export const problemSolvingSkillCards = [
  {
    title: "Data Structures",
    icon: "🧩",
    items: ["Arrays", "Linked Lists", "Trees", "Graphs", "Hash Maps"],
  },
  {
    title: "Algorithms",
    icon: "⚡",
    items: ["Sorting", "Searching", "Recursion", "Dynamic Programming", "Greedy Algorithms"],
  },
  {
    title: "Problem Solving",
    icon: "🎯",
    items: ["Logical Thinking", "Pattern Recognition", "Optimization", "Analytical Skills", "Debugging"],
  },
];

export const currentFocus = [
  { label: "Full-Stack Development", progress: 80 },
  { label: "React.js Ecosystem", progress: 85 },
  { label: "AI & Machine Learning", progress: 65 },
  { label: "AWS Cloud", progress: 70 },
  { label: "Data Analytics", progress: 75 },
  { label: "System Design Fundamentals", progress: 50 },
  { label: "Placement Preparation", progress: 70 },
  { label: "Advanced DSA", progress: 55 },
];

export const expertiseAreas = [
  {
    title: "Development",
    icon: "💻",
    items: ["React.js", "TypeScript", "JavaScript", "Node.js", "Full-Stack Development"],
  },
  {
    title: "AI & Data",
    icon: "🤖",
    items: ["Machine Learning", "Data Analytics", "Data Visualization", "AI Applications"],
  },
  {
    title: "Cloud",
    icon: "☁️",
    items: ["AWS Cloud", "Cloud Fundamentals", "Deployment Basics"],
  },
  {
    title: "Problem Solving",
    icon: "🧩",
    items: ["100+ LeetCode Problems", "Data Structures", "Algorithms", "Competitive Programming"],
  },
];

export const openForTags = [
  "Internship Opportunities",
  "Full-Stack Development Projects",
  "Open Source Contributions",
  "AI/ML Projects",
  "Cloud Computing Projects",
  "Hackathons",
  "Technical Collaborations",
];

export const codingSocialLinks = [
  { label: "GitHub", icon: "github", href: profile.github },
  { label: "LinkedIn", icon: "linkedin", href: profile.linkedin },
  { label: "LeetCode", icon: "leetcode", href: profile.leetcodeUrl },
  { label: "Email", icon: "email", href: `mailto:${profile.email}` },
];

export const developerQuote = "Every problem solved is one step closer to becoming a better engineer.";

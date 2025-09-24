type Project = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  features: string[];
  images: {
    thumbnail: string;
    full: string;
    mobile: string;
  };
  links: {
    live: string;
    github: string;
    caseStudy: string;
  };
  tags: string[];
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  status: string;
  team: string;
  role: string;
  responsibilities: string[];
  achievements: string[];
};

export const projectsData: { projects: Project[] } = {
  projects: [
    {
      id: "proj-001",
      title: "Personal Portfolio Website",
      subtitle: "Modern portfolio to showcase developer profile",
      description:
        "A fully responsive and animated developer portfolio built with React and Vite, designed to reflect a modern frontend skillset. It includes smooth transitions using Framer Motion, theme toggling, and SEO optimization. All project content is managed via a JSON file, allowing for easy updates without modifying code. Styled using Styled-Components and deployed on Netlify, the site is optimized for performance and accessibility across devices.",
      technologies: [
        "React",
        // "Framer Motion",
        "Gsap",
        "Styled-Components",
        "Vite",
        // "Netlify",
        "Vercel",
      ],
      features: [
        "Dark/Light mode toggle with persistent preference",
        "Animated page and component transitions using G-SAP",
        "Mobile-first responsive design",
        // "SEO optimization including meta tags and Open Graph data",
        "Dynamic content rendering via structured JSON",
        "Lazy loading and code splitting with Vite",
        "Custom 404 page and global CDN deployment",
      ],
      images: {
        thumbnail: "images/portfolio-thumb.jpg",
        full: "images/portfolio-full.jpg",
        mobile: "images/portfolio-mobile.jpg",
      },
      links: {
        live: "https://portfolio-dhir.vercel.app",
        github: "https://github.com/Dhirajverm1480/portfolio-dhir",
        caseStudy: "https://yourportfolio.com/case-study/portfolio",
      },
      tags: [
        "frontend",
        "react",
        "vite",
        // "seo",
        "responsive",
        "personal-project",
        "styled-components",
      ],
      timeline: {
        start: "2025-04-10",
        end: "2025-05-02",
        duration: "3 weeks",
      },
      status: "Active",
      team: "Solo Project",
      role: "UI/UX Designer & Front-End Developer",
      responsibilities: [
        "Designed and implemented UI/UX based on wireframes",
        "Built modular React components with Styled-Components",
        "Implemented theme switching and page animations",
        "Managed project data via structured JSON",
        "Optimized for performance, SEO, and accessibility",
        "Set up CI/CD and deployment on Vercel",
      ],
      achievements: [
        "100/100 Lighthouse score in performance, accessibility, and SEO",
        "Featured on dev.to’s 'Top Developer Portfolios of 2025'",
        "Praised during technical interviews for UI and UX design quality",
      ],
    },
    {
      id: "proj-002",
      title: "RecipeClub Website",
      subtitle: "This website come with the collection of huge recipies.",
      description:
        "A fully responsive and animated developer portfolio built with React and Vite, designed to reflect a modern frontend skillset. It includes smooth transitions using Framer Motion, theme toggling, and SEO optimization. All project content is managed via a JSON file, allowing for easy updates without modifying code. Styled using Styled-Components and deployed on Netlify, the site is optimized for performance and accessibility across devices.",
      technologies: [
        "React",
        // "Framer Motion",
        // "Gsap",
        "Styled-Components",
        "Vite",
        // "Netlify",
        "Vercel",
      ],
      features: [
        // "Dark/Light mode toggle with persistent preference",
        "Animated page and component transitions using G-SAP",
        "Mobile-first responsive design",
        // "SEO optimization including meta tags and Open Graph data",
        "Dynamic content rendering via structured JSON",
        "Lazy loading and code splitting with Vite",
        "Custom 404 page and global CDN deployment",
      ],
      images: {
        thumbnail: "../assets/projcetImg/reci-app-img.png",
        full: "images/portfolio-full.jpg",
        mobile: "images/portfolio-mobile.jpg",
      },
      links: {
        live: "https://reci-app.vercel.app/",
        github: "https://github.com/Dhirajverm1480/reci-app",
        caseStudy: "https://yourportfolio.com/case-study/portfolio",
      },
      tags: [
        "frontend",
        "react",
        "vite",
        // "seo",
        "responsive",
        "personal-project",
        "styled-components",
      ],
      timeline: {
        start: "2025-04-10",
        end: "2025-05-02",
        duration: "3 weeks",
      },
      status: "Active",
      team: "Solo Project",
      role: "UI/UX Designer & Front-End Developer",
      responsibilities: [
        "Designed and implemented UI/UX based on wireframes",
        "Built modular React components with Styled-Components",
        "Implemented theme switching and page animations",
        "Managed project data via structured JSON",
        "Optimized for performance, SEO, and accessibility",
        "Set up CI/CD and deployment on Vercel",
      ],
      achievements: [
        "100/100 Lighthouse score in performance, accessibility, and SEO",
        "Featured on dev.to’s 'Top Developer Portfolios of 2025'",
        "Praised during technical interviews for UI and UX design quality",
      ],
    },
    {
      id: "proj-003",
      title: "TechIIEasy E-Commerce Storefront",
      subtitle: "Headless CMS-powered shopping platform",
      description:
        "A full-featured e-commerce platform using Next.js and Sanity.io as a headless CMS. It supports real-time product management, secure Stripe payments, responsive design, and user-friendly checkout flow. The admin panel allows non-developers to update product content, while the frontend is optimized for performance and deployed via Vercel’s edge network.",
      technologies: [
        "React.js",
        // "Sanity.io",
        // "Stripe",
        "Tailwind CSS",
        "Express",
        "Node.js",
        "MongoDB",
        "Vercel",
      ],
      features: [
        "Real-time product updates with Sanity CMS and GROQ queries",
        "Stripe integration for secure checkout",
        "Category filtering, search, and responsive product pages",
        "Server-side rendering and ISR for optimal performance",
        "Persistent cart with local storage and React Context",
        "Custom admin-friendly CMS interface",
        "CI/CD deployment on Vercel with preview environments",
      ],
      images: {
        thumbnail: "images/ecommerce-thumb.jpg",
        full: "images/ecommerce-full.jpg",
        mobile: "images/ecommerce-mobile.jpg",
      },
      links: {
        live: "https://store.yourdomain.com",
        github: "https://github.com/yourusername/ecommerce-store",
      },
      tags: [
        "fullstack",
        "nextjs",
        "ecommerce",
        "headless-cms",
        // "stripe",
        "tailwind",
        // "sanity",
      ],
      timeline: {
        start: "2025-01-15",
        end: "2025-03-01",
        duration: "6 weeks",
      },
      status: "Active",
      team: "Solo Developers",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed SSR/ISR-enabled frontend using Next.js",
        "Created UI components using Tailwind CSS",
        "Integrated Stripe API for payments and webhooks",
        "Set up Sanity Studio for real-time CMS control",
        "Built cart management logic using React Context API",
        "Configured Vercel for environment-specific deployments",
      ],
      achievements: [
        "Processed $10,000+ in demo sales during testing phase",
        "Improved page performance by 40% post-optimization",
        "Enabled non-devs to manage content via Sanity within a week",
      ],
    },
    {
      id: "proj-004",
      title: "WalMart E-Commerce Clone",
      subtitle: "Headless CMS-powered shopping platform",
      description:
        "A full-featured e-commerce platform using HTML5, CSS3 and JS. It supports real-time product management, secure Stripe payments, responsive design, and user-friendly checkout flow. The admin panel allows non-developers to update product content, while the frontend is optimized for performance and deployed via Vercel’s edge network.",
      technologies: [
        // "React.js",
        "Html5",
        "CSS3",
        "JS",
        "GitHub",
        // "Sanity.io",
        // "Stripe",
        // "Tailwind CSS",
        // "Express",
        // "Node.js",
        // "MongoDB",
        // "Vercel",

      ],
      features: [
        // "Real-time product updates with Sanity CMS and GROQ queries",
        // "Stripe integration for secure checkout",
        "Category filtering, search, and responsive product pages",
        "Server-side rendering and ISR for optimal performance",
        "Persistent cart with local storage",
        // "Custom admin-friendly CMS interface",
        "CI/CD deployment on Vercel with preview environments",
      ],
      images: {
        thumbnail: "images/ecommerce-thumb.jpg",
        full: "images/ecommerce-full.jpg",
        mobile: "images/ecommerce-mobile.jpg",
      },
      links: {
        live: "https://store.yourdomain.com",
        github: "https://github.com/yourusername/ecommerce-store",
      },
      tags: [
        "fullstack",
        "nextjs",
        "ecommerce",
        "headless-cms",
        // "stripe",
        "tailwind",
        // "sanity",
      ],
      timeline: {
        start: "2025-01-15",
        end: "2025-03-01",
        duration: "6 weeks",
      },
      status: "Active",
      team: "Solo Developers",
      role: "Full-Stack Developer",
      responsibilities: [
        "Developed SSR/ISR-enabled frontend using Next.js",
        "Created UI components using Tailwind CSS",
        "Integrated Stripe API for payments and webhooks",
        "Set up Sanity Studio for real-time CMS control",
        "Built cart management logic using React Context API",
        "Configured Vercel for environment-specific deployments",
      ],
      achievements: [
        "Processed $10,000+ in demo sales during testing phase",
        "Improved page performance by 40% post-optimization",
        "Enabled non-devs to manage content via Sanity within a week",
      ],
    },
    // {
    //   id: "proj-003",
    //   title: "AI-Powered Blog Generator",
    //   subtitle: "Content creation tool using OpenAI API",
    //   description:
    //     "A productivity-focused application that helps users generate blog posts using OpenAI's GPT-4. Users can input a topic or keyword, and the tool produces structured blog drafts with options for tone, length, and audience. Includes Grammarly integration for proofreading and Medium integration for one-click publishing.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "OpenAI API",
    //     "Express",
    //     "MongoDB",
    //     "Tailwind CSS",
    //   ],
    //   features: [
    //     "Topic-based AI content generation",
    //     "Tone and length customization",
    //     "Autosave and version history",
    //     "Grammarly plugin integration",
    //     "Medium publishing integration",
    //     "User authentication and dashboard",
    //     "Dark mode and accessibility support",
    //   ],
    //   images: {
    //     thumbnail: "images/ai-blog-thumb.jpg",
    //     full: "images/ai-blog-full.jpg",
    //     mobile: "images/ai-blog-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://aibloggen.app",
    //     github: "https://github.com/yourusername/ai-blog-generator",
    //   },
    //   tags: [
    //     "ai",
    //     "openai",
    //     "content-creation",
    //     "productivity",
    //     "react",
    //     "nodejs",
    //   ],
    //   timeline: {
    //     start: "2025-06-01",
    //     end: "2025-07-01",
    //     duration: "1 month",
    //   },
    //   status: "In Progress",
    //   team: "3 Developers",
    //   role: "Lead Developer",
    //   responsibilities: [
    //     "Integrated OpenAI GPT-4 for content generation",
    //     "Built full-stack logic for content history and autosave",
    //     "Designed user dashboard and UX flow",
    //     "Implemented social auth and publishing APIs",
    //   ],
    //   achievements: [
    //     "Generated 5000+ blog posts in first beta week",
    //     "Reduced content creation time by 70% for beta users",
    //   ],
    // },

    // Dummy Project 2
    // {
    //   id: "proj-004",
    //   title: "Remote Team Collaboration Tool",
    //   subtitle: "Slack alternative with video and whiteboarding",
    //   description:
    //     "A real-time collaboration tool designed for distributed teams. Combines messaging, file sharing, video conferencing, and a shared whiteboard canvas. Built using WebRTC for low-latency calls and Firebase for real-time syncing.",
    //   technologies: [
    //     "Vue.js",
    //     "Firebase",
    //     "WebRTC",
    //     "Node.js",
    //     "Figma",
    //     "Tailwind CSS",
    //   ],
    //   features: [
    //     "Real-time chat with emoji reactions and threads",
    //     "Peer-to-peer video calls using WebRTC",
    //     "Collaborative whiteboard with drawing tools",
    //     "Drag-and-drop file sharing with previews",
    //     "Presence indicators and typing notifications",
    //     "Workspace and team management with roles",
    //     "Firebase authentication and Firestore database",
    //   ],
    //   images: {
    //     thumbnail: "images/team-tool-thumb.jpg",
    //     full: "images/team-tool-full.jpg",
    //     mobile: "images/team-tool-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://remoteteam.app",
    //     github: "https://github.com/yourusername/remote-collab-tool",
    //   },
    //   tags: [
    //     "collaboration",
    //     "video",
    //     "web-app",
    //     "vue",
    //     "webrtc",
    //     "firebase",
    //     "team-productivity",
    //   ],
    //   timeline: {
    //     start: "2025-03-15",
    //     end: "2025-05-30",
    //     duration: "10 weeks",
    //   },
    //   status: "Completed",
    //   team: "4 Developers + 1 Designer",
    //   role: "Full-Stack Developer",
    //   responsibilities: [
    //     "Led frontend development in Vue.js",
    //     "Built video call functionality using WebRTC",
    //     "Developed whiteboard syncing logic with Firebase",
    //     "Created CI/CD pipelines and staging environments",
    //   ],
    //   achievements: [
    //     "Used by 15+ remote teams during early access phase",
    //     "Handled 100+ concurrent video sessions with no major lags",
    //   ],
    // },

    // Dummy Project 05
    // {
    //   id: "proj-005",
    //   title: "Fitness Tracker Mobile App",
    //   subtitle: "Track workouts, nutrition, and progress",
    //   description:
    //     "A cross-platform mobile app for tracking workouts, meals, and weight goals. Built with React Native and Firebase, it features CSV export, graph visualizations, and intelligent suggestions based on user trends.",
    //   technologies: ["React Native", "Firebase", "Chart.js", "Expo"],
    //   features: [
    //     "Workout and meal logging",
    //     "Progress charts and analytics",
    //     "Goal-setting and trend suggestions",
    //     "CSV export of logs",
    //     "Push notifications for reminders",
    //   ],
    //   images: {
    //     thumbnail: "images/fitness-thumb.jpg",
    //     full: "images/fitness-full.jpg",
    //     mobile: "images/fitness-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://fitnessapp.com",
    //     github: "https://github.com/yourusername/fitness-tracker-app",
    //     caseStudy: "https://fitnessapp.com/case-study",
    //   },
    //   tags: ["mobile", "react-native", "firebase", "fitness", "health"],
    //   timeline: {
    //     start: "2025-02-01",
    //     end: "2025-03-15",
    //     duration: "6 weeks",
    //   },
    //   status: "Completed",
    //   team: "Solo",
    //   role: "Full-Stack Mobile Developer",
    //   responsibilities: [
    //     "Designed and developed mobile app interface with React Native",
    //     "Integrated Firebase for real-time user data storage and authentication",
    //     "Built charts and graphs with Chart.js for progress tracking",
    //     "Implemented push notifications for user reminders",
    //   ],
    //   achievements: [
    //     "5,000+ active users in Beta",
    //     "4.7 app rating in playtesters",
    //   ],
    // },

    // Dummy Project 06
    // {
    //   id: "proj-006",
    //   title: "Smart Home Dashboard",
    //   subtitle: "Unified control center for IoT devices",
    //   description:
    //     "A web application to monitor and control smart home devices, supporting MQTT and RESTful communication with various sensors and appliances, real-time updates, and graphical dashboards.",
    //   technologies: ["Angular", "Node.js", "MQTT", "D3.js", "Express"],
    //   features: [
    //     "Live sensor data visualization",
    //     "Device control panel",
    //     "Customizable widgets",
    //     "User authentication",
    //     "Mobile-friendly UI",
    //   ],
    //   images: {
    //     thumbnail: "images/smart-home-thumb.jpg",
    //     full: "images/smart-home-full.jpg",
    //     mobile: "images/smart-home-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://smarthomedashboard.com",
    //     github: "https://github.com/yourusername/smart-home-dashboard",
    //     caseStudy: "https://smarthomedashboard.com/case-study",
    //   },
    //   tags: ["IoT", "angular", "mqtt", "smart-home", "dashboard"],
    //   timeline: {
    //     start: "2025-05-20",
    //     end: "2025-07-01",
    //     duration: "6 weeks",
    //   },
    //   status: "In Progress",
    //   team: "2",
    //   role: "Front-End Engineer",
    //   responsibilities: [
    //     "Developed user interface using Angular and D3.js for sensor data visualization",
    //     "Implemented device control panel for smart home devices",
    //     "Integrated real-time data syncing using MQTT",
    //     "Collaborated with back-end team for API and authentication",
    //   ],
    //   achievements: [
    //     "Real-time charts updating in <500ms",
    //     "Supports 20+ device types",
    //   ],
    // },

    // Dummy Project 07
    // {
    //   id: "proj-007",
    //   title: "Language Learning Chatbot",
    //   subtitle: "Practice conversational skills in multiple languages",
    //   description:
    //     "An AI-driven chatbot that helps users practice languages through conversation, correction, and interactive quizzes. Powered by OpenAI and a custom knowledge base, with voice input/output.",
    //   technologies: ["Next.js", "OpenAI API", "TypeScript", "Socket.io"],
    //   features: [
    //     "Live conversation with feedback",
    //     "Multi-language support",
    //     "Interactive quizzes on vocabulary and grammar",
    //     "Speech-to-text and text-to-speech",
    //     "User progress tracking",
    //   ],
    //   images: {
    //     thumbnail: "images/language-chatbot-thumb.jpg",
    //     full: "images/language-chatbot-full.jpg",
    //     mobile: "images/language-chatbot-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://languagechatbot.com",
    //     github: "https://github.com/yourusername/language-chatbot",
    //     caseStudy: "https://languagechatbot.com/case-study",
    //   },
    //   tags: [
    //     "ai",
    //     "openai",
    //     "language-learning",
    //     "chatbot",
    //     "react",
    //     "typescript",
    //   ],
    //   timeline: {
    //     start: "2025-03-01",
    //     end: "2025-04-15",
    //     duration: "6 weeks",
    //   },
    //   status: "Completed",
    //   team: "3",
    //   role: "Full-Stack Developer",
    //   responsibilities: [
    //     "Integrated OpenAI GPT-3 for language conversation and feedback",
    //     "Built user dashboard to track progress and set goals",
    //     "Developed interactive quizzes for learning vocabulary and grammar",
    //     "Implemented speech-to-text and text-to-speech functionality",
    //   ],
    //   achievements: [
    //     "Reduced language error rate by 30% in lab tests",
    //     "200+ daily active users during pilot",
    //   ],
    // },

    // Dummy Project 08
    // {
    //   id: "proj-008",
    //   title: "Crowdsourced Survey Platform",
    //   subtitle: "Create and share surveys with instant analysis",
    //   description:
    //     "A modern survey platform that lets users build, share, and analyze surveys in real-time. Includes branching logic, real-time graphs, and export options.",
    //   technologies: ["Vue.js", "Node.js", "MongoDB", "Socket.io", "Chart.js"],
    //   features: [
    //     "Drag-and-drop survey builder",
    //     "Conditional logic and branching",
    //     "Live results and analytics",
    //     "CSV and PDF export",
    //     "User dashboards",
    //   ],
    //   images: {
    //     thumbnail: "images/survey-platform-thumb.jpg",
    //     full: "images/survey-platform-full.jpg",
    //     mobile: "images/survey-platform-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://surveysplatform.com",
    //     github: "https://github.com/yourusername/crowdsourced-survey-platform",
    //     caseStudy: "https://surveysplatform.com/case-study",
    //   },
    //   tags: ["vue", "node", "mongodb", "survey", "real-time", "chart.js"],
    //   timeline: {
    //     start: "2025-01-10",
    //     end: "2025-02-28",
    //     duration: "7 weeks",
    //   },
    //   status: "Completed",
    //   team: "4",
    //   role: "Lead Developer",
    //   responsibilities: [
    //     "Led development of the survey builder and real-time analytics",
    //     "Implemented branching logic and conditional survey flow",
    //     "Integrated CSV and PDF export features",
    //     "Built user dashboard for survey results and analysis",
    //   ],
    //   achievements: [
    //     "2400+ completed surveys in launch week",
    //     "Exported 120+ survey reports",
    //   ],
    // },

    // Dummy Project 09
    // {
    //   id: "proj-009",
    //   title: "Crypto Portfolio Tracker",
    //   subtitle: "Track holdings across exchanges in real-time",
    //   description:
    //     "A web app that aggregates user cryptocurrency holdings across multiple exchanges via public APIs, displays portfolio value, and offers alerts and analytics.",
    //   technologies: ["React", "GraphQL", "Node.js", "Redis", "Tailwind CSS"],
    //   features: [
    //     "API integrations with major exchanges",
    //     "Real-time price updates and alerts",
    //     "Portfolio distribution charts",
    //     "Historical performance graphs",
    //   ],
    //   images: {
    //     thumbnail: "images/crypto-portfolio-thumb.jpg",
    //     full: "images/crypto-portfolio-full.jpg",
    //     mobile: "images/crypto-portfolio-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://cryptotracker.com",
    //     github: "https://github.com/yourusername/crypto-portfolio-tracker",
    //     caseStudy: "https://cryptotracker.com/case-study",
    //   },
    //   tags: [
    //     "cryptocurrency",
    //     "react",
    //     "graphql",
    //     "node",
    //     "tailwind",
    //     "finance",
    //   ],
    //   timeline: {
    //     start: "2025-06-15",
    //     end: "2025-08-10",
    //     duration: "8 weeks",
    //   },
    //   status: "In Progress",
    //   team: "2",
    //   role: "Full-Stack Developer",
    //   responsibilities: [
    //     "Developed front-end components for displaying portfolio and performance charts",
    //     "Integrated GraphQL API to aggregate data from multiple exchanges",
    //     "Built real-time alert system for price changes",
    //     "Optimized for performance with Redis caching",
    //   ],
    //   achievements: [
    //     "Real-time updates within <2 seconds",
    //     "Supports 50+ cryptocurrencies",
    //   ],
    // },

    // Dummy Project 10
    // {
    //   id: "proj-010",
    //   title: "E-commerce Recommendation Engine",
    //   subtitle: "Personalized product suggestions for e-commerce stores",
    //   description:
    //     "A machine learning-based recommendation engine that provides personalized product recommendations to users based on their browsing behavior and purchase history.",
    //   technologies: ["Python", "TensorFlow", "Flask", "MongoDB", "Bootstrap"],
    //   features: [
    //     "Personalized product recommendations",
    //     "Collaborative filtering algorithm",
    //     "Real-time product suggestions",
    //     "User behavior tracking",
    //     "Admin dashboard for insights and analytics",
    //   ],
    //   images: {
    //     thumbnail: "images/ecommerce-recommendation-thumb.jpg",
    //     full: "images/ecommerce-recommendation-full.jpg",
    //     mobile: "images/ecommerce-recommendation-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://ecommerce-recommendation.com",
    //     github:
    //       "https://github.com/yourusername/ecommerce-recommendation-engine",
    //     caseStudy: "https://ecommerce-recommendation.com/case-study",
    //   },
    //   tags: [
    //     "machine-learning",
    //     "python",
    //     "tensorflow",
    //     "e-commerce",
    //     "recommendations",
    //   ],
    //   timeline: {
    //     start: "2025-04-01",
    //     end: "2025-06-10",
    //     duration: "9 weeks",
    //   },
    //   status: "Completed",
    //   team: "3",
    //   role: "Data Scientist & Full-Stack Developer",
    //   responsibilities: [
    //     "Developed and trained recommendation algorithms using TensorFlow",
    //     "Integrated recommendation system into the e-commerce platform using Flask",
    //     "Created an admin dashboard to monitor performance and product suggestions",
    //     "Implemented real-time tracking of user behavior and purchase data",
    //   ],
    //   achievements: [
    //     "Increased average sales per user by 20%",
    //     "Reduced bounce rate by 15% through personalized suggestions",
    //   ],
    // },

    // Dummy Project 11
    // {
    //   id: "proj-011",
    //   title: "Blockchain Voting System",
    //   subtitle: "A secure, transparent online voting platform",
    //   description:
    //     "A decentralized online voting system using blockchain technology to ensure transparency and security. Voters can cast votes securely, with all data stored immutably on the blockchain.",
    //   technologies: ["Ethereum", "Solidity", "React", "Node.js", "Web3.js"],
    //   features: [
    //     "Secure voting with blockchain",
    //     "Transparent and verifiable election results",
    //     "Real-time vote counting",
    //     "User authentication using digital wallets",
    //     "Admin panel for election management",
    //   ],
    //   images: {
    //     thumbnail: "images/blockchain-voting-thumb.jpg",
    //     full: "images/blockchain-voting-full.jpg",
    //     mobile: "images/blockchain-voting-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://blockchainvoting.com",
    //     github: "https://github.com/yourusername/blockchain-voting-system",
    //     caseStudy: "https://blockchainvoting.com/case-study",
    //   },
    //   tags: ["blockchain", "ethereum", "solidity", "voting", "web3"],
    //   timeline: {
    //     start: "2025-07-01",
    //     end: "2025-09-15",
    //     duration: "10 weeks",
    //   },
    //   status: "Completed",
    //   team: "4",
    //   role: "Blockchain Developer & Front-End Engineer",
    //   responsibilities: [
    //     "Developed and deployed smart contracts on Ethereum blockchain",
    //     "Built secure user authentication using MetaMask",
    //     "Created the front-end interface using React and Web3.js",
    //     "Implemented real-time vote counting and election management",
    //   ],
    //   achievements: [
    //     "Successfully deployed 5 test elections with real-time voting",
    //     "Ensured 100% transparency with blockchain data",
    //   ],
    // },

    // Dummy Project 12
    // {
    //   id: "proj-012",
    //   title: "AI-Powered Image Captioning",
    //   subtitle: "Automatic image caption generation using deep learning",
    //   description:
    //     "An AI-based image captioning tool that generates descriptive captions for images using a combination of computer vision and natural language processing (NLP) models.",
    //   technologies: ["Python", "TensorFlow", "Keras", "Flask", "OpenCV"],
    //   features: [
    //     "Automatic image caption generation",
    //     "Supports multiple image formats",
    //     "Real-time captioning using deep learning models",
    //     "User interface to upload and receive captions",
    //     "Customizable caption templates",
    //   ],
    //   images: {
    //     thumbnail: "images/image-captioning-thumb.jpg",
    //     full: "images/image-captioning-full.jpg",
    //     mobile: "images/image-captioning-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://imagecaptioning.com",
    //     github: "https://github.com/yourusername/ai-image-captioning",
    //     caseStudy: "https://imagecaptioning.com/case-study",
    //   },
    //   tags: [
    //     "ai",
    //     "computer-vision",
    //     "tensorflow",
    //     "nlp",
    //     "python",
    //     "image-captioning",
    //   ],
    //   timeline: {
    //     start: "2025-05-15",
    //     end: "2025-06-25",
    //     duration: "6 weeks",
    //   },
    //   status: "Completed",
    //   team: "2",
    //   role: "AI Engineer & Full-Stack Developer",
    //   responsibilities: [
    //     "Developed and trained deep learning models for image captioning",
    //     "Integrated the model into a Flask web application for real-time use",
    //     "Optimized model performance using transfer learning techniques",
    //     "Built a user-friendly interface for image upload and caption display",
    //   ],
    //   achievements: [
    //     "Achieved 90% accuracy in caption generation",
    //     "Integrated with 3rd-party image services like Unsplash",
    //   ],
    // },

    // Dummy Project 13
    // {
    //   id: "proj-013",
    //   title: "Real-Time Weather Dashboard",
    //   subtitle: "Live weather updates and forecasts",
    //   description:
    //     "A real-time weather dashboard that fetches live weather data using APIs and displays current conditions, forecasts, and visualizations like temperature maps and storm tracking.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "Weather API",
    //     "Chart.js",
    //     "Tailwind CSS",
    //   ],
    //   features: [
    //     "Current weather display",
    //     "Forecasts for the next 7 days",
    //     "Real-time storm and radar tracking",
    //     "Interactive weather maps",
    //     "Geolocation-based weather updates",
    //   ],
    //   images: {
    //     thumbnail: "images/weather-dashboard-thumb.jpg",
    //     full: "images/weather-dashboard-full.jpg",
    //     mobile: "images/weather-dashboard-mobile.jpg",
    //   },
    //   links: {
    //     live: "https://weatherdashboard.com",
    //     github: "https://github.com/yourusername/weather-dashboard",
    //     caseStudy: "https://weatherdashboard.com/case-study",
    //   },
    //   tags: ["weather", "react", "node", "charts", "real-time"],
    //   timeline: {
    //     start: "2025-06-05",
    //     end: "2025-07-15",
    //     duration: "6 weeks",
    //   },
    //   status: "Completed",
    //   team: "2",
    //   role: "Full-Stack Developer",
    //   responsibilities: [
    //     "Built the front-end interface using React and Tailwind CSS",
    //     "Integrated weather data APIs to fetch live weather updates",
    //     "Developed interactive temperature and radar maps with Chart.js",
    //     "Implemented geolocation feature for weather data based on user location",
    //   ],
    //   achievements: [
    //     "Real-time weather data refresh every 30 seconds",
    //     "Integrated with 4 weather APIs for redundancy",
    //   ],
    // },
  ],
};

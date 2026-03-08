export interface ProjectLinkSet {
  github?: string
  demo?: string
  caseStudy?: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  links?: ProjectLinkSet
}

export interface Experience {
  role: string
  company: string
  type: string
  start: string
  end: string
  duration: string
  summary: string
}

export interface Education {
  school: string
  program: string
  period: string
  summary: string
}

export interface Certificate {
  id: string
  title: string
  issuer: string
  issued: string
  description: string
  url: string
}

export const profile = {
  name: "Sasank Nukala",
  title: "Backend Developer | Machine Learning Engineer",
  summary:
    "Systems-focused AI engineer specializing in scalable machine learning infrastructure, computer vision pipelines, and distributed training systems. Passionate about building robust, production-ready AI solutions that bridge the gap between research and real-world applications.",
  avatarSrc: "/sasank-nukala-headshot.png",
  resumeUrl:
    "https://drive.google.com/file/d/1akj0_eIeE1HJ3uhXNEXWYR90vQ5dqNHv/view?usp=drive_link",
  social: {
    github: "https://github.com/sasank-in",
    linkedin: "https://linkedin.com/in/sasank-nukala",
    email: "mailto:shashanknukala7@gmail.com",
  },
}

export const skills = [
  "Python",
  "Java",
  "PyTorch",
  "FastAPI",
  "SQL (MySQL & PostgreSQL)",
  "Spring Boot",
  "Spring Cloud",
  "Django REST Framework",
  "Git",
  "OpenCV",
  "YOLO",
  "Dataset Annotation",
  "LangChain"
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Tennis Match Analysis System",
    description:
      "High-performance computer vision system for industrial quality control with sub-millisecond inference times.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "YOLO", "TrackNet"],
    imageUrl: "/tennis-analysis.jpg",
    links: {},
  },
  {
    id: "2",
    title: "ML Drift Detection & Monitoring System",
    description:
      "Built a monitoring system to track model performance and detect distribution changes in production data. The system continuously analyzes incoming data streams and compares them with training data distributions to identify potential drift.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Statistics"],
    imageUrl: "/gpu-cluster-training.png",
    links: {},
  },
  {
    id: "3",
    title: "Spring Boot Microservices Backend System",
    description:
      "Advanced segmentation model combining RGB, depth, and thermal data for autonomous navigation.",
    technologies: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL"],
    imageUrl: "/autonomous-vehicle-segmentation.png",
    links: {},
  },
  {
    id: "4",
    title: "Resume Intelligence Platform",
    description:
      "AI-powered platform that analyzes resumes, extracts key information, and generates intelligent summaries and insights. Utilizes NLP pipelines to process resume documents and provide structured outputs for easier candidate evaluation.",
    technologies: ["Python", "LangChain", "PyTorch", "FastAPI", "NLP"],
    imageUrl: "/diffusion-model-synthetic-data.png",
    links: {},
  },
]

export const experiences: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "SmartX Technologies",
    type: "Internship",
    start: "Jan 2025",
    end: "Sep 2025",
    duration: "0 yr 9 mos",
    summary:
      "Leading the development of scalable ML infrastructure and deployment pipelines. Architected distributed training systems that reduced model training time by 60%. Implemented MLOps best practices including automated testing, monitoring, and continuous deployment for production ML models. Built REST APIs for serving model inference and structured analytics data.",
  },
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    type: "Internship",
    start: "Mar 2024",
    end: "Jun 2024",
    duration: "0 yr 4 mos",
    summary:
      "Developed backend services for a payroll management system using Django REST Framework. Implemented secure authentication using JWT, designed relational database schemas, and automated scheduled tasks using Celery for payroll processing workflows.",
  },
]

export const education: Education[] = [
  {
    school: "Lovely Professional University",
    program: "Bachelor of Technology in Computer Science - Specialization in Machine Learning & AI",
    period: "2022 - 2026",
    summary:
      'Advanced coursework in deep learning, computer vision, and distributed systems. Thesis on "Scalable Neural Architecture Search for Edge Computing Devices" with focus on automated model optimization.',
  },
  {
    school: "ANU Junior College",
    program: "Intermediate (MPC) - Mathematics, Physics & Chemistry",
    period: "2020 - 2022",
    summary:
      "Completed higher secondary education with focus on Mathematics, Physics, and Chemistry. Built a strong analytical and problem-solving foundation which later supported my transition into Computer Science and Artificial Intelligence studies.",
  },
]

export const certificates: Certificate[] = [
  {
    id: "meta-backend",
    title: "Meta Backend Developer Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Aug 2025",
    description:
      "Comprehensive professional certificate covering backend development fundamentals, API design, database management, and cloud deployment. Includes hands-on projects with Python, Django, and cloud infrastructure.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/O5B8I7A6PRZY",
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issued: "Issued Oct 2024",
    description:
      "5-course specialization covering neural networks, deep learning, convolutional networks, RNNs, and sequence models. Hands-on projects included building and training neural networks from scratch using Python and TensorFlow.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EXTTCNXPGS8D",
  },
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Feb 2024",
    description:
      "Comprehensive program covering data analysis fundamentals, data cleaning, visualization, and statistical analysis. Practical experience with tools like SQL, R, Tableau, and spreadsheets for data-driven decision making.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7GYYFT92429P",
  },
]

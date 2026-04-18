export interface ProjectLinkSet {
  label?: string
  url: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  link?: ProjectLinkSet
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
  credentialId?: string
  description: string
  url: string
}

export const profile = {
  name: "Sasank Nukala",
  title: "Backend Developer | Machine Learning Engineer",
  location: "Hyderabad, India",
  summary:
    "I build backend systems for computer vision and ML workloads — training pipelines, inference APIs, and the infrastructure that keeps models running reliably in production.",
  avatarSrc: "/sasank-nukala-headshot.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/1IiLbFjKzvSq6PFoAXRzizTK6K3KKn2Si/view?usp=drive_link",
  social: {
    github: "https://github.com/sasank-in",
    linkedin: "https://linkedin.com/in/sasank-nukala",
    email: "mailto:shashanknukala7@gmail.com",
  },
  contact: {
    emailAddress: "shashanknukala7@gmail.com",
  },
}

export interface SkillGroup {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "SQL (MySQL & PostgreSQL)"],
  },
  {
    category: "Backend",
    items: ["FastAPI", "Spring Boot", "Spring Cloud", "Django REST Framework", "Microservices"],
  },
  {
    category: "ML & Computer Vision",
    items: ["PyTorch", "Deep Learning", "OpenCV", "YOLO", "LangChain", "Dataset Annotation"],
  },
  {
    category: "Tools",
    items: ["Git"],
  },
]

export const skills = skillGroups.flatMap((group) => group.items)

export const projects: Project[] = [
  {
    id: "1",
    title: "Tennis Match Analysis System",
    description:
      "High-performance computer vision system for industrial quality control with sub-millisecond inference times. Utilized PyTorch and CUDA for optimized model training and inference, and YOLO for accurate object detection. Implemented TrackNet architecture for robust ball detection.",
    technologies: ["PyTorch", "CUDA", "OpenCV", "YOLO", "TrackNet"],
    imageUrl: "/tennis-analysis.jpg",
    link: {
      label: "Website",
      url: "https://www.moments-athletics.com",
    },
  },
  {
    id: "2",
    title: "ML Drift Detection & Monitoring System",
    description:
      "Built a monitoring system to track model performance and detect distribution changes in production data. The system continuously analyzes incoming data streams and compares them with training data distributions to identify potential drift.",
    technologies: ["Python", "PyTorch", "Deep Learning", "Statistics"],
    imageUrl: "/gpu-cluster-training.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/ML-Pipeline-with-Drift-Detection-Auto-Retraining",
    },
  },
  {
    id: "3",
    title: "Agriculture Trading Platform For Farmers And Retailers",
    description:
      "Advanced application for facilitating trade between farmers and retailers, providing a seamless platform for buying and selling agricultural products.",
    technologies: ["Spring Boot", "Spring Cloud", "PostgreSQL","Microservices"],
    imageUrl: "/autonomous-vehicle-segmentation.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/Agriculture-Platform",
    },
  },
  {
    id: "4",
    title: "Resume Intelligence & Job Recommendation Platform",
    description:
      "AI-powered platform that analyzes resumes, extracts key information, and generates intelligent summaries and insights. Utilizes NLP pipelines to process resume documents and provide structured outputs for easier candidate evaluation.",
    technologies: ["Python", "LangChain", "PyTorch", "FastAPI", "NLP"],
    imageUrl: "/diffusion-model-synthetic-data.png",
    link: {
      label: "GitHub",
      url: "https://github.com/sasank-in/Resume-Intelligence-Platform",
    },
  },
]

export const experiences: Experience[] = [
  {
    role: "AI Engineer Intern",
    company: "SmartX Technologies",
    type: "Internship",
    start: "Jan 2025",
    end: "Sep 2025",
    duration: "9 mos",
    summary:
      "Leading the development of scalable ML infrastructure and deployment pipelines. Architected distributed training systems that reduced model training time by 60%. Implemented MLOps best practices including automated testing, monitoring, and continuous deployment for production ML models. Built REST APIs for serving model inference and structured analytics data.",
  },
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    type: "Internship",
    start: "Mar 2024",
    end: "Jun 2024",
    duration: "4 mos",
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
    credentialId: "O5B8I7A6PRZY",
    description:
      "Comprehensive professional certificate covering backend development fundamentals, API design, database management, and cloud deployment. Includes hands-on projects with Python, Django, and cloud infrastructure.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/O5B8I7A6PRZY",
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issued: "Issued Oct 2024",
    credentialId: "EXTTCNXPGS8D",
    description:
      "5-course specialization covering neural networks, deep learning, convolutional networks, RNNs, and sequence models. Hands-on projects included building and training neural networks from scratch using Python and TensorFlow.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EXTTCNXPGS8D",
  },
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Feb 2024",
    credentialId: "7GYYFT92429P",
    description:
      "Comprehensive program covering data analysis fundamentals, data cleaning, visualization, and statistical analysis. Practical experience with tools like SQL, R, Tableau, and spreadsheets for data-driven decision making.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7GYYFT92429P",
  },
]

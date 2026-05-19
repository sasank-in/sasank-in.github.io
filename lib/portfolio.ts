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
  metrics?: string[]
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
  highlights?: string[]
  technologies?: string[]
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
  location: "Vijayawada, India",
  availability: "Graduating May 2026 · Open to full-time roles",
  summary:
    "I build backend systems for computer vision and ML workloads — training pipelines, inference APIs, and the infrastructure that keeps models running reliably in production.",
  avatarSrc: "/sasank-nukala-headshot.jpg",
  resumeUrl:
    "https://drive.google.com/file/d/16VULoUNZO3bwLS7iD0_EejPKy_EEj8TU/view?usp=drive_link",
  social: {
    github: "https://github.com/sasank-in",
    linkedin: "https://linkedin.com/in/sasank-nukala",
    email: "mailto:shashanknukala7@gmail.com",
  },
  contact: {
    emailAddress: "shashanknukala7@gmail.com",
  },
}

export const skills = [
  "Python",
  "Java",
  "SQL",
  "FastAPI",
  "Django REST Framework",
  "Spring Boot",
  "Spring Cloud",
  "Microservices",
  "PyTorch",
  "Deep Learning",
  "LLMs",
  "Model Fine-tuning",
  "LangChain",
  "YOLO",
  "Data Annotation",
  "Git",
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Tennis Match Analysis System",
    description:
      "Real-time computer vision pipeline that tracks players, the ball, and court geometry from match footage. YOLO handles player and court keypoint detection; a TrackNet model trained on PyTorch + CUDA recovers the high-speed ball trajectory frame-by-frame.",
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
      "Spring Boot microservices platform connecting farmers directly with retailers — service-to-service communication via Spring Cloud, and a React frontend for listing produce, placing orders, and tracking transactions end-to-end.",
    technologies: ["Spring Boot", "Spring Cloud", "React","Microservices"],
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
    technologies: ["LangChain", "RAG", "PyTorch", "Large Language Models"],
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
      "Owned ML infrastructure and deployment pipelines end-to-end — architected distributed training that cut model training time by 60%, stood up MLOps practices for production deployments, and shipped REST APIs serving model inference and analytics data.",
    highlights: [
      "Cut model training time by 60% by architecting distributed training across multi-GPU workloads.",
      "Stood up MLOps foundations — automated testing, monitoring, and continuous deployment for production ML models.",
      "Shipped REST APIs serving model inference and structured analytics data to downstream services.",
    ],
    technologies: ["Python", "PyTorch", "FastAPI", "Azure", "AWS", "MLOps"],
  },
  {
    role: "Python Developer Intern",
    company: "Infosys Springboard",
    type: "Internship",
    start: "Mar 2024",
    end: "Jun 2024",
    duration: "4 mos",
    summary:
      "Built a payroll management backend end-to-end in Django REST Framework — JWT-secured APIs, relational schema design from scratch, and Celery-driven workflows that eliminated manual scheduling for recurring payroll runs.",
    highlights: [
      "Built a payroll management backend end-to-end in Django REST Framework, covering API, data, and scheduling layers.",
      "Designed relational schemas from scratch and secured APIs with JWT-based authentication.",
      "Automated recurring payroll workflows using Celery, eliminating manual scheduling and reducing operator overhead.",
    ],
    technologies: ["Python", "Django REST Framework", "JWT", "Celery", "PostgreSQL"],
  },
]

export const education: Education[] = [
  {
    school: "Lovely Professional University",
    program: "Bachelor of Technology in Computer Science - Specialization in Machine Learning & AI",
    period: "2022 - 2026",
    summary:
      'Coursework in deep learning, computer vision, operating systems, and database systems. Capstone thesis on "Scalable Neural Architecture Search for Edge Computing Devices", exploring automated model optimization for resource-constrained inference.',
  },
  {
    school: "ANU Junior College",
    program: "Intermediate (MPC) - Mathematics, Physics & Chemistry",
    period: "2020 - 2022",
    summary:
      "Higher secondary education in the MPC stream, building the mathematics and physics foundation that underpins later work in machine learning and systems engineering.",
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
      "Nine-course specialization on backend engineering with Python and Django — REST API design, authentication, relational data modelling, version control workflows, and deployment fundamentals. Capstone project: a restaurant booking and ordering API built with Django REST Framework.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/O5B8I7A6PRZY",
  },
  {
    id: "deep-learning",
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    issued: "Issued Oct 2024",
    credentialId: "EXTTCNXPGS8D",
    description:
      "Five-course specialization by Andrew Ng — built neural networks from scratch in NumPy before moving to TensorFlow, covering backpropagation, CNNs for image tasks, sequence models (RNNs, LSTMs, attention), and practical aspects of hyperparameter tuning, regularization, and structuring ML projects.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/EXTTCNXPGS8D",
  },
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Coursera",
    issued: "Issued Feb 2024",
    credentialId: "7GYYFT92429P",
    description:
      "Eight-course program on the end-to-end data analytics workflow — asking the right questions, cleaning and preparing data in spreadsheets and SQL, exploratory analysis in R, and communicating findings through Tableau dashboards. Case study on a bike-share company informed the capstone.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/7GYYFT92429P",
  },
]
